import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { EqualityMatcher } from "../types/EqualityMatcher.mjs";
import type { GeneralName } from "../modules/CertificateExtensions/index.mjs";
import {
    type Target,
    GeneralSubtree,
} from "../modules/AttributeCertificateDefinitions/index.mjs";
import { compareGeneralName } from "./compareGeneralName.mjs";
import { compareIssuerSerial } from "./compareIssuerSerial.mjs";
import { gnWithinGeneralSubtree } from "../utils/gnWithinGeneralSubtree.mjs";

/**
 * @summary Compare two `Target` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareTarget(
    a: Target,
    b: Target,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const aname: GeneralName | false | undefined =
        (("targetName" in a) && a.targetName)
        || (("targetCert" in a) && a.targetCert.targetName);
    const bname: GeneralName | false | undefined =
        (("targetName" in b) && b.targetName)
        || (("targetCert" in b) && b.targetCert.targetName);
    // For our purposes, we match targetName and targetGroup the same.
    if (aname && bname) {
        return compareGeneralName(aname, bname, getEqualityMatcher);
    } else if (("targetGroup" in a) && ("targetGroup" in b)) {
        return compareGeneralName(a.targetGroup, b.targetGroup, getEqualityMatcher);
    } else if (("targetCert" in a) && ("targetCert" in b)) {
        // We only compare the IssuerSerial.
        // certDigestInfo could differ by being different hash algs or inputs.
        // targetName could ambiguously refer to a certificate.
        // but targetCertificate is always unique.
        const certa = a.targetCert.targetCertificate;
        const certb = b.targetCert.targetCertificate;
        return compareIssuerSerial(certa, certb, getEqualityMatcher);
    } else if (("targetGroup" in a) && ("targetName" in b)) {
        // If one is a group and one is a name, we do a simple prefix check.
        const group = new GeneralSubtree(a.targetGroup);
        const name = b.targetName;
        return gnWithinGeneralSubtree(name, group, getEqualityMatcher);
    } else if (("targetName" in a) && ("targetGroup" in b)) {
        // If one is a group and one is a name, we do a simple prefix check.
        const group = new GeneralSubtree(b.targetGroup);
        const name = a.targetName;
        return gnWithinGeneralSubtree(name, group, getEqualityMatcher);
    } else {
        // Any other combination is unrecognized.
        return false;
    }
}
