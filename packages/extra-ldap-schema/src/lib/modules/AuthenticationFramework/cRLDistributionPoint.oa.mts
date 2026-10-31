/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va.mjs";


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
export
const cRLDistributionPoint: OBJECT_CLASS = undefined;

/* eslint-enable */
