/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { id_oc_nTDSConnection } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSConnection.va.mjs";


/**
 * @summary nTDSConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSConnection OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { enabledConnection
 *                               | fromServer
 *                               | options }
 *   MAY CONTAIN               { generatedConnection
 *                               | schedule
 *                               | transportType
 *                               | mS-DS-ReplicatesNCReason }
 *   LDAP-NAME                 {"nTDSConnection"}
 *   ID                        id-oc-nTDSConnection }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSConnection: OBJECT_CLASS = undefined;

/* eslint-enable */
