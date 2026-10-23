/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PlatformIdentifier, _decode_PlatformIdentifier, _encode_PlatformIdentifier } from "../PlatformCertificateProfileV2/PlatformIdentifier.ta.mjs";
import { tcg_at_platformIdentifier } from "../PlatformCertificateProfileV2/tcg-at-platformIdentifier.va.mjs";


/**
 * @summary platformIdentifier
 * @description
 *
 * Attribute binding for `PlatformIdentifier`, identifier
 * `tcg-at-platformIdentifier`. The profile places that same identifier and
 * value in `subjectAltName` as an `OtherName`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformIdentifier ATTRIBUTE ::= {
 *     WITH SYNTAX     PlatformIdentifier
 *     ID              tcg-at-platformIdentifier
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PlatformIdentifier>}
 * @implements {ATTRIBUTE<PlatformIdentifier>}
 */
export
const platformIdentifier: ATTRIBUTE<PlatformIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PlatformIdentifier,
    },
    encoderFor: {
        "&Type": _encode_PlatformIdentifier,
    },
    "&id": tcg_at_platformIdentifier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
