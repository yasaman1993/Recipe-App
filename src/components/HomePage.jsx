import AlphabeticalMeals from "./AlphabeticalMeals";
import RandomMeal from "./RandomMeal";
import Category from "./Categories";

export default function HomePage() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '3em',
    color: '#ff6f61',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };



  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>YummyPots</h1>
      </header>
      <section style={contentStyle}>
        <div style={sectionStyle}>
          <AlphabeticalMeals />
        </div>
        <div style={sectionStyle}>
          <RandomMeal />
        </div>
        <div style={sectionStyle}>
          <Category />
        </div>
      </section>
    </div>
  );
}
