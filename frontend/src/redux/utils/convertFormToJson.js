export default function generateJsonFormData(form, expect) {
  const mappedValues = expect.map((el) => {
    return {
      [el]: form.get(el),
    };
  });
  const reducedValues = mappedValues.reduce((curr, acc) => {
    return { ...curr, ...acc };
  }, {});

  return reducedValues
}
