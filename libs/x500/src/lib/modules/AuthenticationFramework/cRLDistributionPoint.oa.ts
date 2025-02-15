/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
import { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
import { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
export { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
export { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
export { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
export { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";
export { top } from "../InformationFramework/top.oa";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";

/* START_OF_SYMBOL_DEFINITION cRLDistributionPoint */
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
/* END_OF_SYMBOL_DEFINITION cRLDistributionPoint */

/* eslint-enable */
