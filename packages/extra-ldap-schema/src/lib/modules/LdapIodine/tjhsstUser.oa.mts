/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_tjhsstUser } from "../LdapIodine/id-oc-tjhsstUser.va.mjs";


/**
 * @summary tjhsstUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { commonName
 *                               | iodineUid
 *                               | header
 *                               | style
 *                               | chrome
 *                               | startpage
 *                               | iodineUidNumber
 *                               | userPassword
 *                               | surname }
 *   MAY CONTAIN               { displayName
 *                               | middlename
 *                               | groupMembership
 *                               | nickname
 *                               | birthday
 *                               | gender
 *                               | webpage
 *                               | header
 *                               | style
 *                               | chrome
 *                               | eighthoffice-comments
 *                               | boxcolor
 *                               | boxtitlecolor
 *                               | counselor
 *                               | soundexlast
 *                               | soundexfirst
 *                               | metaphonelast
 *                               | metaphonefirst
 *                               | aim
 *                               | msn
 *                               | xfire
 *                               | yahoo
 *                               | googleTalk
 *                               | icq
 *                               | jabber
 *                               | xfire
 *                               | skype
 *                               | preferredPhoto
 *                               | mailentries
 *                               | gidNumber
 *                               | afsid
 *                               | homeDirectory
 *                               | loginShell
 *                               | perm-showaddress-self
 *                               | perm-showtelephone-self
 *                               | perm-showbirthday-self
 *                               | perm-showpictures-self
 *                               | perm-showaddress
 *                               | perm-showtelephone
 *                               | perm-showbirthday
 *                               | perm-showpictures
 *                               | is-admin }
 *   LDAP-NAME                 {"tjhsstUser"}
 *   ID                        id-oc-tjhsstUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstUser: OBJECT_CLASS = undefined;

/* eslint-enable */
