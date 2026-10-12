/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IMSevent {
    unfilteredSIPmessage = 1,
    sIPheaderOnly = 2,
    decryptionKeysAvailable = 3,
    startOfInterceptionForIMSEstablishedSession = 4,
    xCAPRequest = 5,
    xCAPResponse = 6,
    ccUnavailable = 7,
}

/**
 * @summary IMSevent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSevent  ::=  ENUMERATED
 * {
 *     unfilteredSIPmessage (1),
 *         -- This value indicates to LEMF that the whole SIP message is sent , i.e. without filtering
 *         -- CC; location information is removed by the DF2/MF if not required to be sent.
 * 
 *     ...,
 *     sIPheaderOnly (2),
 *         -- If warrant requires only IRI then specific content in a 'sIPMessage'
 *         -- (e.g. 'Message', etc.) has been deleted before sending it to LEMF.
 * 
 *     decryptionKeysAvailable (3) ,
 *         -- This value indicates to LEMF that the IRI carries CC decryption keys for the session
 *         -- under interception.
 * 
 *     startOfInterceptionForIMSEstablishedSession  (4) ,
 *         -- This value indicates to LEMF that the IRI carries information related to
 *                 -- interception started on an already established IMS session.
 *     xCAPRequest (5),
 *         -- This value indicates to LEMF that the XCAP request is sent.
 *     xCAPResponse (6) ,
 *         -- This value indicates to LEMF that the XCAP response is sent.
 *     ccUnavailable (7)
 *     -- This value indicates to LEMF that the media is not available for interception for intercept
 *     -- orders that requires media interception.
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IMSevent = _enum_for_IMSevent | ENUMERATED;

/**
 * @summary IMSevent_unfilteredSIPmessage
 * @constant
 * @type {number}
 */
export
const IMSevent_unfilteredSIPmessage: IMSevent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unfilteredSIPmessage
 * @constant
 * @type {number}
 */
export
const unfilteredSIPmessage: IMSevent = IMSevent_unfilteredSIPmessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_sIPheaderOnly
 * @constant
 * @type {number}
 */
export
const IMSevent_sIPheaderOnly: IMSevent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sIPheaderOnly
 * @constant
 * @type {number}
 */
export
const sIPheaderOnly: IMSevent = IMSevent_sIPheaderOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_decryptionKeysAvailable
 * @constant
 * @type {number}
 */
export
const IMSevent_decryptionKeysAvailable: IMSevent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryptionKeysAvailable
 * @constant
 * @type {number}
 */
export
const decryptionKeysAvailable: IMSevent = IMSevent_decryptionKeysAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_startOfInterceptionForIMSEstablishedSession
 * @constant
 * @type {number}
 */
export
const IMSevent_startOfInterceptionForIMSEstablishedSession: IMSevent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionForIMSEstablishedSession
 * @constant
 * @type {number}
 */
export
const startOfInterceptionForIMSEstablishedSession: IMSevent = IMSevent_startOfInterceptionForIMSEstablishedSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPRequest
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPRequest: IMSevent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPRequest
 * @constant
 * @type {number}
 */
export
const xCAPRequest: IMSevent = IMSevent_xCAPRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPResponse
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPResponse: IMSevent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPResponse
 * @constant
 * @type {number}
 */
export
const xCAPResponse: IMSevent = IMSevent_xCAPResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_ccUnavailable
 * @constant
 * @type {number}
 */
export
const IMSevent_ccUnavailable: IMSevent = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccUnavailable
 * @constant
 * @type {number}
 */
export
const ccUnavailable: IMSevent = IMSevent_ccUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IMSevent: $.ASN1Decoder<IMSevent> = $._decodeEnumerated;
export const _encode_IMSevent: $.ASN1Encoder<IMSevent> = $._encodeEnumerated;


/* eslint-enable */
