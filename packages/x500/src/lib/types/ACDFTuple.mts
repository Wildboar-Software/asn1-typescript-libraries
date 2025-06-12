import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import type {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type {
    Precedence,
} from "../modules/BasicAccessControl/Precedence.ta.mjs";

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
