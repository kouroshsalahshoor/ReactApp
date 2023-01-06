interface Props {
  errors?: string[] | null;
}

export default function ValidationError({ errors }: Props) {
  return (
    <div>
      <h3 className="text-danger">Validation Error</h3>
      {errors && (
        <ul className="text-danger">
          {errors.map((err: string, i: any) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
