import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";
import type {
    Precedence,
} from "../modules/BasicAccessControl/Precedence.ta";

/**
 * The Access Control Decision Function (ACDF) tuple type documented in
 * ITU Recommendation X.501 (2016), Section 18.8.2.
 */
export
type ACDFTuple = [
    UserClasses,
    AuthenticationLevel,
    ProtectedItems,
    GrantsAndDenials,
    Precedence,
];

export default ACDFTuple;
