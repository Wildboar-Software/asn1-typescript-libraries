/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { certstrmax } from "../PlatformCertificateProfileV2/certstrmax.va.mjs";
import { tcg_tr_ID_PEMCertString } from "../PlatformCertificateProfileV2/tcg-tr-ID-PEMCertString.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary pemCertStringTrait
 * @description
 *
 * Trait syntax for a PEM-encoded certificate (RFC 7468) stored as UTF-8, length
 * 1..`certstrmax`. Category `tcg-tr-cat-PEMCertificate`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.20.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pemCertStringTrait TRAIT ::= {
 *     SYNTAX          UTF8String (SIZE (1..certstrmax))
 *     IDENTIFIED BY   tcg-tr-ID-PEMCertString
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<UTF8String>}
 * @implements {TRAIT<UTF8String>}
 */
export
const pemCertStringTrait: TRAIT<UTF8String> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": (el: _Element): UTF8String => {
            const value = $._decodeUTF8String(el);
            if (value.length < 1 || value.length > certstrmax) {
                throw new ASN1SizeError("pemCertStringTrait.&TraitValueType violates SIZE (1..certstrmax)");
            }
            return value;
        },
    },
    encoderFor: {
        "&TraitValueType": $._encodeUTF8String,
    },
    "&id": tcg_tr_ID_PEMCertString /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
