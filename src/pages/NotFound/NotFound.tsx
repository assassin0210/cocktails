import { Button } from "antd";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = ({ error }: { error: 404 | 502 }) => {
  return (
    <div className={styles.root}>
      {error === 404 && (
        <>
          <h1>Page not found.</h1>
          <div>
            Please go to the{" "}
            <Link to={"/"}>
              <Button size="small">Main Page</Button>
            </Link>
          </div>
        </>
      )}
      {error === 502 && (
        <>
          <h1>An error occurred on the server</h1>
          <div>
            Please go to the{" "}
            <Link to={"/"}>
              <Button size="small"> Main Page</Button>
            </Link>{" "}
            or{" "}
            <Button
              onClick={() => window.location.reload()}
              size="small"
              type={"primary"}
            >
              Reload page
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
