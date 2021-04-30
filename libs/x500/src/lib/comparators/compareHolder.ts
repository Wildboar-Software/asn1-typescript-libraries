import type {
    Holder,
} from "../modules/AttributeCertificateDefinitions/Holder.ta";
import compareGeneralNames from "./compareGeneralNames";
import compareIssuerSerial from "./compareIssuerSerial";
import compareAlgorithmIdentifier from "./compareAlgorithmIdentifier";
import compareBitStrings from "./compareBitStrings";

export
function compareHolder (a: Holder, b: Holder): boolean {
    if (Boolean(a.baseCertificateID) !== Boolean(b.baseCertificateID)) {
        return false;
    }
    if (Boolean(a.entityName) !== Boolean(b.entityName)) {
        return false;
    }
    if (Boolean(a.objectDigestInfo) !== Boolean(b.objectDigestInfo)) {
        return false;
    }
    if (a.baseCertificateID && b.baseCertificateID && !compareIssuerSerial(a.baseCertificateID, b.baseCertificateID)) {
        return false;
    }
    if (a.entityName && b.entityName && !compareGeneralNames(a.entityName, b.entityName)) {
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
