/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PlatformConfiguration_v3, _decode_PlatformConfiguration_v3, _encode_PlatformConfiguration_v3 } from "../PlatformCertificateProfileV2/PlatformConfiguration-v3.ta.mjs";
import { tcg_at_platformConfiguration_v3 } from "../PlatformCertificateProfileV2/tcg-at-platformConfiguration-v3.va.mjs";


/**
 * @summary platformConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformConfiguration ATTRIBUTE ::= {
 *     WITH SYNTAX     PlatformConfiguration-v3
 *     ID              tcg-at-platformConfiguration-v3
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PlatformConfiguration_v3>}
 * @implements {ATTRIBUTE<PlatformConfiguration_v3>}
 */
export
const platformConfiguration: ATTRIBUTE<PlatformConfiguration_v3> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PlatformConfiguration_v3,
    },
    encoderFor: {
        "&Type": _encode_PlatformConfiguration_v3,
    },
    "&id": tcg_at_platformConfiguration_v3 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
