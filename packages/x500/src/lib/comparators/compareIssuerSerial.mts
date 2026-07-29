import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    IssuerSerial,
} from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";
import { Buffer } from "node:buffer";

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
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.issuerUID) !== Boolean(b.issuerUID)) {
        return false;
    }
    if (Buffer.compare(a.serial, b.serial)) {
        return false;
    }
    // TODO: Do these really have to be identical? Sometimes this can be a subset, I think.
    return compareGeneralNames(a.issuer, b.issuer, getEqualityMatcher);
}

export default compareIssuerSerial;
