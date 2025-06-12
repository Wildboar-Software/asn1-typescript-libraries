import type {
    Time,
} from "../modules/AuthenticationFramework/Time.ta.mjs";

export
function getDateFromTime (time: Time): Date {
    if ("utcTime" in time) {
        return time.utcTime;
    } else {
        return time.generalizedTime;
    }
}

export default getDateFromTime;
