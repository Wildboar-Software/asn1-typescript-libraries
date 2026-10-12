/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { MessageInstructions, _decode_MessageInstructions, _encode_MessageInstructions } from "../MMSHeadingExtensions/MessageInstructions.ta.mjs";
import { id_nato_mmhs_hat_message_instructions } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-message-instructions.va.mjs";


/**
 * @summary message_instructions
 * @description
 * 
 * Message instructions, stored for equality match. Single-valued. STANAG 4406
 * (Ed. 2), Annex A, C.2.5 and A1.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * message-instructions ATTRIBUTE ::= {
 *   WITH SYNTAX   MessageInstructions
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-message-instructions }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MessageInstructions>}
 * @implements {ATTRIBUTE<MessageInstructions>}
 */
export
const message_instructions: ATTRIBUTE<MessageInstructions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageInstructions,
    },
    encoderFor: {
        "&Type": _encode_MessageInstructions,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_message_instructions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
