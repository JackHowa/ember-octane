import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamChannelRoute extends Route {
	// get the parent team route
	async model({ channelId }) {
		// this modelFor() another team route. will get us the team object
		// only reach up for the route because you can be assured that everything above as loaded the data
		// don't reach to the side or a brother/sister route or down
		// don't want to get stale data
		// can call paramsFor
		// only get the params
		const { teamId } = this.paramsFor('teams.team');
		const response = await fetch(`api/teams/${teamId}/channels/${channelId}`);
		return response.json();
	}
}
