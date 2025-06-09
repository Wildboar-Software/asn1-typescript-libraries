import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
} from "../../modules/PasswordPolicy/PwdEncAlg.ta.js";
import {
    UserPwd,
    _decode_UserPwd,
} from "../../modules/PasswordPolicy/UserPwd.ta.js";
import compareElements from "../../comparators/compareElements.js";

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
    return (
        (alg.algorithm.isEqualTo(a.algorithm))
        && (
            (alg.parameters === a.parameters)
            || compareElements(alg.parameters, a.parameters)
        )
    );
}

export default pwdEncAlgMatch;
