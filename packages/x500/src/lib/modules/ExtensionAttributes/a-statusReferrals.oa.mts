/* eslint-disable */
import { statusReferrals } from "../CertificateExtensions/statusReferrals.oa.mjs";
import { id_asx_statusReferrals } from "../ExtensionAttributes/id-asx-statusReferrals.va.mjs";
import { id_ce_a_statusReferrals } from "../ExtensionAttributes/id-ce-a-statusReferrals.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_statusReferrals */
/**
 * @summary a_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-statusReferrals ATTRIBUTE ::= {
 *   WITH SYNTAX       statusReferrals.&ExtnType
 *   LDAP-SYNTAX       id-asx-statusReferrals
 *   LDAP-NAME         {"Status Referrals"}
 *   ID                id-ce-a-statusReferrals}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof statusReferrals["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof statusReferrals["&ExtnType"]>}
 */
export const a_statusReferrals: ATTRIBUTE<
    typeof statusReferrals["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": statusReferrals.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": statusReferrals.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_statusReferrals /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_statusReferrals */

/* eslint-enable */
