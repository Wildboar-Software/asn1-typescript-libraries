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
import { grantsAndDenialsToMask } from "../bac/grantsAndDenialsMask.mjs";

/**
 * The Access Control Decision Function (ACDF) tuple type documented in
 * ITU Recommendation X.501 (2016), Section 18.8.2.
 *
 * `grantsAndDenials` is the `GrantsAndDenials` BIT STRING packed into a signed
 * 32-bit mask (bit 0 is `grantAdd`). A BIT STRING argument is packed in the
 * constructor. Bits past bit 31 cannot be packed and throw.
 */
export
class ACDFTuple {

    /**
     * Grant and deny bits packed by `grantsAndDenialsToMask`.
     */
    public readonly grantsAndDenials: number;

    public readonly precedence: Precedence;

    constructor (
        public readonly userClasses: UserClasses,
        public readonly authenticationLevel: AuthenticationLevel,
        public readonly protectedItems: ProtectedItems,
        grantsAndDenials: GrantsAndDenials | number,
        precedence: Precedence,
    ) {
        this.grantsAndDenials = grantsAndDenialsToMask(grantsAndDenials);
        this.precedence = precedence;
    }

}

export default ACDFTuple;
