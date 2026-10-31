/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { cosSuperDefinition } from "../LdapCommon389/cosSuperDefinition.oa.mjs";
// export { id_oc_cosClassicDefinition } from "../LdapCommon389/id-oc-cosClassicDefinition.va.mjs";


/**
 * @summary cosClassicDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosClassicDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { cosSuperDefinition }
 *   MAY CONTAIN               { costemplatedn
 *                               | cosspecifier }
 *   LDAP-NAME                 {"cosClassicDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosClassicDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosClassicDefinition: OBJECT_CLASS = undefined;

/* eslint-enable */
