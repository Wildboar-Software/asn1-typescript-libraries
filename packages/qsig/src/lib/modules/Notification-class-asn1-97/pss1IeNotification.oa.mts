/* eslint-disable */
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary pss1IeNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pss1IeNotification NOTIFICATION ::= {
 *     ARGUMENT PSS1InformationElement
 *     CODE local: 2001
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<PSS1InformationElement>}
 * @implements {NOTIFICATION<PSS1InformationElement>}
 */
export
const pss1IeNotification: NOTIFICATION<PSS1InformationElement> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": _decode_PSS1InformationElement,
    },
    encoderFor: {
        "&ArgumentType": _encode_PSS1InformationElement,
    },
    "&notificationCode": { local: 2001 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
