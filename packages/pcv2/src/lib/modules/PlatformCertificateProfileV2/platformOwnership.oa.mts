/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PlatformOwnership, _decode_PlatformOwnership, _encode_PlatformOwnership } from "../PlatformCertificateProfileV2/PlatformOwnership.ta.mjs";
import { tcg_at_platformOwnership } from "../PlatformCertificateProfileV2/tcg-at-platformOwnership.va.mjs";


/**
 * @summary platformOwnership
 * @description
 *
 * Attribute that carries `PlatformOwnership`. Optional.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.21.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformOwnership ATTRIBUTE ::= {
 *     WITH SYNTAX     PlatformOwnership
 *     ID              tcg-at-platformOwnership
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PlatformOwnership>}
 * @implements {ATTRIBUTE<PlatformOwnership>}
 */
export
const platformOwnership: ATTRIBUTE<PlatformOwnership> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PlatformOwnership,
    },
    encoderFor: {
        "&Type": _encode_PlatformOwnership,
    },
    "&id": tcg_at_platformOwnership /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
