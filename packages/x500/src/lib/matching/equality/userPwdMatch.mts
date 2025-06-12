import type { EqualityMatcher } from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
import type { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { UserPwd, _decode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";

// userPwdMatch MATCHING-RULE ::= {
//     SYNTAX       UserPwd
//     LDAP-SYNTAX  userPwdDescription.&id
//     LDAP-NAME    {"userPwdMatch"}
//     ID           id-mr-userPwdMatch }

// UserPwd ::= CHOICE {
//     clear                 UTF8String,
//     encrypted             SEQUENCE {
//       algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
//       encryptedString       OCTET STRING,
//       ...},
//     ...}

export
function createUserPwdMatch (
    encrypter: (alg: AlgorithmIdentifier, clear: string) => Uint8Array | null,
): EqualityMatcher {
    return (
        assertion: ASN1Element,
        value: ASN1Element,
    ): boolean => {
        const a: UserPwd = _decode_UserPwd(assertion);
        const v: UserPwd = _decode_UserPwd(value);
        if (("clear" in a) && ("clear" in v)) {
            return (a.clear === v.clear);
        } else if (("encrypted" in a) && ("encrypted" in v)) {
            return (
                !Buffer.compare(a.encrypted.encryptedString, v.encrypted.encryptedString)
                && compareAlgorithmIdentifier(a.encrypted.algorithmIdentifier, v.encrypted.algorithmIdentifier)
            );
        } else if (("encrypted" in a) && ("clear" in v)) {
            const alg = a.encrypted.algorithmIdentifier;
            const result = encrypter(alg, v.clear);
            if (!result) {
                return false; // Algorithm not understood.
            }
            return !Buffer.compare(result, a.encrypted.encryptedString);
        } else if (("clear" in a) && ("encrypted" in v)) {
            const alg = v.encrypted.algorithmIdentifier;
            const result = encrypter(alg, a.clear);
            if (!result) {
                return false; // Algorithm not understood.
            }
            return !Buffer.compare(result, v.encrypted.encryptedString);
        } else {
            return false;
        }
    }
}

export default createUserPwdMatch;
