/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { OriginatorReference, _decode_OriginatorReference, _encode_OriginatorReference } from "../MMSHeadingExtensions/OriginatorReference.ta.mjs";
// export { OriginatorReference, _decode_OriginatorReference, _encode_OriginatorReference } from "../MMSHeadingExtensions/OriginatorReference.ta.mjs";
import { id_nato_mmhs_hat_originator_reference } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-originator-reference.va.mjs";
// export { id_nato_mmhs_hat_originator_reference } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-originator-reference.va.mjs";


/**
 * @summary originator_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * originator-reference ATTRIBUTE ::= {
 *   WITH SYNTAX   OriginatorReference
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-originator-reference }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OriginatorReference>}
 * @implements {ATTRIBUTE<OriginatorReference>}
 */
export
const originator_reference: ATTRIBUTE<OriginatorReference> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OriginatorReference,
    },
    encoderFor: {
        "&Type": _encode_OriginatorReference,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_originator_reference /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
