import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    type PwdEncAlg,
    _decode_PwdEncAlg,
} from "../../modules/PasswordPolicy/PwdEncAlg.ta.mjs";
import {
    type UserPwd,
    _decode_UserPwd,
} from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import compareElements from "../../comparators/compareElements.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.10.2 `pwdEncAlgMatch`.
 *
 * TRUE iff the presented `PwdEncAlg` equals the algorithm stored
 * with an encrypted password: both the algorithm identifier and
 * parameters must be equal. Fails if the stored `UserPwd` is not
 * encrypted.
 */
/**
 * `pwdEncAlgMatch` on a decoded algorithm and password.
 *
 * @param a Presented encryption algorithm.
 * @param value Stored user password, or that password already decoded.
 * @returns `true` when the stored password is encrypted with `a`.
 */
export
function pwdEncAlgMatchTyped (
    a: PwdEncAlg,
    value: UserPwd | ASN1Element,
): boolean {
    const v = readDecoded(value, _decode_UserPwd);
    if (!("encrypted" in v)) {
        return false;
    }
    const alg = v.encrypted.algorithmIdentifier;
    const sameParameters = alg.parameters === a.parameters
        || (
            alg.parameters !== undefined
            && a.parameters !== undefined
            && compareElements(alg.parameters, a.parameters)
        );
    return sameParameters && alg.algorithm.isEqualTo(a.algorithm);
}

pwdEncAlgMatchTyped satisfies TypedEquationFunction<PwdEncAlg>;

/**
 * `pwdEncAlgMatch` as a `Matcher`.
 */
export
const pwdEncAlgMatch: Matcher = createEqualityMatcher(
    _decode_PwdEncAlg,
    pwdEncAlgMatchTyped,
);

export default pwdEncAlgMatch;
