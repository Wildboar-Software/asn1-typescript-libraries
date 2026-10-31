/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { msgVanityDomain } from "../Ldapmigration56imsSchema/msgVanityDomain.oa.mjs";
// export { id_oc_msgVanityDomainUser } from "../Ldapmigration56imsSchema/id-oc-msgVanityDomainUser.va.mjs";


/**
 * @summary msgVanityDomainUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msgVanityDomainUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { msgVanityDomain }
 *   LDAP-NAME                 {"msgVanityDomainUser"}
 *   LDAP-DESC                 "auxiliary class for defining users in a vality domain"
 *   ID                        id-oc-msgVanityDomainUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const msgVanityDomainUser: OBJECT_CLASS = undefined;

/* eslint-enable */
