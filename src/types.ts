interface OwnerData {
    user_id: string;
    display_name: string;
}

interface TeamData {
    owner_id: string;
    wins: number;
    losses: number;
    players: string;
}

interface PlayerData {
    id: string;
    full_name: string;
    team: string;
    position: string;
    owner_id: string;
}

interface PlayerScores {
    player_id: string;
    fantasy_points: number;
}