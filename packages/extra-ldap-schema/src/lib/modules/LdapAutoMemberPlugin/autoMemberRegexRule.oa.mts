/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_autoMemberRegexRule } from "../LdapAutoMemberPlugin/id-oc-autoMemberRegexRule.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { autoMemberExclusiveRegex } from "./autoMemberExclusiveRegex.oa.mjs";
import { autoMemberInclusiveRegex } from "./autoMemberInclusiveRegex.oa.mjs";
import { autoMemberTargetGroup } from "./autoMemberTargetGroup.oa.mjs";

/**
 * @summary autoMemberRegexRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * autoMemberRegexRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | autoMemberTargetGroup }
 *   MAY CONTAIN               { autoMemberExclusiveRegex
 *                               | autoMemberInclusiveRegex
 *                               | description }
 *   LDAP-NAME                 {"autoMemberRegexRule"}
 *   LDAP-DESC                 "Auto Membership Regex Rule Entry"
 *   ID                        id-oc-autoMemberRegexRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const autoMemberRegexRule: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, autoMemberTargetGroup] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [autoMemberExclusiveRegex, autoMemberInclusiveRegex, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["autoMemberRegexRule"],
    "&ldapDesc": "Auto Membership Regex Rule Entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_autoMemberRegexRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
