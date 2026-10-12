/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistributionExtensionField, _decode_DistributionExtensionField, _encode_DistributionExtensionField } from "../MMSHeadingExtensions/DistributionExtensionField.ta.mjs";
// export { DistributionExtensionField, _decode_DistributionExtensionField, _encode_DistributionExtensionField } from "../MMSHeadingExtensions/DistributionExtensionField.ta.mjs";
import { id_nato_mmhs_hat_distribution_extensions } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-distribution-extensions.va.mjs";
// export { id_nato_mmhs_hat_distribution_extensions } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-distribution-extensions.va.mjs";


/**
 * @summary distribution_extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * distribution-extensions ATTRIBUTE ::= {
 *   WITH SYNTAX   DistributionExtensionField
 *   ID            id-nato-mmhs-hat-distribution-extensions }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistributionExtensionField>}
 * @implements {ATTRIBUTE<DistributionExtensionField>}
 */
export
const distribution_extensions: ATTRIBUTE<DistributionExtensionField> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistributionExtensionField,
    },
    encoderFor: {
        "&Type": _encode_DistributionExtensionField,
    },
    "&id": id_nato_mmhs_hat_distribution_extensions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
