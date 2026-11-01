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
import { id_at_fipsPlaceNumericCode } from "../LdapSchema2ldifNadf/id-at-fipsPlaceNumericCode.va.mjs";


/**
 * @summary fipsPlaceNumericCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsPlaceNumericCode ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..5))
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"fipsPlaceNumericCode", "fips55"}
 *   ID                        id-at-fipsPlaceNumericCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
const _decode_fipsPlaceNumericCode_Type = (el: _Element): NumericString => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("fipsPlaceNumericCode violates SIZE constraint");
    }
    return value;
};

export
const fipsPlaceNumericCode: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_fipsPlaceNumericCode_Type,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fipsPlaceNumericCode", "fips55" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_fipsPlaceNumericCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

