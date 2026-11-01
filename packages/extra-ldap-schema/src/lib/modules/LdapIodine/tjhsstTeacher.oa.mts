/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_tjhsstTeacher } from "../LdapIodine/id-oc-tjhsstTeacher.va.mjs";

import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { middlename } from "../LdapIodine/middlename.oa.mjs";
import { groupMembership } from "../LdapIodine/groupMembership.oa.mjs";
import { nickname } from "../LdapIodine/nickname.oa.mjs";
import { birthday } from "../LdapIodine/birthday.oa.mjs";
import { gender } from "../LdapIodine/gender.oa.mjs";
import { webpage } from "../LdapIodine/webpage.oa.mjs";
import { header } from "../LdapIodine/header.oa.mjs";
import { style } from "../LdapIodine/style.oa.mjs";
import { chrome } from "../LdapIodine/chrome.oa.mjs";
import { eighthoffice_comments } from "../LdapIodine/eighthoffice-comments.oa.mjs";
import { boxcolor } from "../LdapIodine/boxcolor.oa.mjs";
import { boxtitlecolor } from "../LdapIodine/boxtitlecolor.oa.mjs";
import { counselor } from "../LdapIodine/counselor.oa.mjs";
import { soundexlast } from "../LdapIodine/soundexlast.oa.mjs";
import { soundexfirst } from "../LdapIodine/soundexfirst.oa.mjs";
import { metaphonelast } from "../LdapIodine/metaphonelast.oa.mjs";
import { metaphonefirst } from "../LdapIodine/metaphonefirst.oa.mjs";
import { aim } from "../LdapIodine/aim.oa.mjs";
import { msn } from "../LdapIodine/msn.oa.mjs";
import { xfire } from "../LdapIodine/xfire.oa.mjs";
import { yahoo } from "../LdapIodine/yahoo.oa.mjs";
import { googleTalk } from "../LdapIodine/googleTalk.oa.mjs";
import { icq } from "../LdapIodine/icq.oa.mjs";
import { jabber } from "../LdapIodine/jabber.oa.mjs";
import { skype } from "../LdapIodine/skype.oa.mjs";
import { preferredPhoto } from "../LdapIodine/preferredPhoto.oa.mjs";
import { mailentries } from "../LdapIodine/mailentries.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { afsid } from "../LdapIodine/afsid.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { perm_showaddress_self } from "../LdapIodine/perm-showaddress-self.oa.mjs";
import { perm_showtelephone_self } from "../LdapIodine/perm-showtelephone-self.oa.mjs";
import { perm_showbirthday_self } from "../LdapIodine/perm-showbirthday-self.oa.mjs";
import { perm_showpictures_self } from "../LdapIodine/perm-showpictures-self.oa.mjs";
import { perm_showaddress } from "../LdapIodine/perm-showaddress.oa.mjs";
import { perm_showtelephone } from "../LdapIodine/perm-showtelephone.oa.mjs";
import { perm_showbirthday } from "../LdapIodine/perm-showbirthday.oa.mjs";
import { perm_showpictures } from "../LdapIodine/perm-showpictures.oa.mjs";
import { is_admin } from "../LdapIodine/is-admin.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { iodineUid } from "../LdapIodine/iodineUid.oa.mjs";
import { startpage } from "../LdapIodine/startpage.oa.mjs";
import { iodineUidNumber } from "../LdapIodine/iodineUidNumber.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
/**
 * @summary tjhsstTeacher
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstTeacher OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { commonName
 *                               | iodineUid
 *                               | header
 *                               | style
 *                               | chrome
 *                               | startpage
 *                               | iodineUidNumber
 *                               | surname }
 *   MAY CONTAIN               { employeeNumber
 *                               | displayName
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
 *   LDAP-NAME                 {"tjhsstTeacher"}
 *   ID                        id-oc-tjhsstTeacher }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstTeacher: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, iodineUid, header, style, chrome, startpage, iodineUidNumber, surname, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ employeeNumber, displayName, middlename, groupMembership, nickname, birthday, gender, webpage, header, style, chrome, eighthoffice_comments, boxcolor, boxtitlecolor, counselor, soundexlast, soundexfirst, metaphonelast, metaphonefirst, aim, msn, xfire, yahoo, googleTalk, icq, jabber, xfire, skype, preferredPhoto, mailentries, gidNumber, afsid, homeDirectory, loginShell, perm_showaddress_self, perm_showtelephone_self, perm_showbirthday_self, perm_showpictures_self, perm_showaddress, perm_showtelephone, perm_showbirthday, perm_showpictures, is_admin, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tjhsstTeacher" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tjhsstTeacher /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
