/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PlatformOwnership, _decode_PlatformOwnership, _encode_PlatformOwnership } from "../PlatformCertificateProfileV2/PlatformOwnership.ta.mjs";
// export { PlatformOwnership, _decode_PlatformOwnership, _encode_PlatformOwnership } from "../PlatformCertificateProfileV2/PlatformOwnership.ta.mjs";
import { tcg_at_platformOwnership } from "../PlatformCertificateProfileV2/tcg-at-platformOwnership.va.mjs";
// export { tcg_at_platformOwnership } from "../PlatformCertificateProfileV2/tcg-at-platformOwnership.va.mjs";


/**
 * @summary platformOwnership
 * @description
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
