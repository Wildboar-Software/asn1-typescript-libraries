/* eslint-disable */
import {
    type PrintableString,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_fipsStateAlphaCode } from "../LdapSchema2ldifNadf/id-at-fipsStateAlphaCode.va.mjs";


/**
 * @summary fipsStateAlphaCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsStateAlphaCode ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString(SIZE (1..2))
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"fipsStateAlphaCode"}
 *   ID                        id-at-fipsStateAlphaCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
const _decode_fipsStateAlphaCode_Type = (el: _Element): PrintableString => {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > 2) {
        throw new ASN1SizeError("fipsStateAlphaCode violates SIZE constraint");
    }
    return value;
};

export
const fipsStateAlphaCode: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_fipsStateAlphaCode_Type,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fipsStateAlphaCode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_fipsStateAlphaCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

