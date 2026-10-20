/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PlatformIdentifier, _decode_PlatformIdentifier, _encode_PlatformIdentifier } from "../PlatformCertificateProfileV2/PlatformIdentifier.ta.mjs";
// export { PlatformIdentifier, _decode_PlatformIdentifier, _encode_PlatformIdentifier } from "../PlatformCertificateProfileV2/PlatformIdentifier.ta.mjs";
import { tcg_at_platformIdentifier } from "../PlatformCertificateProfileV2/tcg-at-platformIdentifier.va.mjs";
// export { tcg_at_platformIdentifier } from "../PlatformCertificateProfileV2/tcg-at-platformIdentifier.va.mjs";


/**
 * @summary platformIdentifier
 * @description
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
