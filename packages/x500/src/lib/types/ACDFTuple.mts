import {
    authenticationLevelToJSON,
    authenticationLevelToString,
    type AuthenticationLevel,
    type AuthenticationLevelJSON,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import type {
    UserClasses,
    UserClassesJSON,
} from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import type {
    ProtectedItems,
    ProtectedItemsJSON,
} from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import {
    grantsAndDenialsToJSON,
    grantsAndDenialsToString,
    type GrantsAndDenials,
    type GrantsAndDenialsJSON,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type {
    Precedence,
} from "../modules/BasicAccessControl/Precedence.ta.mjs";
import {
    gserSequence,
    integerToJSON,
    integerToString,
} from "../json.mjs";

/**
 * JSON encoding of an {@link ACDFTuple}. Component names follow
 * ITU Recommendation X.501 (2016), Section 18.8.2. This is not an ASN.1
 * type; each component is encoded loosely following ITU-T X.697 (JER).
 */
export type ACDFTupleJSON = {
    userClasses: UserClassesJSON;
    authenticationLevel: AuthenticationLevelJSON;
    protectedItems: ProtectedItemsJSON;
    grantsAndDenials: GrantsAndDenialsJSON;
    precedence: number | string;
};

/**
 * The Access Control Decision Function (ACDF) tuple type documented in
 * ITU Recommendation X.501 (2016), Section 18.8.2.
 */
export
class ACDFTuple {

    constructor (
        public readonly userClasses: UserClasses,
        public readonly authenticationLevel: AuthenticationLevel,
        public readonly protectedItems: ProtectedItems,
        public readonly grantsAndDenials: GrantsAndDenials,
        public readonly precedence: Precedence,
    ) {}

    /**
     * @summary ASN.1 value notation for the five ACDF tuple components
     * @description
     *
     * Not an ASN.1 type. Printed as a SEQUENCE of the inputs in
     * ITU Recommendation X.501 (2016), Section 18.8.2:
     * `userClasses`, `authenticationLevel`, `protectedItems`,
     * `grantsAndDenials`, `precedence`. Nested values use GSER /
     * ASN.1 value notation where those types define it.
     *
     * @returns `{ userClasses { allUsers NULL }, ... }`
     * @function
     * @public
     */
    public toString(): string {
        return gserSequence(this.gserComponents());
    }

    /**
     * @summary Convert this tuple to JSON, loosely following ITU-T X.697
     * @description
     *
     * Not an ASN.1 type. Keys are the Section 18.8.2 component names.
     * Nested values use each type's JSON encoding.
     *
     * @returns The JSON encoding of this tuple
     * @function
     * @public
     */
    public toJSON(): ACDFTupleJSON {
        return {
            userClasses: this.userClasses.toJSON(),
            authenticationLevel: authenticationLevelToJSON(this.authenticationLevel),
            protectedItems: this.protectedItems.toJSON(),
            grantsAndDenials: grantsAndDenialsToJSON(this.grantsAndDenials),
            precedence: integerToJSON(this.precedence),
        };
    }

    /**
     * GSER components of this tuple, without surrounding braces.
     * {@link ACDFTupleExtended} appends `userClassSpecificity`.
     *
     * @internal
     */
    protected gserComponents(): string[] {
        return [
            `userClasses ${this.userClasses.toString()}`,
            `authenticationLevel ${authenticationLevelToString(this.authenticationLevel)}`,
            `protectedItems ${this.protectedItems.toString()}`,
            `grantsAndDenials ${grantsAndDenialsToString(this.grantsAndDenials)}`,
            `precedence ${integerToString(this.precedence)}`,
        ];
    }

}

export default ACDFTuple;
