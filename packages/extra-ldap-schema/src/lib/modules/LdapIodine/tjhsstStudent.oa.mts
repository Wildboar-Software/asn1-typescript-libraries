/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_tjhsstStudent } from "../LdapIodine/id-oc-tjhsstStudent.va.mjs";
import { graduationYear } from "../LdapIodine/graduationYear.oa.mjs";
import { iodineUid } from "../LdapIodine/iodineUid.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { startpage } from "../LdapIodine/startpage.oa.mjs";
import { iodineUidNumber } from "../LdapIodine/iodineUidNumber.oa.mjs";
import { style } from "../LdapIodine/style.oa.mjs";
import { header } from "../LdapIodine/header.oa.mjs";
import { chrome } from "../LdapIodine/chrome.oa.mjs";
import { tjhsstStudentId } from "../LdapIodine/tjhsstStudentId.oa.mjs";
import { perm_showpictures } from "../LdapIodine/perm-showpictures.oa.mjs";
import { perm_showaddress } from "../LdapIodine/perm-showaddress.oa.mjs";
import { perm_showtelephone } from "../LdapIodine/perm-showtelephone.oa.mjs";
import { perm_showbirthday } from "../LdapIodine/perm-showbirthday.oa.mjs";
import { perm_showschedule } from "../LdapIodine/perm-showschedule.oa.mjs";
import { perm_showmap } from "../LdapIodine/perm-showmap.oa.mjs";
import { perm_showeighth } from "../LdapIodine/perm-showeighth.oa.mjs";
import { perm_showlocker } from "../LdapIodine/perm-showlocker.oa.mjs";
import { perm_showpictures_self } from "../LdapIodine/perm-showpictures-self.oa.mjs";
import { perm_showaddress_self } from "../LdapIodine/perm-showaddress-self.oa.mjs";
import { perm_showtelephone_self } from "../LdapIodine/perm-showtelephone-self.oa.mjs";
import { perm_showbirthday_self } from "../LdapIodine/perm-showbirthday-self.oa.mjs";
import { perm_showschedule_self } from "../LdapIodine/perm-showschedule-self.oa.mjs";
import { perm_showmap_self } from "../LdapIodine/perm-showmap-self.oa.mjs";
import { perm_showeighth_self } from "../LdapIodine/perm-showeighth-self.oa.mjs";
import { perm_showlocker_self } from "../LdapIodine/perm-showlocker-self.oa.mjs";
import { friend } from "../LdapIodine/friend.oa.mjs";
import { perm_showtelephone_friend } from "../LdapIodine/perm-showtelephone-friend.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { middlename } from "../LdapIodine/middlename.oa.mjs";
import { nickname } from "../LdapIodine/nickname.oa.mjs";
import { boxcolor } from "../LdapIodine/boxcolor.oa.mjs";
import { boxtitlecolor } from "../LdapIodine/boxtitlecolor.oa.mjs";
import { counselor } from "../LdapIodine/counselor.oa.mjs";
import { groupMembership } from "../LdapIodine/groupMembership.oa.mjs";
import { birthday } from "../LdapIodine/birthday.oa.mjs";
import { gender } from "../LdapIodine/gender.oa.mjs";
import { aim } from "../LdapIodine/aim.oa.mjs";
import { xfire } from "../LdapIodine/xfire.oa.mjs";
import { yahoo } from "../LdapIodine/yahoo.oa.mjs";
import { msn } from "../LdapIodine/msn.oa.mjs";
import { jabber } from "../LdapIodine/jabber.oa.mjs";
import { icq } from "../LdapIodine/icq.oa.mjs";
import { googleTalk } from "../LdapIodine/googleTalk.oa.mjs";
import { skype } from "../LdapIodine/skype.oa.mjs";
import { webpage } from "../LdapIodine/webpage.oa.mjs";
import { locker } from "../LdapIodine/locker.oa.mjs";
import { soundexlast } from "../LdapIodine/soundexlast.oa.mjs";
import { soundexfirst } from "../LdapIodine/soundexfirst.oa.mjs";
import { metaphonelast } from "../LdapIodine/metaphonelast.oa.mjs";
import { metaphonefirst } from "../LdapIodine/metaphonefirst.oa.mjs";
import { eighthoffice_comments } from "../LdapIodine/eighthoffice-comments.oa.mjs";
import { preferredPhoto } from "../LdapIodine/preferredPhoto.oa.mjs";
import { enrolledclass } from "../LdapIodine/enrolledclass.oa.mjs";
import { mailentries } from "../LdapIodine/mailentries.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { afsid } from "../LdapIodine/afsid.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { is_student_admin } from "../LdapIodine/is-student-admin.oa.mjs";
import { is_admin } from "../LdapIodine/is-admin.oa.mjs";
import { eighthAgreement } from "../LdapIodine/eighthAgreement.oa.mjs";


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
const tjhsstStudent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ graduationYear, iodineUid, commonName, surname, startpage, iodineUidNumber, style, header, chrome, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ tjhsstStudentId, perm_showpictures, perm_showaddress, perm_showtelephone, perm_showbirthday, perm_showschedule, perm_showmap, perm_showeighth, perm_showlocker, perm_showpictures_self, perm_showaddress_self, perm_showtelephone_self, perm_showbirthday_self, perm_showschedule_self, perm_showmap_self, perm_showeighth_self, perm_showlocker_self, friend, perm_showtelephone_friend, displayName, middlename, nickname, boxcolor, boxtitlecolor, counselor, groupMembership, birthday, gender, aim, xfire, yahoo, msn, jabber, icq, googleTalk, skype, webpage, locker, soundexlast, soundexfirst, metaphonelast, metaphonefirst, eighthoffice_comments, preferredPhoto, enrolledclass, mailentries, gidNumber, afsid, homeDirectory, loginShell, is_student_admin, is_admin, eighthAgreement, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tjhsstStudent" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tjhsstStudent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

