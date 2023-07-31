type Intersection = { element: any; callback: any };
export default function intersection({ element, callback }: Intersection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry);
    });
  });
  observer.observe(element);
}
