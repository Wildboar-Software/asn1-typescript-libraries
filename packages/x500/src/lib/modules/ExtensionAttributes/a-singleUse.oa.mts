/* eslint-disable */
import { singleUse } from "../AttributeCertificateDefinitions/singleUse.oa.mjs";
import { id_asx_singleUse } from "../ExtensionAttributes/id-asx-singleUse.va.mjs";
import { id_ce_a_singleUse } from "../ExtensionAttributes/id-ce-a-singleUse.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-singleUse ATTRIBUTE ::= {
 *   WITH SYNTAX       singleUse.&ExtnType
 *   LDAP-SYNTAX       id-asx-singleUse
 *   LDAP-NAME         {"Single use"}
 *   ID                id-ce-a-singleUse}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof singleUse["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof singleUse["&ExtnType"]>}
 */
export const a_singleUse: ATTRIBUTE<typeof singleUse["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": singleUse.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": singleUse.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_singleUse /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_singleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
