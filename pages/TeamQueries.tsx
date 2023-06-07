import React from "react";
import { OwnerData, PlayerData } from "../src/types";
import ownerData from "../data/owners2.json";
import playerData from "../data/players.json";

const TeamOwners: React.FC<props> = () => {
    // maps OwnerData data source type to ownerData json file
    const owners: OwnerData[] = ownerData;

    // sort function using localCompare to put names into alphabetical order

    // The localeCompare() method returns a number indicating whether a reference string 
    // comes before, or after, or is the same as the given string in sort order.
    const sortedOwners = owners.sort((a, b) =>
        a.display_name.localeCompare(b.display_name)
    );

    return (
        <div>
            <h2></h2>
            <select defaultValue={"-- select owner --"}>
                <option> -- select owner -- </option>
                    
                {sortedOwners.map((owner) => (
                    <option key={owner.user_id} value={owner.user_id}>
                        {owner.display_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

const TeamPlayers: React.FC<props> = () => {

    const players: PlayerData[] = playerData;
    console.log(players);
    const owners: OwnerData[] = ownerData
    console.log(owners);

    return (
        <div>
            <h1>fuckyou</h1>
            <table>

            </table>
        </div>
    );
};

export {TeamOwners, TeamPlayers};