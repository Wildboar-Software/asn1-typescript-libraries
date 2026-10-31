/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_tjStarPresenter } from "../LdapIodine/id-oc-tjStarPresenter.va.mjs";
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
import { eighthoffice_comments } from "./eighthoffice-comments.oa.mjs";
import { gender } from "./gender.oa.mjs";
import { googleTalk } from "./googleTalk.oa.mjs";
import { groupMembership } from "./groupMembership.oa.mjs";
import { header } from "./header.oa.mjs";
import { icq } from "./icq.oa.mjs";
import { iodineUid } from "./iodineUid.oa.mjs";
import { iodineUidNumber } from "./iodineUidNumber.oa.mjs";
import { is_admin } from "./is-admin.oa.mjs";
import { jabber } from "./jabber.oa.mjs";
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
import { perm_showpictures_self } from "./perm-showpictures-self.oa.mjs";
import { perm_showpictures } from "./perm-showpictures.oa.mjs";
import { perm_showtelephone_self } from "./perm-showtelephone-self.oa.mjs";
import { perm_showtelephone } from "./perm-showtelephone.oa.mjs";
import { preferredPhoto } from "./preferredPhoto.oa.mjs";
import { skype } from "./skype.oa.mjs";
import { soundexfirst } from "./soundexfirst.oa.mjs";
import { soundexlast } from "./soundexlast.oa.mjs";
import { startpage } from "./startpage.oa.mjs";
import { style } from "./style.oa.mjs";
import { webpage } from "./webpage.oa.mjs";
import { xfire } from "./xfire.oa.mjs";
import { yahoo } from "./yahoo.oa.mjs";

/**
 * @summary tjStarPresenter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjStarPresenter OBJECT-CLASS ::= {
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
 *   LDAP-NAME                 {"tjStarPresenter"}
 *   ID                        id-oc-tjStarPresenter }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjStarPresenter: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, iodineUid, header, style, chrome, startpage, iodineUidNumber, userPassword, surname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [displayName, middlename, groupMembership, nickname, birthday, gender, webpage, header, style, chrome, eighthoffice_comments, boxcolor, boxtitlecolor, counselor, soundexlast, soundexfirst, metaphonelast, metaphonefirst, aim, msn, xfire, yahoo, googleTalk, icq, jabber, xfire, skype, preferredPhoto, mailentries, gidNumber, afsid, homeDirectory, loginShell, perm_showaddress_self, perm_showtelephone_self, perm_showbirthday_self, perm_showpictures_self, perm_showaddress, perm_showtelephone, perm_showbirthday, perm_showpictures, is_admin] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tjStarPresenter"],
    "&id": id_oc_tjStarPresenter /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
