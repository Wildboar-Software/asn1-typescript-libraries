import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    Holder,
} from "../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";
import compareIssuerSerial from "./compareIssuerSerial.mjs";
import compareAlgorithmIdentifier from "./compareAlgorithmIdentifier.mjs";
import compareBitStrings from "./compareBitStrings.mjs";

export
function compareHolder (
    a: Holder,
    b: Holder,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.baseCertificateID) !== Boolean(b.baseCertificateID)) {
        return false;
    }
    if (Boolean(a.entityName) !== Boolean(b.entityName)) {
        return false;
    }
    if (Boolean(a.objectDigestInfo) !== Boolean(b.objectDigestInfo)) {
        return false;
    }
    if (
        a.baseCertificateID
        && b.baseCertificateID
        && !compareIssuerSerial(a.baseCertificateID, b.baseCertificateID, getEqualityMatcher)
    ) {
        return false;
    }
    if (
        a.entityName
        && b.entityName
        && !compareGeneralNames(a.entityName, b.entityName, getEqualityMatcher)
    ) {
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

export default compareHolder;
