export default function About() {
    return (
        <div style={styles.container}>
            <h1>About Us</h1>
            <p>
                We are a team focused on building simple and effective web
                applications using React.
            </p>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        textAlign: "center"
    }
};
