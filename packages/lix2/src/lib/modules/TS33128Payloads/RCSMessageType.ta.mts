/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
    messageWithUserContent = 1,
    fileTransferMessage = 2,
    geoLocationPUSHMessage = 3,
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
 * @constant
 * @type {number}
 */
export
const RCSMessageType_messageWithUserContent: RCSMessageType = RCSMessageType.messageWithUserContent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWithUserContent
 * @constant
 * @type {number}
 */
export
const messageWithUserContent: RCSMessageType = RCSMessageType.messageWithUserContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_fileTransferMessage
 * @constant
 * @type {number}
 */
export
const RCSMessageType_fileTransferMessage: RCSMessageType = RCSMessageType.fileTransferMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransferMessage
 * @constant
 * @type {number}
 */
export
const fileTransferMessage: RCSMessageType = RCSMessageType.fileTransferMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_geoLocationPUSHMessage
 * @constant
 * @type {number}
 */
export
const RCSMessageType_geoLocationPUSHMessage: RCSMessageType = RCSMessageType.geoLocationPUSHMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary geoLocationPUSHMessage
 * @constant
 * @type {number}
 */
export
const geoLocationPUSHMessage: RCSMessageType = RCSMessageType.geoLocationPUSHMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSMessageType_iMDNNotification
 * @constant
 * @type {number}
 */
export
const RCSMessageType_iMDNNotification: RCSMessageType = RCSMessageType.iMDNNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMDNNotification
 * @constant
 * @type {number}
 */
export
const iMDNNotification: RCSMessageType = RCSMessageType.iMDNNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSMessageType: $.ASN1Decoder<RCSMessageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSMessageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSMessageType (el: _Element): RCSMessageType {
    if (!_cached_decoder_for_RCSMessageType) { _cached_decoder_for_RCSMessageType = $._decodeEnumerated; }
    return _cached_decoder_for_RCSMessageType(el);
}

let _cached_encoder_for_RCSMessageType: $.ASN1Encoder<RCSMessageType> | null = null;

/**
 * @summary Encodes a(n) RCSMessageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSMessageType, encoded as an ASN.1 Element.
 */
export
function _encode_RCSMessageType (value: RCSMessageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSMessageType) { _cached_encoder_for_RCSMessageType = $._encodeEnumerated; }
    return _cached_encoder_for_RCSMessageType(value, elGetter);
}


/* eslint-enable */
