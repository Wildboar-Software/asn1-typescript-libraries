/* eslint-disable */
import { revokedGroups } from "../CertificateExtensions/revokedGroups.oa.mjs";
import { id_asx_revokedGroups } from "../ExtensionAttributes/id-asx-revokedGroups.va.mjs";
import { id_ce_a_revokedGroups } from "../ExtensionAttributes/id-ce-a-revokedGroups.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_revokedGroups */
/**
 * @summary a_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-revokedGroups ATTRIBUTE ::= {
 *   WITH SYNTAX       revokedGroups.&ExtnType
 *   LDAP-SYNTAX       id-asx-revokedGroups
 *   LDAP-NAME         {"Revoked group of certificates"}
 *   ID                id-ce-a-revokedGroups}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof revokedGroups["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof revokedGroups["&ExtnType"]>}
 */
export const a_revokedGroups: ATTRIBUTE<typeof revokedGroups["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": revokedGroups.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": revokedGroups.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_revokedGroups /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_revokedGroups /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_revokedGroups */

/* eslint-enable */
