/* eslint-disable */
import { groupAC } from "../AttributeCertificateDefinitions/groupAC.oa.mjs";
import { id_asx_groupAC } from "../ExtensionAttributes/id-asx-groupAC.va.mjs";
import { id_ce_a_groupAC } from "../ExtensionAttributes/id-ce-a-groupAC.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-groupAC ATTRIBUTE ::= {
 *   WITH SYNTAX       groupAC.&ExtnType
 *   LDAP-SYNTAX       id-asx-groupAC
 *   LDAP-NAME         {"Group attribute certificate"}
 *   ID                id-ce-a-groupAC}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof groupAC["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof groupAC["&ExtnType"]>}
 */
export const a_groupAC: ATTRIBUTE<typeof groupAC["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": groupAC.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": groupAC.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_groupAC /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
