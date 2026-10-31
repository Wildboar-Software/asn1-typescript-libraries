/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_tjhsstStudent } from "../LdapIodine/id-oc-tjhsstStudent.va.mjs";


/**
 * @summary tjhsstStudent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstStudent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { graduationYear
 *                               | iodineUid
 *                               | commonName
 *                               | surname
 *                               | startpage
 *                               | iodineUidNumber
 *                               | style
 *                               | header
 *                               | chrome }
 *   MAY CONTAIN               { tjhsstStudentId
 *                               | perm-showpictures
 *                               | perm-showaddress
 *                               | perm-showtelephone
 *                               | perm-showbirthday
 *                               | perm-showschedule
 *                               | perm-showmap
 *                               | perm-showeighth
 *                               | perm-showlocker
 *                               | perm-showpictures-self
 *                               | perm-showaddress-self
 *                               | perm-showtelephone-self
 *                               | perm-showbirthday-self
 *                               | perm-showschedule-self
 *                               | perm-showmap-self
 *                               | perm-showeighth-self
 *                               | perm-showlocker-self
 *                               | friend
 *                               | perm-showtelephone-friend
 *                               | displayName
 *                               | middlename
 *                               | nickname
 *                               | boxcolor
 *                               | boxtitlecolor
 *                               | counselor
 *                               | groupMembership
 *                               | birthday
 *                               | gender
 *                               | aim
 *                               | xfire
 *                               | yahoo
 *                               | msn
 *                               | jabber
 *                               | icq
 *                               | googleTalk
 *                               | skype
 *                               | webpage
 *                               | locker
 *                               | soundexlast
 *                               | soundexfirst
 *                               | metaphonelast
 *                               | metaphonefirst
 *                               | eighthoffice-comments
 *                               | preferredPhoto
 *                               | enrolledclass
 *                               | mailentries
 *                               | gidNumber
 *                               | afsid
 *                               | homeDirectory
 *                               | loginShell
 *                               | is-student-admin
 *                               | is-admin
 *                               | eighthAgreement }
 *   LDAP-NAME                 {"tjhsstStudent"}
 *   ID                        id-oc-tjhsstStudent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstStudent: OBJECT_CLASS = undefined;

/* eslint-enable */
