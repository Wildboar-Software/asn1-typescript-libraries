import type {
    Time,
} from "../modules/AuthenticationFramework/Time.ta";

export
function getDateFromTime (time: Time): Date {
    if ("utcTime" in time) {
        return time.utcTime;
    } else {
        return time.generalizedTime;
    }
}

export default getDateFromTime;
