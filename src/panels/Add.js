import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Common.css';
import { PanelHeaderBack, CardGrid, Card } from '@vkontakte/vkui';

const Add = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go("home")} />}>
			New podcast
		</PanelHeader>

		<Group title="Name and other">
			<Div>
				<CardGrid>
					<Card data-to="home" size="s" mode="outline">
						<div style={{ height: 96 }} />
					</Card>
					<Card data-to="home" size="m" mode="outline">
						<div style={{ height: 96 }} />
					</Card>
				</CardGrid>
			</Div>
		</Group>
	</Panel>
);

Add.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Add;
