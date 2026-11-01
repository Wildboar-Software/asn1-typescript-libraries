/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_simpleUser } from "../LdapIodine/id-oc-simpleUser.va.mjs";
import { iodineUid } from "../LdapIodine/iodineUid.oa.mjs";
import { iodineUidNumber } from "../LdapIodine/iodineUidNumber.oa.mjs";
import { startpage } from "../LdapIodine/startpage.oa.mjs";
import { style } from "../LdapIodine/style.oa.mjs";
import { chrome } from "../LdapIodine/chrome.oa.mjs";
import { header } from "../LdapIodine/header.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { is_admin } from "../LdapIodine/is-admin.oa.mjs";


/**
 * @summary simpleUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * simpleUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { iodineUid
 *                               | iodineUidNumber }
 *   MAY CONTAIN               { startpage
 *                               | style
 *                               | chrome
 *                               | header
 *                               | startpage
 *                               | givenName
 *                               | surname
 *                               | commonName
 *                               | is-admin }
 *   LDAP-NAME                 {"simpleUser"}
 *   ID                        id-oc-simpleUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const simpleUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ iodineUid, iodineUidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ startpage, style, chrome, header, startpage, givenName, surname, commonName, is_admin, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "simpleUser" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_simpleUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

