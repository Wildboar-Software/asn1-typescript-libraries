/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dicomAETitle } from "../LdapDicom/dicomAETitle.oa.mjs";
// export { id_oc_dicomUniqueAETitle } from "../LdapDicom/id-oc-dicomUniqueAETitle.va.mjs";


/**
 * @summary dicomUniqueAETitle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomUniqueAETitle OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomAETitle }
 *   LDAP-NAME                 {"dicomUniqueAETitle"}
 *   LDAP-DESC                 "A Unique DICOM Application Entity title"
 *   ID                        id-oc-dicomUniqueAETitle }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomUniqueAETitle: OBJECT_CLASS = undefined;

/* eslint-enable */
