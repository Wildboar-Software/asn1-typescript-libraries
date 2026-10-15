/* eslint-disable */
import {
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
 * IMS action that caused this IRI. The defined values are an unfiltered SIP
 * message, a header-only SIP message, decryption keys, start of interception on
 * an established session, an XCAP request, an XCAP response, or CC unavailable.
 * 
 * Clause 7.5 also describes HSS reports (serving system, subscriber-record
 * change, registration termination, location-information request) as IMS
 * events. Those four kinds are not values of this enumeration. In this module
 * the packet-domain event values that cover the HLR forms of those reports are
 * on the GPRS event, and registration termination is marked for further study
 * there.
 * 
 * 3GPP TS 33.108, clause 7.5 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * @description
 * 
 * The whole SIP message is sent. The DF2 or MF removes location when the
 * warrant does not require it.
 * 
 * 3GPP TS 33.108, clause 7.5 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_unfilteredSIPmessage: IMSevent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unfilteredSIPmessage
 * @description
 * 
 * The whole SIP message is sent (annex B.3).
 * @constant
 * @type {number}
 */
export
const unfilteredSIPmessage: IMSevent = IMSevent_unfilteredSIPmessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_sIPheaderOnly
 * @description
 * 
 * The warrant requires only IRI, so specific content in the SIP message, such
 * as a MESSAGE body, was deleted before delivery to the LEMF. Unknown headers
 * are kept. SDP is still reported.
 * 
 * 3GPP TS 33.108, table 7.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_sIPheaderOnly: IMSevent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sIPheaderOnly
 * @description
 * 
 * IRI-only warrant: SIP content other than SDP was removed (table 7.2).
 * @constant
 * @type {number}
 */
export
const sIPheaderOnly: IMSevent = IMSevent_sIPheaderOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_decryptionKeysAvailable
 * @description
 * 
 * This IRI carries the CC decryption keys for the intercepted session.
 * 
 * 3GPP TS 33.108, table 7.4 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_decryptionKeysAvailable: IMSevent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryptionKeysAvailable
 * @description
 * 
 * The IRI carries CC decryption keys (table 7.4).
 * @constant
 * @type {number}
 */
export
const decryptionKeysAvailable: IMSevent = IMSevent_decryptionKeysAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_startOfInterceptionForIMSEstablishedSession
 * @description
 * 
 * Interception started on an IMS session that was already established. The
 * offer and answer headers and SDP are included when available.
 * 
 * 3GPP TS 33.108, table 7.5 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_startOfInterceptionForIMSEstablishedSession: IMSevent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionForIMSEstablishedSession
 * @description
 * 
 * Interception started on an IMS session that was already up (table 7.5).
 * @constant
 * @type {number}
 */
export
const startOfInterceptionForIMSEstablishedSession: IMSevent = IMSevent_startOfInterceptionForIMSEstablishedSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPRequest
 * @description
 * 
 * The XCAP request for the target's IMS supplementary-service settings is
 * included.
 * 
 * 3GPP TS 33.108, table 7.6 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPRequest: IMSevent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPRequest
 * @description
 * 
 * The XCAP request is included (table 7.6).
 * @constant
 * @type {number}
 */
export
const xCAPRequest: IMSevent = IMSevent_xCAPRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPResponse
 * @description
 * 
 * The XCAP response for the target's IMS supplementary-service settings is
 * included.
 * 
 * 3GPP TS 33.108, table 7.6 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPResponse: IMSevent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPResponse
 * @description
 * 
 * The XCAP response is included (table 7.6).
 * @constant
 * @type {number}
 */
export
const xCAPResponse: IMSevent = IMSevent_xCAPResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_ccUnavailable
 * @description
 * 
 * Media interception was required, but the media is not available to the CSP.
 * Clause 12.5 limits this report to that case.
 * 
 * 3GPP TS 33.108, clause 12.5 and annex B.3.
 * @constant
 * @type {number}
 */
export
const IMSevent_ccUnavailable: IMSevent = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccUnavailable
 * @description
 * 
 * Required media is not available for interception (clause 12.5).
 * @constant
 * @type {number}
 */
export
const ccUnavailable: IMSevent = IMSevent_ccUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IMSevent: $.ASN1Decoder<IMSevent> = $._decodeEnumerated;
export const _encode_IMSevent: $.ASN1Encoder<IMSevent> = $._encodeEnumerated;


/* eslint-enable */
