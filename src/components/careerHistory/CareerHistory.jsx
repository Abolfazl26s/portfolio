import CareerItem from './CareerItem'
export default function CareerHistory({careerHistory}) {
  return (
    <div className="row justify-content-center">
      {careerHistory.map((careerItem) => (
        <CareerItem key={careerItem.id} careerItems={careerItem} />
      ))}
    </div>
  );
}
