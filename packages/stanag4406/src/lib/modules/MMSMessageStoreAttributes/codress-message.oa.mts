/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { CodressMessage, _decode_CodressMessage, _encode_CodressMessage } from "../MMSHeadingExtensions/CodressMessage.ta.mjs";
import { id_nato_mmhs_hat_codress_message } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-codress-message.va.mjs";


/**
 * @summary codress_message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * codress-message ATTRIBUTE ::= {
 *   WITH SYNTAX   CodressMessage
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-codress-message }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CodressMessage>}
 * @implements {ATTRIBUTE<CodressMessage>}
 */
export
const codress_message: ATTRIBUTE<CodressMessage> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CodressMessage,
    },
    encoderFor: {
        "&Type": _encode_CodressMessage,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_codress_message /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
