/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { Acp127NotificationType, _decode_Acp127NotificationType, _encode_Acp127NotificationType } from "../MMSPerRecipientSpecifierExtensions/Acp127NotificationType.ta.mjs";
import { id_nato_mmhs_hat_acp127_notification_request } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-acp127-notification-request.va.mjs";


/**
 * @summary acp127_notification_request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acp127-notification-request ATTRIBUTE ::= {
 *   WITH SYNTAX   Acp127NotificationType
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-acp127-notification-request }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Acp127NotificationType>}
 * @implements {ATTRIBUTE<Acp127NotificationType>}
 */
export
const acp127_notification_request: ATTRIBUTE<Acp127NotificationType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Acp127NotificationType,
    },
    encoderFor: {
        "&Type": _encode_Acp127NotificationType,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_acp127_notification_request /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
