/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../EKCredentialProfileV2/strmax.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { tcg_at_tpmManufacturer } from "../EKCredentialProfileV2/tcg-at-tpmManufacturer.va.mjs";


/**
 * @summary tpmManufacturer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tpmManufacturer ATTRIBUTE ::= {
 *     WITH SYNTAX     UTF8String (SIZE (1..strmax))
 *     ID              tcg-at-tpmManufacturer
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UTF8String>}
 * @implements {ATTRIBUTE<UTF8String>}
 */
export
const tpmManufacturer: ATTRIBUTE<UTF8String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": (el: _Element): UTF8String => {
            const value = $._decodeUTF8String(el);
            if (value.length < 1 || value.length > strmax) {
                throw new ASN1SizeError("tpmManufacturer.&Type violates SIZE (1..strmax)");
            }
            return value;
        },
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": tcg_at_tpmManufacturer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
