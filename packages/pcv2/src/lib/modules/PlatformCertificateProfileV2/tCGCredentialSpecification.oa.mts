/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TCGSpecificationVersion, _decode_TCGSpecificationVersion, _encode_TCGSpecificationVersion } from "../PlatformCertificateProfileV2/TCGSpecificationVersion.ta.mjs";
// export { TCGSpecificationVersion, _decode_TCGSpecificationVersion, _encode_TCGSpecificationVersion } from "../PlatformCertificateProfileV2/TCGSpecificationVersion.ta.mjs";
import { tcg_at_tcgCredentialSpecification } from "../PlatformCertificateProfileV2/tcg-at-tcgCredentialSpecification.va.mjs";
// export { tcg_at_tcgCredentialSpecification } from "../PlatformCertificateProfileV2/tcg-at-tcgCredentialSpecification.va.mjs";


/**
 * @summary tCGCredentialSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tCGCredentialSpecification ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGSpecificationVersion
 *     ID              tcg-at-tcgCredentialSpecification
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TCGSpecificationVersion>}
 * @implements {ATTRIBUTE<TCGSpecificationVersion>}
 */
export
const tCGCredentialSpecification: ATTRIBUTE<TCGSpecificationVersion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGSpecificationVersion,
    },
    encoderFor: {
        "&Type": _encode_TCGSpecificationVersion,
    },
    "&id": tcg_at_tcgCredentialSpecification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
