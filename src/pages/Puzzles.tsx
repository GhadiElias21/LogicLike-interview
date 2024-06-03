import styles from "./AllThemes.module.scss";
import Card from "../components/Cards/Card";
import { DataProps, Item } from "../ts/types";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import Errors from "../components/Error/Errors";

const Puzzles: React.FC<DataProps> = ({ data, loading, error }: DataProps) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        data.map((item: Item) => {
          return (
            <div key={item.id}>
              <Card item={item} />
            </div>
          );
        })
      )}
      {error && data.length === 0 && <Errors />}
    </div>
  );
};

export default Puzzles;
