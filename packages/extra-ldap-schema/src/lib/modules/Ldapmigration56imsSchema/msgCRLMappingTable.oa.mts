/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { msgCRLMappingRecord } from "../Ldapmigration56imsSchema/msgCRLMappingRecord.oa.mjs";
// export { id_oc_msgCRLMappingTable } from "../Ldapmigration56imsSchema/id-oc-msgCRLMappingTable.va.mjs";


/**
 * @summary msgCRLMappingTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msgCRLMappingTable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { msgCRLMappingRecord }
 *   LDAP-NAME                 {"msgCRLMappingTable"}
 *   LDAP-DESC                 "auxiliary class for setting CRL mapping"
 *   ID                        id-oc-msgCRLMappingTable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const msgCRLMappingTable: OBJECT_CLASS = undefined;

/* eslint-enable */
