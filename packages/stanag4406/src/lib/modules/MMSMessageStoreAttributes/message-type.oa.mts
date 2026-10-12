/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType } from "../MMSHeadingExtensions/MessageType.ta.mjs";
// export { MessageType, _decode_MessageType, _encode_MessageType } from "../MMSHeadingExtensions/MessageType.ta.mjs";
import { id_nato_mmhs_hat_message_type } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-message-type.va.mjs";
// export { id_nato_mmhs_hat_message_type } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-message-type.va.mjs";


/**
 * @summary message_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * message-type ATTRIBUTE ::= {
 *   WITH SYNTAX   MessageType
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-message-type }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MessageType>}
 * @implements {ATTRIBUTE<MessageType>}
 */
export
const message_type: ATTRIBUTE<MessageType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageType,
    },
    encoderFor: {
        "&Type": _encode_MessageType,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_message_type /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
