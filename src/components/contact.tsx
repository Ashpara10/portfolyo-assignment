import { SocialHandle } from "@/lib/types";
import { ArrowRight, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = ({
  data,
  email,
  phone,
}: {
  data: SocialHandle[];
  email: string;
  phone: string;
}) => {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-8 flex items-center justify-center gap-y-4 "
    >
      <div className=" px-4 b gap-2 max-w-5xl w-full flex flex-col items-start justify-center">
        {data?.map((s, i) => {
          return (
            <div>
              <a
                href={s?.url}
                target="_blank"
                className="w-full hover:underline flex items-center justify-between gap-x-1"
              >
                {s?.platform} <ArrowRight className="-rotate-45 size-4" />
              </a>
            </div>
          );
        })}
        <span className="flex mt-6 items-center justify-center gap-x-1">
          <Phone className="size-5" />
          {phone}
        </span>
        <span className="flex items-center justify-center gap-x-1">
          <Mail className="size-5" />
          {email}
        </span>
      </div>
    </section>
  );
};

export default Contact;
