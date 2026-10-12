/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { Acp127NotificationResponse, _decode_Acp127NotificationResponse, _encode_Acp127NotificationResponse } from "../MMSOtherNotificationTypeExtensions/Acp127NotificationResponse.ta.mjs";
// export { Acp127NotificationResponse, _decode_Acp127NotificationResponse, _encode_Acp127NotificationResponse } from "../MMSOtherNotificationTypeExtensions/Acp127NotificationResponse.ta.mjs";
import { id_nato_mmhs_nat_acp127_notification_response } from "../MMSObjectIdentifiers/id-nato-mmhs-nat-acp127-notification-response.va.mjs";
// export { id_nato_mmhs_nat_acp127_notification_response } from "../MMSObjectIdentifiers/id-nato-mmhs-nat-acp127-notification-response.va.mjs";


/**
 * @summary acp127_notification_response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acp127-notification-response ATTRIBUTE ::= {
 *   WITH SYNTAX   Acp127NotificationResponse
 *   ID            id-nato-mmhs-nat-acp127-notification-response }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Acp127NotificationResponse>}
 * @implements {ATTRIBUTE<Acp127NotificationResponse>}
 */
export
const acp127_notification_response: ATTRIBUTE<Acp127NotificationResponse> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Acp127NotificationResponse,
    },
    encoderFor: {
        "&Type": _encode_Acp127NotificationResponse,
    },
    "&id": id_nato_mmhs_nat_acp127_notification_response /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
