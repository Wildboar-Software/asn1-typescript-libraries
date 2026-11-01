/* eslint-disable */
import {
    type NumericString,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_fipsStateNumericCode } from "../LdapSchema2ldifNadf/id-at-fipsStateNumericCode.va.mjs";


/**
 * @summary fipsStateNumericCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsStateNumericCode ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..2))
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"fipsStateNumericCode"}
 *   ID                        id-at-fipsStateNumericCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
const _decode_fipsStateNumericCode_Type = (el: _Element): NumericString => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 2) {
        throw new ASN1SizeError("fipsStateNumericCode violates SIZE constraint");
    }
    return value;
};

export
const fipsStateNumericCode: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_fipsStateNumericCode_Type,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fipsStateNumericCode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_fipsStateNumericCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

