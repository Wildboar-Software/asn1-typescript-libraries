/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PreviousPlatformCertificates, _decode_PreviousPlatformCertificates, _encode_PreviousPlatformCertificates } from "../PlatformCertificateProfileV2/PreviousPlatformCertificates.ta.mjs";
// export { PreviousPlatformCertificates, _decode_PreviousPlatformCertificates, _encode_PreviousPlatformCertificates } from "../PlatformCertificateProfileV2/PreviousPlatformCertificates.ta.mjs";
import { tcg_at_previousPlatformCertificates } from "../PlatformCertificateProfileV2/tcg-at-previousPlatformCertificates.va.mjs";
// export { tcg_at_previousPlatformCertificates } from "../PlatformCertificateProfileV2/tcg-at-previousPlatformCertificates.va.mjs";


/**
 * @summary previousPlatformCertificates
 * @description
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
