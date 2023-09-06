type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => (
  <div className="flex justify-center py-10">
    <h2 className="text-white text-4xl font-medium bg-gray-800 py-4 px-16 rounded-sm bg-opacity-70">
      {title}
    </h2>
  </div>
);

export default Title;
