/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PreviousPlatformCertificates, _decode_PreviousPlatformCertificates, _encode_PreviousPlatformCertificates } from "../PlatformCertificateProfileV2/PreviousPlatformCertificates.ta.mjs";
import { tcg_at_previousPlatformCertificates } from "../PlatformCertificateProfileV2/tcg-at-previousPlatformCertificates.va.mjs";


/**
 * @summary previousPlatformCertificates
 * @description
 *
 * Attribute that carries `PreviousPlatformCertificates`. Present when this
 * certificate references an earlier one, and required on a delta certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * previousPlatformCertificates ATTRIBUTE ::= {
 *     WITH SYNTAX     PreviousPlatformCertificates
 *     ID              tcg-at-previousPlatformCertificates
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PreviousPlatformCertificates>}
 * @implements {ATTRIBUTE<PreviousPlatformCertificates>}
 */
export
const previousPlatformCertificates: ATTRIBUTE<PreviousPlatformCertificates> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PreviousPlatformCertificates,
    },
    encoderFor: {
        "&Type": _encode_PreviousPlatformCertificates,
    },
    "&id": tcg_at_previousPlatformCertificates /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
