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
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { tcg_at_tpmVersion } from "../EKCredentialProfileV2/tcg-at-tpmVersion.va.mjs";
// export { tcg_at_tpmVersion } from "../EKCredentialProfileV2/tcg-at-tpmVersion.va.mjs";


/**
 * @summary tpmVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tpmVersion ATTRIBUTE ::= {
 *     WITH SYNTAX     UTF8String (SIZE (1..strmax))
 *     ID              tcg-at-tpmVersion
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UTF8String>}
 * @implements {ATTRIBUTE<UTF8String>}
 */
export
const tpmVersion: ATTRIBUTE<UTF8String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": (el: _Element): UTF8String => {
            const value = $._decodeUTF8String(el);
            if (value.length < 1 || value.length > strmax) {
                throw new ASN1SizeError("tpmVersion.&Type violates SIZE (1..strmax)");
            }
            return value;
        },
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": tcg_at_tpmVersion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
