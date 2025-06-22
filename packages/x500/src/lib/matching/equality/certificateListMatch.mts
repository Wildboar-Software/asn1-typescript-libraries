import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, DERElement, FALSE_BIT, INTEGER, TRUE_BIT, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
} from "../../modules/CertificateExtensions/CertificateListAssertion.ta.mjs";
import {
    CertificateList,
    _decode_CertificateList,
} from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_authorityKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import {
    id_ce_issuingDistributionPoint,
} from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import { id_ce_cRLNumber } from "../../modules/CertificateExtensions/id-ce-cRLNumber.va.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import compareAuthorityKeyIdentifier from "../../comparators/compareAuthorityKeyIdentifier.mjs";
import getDateFromTime from "../../utils/getDateFromTime.mjs";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
} from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import compareGeneralName from "../../comparators/compareGeneralName.mjs";
import compareRelativeDistinguishedName from "../../comparators/compareRelativeDistinguishedName.mjs";

export
const certificateListMatch : EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificateListAssertion = _decode_CertificateListAssertion(assertion);
    const v: CertificateList = _decode_CertificateList(value);
    const crlNumberExt: Extension | undefined = v.toBeSigned.crlExtensions
        .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_cRLNumber)));
    const idpExt: Extension | undefined = v.toBeSigned.crlExtensions
        .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_issuingDistributionPoint)));
    const idp: IssuingDistPointSyntax | undefined = idpExt
        ? ((): IssuingDistPointSyntax => {
            const el: DERElement = new DERElement();
            el.fromBytes(idpExt.extnValue);
            return _decode_IssuingDistPointSyntax(el);
        })()
        : undefined;

    const crlNumber: INTEGER | undefined = crlNumberExt
        ? ((): INTEGER => {
            const el: DERElement = new DERElement();
            el.fromBytes(crlNumberExt.extnValue);
            return el.integer;
        })()
        : undefined;

    if (a.issuer && !compareName(a.issuer, v.toBeSigned.issuer, getEqualityMatcher ?? (() => undefined))) {
        return false;
    }

    if (a.minCRLNumber) {
        if (crlNumber === undefined) {
            return false;
        }
        if (crlNumber < a.minCRLNumber) {
            return false;
        }
    }

    if (a.maxCRLNumber) {
        if (crlNumber === undefined) {
            return false;
        }
        if (crlNumber > a.maxCRLNumber) {
            return false;
        }
    }

    if (
        a.reasonFlags
        && idp
        && idp.onlySomeReasons
        && !a.reasonFlags.some((reason: number, index: number) => (
            (reason === TRUE_BIT)
            && (reason === (idp.onlySomeReasons[index] ?? FALSE_BIT))
        ))
    ) {
        return false;
    }

    if (a.dateAndTime) {
        if (!v.toBeSigned.nextUpdate) {
            return false;
        }
        const date: Date = getDateFromTime(a.dateAndTime);
        const thisUpdate: Date = getDateFromTime(v.toBeSigned.thisUpdate);
        const nextUpdate: Date = getDateFromTime(v.toBeSigned.nextUpdate);
        if (date.valueOf() < thisUpdate.valueOf()) {
            return false;
        }
        if (date.valueOf() > nextUpdate.valueOf()) {
            return false;
        }
    }

    if (a.distributionPoint) {
        if (!idp) {
            return false;
        }
        if (("fullName" in a.distributionPoint) && ("fullName" in idp.distributionPoint)) {
            if (
                !a.distributionPoint.fullName.some((dpn1) => (
                    ("fullName" in idp.distributionPoint)
                    && (idp.distributionPoint.fullName
                        .some((dpn2): boolean => compareGeneralName(dpn1, dpn2, getEqualityMatcher ?? (() => undefined))))
            ))) {
                return false;
            }
        } else if (
            ("nameRelativeToCRLIssuer" in a.distributionPoint)
            && ("nameRelativeToCRLIssuer" in idp.distributionPoint)
            && !compareRelativeDistinguishedName(
                a.distributionPoint.nameRelativeToCRLIssuer,
                idp.distributionPoint.nameRelativeToCRLIssuer,
                getEqualityMatcher ?? (() => undefined),
            )
        ) {
            return false;
        }
    }

    if (a.authorityKeyIdentifier) {
        const aki: Extension | undefined = v.toBeSigned.crlExtensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_authorityKeyIdentifier)));
        if (!aki) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(aki.extnValue);
        const storedAKI: AuthorityKeyIdentifier = _decode_AuthorityKeyIdentifier(el);
        if (!compareAuthorityKeyIdentifier(a.authorityKeyIdentifier, storedAKI)) {
            return false;
        }
    }

    return true;
}

export default certificateListMatch;
