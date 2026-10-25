/* eslint-disable */
import {
    type ENUMERATED
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
    sMSOverIMS = 8,
    servingSystem = 9,
    subscriberRecordChange = 10,
    registrationTermination = 11,
    locationInformationRequest = 12,
}

/**
 * @summary IMSevent
 * @description
 * 
 * Which IMS event this IRI reports (table 7.2). Each event is a REPORT (table
 * 7.1). HSS values are serving system, subscriber record change, registration
 * termination, and location information request. Clause 12.5 adds the case
 * where media was required but did not enter the CSP network. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
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
 *     decryptionKeysAvailable (3),
 *         -- This value indicates to LEMF that the IRI carries CC decryption keys for the session
 *         -- under interception.
 * 
 *     startOfInterceptionForIMSEstablishedSession (4),
 *         -- This value indicates to LEMF that the IRI carries information related to
 *         -- interception started on an already established IMS session.
 *     xCAPRequest (5),
 *         -- This value indicates to LEMF that the XCAP request is sent.
 *     xCAPResponse (6) ,
 *         -- This value indicates to LEMF that the XCAP response is sent.
 *     ccUnavailable    (7),
 *     -- This value indicates to LEMF that the media is not available for interception for intercept
 *     -- orders that require media interception.
 *     sMSOverIMS    (8),
 *     -- This value indicates to LEMF that the SMS utilized by SMS over IP (using IMS) is
 *     -- being reported.
 *     servingSystem(9),
 *         -- Applicable to HSS interception
 *     subscriberRecordChange(10),
 *         -- Applicable to HSS interception
 *     registrationTermination(11),
 *         -- Applicable to HSS interception
 *     locationInformationRequest(12)
 *         -- Applicable to HSS interception
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
 * The whole SIP message is included, with no content filtering. The delivery
 * function removes location if the warrant does not allow it (module comment,
 * table 7.2).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_unfilteredSIPmessage = _enum_for_IMSevent.unfilteredSIPmessage satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unfilteredSIPmessage
 * @description
 * 
 * Whole SIP message, unfiltered except for unauthorized location (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const unfilteredSIPmessage = IMSevent_unfilteredSIPmessage satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_sIPheaderOnly
 * @description
 * 
 * The warrant asks for IRI only, so specific content in the SIP message, such
 * as a Message body, was deleted before delivery. Unknown headers are not
 * deleted (module comment, table 7.2).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_sIPheaderOnly = _enum_for_IMSevent.sIPheaderOnly satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sIPheaderOnly
 * @description
 * 
 * SIP header, with IRI-only content removed (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const sIPheaderOnly = IMSevent_sIPheaderOnly satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_decryptionKeysAvailable
 * @description
 * 
 * This IRI carries the keys the LEMF needs to decrypt the session content
 * (module comment, table 7.4).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_decryptionKeysAvailable = _enum_for_IMSevent.decryptionKeysAvailable satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryptionKeysAvailable
 * @description
 * 
 * IRI carries content-decryption keys (table 7.4).
 * 
 * @constant
 * @type {number}
 */
export
const decryptionKeysAvailable = IMSevent_decryptionKeysAvailable satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_startOfInterceptionForIMSEstablishedSession
 * @description
 * 
 * Interception started on an IMS session that was already established (module
 * comment, table 7.5). Not sent to a LEMF that was already intercepting that
 * session (clause 7.5.0).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_startOfInterceptionForIMSEstablishedSession = _enum_for_IMSevent.startOfInterceptionForIMSEstablishedSession satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionForIMSEstablishedSession
 * @description
 * 
 * Start of interception on an already established IMS session (table 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionForIMSEstablishedSession = IMSevent_startOfInterceptionForIMSEstablishedSession satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPRequest
 * @description
 * 
 * An XCAP request for the target's IMS supplementary-service settings is
 * included (module comment, table 7.6).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPRequest = _enum_for_IMSevent.xCAPRequest satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPRequest
 * @description
 * 
 * XCAP request REPORT (table 7.1).
 * 
 * @constant
 * @type {number}
 */
export
const xCAPRequest = IMSevent_xCAPRequest satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_xCAPResponse
 * @description
 * 
 * The XCAP response is included (module comment, table 7.6).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_xCAPResponse = _enum_for_IMSevent.xCAPResponse satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xCAPResponse
 * @description
 * 
 * XCAP response REPORT (table 7.1).
 * 
 * @constant
 * @type {number}
 */
export
const xCAPResponse = IMSevent_xCAPResponse satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_ccUnavailable
 * @description
 * 
 * The warrant requires media, but the media is not available for interception
 * because it does not enter the CSP network (module comment, clause 12.5).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_ccUnavailable = _enum_for_IMSevent.ccUnavailable satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccUnavailable
 * @description
 * 
 * Required media is not available for interception (clause 12.5).
 * 
 * @constant
 * @type {number}
 */
export
const ccUnavailable = IMSevent_ccUnavailable satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_sMSOverIMS
 * @description
 * 
 * SMS over IP using IMS is being reported (module comment). Clause 15.2.3
 * requires an SMS-over-IP REPORT, with event type SMS over IP (table 15.2.3.1).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_sMSOverIMS = _enum_for_IMSevent.sMSOverIMS satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverIMS
 * @description
 * 
 * SMS over IMS REPORT (clause 15.2.3).
 * 
 * @constant
 * @type {number}
 */
export
const sMSOverIMS = IMSevent_sMSOverIMS satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_servingSystem
 * @description
 * 
 * HSS serving-system event (module comment, table 7.7).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_servingSystem = _enum_for_IMSevent.servingSystem satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingSystem
 * @description
 * 
 * HSS serving system (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const servingSystem = IMSevent_servingSystem satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_subscriberRecordChange
 * @description
 * 
 * HSS subscriber-record change (module comment, table 7.8).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_subscriberRecordChange = _enum_for_IMSevent.subscriberRecordChange satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberRecordChange
 * @description
 * 
 * HSS subscriber-record change (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const subscriberRecordChange = IMSevent_subscriberRecordChange satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_registrationTermination
 * @description
 * 
 * HSS registration termination (module comment, table 7.9).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_registrationTermination = _enum_for_IMSevent.registrationTermination satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationTermination
 * @description
 * 
 * HSS registration termination (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const registrationTermination = IMSevent_registrationTermination satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSevent_locationInformationRequest
 * @description
 * 
 * HSS location-information request (module comment, table 7.10).
 * 
 * @constant
 * @type {number}
 */
export
const IMSevent_locationInformationRequest = _enum_for_IMSevent.locationInformationRequest satisfies IMSevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationInformationRequest
 * @description
 * 
 * HSS location-information request (clause 7.5).
 * 
 * @constant
 * @type {number}
 */
export
const locationInformationRequest = IMSevent_locationInformationRequest satisfies IMSevent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IMSevent: $.ASN1Decoder<IMSevent> = $._decodeEnumerated;
export const _encode_IMSevent: $.ASN1Encoder<IMSevent> = $._encodeEnumerated;


/* eslint-enable */
