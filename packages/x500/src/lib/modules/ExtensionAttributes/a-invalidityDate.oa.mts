/* eslint-disable */
import { invalidityDate } from "../CertificateExtensions/invalidityDate.oa.mjs";
import { id_asx_invalidityDate } from "../ExtensionAttributes/id-asx-invalidityDate.va.mjs";
import { id_ce_a_invalidityDate } from "../ExtensionAttributes/id-ce-a-invalidityDate.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-invalidityDate ATTRIBUTE ::= {
 *   WITH SYNTAX       invalidityDate.&ExtnType
 *   LDAP-SYNTAX       id-asx-invalidityDate
 *   LDAP-NAME         {"Invalidity date"}
 *   ID                id-ce-a-invalidityDate}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof invalidityDate["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof invalidityDate["&ExtnType"]>}
 */
export const a_invalidityDate: ATTRIBUTE<typeof invalidityDate["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": invalidityDate.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": invalidityDate.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_invalidityDate /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_invalidityDate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
