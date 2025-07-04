/* eslint-disable */
import { targetingInformation } from "../AttributeCertificateDefinitions/targetingInformation.oa.mjs";
import { id_asx_targetingInformation } from "../ExtensionAttributes/id-asx-targetingInformation.va.mjs";
import { id_ce_a_targetingInformation } from "../ExtensionAttributes/id-ce-a-targetingInformation.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-targetingInformation ATTRIBUTE ::= {
 *   WITH SYNTAX       targetingInformation.&ExtnType
 *   LDAP-SYNTAX       id-asx-targetingInformation
 *   LDAP-NAME         {"Targeting information"}
 *   ID                id-ce-a-targetingInformation}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof targetingInformation["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof targetingInformation["&ExtnType"]>}
 */
export const a_targetingInformation: ATTRIBUTE<
    typeof targetingInformation["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": targetingInformation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": targetingInformation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_targetingInformation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
