/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
// export { id_oc_tjhsstRoom } from "../LdapIodine/id-oc-tjhsstRoom.va.mjs";


/**
 * @summary tjhsstRoom
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstRoom OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { roomNumber }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | displayName }
 *   LDAP-NAME                 {"tjhsstRoom"}
 *   ID                        id-oc-tjhsstRoom }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstRoom: OBJECT_CLASS = undefined;

/* eslint-enable */
