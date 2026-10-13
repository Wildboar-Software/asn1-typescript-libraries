/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { Acp127NotificationResponse, _decode_Acp127NotificationResponse, _encode_Acp127NotificationResponse } from "../MMSOtherNotificationTypeExtensions/Acp127NotificationResponse.ta.mjs";
import { id_nato_mmhs_nat_acp127_notification_response } from "../MMSObjectIdentifiers/id-nato-mmhs-nat-acp127-notification-response.va.mjs";


/**
 * @summary acp127_notification_response
 * @description
 * 
 * One ACP 127 notification response, stored for equality match. Multi-valued,
 * because more than one response may be stored. STANAG 4406 (Ed. 2), Annex A,
 * C3.1 and A3.1.
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
