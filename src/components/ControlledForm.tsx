import  {   useState } from "react";
type Errors = {
  name?: string;
  age?: string;
};
const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  // 🔹 validation logic (single source of truth)
  const validate = (field: "name" | "age", value: string) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 3) return "Name must be at least 3 characters";
        return "";

      case "age":
        if (!value) return "Age is required";
        if (Number(value) <= 0) return "Age must be greater than zero";
        return "";

      default:
        return "";
    }
  };
  const handleChange = (field: "name" | "age", value: string) => {
    const error = validate(field, value);

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    if (field === "name") setName(value);
    if (field === "age") setAge(value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameError = validate("name", name);
    const ageError = validate("age", age);

    if (nameError || ageError) {
      setErrors({
        name: nameError,
        age: ageError,
      });
      return;
    }

    console.log({
      name: name.trim(),
      age: Number(age),
    });
  };

  return (
   <form onSubmit={submitHandler}>
      {/* NAME */}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      {/* AGE */}
      <input
        name="age"
        type="number"
        value={age}
        onChange={(e) => handleChange("age", e.target.value)}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
