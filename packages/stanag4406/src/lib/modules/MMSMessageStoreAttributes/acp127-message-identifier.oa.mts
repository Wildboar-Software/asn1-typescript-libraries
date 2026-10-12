/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { Acp127MessageIdentifier, _decode_Acp127MessageIdentifier, _encode_Acp127MessageIdentifier } from "../MMSHeadingExtensions/Acp127MessageIdentifier.ta.mjs";
import { id_nato_mmhs_hat_acp127_message_identifier } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-acp127-message-identifier.va.mjs";


/**
 * @summary acp127_message_identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acp127-message-identifier ATTRIBUTE ::= {
 *   WITH SYNTAX   Acp127MessageIdentifier
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-acp127-message-identifier }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Acp127MessageIdentifier>}
 * @implements {ATTRIBUTE<Acp127MessageIdentifier>}
 */
export
const acp127_message_identifier: ATTRIBUTE<Acp127MessageIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Acp127MessageIdentifier,
    },
    encoderFor: {
        "&Type": _encode_Acp127MessageIdentifier,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_acp127_message_identifier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
