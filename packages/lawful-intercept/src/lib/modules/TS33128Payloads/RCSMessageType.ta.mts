/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSMessageType  ::=  ENUMERATED
 * {
 *     messageWithUserContent(1),
 *     fileTransferMessage(2),
 *     geoLocationPUSHMessage(3),
 *     iMDNNotification(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSMessageType {
    /**
     * @description
     *
     * Shall be selected if the message being reported contains user generated
     * communications content.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.2.1.
     */
    messageWithUserContent = 1,
    /**
     * @description
     *
     * Shall be selected if the message being reported is a File Transfer
     * message (see GSMA RCC.07 [78] clause 3.2.5).
     *
     * 3GPP TS 33.128, clause 7.13.3.3.2.1.
     */
    fileTransferMessage = 2,
    /**
     * @description
     *
     * Shall be selected if the message being reported contains a geolocation
     * PUSH message (see GSMA RCC.07 [78] clause 3.2.6).
     *
     * 3GPP TS 33.128, clause 7.13.3.3.2.1.
     */
    geoLocationPUSHMessage = 3,
    /**
     * @description
     *
     * Shall be selected if the event being reported contains an IMDN
     * notification (see OMA-TS-CPM_Conversation_Function [109] clause 5.4).
     *
     * 3GPP TS 33.128, clause 7.13.3.3.2.1.
     */
    iMDNNotification = 4,
}

/**
 * @summary RCSMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSMessageType  ::=  ENUMERATED
 * {
 *     messageWithUserContent(1),
 *     fileTransferMessage(2),
 *     geoLocationPUSHMessage(3),
 *     iMDNNotification(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSMessageType = _enum_for_RCSMessageType;

/**
 * @summary RCSMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSMessageType  ::=  ENUMERATED
 * {
 *     messageWithUserContent(1),
 *     fileTransferMessage(2),
 *     geoLocationPUSHMessage(3),
 *     iMDNNotification(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSMessageType = _enum_for_RCSMessageType;

/**
 * @summary RCSMessageType_messageWithUserContent
 * @description
 *
 * Shall be selected if the message being reported contains user generated
 * communications content.
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSMessageType_messageWithUserContent = RCSMessageType.messageWithUserContent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWithUserContent
 * @description
 *
 * Shall be selected if the message being reported contains user generated
 * communications content.
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const messageWithUserContent = RCSMessageType.messageWithUserContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_fileTransferMessage
 * @description
 *
 * Shall be selected if the message being reported is a File Transfer message
 * (see GSMA RCC.07 [78] clause 3.2.5).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSMessageType_fileTransferMessage = RCSMessageType.fileTransferMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransferMessage
 * @description
 *
 * Shall be selected if the message being reported is a File Transfer message
 * (see GSMA RCC.07 [78] clause 3.2.5).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const fileTransferMessage = RCSMessageType.fileTransferMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_geoLocationPUSHMessage
 * @description
 *
 * Shall be selected if the message being reported contains a geolocation PUSH
 * message (see GSMA RCC.07 [78] clause 3.2.6).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSMessageType_geoLocationPUSHMessage = RCSMessageType.geoLocationPUSHMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary geoLocationPUSHMessage
 * @description
 *
 * Shall be selected if the message being reported contains a geolocation PUSH
 * message (see GSMA RCC.07 [78] clause 3.2.6).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const geoLocationPUSHMessage = RCSMessageType.geoLocationPUSHMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_iMDNNotification
 * @description
 *
 * Shall be selected if the event being reported contains an IMDN notification
 * (see OMA-TS-CPM_Conversation_Function [109] clause 5.4).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSMessageType_iMDNNotification = RCSMessageType.iMDNNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMDNNotification
 * @description
 *
 * Shall be selected if the event being reported contains an IMDN notification
 * (see OMA-TS-CPM_Conversation_Function [109] clause 5.4).
 *
 * 3GPP TS 33.128, clause 7.13.3.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const iMDNNotification = RCSMessageType.iMDNNotification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSMessageType: $.ASN1Decoder<RCSMessageType> = $._decodeEnumerated;
export const _encode_RCSMessageType: $.ASN1Encoder<RCSMessageType> = $._encodeEnumerated;


/* eslint-enable */
