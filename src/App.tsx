import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-8 bg-[var(--color-brown-100)]">
        <TextSection />
        <ColorBase />
        <ColorBrand />
        <Footer />
      </div>
    </>
  );
}

export default App;

function TextSection() {
  return (
    <>
      <h1
        className="text-headline-1 mb-4"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Headline 1 ตัวอย่าง (className: text-headline-1)
      </h1>
      <h2
        className="text-headline-2 mb-4"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Headline 2 ตัวอย่าง (className: text-headline-2)
      </h2>
      <h3
        className="text-headline-3 mb-4"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Headline 3 ตัวอย่าง (className: text-headline-3)
      </h3>
      <h4
        className="text-headline-4 mb-6"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Headline 4 ตัวอย่าง (className: text-headline-4)
      </h4>
      <p
        className="text-body-1 mb-2"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        ตัวอย่างข้อความ body-1 (className: text-body-1, ขนาดอักษร 16px,
        font-weight 500)
      </p>
      <p
        className="text-body-2 mb-2"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        ตัวอย่างข้อความ body-2 (className: text-body-2, ขนาดอักษร 14px,
        font-weight 500)
      </p>
      <p
        className="text-body-2s mb-6"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        ตัวอย่างข้อความ body-2s (className: text-body-2s, ขนาดอักษร 12px,
        font-weight 500)
      </p>
    </>
  );
}

function ColorBase() {
  return (
    <>
      {" "}
      <h4
        className="text-headline-4 mb-6"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Base Color
      </h4>
      <div className="flex gap-4 mb-2">
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-100)" }}
          title="สี brown-100"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-200)" }}
          title="สี brown-200"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-300)" }}
          title="สี brown-300"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-400)" }}
          title="สี brown-400"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-500)" }}
          title="สี brown-500"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brown-600)" }}
          title="สี brown-600"
        ></div>
      </div>
    </>
  );
}

function ColorBrand() {
  return (
    <>
      <h4
        className="text-headline-4 mb-6"
        style={{ fontFamily: "var(--font-family-sans)" }}
      >
        Base brand
      </h4>
      <div className="flex gap-4 mb-2">
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brand-orange)" }}
          title="สี brand orange"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brand-green)" }}
          title="สี brand green"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-brand-red)" }}
          title="สี brand red"
        ></div>
        <div
          className="w-12 h-12 rounded"
          style={{ background: "var(--color-orange)" }}
          title="สี orange"
        ></div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      {" "}
      <p
        className="mt-4 text-body-2"
        style={{
          color: "var(--color-brown-400)",
          fontFamily: "var(--font-family-sans)",
        }}
      >
        ตัวอย่างนี้แสดงการใช้ font, ขนาด, น้ำหนัก และสีตามที่ตั้งค่าไว้ใน
        index.css
      </p>
    </>
  );
}
