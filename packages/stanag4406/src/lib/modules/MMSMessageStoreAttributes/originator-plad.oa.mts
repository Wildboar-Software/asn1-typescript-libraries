/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { OriginatorPlad, _decode_OriginatorPlad, _encode_OriginatorPlad } from "../MMSHeadingExtensions/OriginatorPlad.ta.mjs";
// export { OriginatorPlad, _decode_OriginatorPlad, _encode_OriginatorPlad } from "../MMSHeadingExtensions/OriginatorPlad.ta.mjs";
import { id_nato_mmhs_hat_originator_plad } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-originator-plad.va.mjs";
// export { id_nato_mmhs_hat_originator_plad } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-originator-plad.va.mjs";


/**
 * @summary originator_plad
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * originator-plad ATTRIBUTE ::= {
 *   WITH SYNTAX   OriginatorPlad
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-originator-plad }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OriginatorPlad>}
 * @implements {ATTRIBUTE<OriginatorPlad>}
 */
export
const originator_plad: ATTRIBUTE<OriginatorPlad> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OriginatorPlad,
    },
    encoderFor: {
        "&Type": _encode_OriginatorPlad,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_originator_plad /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
