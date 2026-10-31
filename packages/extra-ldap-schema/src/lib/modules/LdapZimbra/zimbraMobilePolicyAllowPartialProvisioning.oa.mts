/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraMobilePolicyAllowPartialProvisioning } from "../LdapZimbra/id-at-zimbraMobilePolicyAllowPartialProvisioning.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraMobilePolicyAllowPartialProvisioning
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyAllowPartialProvisioning ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyAllowPartialProvisioning"}
 *   LDAP-DESC                 "whether to allow partial policy enforcement on device; ignored if zimbraFeatureMobilePolicyEnabled=FALSE"
 *   ID                        id-at-zimbraMobilePolicyAllowPartialProvisioning }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraMobilePolicyAllowPartialProvisioning: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMobilePolicyAllowPartialProvisioning"],
    "&ldapDesc": "whether to allow partial policy enforcement on device; ignored if zimbraFeatureMobilePolicyEnabled=FALSE" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyAllowPartialProvisioning /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
