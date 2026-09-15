import type { EqualityMatcher } from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import type { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { UserPwd, _decode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";
import compareElements from "../../comparators/compareElements.mjs";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.10.1 `userPwdMatch`.
 *
 * Factory for matching presented `UserPwd` against a stored
 * `UserPwd`:
 *
 * - Both clear: `caseExactMatch`.
 * - Presented clear, stored encrypted: encrypt the assertion with
 *   the stored algorithm, then `octetStringMatch`.
 * - Presented encrypted, stored clear: encrypt the stored password
 *   with the asserted algorithm, then `octetStringMatch`.
 * - Both encrypted: algorithm identifier and parameters must be
 *   equal, then encrypted strings via `octetStringMatch`.
 *
 * `encrypter` supplies the encryption for mixed clear/encrypted
 * cases; returning `null` means the algorithm is not understood.
 */
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
            return compareElements(assertion, value);
        }
    }
}

export default createUserPwdMatch;
