/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_roundcubeMail } from "../LdapSchema2ldifRoundCube/id-oc-roundcubeMail.va.mjs";
import { rcAIM } from "./rcAIM.oa.mjs";
import { rcAssistant } from "./rcAssistant.oa.mjs";
import { rcBirthday } from "./rcBirthday.oa.mjs";
import { rcBlogURL } from "./rcBlogURL.oa.mjs";
import { rcCountry } from "./rcCountry.oa.mjs";
import { rcGender } from "./rcGender.oa.mjs";
import { rcHomeFax } from "./rcHomeFax.oa.mjs";
import { rcHomeMail } from "./rcHomeMail.oa.mjs";
import { rcHomeURL } from "./rcHomeURL.oa.mjs";
import { rcICQ } from "./rcICQ.oa.mjs";
import { rcJabber } from "./rcJabber.oa.mjs";
import { rcManager } from "./rcManager.oa.mjs";
import { rcNickname } from "./rcNickname.oa.mjs";
import { rcProfileURL } from "./rcProfileURL.oa.mjs";
import { rcRegion } from "./rcRegion.oa.mjs";
import { rcSkype } from "./rcSkype.oa.mjs";
import { rcWorkFax } from "./rcWorkFax.oa.mjs";
import { rcWorkMail } from "./rcWorkMail.oa.mjs";
import { rcWorkURL } from "./rcWorkURL.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rcNickname, rcBirthday, rcGender, rcHomeMail, rcWorkMail, rcHomeFax, rcWorkFax, rcHomeURL, rcWorkURL, rcBlogURL, rcProfileURL, rcSkype, rcJabber, rcAIM, rcICQ, rcRegion, rcCountry, rcManager, rcAssistant] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["RoundcubeMail"],
    "&id": id_oc_roundcubeMail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
