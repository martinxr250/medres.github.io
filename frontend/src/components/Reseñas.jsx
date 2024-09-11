import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReviewCard = ({ reviewer, rating, reviewText, date }) => {
  return (
    <Card className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-blue-50 p-4">
        <CardTitle className="text-lg font-semibold text-gray-900">{reviewer}</CardTitle>
        <p className="text-sm text-gray-500">{date}</p>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 font-bold mr-2">{rating}★</span>
          <p className="text-sm text-gray-700">{reviewText}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
