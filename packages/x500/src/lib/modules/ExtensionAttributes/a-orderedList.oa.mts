/* eslint-disable */
import { orderedList } from "../CertificateExtensions/orderedList.oa.mjs";
import { id_asx_orderedList } from "../ExtensionAttributes/id-asx-orderedList.va.mjs";
import { id_ce_a_orderedList } from "../ExtensionAttributes/id-ce-a-orderedList.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_orderedList */
/**
 * @summary a_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-orderedList ATTRIBUTE ::= {
 *   WITH SYNTAX       orderedList.&ExtnType
 *   LDAP-SYNTAX       id-asx-orderedList
 *   LDAP-NAME         {"Ordered list"}
 *   ID                id-ce-a-orderedList}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof orderedList["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof orderedList["&ExtnType"]>}
 */
export const a_orderedList: ATTRIBUTE<typeof orderedList["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": orderedList.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": orderedList.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_orderedList /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_orderedList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_orderedList */

/* eslint-enable */
