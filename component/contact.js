import contacts from "@/styles/component/contact.module.css";

export default function Contact() {
  const data = [
    { title: "Twitter:", handle: "@aiseluck" },
    { title: "Github:", handle: "@aiseluck" },
    { title: "Medium:", handle: "@aiseluck" },
    { title: "Email:", handle: "contact@aiseluck.com" },
  ];

  return (
    <div className={contacts.main}>
      {data.map(({ title, handle }) => {
        return (
          <div className={contacts.contact} key={title}>
            <span className={contacts.title}>{title}</span>
            <span>{handle}</span>
          </div>
        );
      })}
    </div>
  );
}
