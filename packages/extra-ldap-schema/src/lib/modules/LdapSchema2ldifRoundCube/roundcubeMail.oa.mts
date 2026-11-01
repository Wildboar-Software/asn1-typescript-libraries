/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_roundcubeMail } from "../LdapSchema2ldifRoundCube/id-oc-roundcubeMail.va.mjs";

import { rcNickname } from "../LdapSchema2ldifRoundCube/rcNickname.oa.mjs";
import { rcBirthday } from "../LdapSchema2ldifRoundCube/rcBirthday.oa.mjs";
import { rcGender } from "../LdapSchema2ldifRoundCube/rcGender.oa.mjs";
import { rcHomeMail } from "../LdapSchema2ldifRoundCube/rcHomeMail.oa.mjs";
import { rcWorkMail } from "../LdapSchema2ldifRoundCube/rcWorkMail.oa.mjs";
import { rcHomeFax } from "../LdapSchema2ldifRoundCube/rcHomeFax.oa.mjs";
import { rcWorkFax } from "../LdapSchema2ldifRoundCube/rcWorkFax.oa.mjs";
import { rcHomeURL } from "../LdapSchema2ldifRoundCube/rcHomeURL.oa.mjs";
import { rcWorkURL } from "../LdapSchema2ldifRoundCube/rcWorkURL.oa.mjs";
import { rcBlogURL } from "../LdapSchema2ldifRoundCube/rcBlogURL.oa.mjs";
import { rcProfileURL } from "../LdapSchema2ldifRoundCube/rcProfileURL.oa.mjs";
import { rcSkype } from "../LdapSchema2ldifRoundCube/rcSkype.oa.mjs";
import { rcJabber } from "../LdapSchema2ldifRoundCube/rcJabber.oa.mjs";
import { rcAIM } from "../LdapSchema2ldifRoundCube/rcAIM.oa.mjs";
import { rcICQ } from "../LdapSchema2ldifRoundCube/rcICQ.oa.mjs";
import { rcRegion } from "../LdapSchema2ldifRoundCube/rcRegion.oa.mjs";
import { rcCountry } from "../LdapSchema2ldifRoundCube/rcCountry.oa.mjs";
import { rcManager } from "../LdapSchema2ldifRoundCube/rcManager.oa.mjs";
import { rcAssistant } from "../LdapSchema2ldifRoundCube/rcAssistant.oa.mjs";
/**
 * @summary roundcubeMail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roundcubeMail OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rcNickname
 *                               | rcBirthday
 *                               | rcGender
 *                               | rcHomeMail
 *                               | rcWorkMail
 *                               | rcHomeFax
 *                               | rcWorkFax
 *                               | rcHomeURL
 *                               | rcWorkURL
 *                               | rcBlogURL
 *                               | rcProfileURL
 *                               | rcSkype
 *                               | rcJabber
 *                               | rcAIM
 *                               | rcICQ
 *                               | rcRegion
 *                               | rcCountry
 *                               | rcManager
 *                               | rcAssistant }
 *   LDAP-NAME                 {"RoundcubeMail"}
 *   ID                        id-oc-roundcubeMail }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const roundcubeMail: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rcNickname, rcBirthday, rcGender, rcHomeMail, rcWorkMail, rcHomeFax, rcWorkFax, rcHomeURL, rcWorkURL, rcBlogURL, rcProfileURL, rcSkype, rcJabber, rcAIM, rcICQ, rcRegion, rcCountry, rcManager, rcAssistant, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "RoundcubeMail" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_roundcubeMail /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
