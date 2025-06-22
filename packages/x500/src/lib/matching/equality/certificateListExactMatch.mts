import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, DERElement, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
} from "../../modules/CertificateExtensions/CertificateListExactAssertion.ta.mjs";
import {
    CertificateList,
    _decode_CertificateList,
} from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_issuingDistributionPoint,
} from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
} from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import compareGeneralNames from "../../comparators/compareGeneralNames.mjs";
import compareRelativeDistinguishedName from "../../comparators/compareRelativeDistinguishedName.mjs";
import compareElements from "../../comparators/compareElements.mjs";

const SOUGHT_EXTENSION_OID: string = id_ce_issuingDistributionPoint.toString();

export
const certificateListExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificateListExactAssertion = _decode_CertificateListExactAssertion(assertion);
    const v: CertificateList = _decode_CertificateList(value);
    if (!compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher ?? (() => undefined))) {
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
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_issuingDistributionPoint)));
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        const ips: IssuingDistPointSyntax = _decode_IssuingDistPointSyntax(el);
        const stored = ips.distributionPoint;
        if ("fullName" in stored) {
            if (!("fullName" in a.distributionPoint)) {
                return false;
            }
            if (!compareGeneralNames(stored.fullName, stored.fullName, getEqualityMatcher ?? (() => undefined))) {
                return false;
            }
        } else if ("nameRelativeToCRLIssuer" in stored) {
            if (!("nameRelativeToCRLIssuer" in a.distributionPoint)) {
                return false;
            }
            if (!compareRelativeDistinguishedName(
                stored.nameRelativeToCRLIssuer,
                a.distributionPoint.nameRelativeToCRLIssuer,
                getEqualityMatcher ?? (() => undefined),
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
