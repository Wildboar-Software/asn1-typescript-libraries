/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { mailGroup } from "../InetMailSchema/mailGroup.oa.mjs";
// export { soniaMailGroupUid } from "../Ldapmigration97sonia/soniaMailGroupUid.oa.mjs";
// export { id_oc_soniaMailGroup } from "../Ldapmigration97sonia/id-oc-soniaMailGroup.va.mjs";


/**
 * @summary soniaMailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { mailGroup }
 *   MUST CONTAIN              { soniaMailGroupUid }
 *   MAY CONTAIN               { soniaMailGroupStatus
 *                               | soniaMailGroupSubscribeType }
 *   LDAP-NAME                 {"soniaMailGroup"}
 *   ID                        id-oc-soniaMailGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
