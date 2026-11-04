import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    IssuerSerial,
} from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";

/**
 * @summary Compare two `IssuerSerial` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareIssuerSerial (
    a: IssuerSerial,
    b: IssuerSerial,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return a.isEqualTo(b);
}

export default compareIssuerSerial;
