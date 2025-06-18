import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    IssuerSerial,
} from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";

/**
 * @summary Compare two `IssuerSerial` values
 * @param a One value
 * @param b The other
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
    return compareGeneralNames(a.issuer, b.issuer, getEqualityMatcher);
}

export default compareIssuerSerial;
