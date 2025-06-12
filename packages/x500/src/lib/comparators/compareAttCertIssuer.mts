import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    AttCertIssuer,
} from "../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";
import compareIssuerSerial from "./compareIssuerSerial.mjs";
import compareAlgorithmIdentifier from "./compareAlgorithmIdentifier.mjs";
import compareBitStrings from "./compareBitStrings.mjs";

export
function compareAttCertIssuer (
    a: AttCertIssuer,
    b: AttCertIssuer,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.baseCertificateID) !== Boolean(b.baseCertificateID)) {
        return false;
    }
    if (Boolean(a.issuerName) !== Boolean(b.issuerName)) {
        return false;
    }
    if (Boolean(a.objectDigestInfo) !== Boolean(b.objectDigestInfo)) {
        return false;
    }
    if (a.baseCertificateID && b.baseCertificateID && !compareIssuerSerial(a.baseCertificateID, b.baseCertificateID, getEqualityMatcher)) {
        return false;
    }
    if (a.issuerName && b.issuerName && !compareGeneralNames(a.issuerName, b.issuerName, getEqualityMatcher)) {
        return false;
    }
    if (a.objectDigestInfo && b.objectDigestInfo) {
        if (a.objectDigestInfo.digestedObjectType !== b.objectDigestInfo.digestedObjectType) {
            return false;
        }
        if (a.objectDigestInfo.otherObjectTypeID?.toString() !== b.objectDigestInfo.otherObjectTypeID?.toString()) {
            return false;
        }
        if (!compareAlgorithmIdentifier(a.objectDigestInfo.digestAlgorithm, b.objectDigestInfo.digestAlgorithm)) {
            return false;
        }
        if (!compareBitStrings(a.objectDigestInfo.objectDigest, b.objectDigestInfo.objectDigest)) {
            return false;
        }
    }
    return true;
}

export default compareAttCertIssuer;
