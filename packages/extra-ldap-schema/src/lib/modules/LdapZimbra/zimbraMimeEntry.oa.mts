/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraMimeEntry } from "../LdapZimbra/id-oc-zimbraMimeEntry.va.mjs";


/**
 * @summary zimbraMimeEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMimeEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraMimeIndexingEnabled }
 *   MAY CONTAIN               { description
 *                               | zimbraMimeFileExtension
 *                               | zimbraMimeHandlerClass
 *                               | zimbraMimeHandlerExtension
 *                               | zimbraMimePriority
 *                               | zimbraMimeType }
 *   LDAP-NAME                 {"zimbraMimeEntry"}
 *   LDAP-DESC                 "MIME type info"
 *   ID                        id-oc-zimbraMimeEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraMimeEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
