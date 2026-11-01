/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_nswcalUser } from "../LdapNsWcal/id-oc-nswcalUser.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { nswcalCALID } from "../LdapNsWcal/nswcalCALID.oa.mjs";
import { nswcalDisallowAccess } from "../LdapNsWcal/nswcalDisallowAccess.oa.mjs";
import { nswcalExtendedUserPrefs } from "../LdapNsWcal/nswcalExtendedUserPrefs.oa.mjs";
import { nsLicensedFor } from "../LdapCommon389/nsLicensedFor.oa.mjs";
import { nswcalHost } from "../LdapNsWcal/nswcalHost.oa.mjs";
import { nswcalQuota } from "../LdapNsWcal/nswcalQuota.oa.mjs";
/**
 * @summary nswcalUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nswcalUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | mail
 *                               | preferredLanguage
 *                               | surname
 *                               | uid
 *                               | userPassword
 *                               | nswcalCALID
 *                               | nswcalDisallowAccess
 *                               | nswcalExtendedUserPrefs
 *                               | nsLicensedFor
 *                               | nswcalHost
 *                               | nswcalQuota }
 *   LDAP-NAME                 {"nswcalUser"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nswcalUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nswcalUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, givenName, mail, preferredLanguage, surname, uid, userPassword, nswcalCALID, nswcalDisallowAccess, nswcalExtendedUserPrefs, nsLicensedFor, nswcalHost, nswcalQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nswcalUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nswcalUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
