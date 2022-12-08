//import Styles from "./Style.module.css";
const Header =({selectedTeam, teamMemberCount})=> {
    return (
        <div>
            <h1>Team Member Allocation</h1>
        <h3>{selectedTeam} has {teamMemberCount} members</h3>
        </div>
    )
}

export default Header;