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
import ACDFTuple from "./ACDFTuple.mjs";

/**
 * The Access Control Decision Function (ACDF) tuple type documented in
 * ITU Recommendation X.501 (2016), Section 18.8.2, but including the user
 * class specificity as `userClassSpecificity`.
 */
export
class ACDFTupleExtended extends ACDFTuple {

    public readonly userClassSpecificity: number;

    constructor (
        tuple: ACDFTuple,
        userClassSpecificity: number,
    );
    constructor (
        userClasses: UserClasses,
        authenticationLevel: AuthenticationLevel,
        protectedItems: ProtectedItems,
        grantsAndDenials: GrantsAndDenials,
        precedence: Precedence,
        userClassSpecificity: number,
    );
    constructor (
        userClassesOrTuple: UserClasses | ACDFTuple,
        authenticationLevelOrSpecificity: AuthenticationLevel | number,
        protectedItems?: ProtectedItems,
        grantsAndDenials?: GrantsAndDenials,
        precedence?: Precedence,
        userClassSpecificity?: number,
    ) {
        if (userClassesOrTuple instanceof ACDFTuple) {
            if (typeof authenticationLevelOrSpecificity !== "number") {
                throw new TypeError("Expected userClassSpecificity to be a number.");
            }
            super(
                userClassesOrTuple.userClasses,
                userClassesOrTuple.authenticationLevel,
                userClassesOrTuple.protectedItems,
                userClassesOrTuple.grantsAndDenials,
                userClassesOrTuple.precedence,
            );
            this.userClassSpecificity = authenticationLevelOrSpecificity;
            return;
        }
        if (
            (typeof authenticationLevelOrSpecificity === "number")
            || (protectedItems === undefined)
            || (grantsAndDenials === undefined)
            || (precedence === undefined)
            || (userClassSpecificity === undefined)
        ) {
            throw new TypeError("ACDFTupleExtended is missing components.");
        }
        super(
            userClassesOrTuple,
            authenticationLevelOrSpecificity,
            protectedItems,
            grantsAndDenials,
            precedence,
        );
        this.userClassSpecificity = userClassSpecificity;
    }

    public withGrantsAndDenials (
        grantsAndDenials: GrantsAndDenials,
    ): ACDFTupleExtended {
        return new ACDFTupleExtended(
            this.userClasses,
            this.authenticationLevel,
            this.protectedItems,
            grantsAndDenials,
            this.precedence,
            this.userClassSpecificity,
        );
    }

}

export default ACDFTupleExtended;
