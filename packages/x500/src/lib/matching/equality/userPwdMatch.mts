import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { type UserPwd, _decode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";
import compareElements from "../../comparators/compareElements.mjs";
import { Buffer } from "node:buffer";
import { prepString } from "../../utils/prepString.mjs";
import { caseExactMatchTyped } from "./caseExactMatch.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * `userPwdMatch` on two decoded `UserPwd` values.
 *
 * @param encrypter Encrypts a clear password when the other side is encrypted.
 * @param assertion Presented password.
 * @param value Stored password.
 * @param getEqualityMatcher Unused; present for `TypedEquationFunction` symmetry.
 * @param flags `MATCH_FLAG_DEBUG` and `MATCH_FLAG_VALUE_NORMALIZED`.
 * @returns `true` when the passwords match under clause 8.10.1.
 */
export
function userPwdMatchTyped (
    encrypter: (alg: AlgorithmIdentifier, clear: string) => Uint8Array | null,
    assertion: UserPwd,
    value: UserPwd,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    if (ASN1Element.isElement(assertion) !== ASN1Element.isElement(value)) {
        return false;
    }
    if (ASN1Element.isElement(assertion)) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: userPwdMatch: unrecognized UserPwd alternative",
            );
        }
        return compareElements(assertion, value as ASN1Element);
    }
    if (("clear" in assertion) && ("clear" in value)) {
        const prepared = prepString(assertion.clear);
        if (prepared === undefined) {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    "@wildboar/x500: debug: userPwdMatch: clear assertion failed string preparation",
                );
            }
            return undefined;
        }
        return caseExactMatchTyped(prepared, value.clear, getEqualityMatcher, flags);
    }
    if (("encrypted" in assertion) && ("encrypted" in value)) {
        return (
            Buffer.compare(assertion.encrypted.encryptedString, value.encrypted.encryptedString) === 0
            && compareAlgorithmIdentifier(
                assertion.encrypted.algorithmIdentifier,
                value.encrypted.algorithmIdentifier,
            )
        );
    }
    if (("encrypted" in assertion) && ("clear" in value)) {
        const alg = assertion.encrypted.algorithmIdentifier;
        const result = encrypter(alg, value.clear);
        if (!result) {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    `@wildboar/x500: debug: userPwdMatch: unrecognized encryption algorithm ${alg.algorithm.dotDelimitedNotation}`,
                );
            }
            return false; // Algorithm not understood.
        }
        return Buffer.compare(result, assertion.encrypted.encryptedString) === 0;
    }
    if (("clear" in assertion) && ("encrypted" in value)) {
        const alg = value.encrypted.algorithmIdentifier;
        const result = encrypter(alg, assertion.clear);
        if (!result) {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    `@wildboar/x500: debug: userPwdMatch: unrecognized encryption algorithm ${alg.algorithm.dotDelimitedNotation}`,
                );
            }
            return false; // Algorithm not understood.
        }
        return Buffer.compare(result, value.encrypted.encryptedString) === 0;
    }
    return false;
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
 * The returned value is a `Matcher`. The assertion is decoded once;
 * each stored value may be an element or an already decoded `UserPwd`.
 */
export
function createUserPwdMatch (
    encrypter: (alg: AlgorithmIdentifier, clear: string) => Uint8Array | null,
): Matcher {
    const match: TypedEquationFunction<UserPwd> = (assertion, value, getEqualityMatcher, flags) => userPwdMatchTyped(
        encrypter,
        assertion,
        readDecoded(value, _decode_UserPwd),
        getEqualityMatcher,
        flags,
    );
    return createEqualityMatcher(_decode_UserPwd, match);
}

export default createUserPwdMatch;
