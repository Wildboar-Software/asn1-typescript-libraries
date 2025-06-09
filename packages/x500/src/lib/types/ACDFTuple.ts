import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta.js";
import type {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta.js";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta.js";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.js";
import type {
    Precedence,
} from "../modules/BasicAccessControl/Precedence.ta.js";

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
