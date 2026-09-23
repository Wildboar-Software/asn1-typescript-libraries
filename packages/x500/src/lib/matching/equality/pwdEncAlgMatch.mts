import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
} from "../../modules/PasswordPolicy/PwdEncAlg.ta.mjs";
import {
    UserPwd,
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
export
const pwdEncAlgMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: PwdEncAlg = _decode_PwdEncAlg(assertion);
    const v: UserPwd = _decode_UserPwd(value);
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

export default pwdEncAlgMatch;
