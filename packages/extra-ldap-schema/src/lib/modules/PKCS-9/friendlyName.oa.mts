/* eslint-disable */
import {
    type BMPString,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import { pkcs_9_ub_friendlyName } from "../PKCS-9/pkcs-9-ub-friendlyName.va.mjs";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { pkcs_9_at_friendlyName } from "../PKCS-9/pkcs-9-at-friendlyName.va.mjs";


/**
 * @summary friendlyName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * friendlyName ATTRIBUTE ::= {
 *         WITH SYNTAX BMPString (SIZE(1..pkcs-9-ub-friendlyName))
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-friendlyName
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BMPString>}
 * @implements {ATTRIBUTE<BMPString>}
 */
const _decode_friendlyName_Type = (el: _Element): BMPString => {
    const value = $._decodeBMPString(el);
    if (value.length < 1 || (typeof pkcs_9_ub_friendlyName === "bigint" ? BigInt(value.length) > pkcs_9_ub_friendlyName : value.length > pkcs_9_ub_friendlyName)) {
        throw new ASN1SizeError("friendlyName violates SIZE constraint");
    }
    return value;
};

export
const friendlyName: ATTRIBUTE<BMPString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_friendlyName_Type,
    },
    encoderFor: {
        "&Type": $._encodeBMPString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_friendlyName /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

