/* eslint-disable */
import { PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
/**
 * @summary urnC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnC ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"urnC"}
 *   ID                       id-at-urnC }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const urnC: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["urnC"],
    "&id": id_at_urnC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
