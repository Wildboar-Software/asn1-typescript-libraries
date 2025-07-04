/* eslint-disable */
import { userNotice } from "../AttributeCertificateDefinitions/userNotice.oa.mjs";
import { id_asx_userNotice } from "../ExtensionAttributes/id-asx-userNotice.va.mjs";
import { id_ce_a_userNotice } from "../ExtensionAttributes/id-ce-a-userNotice.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-userNotice ATTRIBUTE ::= {
 *   WITH SYNTAX       userNotice.&ExtnType
 *   LDAP-SYNTAX       id-asx-userNotice
 *   LDAP-NAME         {"User notice"}
 *   ID                id-ce-a-userNotice}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof userNotice["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof userNotice["&ExtnType"]>}
 */
export const a_userNotice: ATTRIBUTE<typeof userNotice["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": userNotice.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": userNotice.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_userNotice /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
