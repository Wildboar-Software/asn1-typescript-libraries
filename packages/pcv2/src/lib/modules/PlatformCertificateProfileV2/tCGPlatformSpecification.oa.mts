/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TCGPlatformSpecification, _decode_TCGPlatformSpecification, _encode_TCGPlatformSpecification } from "../PlatformCertificateProfileV2/TCGPlatformSpecification.ta.mjs";
// export { TCGPlatformSpecification, _decode_TCGPlatformSpecification, _encode_TCGPlatformSpecification } from "../PlatformCertificateProfileV2/TCGPlatformSpecification.ta.mjs";
import { tcg_at_tcgPlatformSpecification } from "../PlatformCertificateProfileV2/tcg-at-tcgPlatformSpecification.va.mjs";
// export { tcg_at_tcgPlatformSpecification } from "../PlatformCertificateProfileV2/tcg-at-tcgPlatformSpecification.va.mjs";


/**
 * @summary tCGPlatformSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tCGPlatformSpecification ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGPlatformSpecification
 *     ID              tcg-at-tcgPlatformSpecification
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TCGPlatformSpecification>}
 * @implements {ATTRIBUTE<TCGPlatformSpecification>}
 */
export
const tCGPlatformSpecification: ATTRIBUTE<TCGPlatformSpecification> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGPlatformSpecification,
    },
    encoderFor: {
        "&Type": _encode_TCGPlatformSpecification,
    },
    "&id": tcg_at_tcgPlatformSpecification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
