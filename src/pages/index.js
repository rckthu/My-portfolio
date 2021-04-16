import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="url(https://images.unsplash.com/photo-1583142305492-3938b117da28?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
			font="16px --fontFamily-sansHelvetica"
			transition="all 1s ease-in 0s"
		>
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Ciao, I’m Riccardo
				</Text>
				<Text font="--base">
					My name is Riccardo Ferrarese, a cheerful and dynamic guy who likes to organise things. I like to help others to achieve both their personal and common goals. Communication and creativity are ways I use to solve problems.
					<br />
					Even though I focused on my studies in Graphic Design, I also developed digital skills in many professional fields.
					<br />
					Over the years of volunteering, I've improved my speaking and teaching skills.{" "}
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});