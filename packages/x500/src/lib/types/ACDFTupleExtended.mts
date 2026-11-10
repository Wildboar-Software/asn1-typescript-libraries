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
import ACDFTuple, { type ACDFTupleJSON } from "./ACDFTuple.mjs";
import {
    gserSequence,
    integerToJSON,
    integerToString,
} from "../json.mjs";

/**
 * JSON encoding of an {@link ACDFTupleExtended}: an {@link ACDFTupleJSON}
 * plus the user-class specificity from ITU Recommendation X.501 (2016),
 * Section 18.8.4.
 */
export type ACDFTupleExtendedJSON = ACDFTupleJSON & {
    userClassSpecificity: number | string;
};

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

    /**
     * @summary ASN.1 value notation for the extended ACDF tuple
     * @description
     *
     * The five Section 18.8.2 components, then
     * `userClassSpecificity` from Section 18.8.4 (`allUsers` <
     * `subtree` < `userGroup` < `name` / `thisEntry`). Zero means the
     * user class did not match.
     *
     * @returns `{ userClasses { allUsers NULL }, ..., userClassSpecificity 1 }`
     * @function
     * @public
     */
    public override toString(): string {
        return gserSequence([
            ...this.gserComponents(),
            `userClassSpecificity ${integerToString(this.userClassSpecificity)}`,
        ]);
    }

    /**
     * @summary Convert this extended tuple to JSON, loosely following ITU-T X.697
     * @description
     *
     * {@link ACDFTuple.toJSON} plus `userClassSpecificity`.
     *
     * @returns The JSON encoding of this tuple
     * @function
     * @public
     */
    public override toJSON(): ACDFTupleExtendedJSON {
        return {
            ...super.toJSON(),
            userClassSpecificity: integerToJSON(this.userClassSpecificity),
        };
    }

}

export default ACDFTupleExtended;
