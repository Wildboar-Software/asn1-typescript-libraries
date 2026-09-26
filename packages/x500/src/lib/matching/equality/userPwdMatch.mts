import { ASN1Element } from "@wildboar/asn1";
import type { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { UserPwd, _decode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";
import compareElements from "../../comparators/compareElements.mjs";
import { Buffer } from "node:buffer";
import { caseExactMatchTyped } from "./caseExactMatch.mjs";
import { readDecoded } from "../readValue.mjs";

/**
 * `userPwdMatch` on two decoded `UserPwd` values.
 *
 * @param encrypter Encrypts a clear password when the other side is encrypted.
 * @param assertion Presented password.
 * @param value Stored password.
 * @returns `true` when the passwords match under clause 8.10.1.
 */
export
function userPwdMatchTyped (
    encrypter: (alg: AlgorithmIdentifier, clear: string) => Uint8Array | null,
    assertion: UserPwd,
    value: UserPwd,
): boolean {
    if (("clear" in assertion) && ("clear" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)) {
        return caseExactMatchTyped(assertion.clear, value.clear);
    } else if (("encrypted" in assertion) && ("encrypted" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)) {
        return (
            Buffer.compare(assertion.encrypted.encryptedString, value.encrypted.encryptedString) === 0
            && compareAlgorithmIdentifier(
                assertion.encrypted.algorithmIdentifier,
                value.encrypted.algorithmIdentifier,
            )
        );
    } else if (("encrypted" in assertion) && ("clear" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)) {
        const alg = assertion.encrypted.algorithmIdentifier;
        const result = encrypter(alg, value.clear);
        if (!result) {
            return false; // Algorithm not understood.
        }
        return Buffer.compare(result, assertion.encrypted.encryptedString) === 0;
    } else if (("clear" in assertion) && ("encrypted" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)) {
        const alg = value.encrypted.algorithmIdentifier;
        const result = encrypter(alg, assertion.clear);
        if (!result) {
            return false; // Algorithm not understood.
        }
        return Buffer.compare(result, value.encrypted.encryptedString) === 0;
    } else if (ASN1Element.isElement(assertion) && ASN1Element.isElement(value)) {
        return compareElements(assertion, value);
    } else {
        return false;
    }
}

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
 *
 * The returned matcher accepts an `ASN1Element` or a `UserPwd` on
 * each side, independently.
 */
export
function createUserPwdMatch (
    encrypter: (alg: AlgorithmIdentifier, clear: string) => Uint8Array | null,
): (
    assertion: ASN1Element | UserPwd,
    value: ASN1Element | UserPwd,
) => boolean {
    return (
        assertion: ASN1Element | UserPwd,
        value: ASN1Element | UserPwd,
    ): boolean => userPwdMatchTyped(
        encrypter,
        readDecoded(assertion, _decode_UserPwd),
        readDecoded(value, _decode_UserPwd),
    );
}

export default createUserPwdMatch;
