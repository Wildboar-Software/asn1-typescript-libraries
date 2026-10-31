/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
// export { id_oc_storage } from "../LdapSchema2ldifMicrosoft/id-oc-storage.va.mjs";


/**
 * @summary storage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * storage OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MAY CONTAIN               { moniker
 *                               | monikerDisplayName
 *                               | iconPath }
 *   LDAP-NAME                 {"storage"}
 *   ID                        id-oc-storage }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const storage: OBJECT_CLASS = undefined;

/* eslint-enable */
