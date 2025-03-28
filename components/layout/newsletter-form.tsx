"use client";

// Core
import { useTransition, useState } from "react";

// Vendors
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
import { NewsLetterSchema } from "@/schemas/newsletter";

// Actions
import { subscribeToNewsletter } from "@/actions/newsletter";

type FormData = z.infer<typeof NewsLetterSchema>;

export const NewsletterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormData) => {
    setMessage(null);
    startTransition(() => {
      subscribeToNewsletter(values)
        .then(data => {
          if (data?.error) {
            setMessage({ type: "error", text: data.error });
          } else if (data?.success) {
            reset();
            setMessage({ type: "success", text: data.success });
          }
        })
        .catch(() =>
          setMessage({ type: "error", text: "Something went wrong!" })
        );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Vnesite svoj e-naslov"
          className={`bg-white w-full p-4 pr-12 outline-0 placeholder-light-gray border ${
            errors.email ? "border-red-500" : "border-lighter-gray"
          }`}
          {...register("email")}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
          disabled={isPending}
        >
          <svg
            width="45"
            height="10"
            viewBox="0 0 45 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 5L37.5 0.669876L37.5 9.33013L45 5ZM0 5.75H38.25V4.25H0V5.75Z"
              fill="#4BAC87"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-2 mt-3">
        <input
          id="newsletterConsent"
          type="checkbox"
          className={`peer relative appearance-none shrink-0 w-5 h-5 border border-[#D8D7D3] bg-white cursor-pointer checked:bg-primary checked:border-primary ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          {...register("consent")}
        />
        <label
          htmlFor="newsletterConsent"
          className="text-sm text-light-gray cursor-pointer flex items-center"
        >
          Strinjam se s pogoji uporabe
        </label>

        <svg
          className="absolute w-5 h-5 hidden peer-checked:block pointer-events-none p-1 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {errors.consent && (
        <p className="text-sm text-red-500">{errors.consent.message}</p>
      )}

      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      {message && (
        <p
          className={`text-sm ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
};
