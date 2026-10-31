/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_tjhsstStudent } from "../LdapIodine/id-oc-tjhsstStudent.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { afsid } from "./afsid.oa.mjs";
import { aim } from "./aim.oa.mjs";
import { birthday } from "./birthday.oa.mjs";
import { boxcolor } from "./boxcolor.oa.mjs";
import { boxtitlecolor } from "./boxtitlecolor.oa.mjs";
import { chrome } from "./chrome.oa.mjs";
import { counselor } from "./counselor.oa.mjs";
import { eighthAgreement } from "./eighthAgreement.oa.mjs";
import { eighthoffice_comments } from "./eighthoffice-comments.oa.mjs";
import { enrolledclass } from "./enrolledclass.oa.mjs";
import { friend } from "./friend.oa.mjs";
import { gender } from "./gender.oa.mjs";
import { googleTalk } from "./googleTalk.oa.mjs";
import { graduationYear } from "./graduationYear.oa.mjs";
import { groupMembership } from "./groupMembership.oa.mjs";
import { header } from "./header.oa.mjs";
import { icq } from "./icq.oa.mjs";
import { iodineUid } from "./iodineUid.oa.mjs";
import { iodineUidNumber } from "./iodineUidNumber.oa.mjs";
import { is_admin } from "./is-admin.oa.mjs";
import { is_student_admin } from "./is-student-admin.oa.mjs";
import { jabber } from "./jabber.oa.mjs";
import { locker } from "./locker.oa.mjs";
import { mailentries } from "./mailentries.oa.mjs";
import { metaphonefirst } from "./metaphonefirst.oa.mjs";
import { metaphonelast } from "./metaphonelast.oa.mjs";
import { middlename } from "./middlename.oa.mjs";
import { msn } from "./msn.oa.mjs";
import { nickname } from "./nickname.oa.mjs";
import { perm_showaddress_self } from "./perm-showaddress-self.oa.mjs";
import { perm_showaddress } from "./perm-showaddress.oa.mjs";
import { perm_showbirthday_self } from "./perm-showbirthday-self.oa.mjs";
import { perm_showbirthday } from "./perm-showbirthday.oa.mjs";
import { perm_showeighth_self } from "./perm-showeighth-self.oa.mjs";
import { perm_showeighth } from "./perm-showeighth.oa.mjs";
import { perm_showlocker_self } from "./perm-showlocker-self.oa.mjs";
import { perm_showlocker } from "./perm-showlocker.oa.mjs";
import { perm_showmap_self } from "./perm-showmap-self.oa.mjs";
import { perm_showmap } from "./perm-showmap.oa.mjs";
import { perm_showpictures_self } from "./perm-showpictures-self.oa.mjs";
import { perm_showpictures } from "./perm-showpictures.oa.mjs";
import { perm_showschedule_self } from "./perm-showschedule-self.oa.mjs";
import { perm_showschedule } from "./perm-showschedule.oa.mjs";
import { perm_showtelephone_friend } from "./perm-showtelephone-friend.oa.mjs";
import { perm_showtelephone_self } from "./perm-showtelephone-self.oa.mjs";
import { perm_showtelephone } from "./perm-showtelephone.oa.mjs";
import { preferredPhoto } from "./preferredPhoto.oa.mjs";
import { skype } from "./skype.oa.mjs";
import { soundexfirst } from "./soundexfirst.oa.mjs";
import { soundexlast } from "./soundexlast.oa.mjs";
import { startpage } from "./startpage.oa.mjs";
import { style } from "./style.oa.mjs";
import { tjhsstStudentId } from "./tjhsstStudentId.oa.mjs";
import { webpage } from "./webpage.oa.mjs";
import { xfire } from "./xfire.oa.mjs";
import { yahoo } from "./yahoo.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [graduationYear, iodineUid, commonName, surname, startpage, iodineUidNumber, style, header, chrome] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [tjhsstStudentId, perm_showpictures, perm_showaddress, perm_showtelephone, perm_showbirthday, perm_showschedule, perm_showmap, perm_showeighth, perm_showlocker, perm_showpictures_self, perm_showaddress_self, perm_showtelephone_self, perm_showbirthday_self, perm_showschedule_self, perm_showmap_self, perm_showeighth_self, perm_showlocker_self, friend, perm_showtelephone_friend, displayName, middlename, nickname, boxcolor, boxtitlecolor, counselor, groupMembership, birthday, gender, aim, xfire, yahoo, msn, jabber, icq, googleTalk, skype, webpage, locker, soundexlast, soundexfirst, metaphonelast, metaphonefirst, eighthoffice_comments, preferredPhoto, enrolledclass, mailentries, gidNumber, afsid, homeDirectory, loginShell, is_student_admin, is_admin, eighthAgreement] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tjhsstStudent"],
    "&id": id_oc_tjhsstStudent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
