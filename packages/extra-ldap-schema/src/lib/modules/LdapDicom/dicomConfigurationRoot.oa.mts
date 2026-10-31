/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_dicomConfigurationRoot } from "../LdapDicom/id-oc-dicomConfigurationRoot.va.mjs";


/**
 * @summary dicomConfigurationRoot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomConfigurationRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"dicomConfigurationRoot"}
 *   LDAP-DESC                 "Root of the DICOM Configuration Hierarchy"
 *   ID                        id-oc-dicomConfigurationRoot }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomConfigurationRoot: OBJECT_CLASS = undefined;

/* eslint-enable */
