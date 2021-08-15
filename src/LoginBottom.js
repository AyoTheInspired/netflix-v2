import React from "react";
import styled from "styled-components";
import { Container, Row, Card, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginBottom() {
	return (
		<Container>
			<Row>
				<Div className="col my-5">
					<Accordion defaultActiveKey="0">
						<Card className="my-1">
							<Accordion.Toggle
								as={Card.Header}
								className="card__question"
								eventKey="0">
								What is Netflix?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body className="card__answer">
									Netflix is a streaming service that offers a wide variety of
									award-winning TV shows, movies, anime, documentaries, and more
									on thousands of internet-connected devices.
									<br />
									<br />
									You can watch as much as you want, whenever you want without a
									single commercial - all for one low monthly price. There's
									always something new to discover and new TV shows and movies
									are added every week!
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="my-1">
							<Accordion.Toggle
								as={Card.Header}
								className="card__question"
								eventKey="1">
								How much does Netflix cost?{" "}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body className="card__answer">
									Watch Netflix on your smartphone, tablet, smart TV, laptop, or
									streaming device, all for one fixed monthly fee. Plans range
									from #1,200 to #4,400 a month. No extra costs, no contracts.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="my-1">
							<Accordion.Toggle
								as={Card.Header}
								className="card__question"
								eventKey="1">
								Where can I watch?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body className="card__answer">
									Watch anywhere, anytime, on an unlimited number of devices.
									Sign in with your Netflix account to watch instantly on the
									web at netflix.com from your personal computer or on any
									internet-connected device that offers the Netflix app,
									including smart TVs, smartphones, tablets, streaming media
									players and game consoles. <br /> <br />
									You can also download your favorite shows with the iOS,
									Android, or Windows 10 app. Use downloads to watch while
									you're on the go and without an internet connection. Take
									Netflix with you anywhere.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="my-1">
							<Accordion.Toggle
								as={Card.Header}
								className="card__question"
								eventKey="1">
								What can I watch on Netflix?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body className="card__answer">
									Netflix has an extensive library of feature films,
									documentaries, TV shows, anime, award-winning Netflix
									originals, and more. Watch as much as you want, anytime you
									want.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Div>
			</Row>
		</Container>
	);
}

export default LoginBottom;

const Div = styled.div`
	.card__question,
	.card__answer {
		background: #303030 !important;
		color: #fff !important;
		font-size: 20px !important;
	}

	.card__question {
		border-bottom: 2px solid #000 !important;
	}

	.card__question {
		font-size: 22px !important;
	}
	.card__answer {
		font-size: 24px !important;
	}
`;
