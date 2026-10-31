/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_dicomTransferCapability } from "../LdapDicom/id-oc-dicomTransferCapability.va.mjs";


/**
 * @summary dicomTransferCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomTransferCapability OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomSOPClass
 *                               | dicomTransferRole
 *                               | dicomTransferSyntax }
 *   MAY CONTAIN               { commonName }
 *   LDAP-NAME                 {"dicomTransferCapability"}
 *   LDAP-DESC                 "Transfer Capabilities for an Application Entity"
 *   ID                        id-oc-dicomTransferCapability }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomTransferCapability: OBJECT_CLASS = undefined;

/* eslint-enable */
