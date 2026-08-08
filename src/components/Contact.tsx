export default function Contact() {
  return (
    <div className="contact-section">
      <h2>
        <i className="fa-solid fa-satellite-dish"></i> Get in Touch
      </h2>
      <p>欢迎交流 · Feel free to reach out</p>
      <div className="contact-links">
        <a
          className="contact-link github"
          href="https://github.com/huanglii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a className="contact-link email" href="mailto:huanglii@users.noreply.github.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
      </div>
    </div>
  );
}
