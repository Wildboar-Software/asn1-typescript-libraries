/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
import { id_oc_inetMailGroupManagement } from "../Ldapmigration56imsSchema/id-oc-inetMailGroupManagement.va.mjs";
import { mgmanAllowSubscribe } from "./mgmanAllowSubscribe.oa.mjs";
import { mgmanDenySubscribe } from "./mgmanDenySubscribe.oa.mjs";
import { mgmanGoodbyeText } from "./mgmanGoodbyeText.oa.mjs";
import { mgmanHidden } from "./mgmanHidden.oa.mjs";
import { mgmanIntroText } from "./mgmanIntroText.oa.mjs";
import { mgmanJoinability } from "./mgmanJoinability.oa.mjs";
import { mgmanMemberVisibility } from "./mgmanMemberVisibility.oa.mjs";
import { mgmanVisibility } from "./mgmanVisibility.oa.mjs";

/**
 * @summary inetMailGroupManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailGroupManagement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mgmanAllowSubscribe
 *                               | mgmanDenySubscribe
 *                               | mgmanHidden
 *                               | mgmanJoinability
 *                               | mgmanVisibility
 *                               | mgmanMemberVisibility
 *                               | mgmanIntroText
 *                               | mgmanGoodbyeText
 *                               | multiLineDescription }
 *   LDAP-NAME                 {"inetMailGroupManagement"}
 *   LDAP-DESC                 "auxiliary class for managed mailing lists"
 *   ID                        id-oc-inetMailGroupManagement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailGroupManagement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mgmanAllowSubscribe, mgmanDenySubscribe, mgmanHidden, mgmanJoinability, mgmanVisibility, mgmanMemberVisibility, mgmanIntroText, mgmanGoodbyeText, multiLineDescription] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetMailGroupManagement"],
    "&ldapDesc": "auxiliary class for managed mailing lists" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailGroupManagement /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
