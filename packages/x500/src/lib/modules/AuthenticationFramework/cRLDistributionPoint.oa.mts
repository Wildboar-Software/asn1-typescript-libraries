/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa.mjs";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa.mjs";
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa.mjs";
import { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa.mjs";
import { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
/**
 * @summary cRLDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistributionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                structural
 *   MUST CONTAIN        {commonName}
 *   MAY CONTAIN         {certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        deltaRevocationList}
 *   LDAP-NAME           {"cRLDistributionPoint"}
 *   LDAP-DESC           "X.509 CRL distribution point"
 *   ID                  id-oc-cRLDistributionPoint }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cRLDistributionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        deltaRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cRLDistributionPoint"],
    "&ldapDesc": "X.509 CRL distribution point" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cRLDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
