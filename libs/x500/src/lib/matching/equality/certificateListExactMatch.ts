import EqualityMatcher from "../../types/EqualityMatcher";
import { ASN1Element, DERElement } from "asn1-ts";
import compareName from "../../comparators/compareName";
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
} from "../../modules/CertificateExtensions/CertificateListExactAssertion.ta";
import {
    CertificateList,
    _decode_CertificateList,
} from "../../modules/AuthenticationFramework/CertificateList.ta";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta";
import {
    id_ce_issuingDistributionPoint,
} from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
} from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta";
import compareGeneralNames from "../../comparators/compareGeneralNames";
import compareRelativeDistinguishedName from "../../comparators/compareRelativeDistinguishedName";
import compareElements from "../../comparators/compareElements";

const SOUGHT_EXTENSION_OID: string = id_ce_issuingDistributionPoint.toString();

export
const certificateListExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificateListExactAssertion = _decode_CertificateListExactAssertion(assertion);
    const v: CertificateList = _decode_CertificateList(value);
    if (!compareName(v.toBeSigned.issuer, a.issuer)) {
        return false;
    }
    const time = ((): Date => {
        if ("utcTime" in a.thisUpdate) {
            return a.thisUpdate.utcTime;
        } else {
            return a.thisUpdate.generalizedTime;
        }
    })();
    if (time.valueOf() !== v.toBeSigned.thisUpdate.valueOf()) {
        return false;
    }
    if (a.distributionPoint) {
        const ext: Extension = v.toBeSigned.crlExtensions
            .find((ext: Extension): boolean => (ext.extnId.toString() === SOUGHT_EXTENSION_OID));
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        const ips: IssuingDistPointSyntax = _decode_IssuingDistPointSyntax(el);
        const stored = ips.distributionPoint;
        if ("fullName" in stored) {
            if (!("fullName" in a.distributionPoint)) {
                return false;
            }
            if (!compareGeneralNames(stored.fullName, stored.fullName)) {
                return false;
            }
        } else if ("nameRelativeToCRLIssuer" in stored) {
            if (!("nameRelativeToCRLIssuer" in a.distributionPoint)) {
                return false;
            }
            if (!compareRelativeDistinguishedName(
                stored.nameRelativeToCRLIssuer,
                a.distributionPoint.nameRelativeToCRLIssuer,
            )) {
                return false;
            }
        } else {
            if (!("tagClass" in a.distributionPoint)) {
                return false;
            }
            if (!compareElements(stored, a.distributionPoint)) {
                return false;
            }
        }
    }
    return true;
}

export default certificateListExactMatch;
