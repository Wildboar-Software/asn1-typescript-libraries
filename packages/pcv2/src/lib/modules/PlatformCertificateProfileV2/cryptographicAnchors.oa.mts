/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { CryptographicAnchors, _decode_CryptographicAnchors, _encode_CryptographicAnchors } from "../PlatformCertificateProfileV2/CryptographicAnchors.ta.mjs";
import { tcg_at_cryptographicAnchors } from "../PlatformCertificateProfileV2/tcg-at-cryptographicAnchors.va.mjs";


/**
 * @summary cryptographicAnchors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cryptographicAnchors ATTRIBUTE ::= {
 *     WITH SYNTAX     CryptographicAnchors
 *     ID              tcg-at-cryptographicAnchors
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CryptographicAnchors>}
 * @implements {ATTRIBUTE<CryptographicAnchors>}
 */
export
const cryptographicAnchors: ATTRIBUTE<CryptographicAnchors> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CryptographicAnchors,
    },
    encoderFor: {
        "&Type": _encode_CryptographicAnchors,
    },
    "&id": tcg_at_cryptographicAnchors /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
