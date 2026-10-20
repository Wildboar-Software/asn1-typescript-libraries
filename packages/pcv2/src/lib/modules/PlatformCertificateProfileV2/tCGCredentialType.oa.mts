/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TCGCredentialType, _decode_TCGCredentialType, _encode_TCGCredentialType } from "../PlatformCertificateProfileV2/TCGCredentialType.ta.mjs";
// export { TCGCredentialType, _decode_TCGCredentialType, _encode_TCGCredentialType } from "../PlatformCertificateProfileV2/TCGCredentialType.ta.mjs";
import { tcg_at_tcgCredentialType } from "../PlatformCertificateProfileV2/tcg-at-tcgCredentialType.va.mjs";
// export { tcg_at_tcgCredentialType } from "../PlatformCertificateProfileV2/tcg-at-tcgCredentialType.va.mjs";


/**
 * @summary tCGCredentialType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tCGCredentialType ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGCredentialType
 *     ID              tcg-at-tcgCredentialType
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TCGCredentialType>}
 * @implements {ATTRIBUTE<TCGCredentialType>}
 */
export
const tCGCredentialType: ATTRIBUTE<TCGCredentialType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGCredentialType,
    },
    encoderFor: {
        "&Type": _encode_TCGCredentialType,
    },
    "&id": tcg_at_tcgCredentialType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
