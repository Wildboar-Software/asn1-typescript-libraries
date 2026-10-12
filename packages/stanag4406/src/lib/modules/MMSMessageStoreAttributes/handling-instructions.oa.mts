/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { HandlingInstructions, _decode_HandlingInstructions, _encode_HandlingInstructions } from "../MMSHeadingExtensions/HandlingInstructions.ta.mjs";
// export { HandlingInstructions, _decode_HandlingInstructions, _encode_HandlingInstructions } from "../MMSHeadingExtensions/HandlingInstructions.ta.mjs";
import { id_nato_mmhs_hat_handling_instructions } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-handling-instructions.va.mjs";
// export { id_nato_mmhs_hat_handling_instructions } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-handling-instructions.va.mjs";


/**
 * @summary handling_instructions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handling-instructions ATTRIBUTE ::= {
 *   WITH SYNTAX   HandlingInstructions
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-handling-instructions }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<HandlingInstructions>}
 * @implements {ATTRIBUTE<HandlingInstructions>}
 */
export
const handling_instructions: ATTRIBUTE<HandlingInstructions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HandlingInstructions,
    },
    encoderFor: {
        "&Type": _encode_HandlingInstructions,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_handling_instructions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
