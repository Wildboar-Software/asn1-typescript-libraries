/* eslint-disable */
import { protRestrict } from "../CertificateExtensions/protRestrict.oa.mjs";
import { id_asx_protRestrict } from "../ExtensionAttributes/id-asx-protRestrict.va.mjs";
import { id_ce_a_protRestrict } from "../ExtensionAttributes/id-ce-a-protRestrict.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-protRestrict ATTRIBUTE ::= {
 *   WITH SYNTAX       protRestrict.&ExtnType
 *   LDAP-SYNTAX       id-asx-protRestrict
 *   LDAP-NAME         {"Protocol restriction"}
 *   ID                id-ce-a-protRestrict}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof protRestrict["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof protRestrict["&ExtnType"]>}
 */
export const a_protRestrict: ATTRIBUTE<typeof protRestrict["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": protRestrict.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": protRestrict.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_protRestrict /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
