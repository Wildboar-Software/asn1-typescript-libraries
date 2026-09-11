/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NetwReached
 * @description
 * Capability bitmap for the Network Reached event (ECMA-269 C.6.12, ECMA-285
 * §9.10). Presence of this entry in `CallControlEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetwReached  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     typeOfNetworkISDNPublic         ( 2),     -- optional parameters
 *     typeOfNetworkNonISDNPublic         ( 3),     -- optional parameters
 *     typeOfNetworkISDNPrivate         ( 4),     -- optional parameters
 *     typeOfNetworkNonISDNPrivate         ( 5),     -- optional parameters
 *     typeOfNetworkOther             ( 6),     -- optional parameters
 *     eventsProvidedParameter         ( 7),     -- optional parameters
 *     eventsProvidedBridged             ( 8),     -- optional parameters
 *     eventsProvidedCallCleared         ( 9),     -- optional parameters
 *     eventsProvidedConferenced         (10),     -- optional parameters
 *     eventsProvidedConnectionCleared     (11),     -- optional parameters
 *     eventsProvidedDelivered         (12),     -- optional parameters
 *     eventsProvidedDigitsDialed         (13),     -- optional parameters
 *     eventsProvidedDiverted             (14),     -- optional parameters
 *     eventsProvidedEstablished         (15),     -- optional parameters
 *     eventsProvidedFailed             (16),     -- optional parameters
 *     eventsProvidedHeld             (17),     -- optional parameters
 *     eventsProvidedNetwCapsChanged         (18),     -- optional parameters
 *     eventsProvidedNetwReached         (19),     -- optional parameters
 *     eventsProvidedOffered             (20),     -- optional parameters
 *     eventsProvidedOriginated         (21),     -- optional parameters
 *     eventsProvidedQueued             (22),     -- optional parameters
 *     eventsProvidedRetrieved         (23),     -- optional parameters
 *     eventsProvidedServiceInitiated         (24),     -- optional parameters
 *     eventsProvidedTransferred         (25),     -- optional parameters
 *     servicesPermitted             (26),     -- optional parameters
 *     mediaCallCharacteristics         (27),     -- optional parameters
 *     callCharacteristics             (28),     -- optional parameters
 *     outboundConnectionInfo             (29),     -- optional parameters
 *     netwCallingDevice             (30),     -- optional parameters
 *     netwCalledDevice             (31),     -- optional parameters
 *     languagePreferences            (33),     -- optional parameters
 *     deviceHistory                (34),     -- optional parameters
 *     privateData                 (32),     -- optional parameters
 *     locationInfoList            (35) }
 * ```
 */
export
type NetwReached = BIT_STRING;

/**
 * @summary NetwReached_originatingNIDConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 * @description
 * Alias of `NetwReached_originatingNIDConnection`.
 */
export
const originatingNIDConnection: number = NetwReached_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.12).
 */
export
const NetwReached_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `NetwReached_userData`.
 */
export
const userData: number = NetwReached_userData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_typeOfNetworkISDNPublic
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_typeOfNetworkISDNPublic: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPublic
 * @constant
 * @description
 * Alias of `NetwReached_typeOfNetworkISDNPublic`.
 */
export
const typeOfNetworkISDNPublic: number = NetwReached_typeOfNetworkISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_typeOfNetworkNonISDNPublic
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_typeOfNetworkNonISDNPublic: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPublic
 * @constant
 * @description
 * Alias of `NetwReached_typeOfNetworkNonISDNPublic`.
 */
export
const typeOfNetworkNonISDNPublic: number = NetwReached_typeOfNetworkNonISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_typeOfNetworkISDNPrivate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_typeOfNetworkISDNPrivate: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPrivate
 * @constant
 * @description
 * Alias of `NetwReached_typeOfNetworkISDNPrivate`.
 */
export
const typeOfNetworkISDNPrivate: number = NetwReached_typeOfNetworkISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_typeOfNetworkNonISDNPrivate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_typeOfNetworkNonISDNPrivate: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPrivate
 * @constant
 * @description
 * Alias of `NetwReached_typeOfNetworkNonISDNPrivate`.
 */
export
const typeOfNetworkNonISDNPrivate: number = NetwReached_typeOfNetworkNonISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_typeOfNetworkOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_typeOfNetworkOther: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkOther
 * @constant
 * @description
 * Alias of `NetwReached_typeOfNetworkOther`.
 */
export
const typeOfNetworkOther: number = NetwReached_typeOfNetworkOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedParameter
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedParameter: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedParameter
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedParameter`.
 */
export
const eventsProvidedParameter: number = NetwReached_eventsProvidedParameter; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedBridged
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedBridged: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedBridged
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedBridged`.
 */
export
const eventsProvidedBridged: number = NetwReached_eventsProvidedBridged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedCallCleared
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedCallCleared: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedCallCleared
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedCallCleared`.
 */
export
const eventsProvidedCallCleared: number = NetwReached_eventsProvidedCallCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedConferenced
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedConferenced: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConferenced
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedConferenced`.
 */
export
const eventsProvidedConferenced: number = NetwReached_eventsProvidedConferenced; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedConnectionCleared
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedConnectionCleared: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConnectionCleared
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedConnectionCleared`.
 */
export
const eventsProvidedConnectionCleared: number = NetwReached_eventsProvidedConnectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedDelivered
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedDelivered: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDelivered
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedDelivered`.
 */
export
const eventsProvidedDelivered: number = NetwReached_eventsProvidedDelivered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedDigitsDialed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedDigitsDialed: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDigitsDialed
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedDigitsDialed`.
 */
export
const eventsProvidedDigitsDialed: number = NetwReached_eventsProvidedDigitsDialed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedDiverted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedDiverted: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDiverted
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedDiverted`.
 */
export
const eventsProvidedDiverted: number = NetwReached_eventsProvidedDiverted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedEstablished
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedEstablished: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedEstablished
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedEstablished`.
 */
export
const eventsProvidedEstablished: number = NetwReached_eventsProvidedEstablished; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedFailed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedFailed: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedFailed
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedFailed`.
 */
export
const eventsProvidedFailed: number = NetwReached_eventsProvidedFailed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedHeld
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedHeld: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedHeld
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedHeld`.
 */
export
const eventsProvidedHeld: number = NetwReached_eventsProvidedHeld; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedNetwCapsChanged
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedNetwCapsChanged: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwCapsChanged
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedNetwCapsChanged`.
 */
export
const eventsProvidedNetwCapsChanged: number = NetwReached_eventsProvidedNetwCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedNetwReached
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedNetwReached: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwReached
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedNetwReached`.
 */
export
const eventsProvidedNetwReached: number = NetwReached_eventsProvidedNetwReached; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedOffered
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedOffered: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOffered
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedOffered`.
 */
export
const eventsProvidedOffered: number = NetwReached_eventsProvidedOffered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedOriginated
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedOriginated: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOriginated
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedOriginated`.
 */
export
const eventsProvidedOriginated: number = NetwReached_eventsProvidedOriginated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedQueued
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedQueued: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedQueued
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedQueued`.
 */
export
const eventsProvidedQueued: number = NetwReached_eventsProvidedQueued; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedRetrieved
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedRetrieved: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedRetrieved
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedRetrieved`.
 */
export
const eventsProvidedRetrieved: number = NetwReached_eventsProvidedRetrieved; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedServiceInitiated
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedServiceInitiated: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedServiceInitiated
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedServiceInitiated`.
 */
export
const eventsProvidedServiceInitiated: number = NetwReached_eventsProvidedServiceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_eventsProvidedTransferred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_eventsProvidedTransferred: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedTransferred
 * @constant
 * @description
 * Alias of `NetwReached_eventsProvidedTransferred`.
 */
export
const eventsProvidedTransferred: number = NetwReached_eventsProvidedTransferred; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_servicesPermitted: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `NetwReached_servicesPermitted`.
 */
export
const servicesPermitted: number = NetwReached_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.12).
 */
export
const NetwReached_mediaCallCharacteristics: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `NetwReached_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = NetwReached_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.12).
 */
export
const NetwReached_callCharacteristics: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `NetwReached_callCharacteristics`.
 */
export
const callCharacteristics: number = NetwReached_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_outboundConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_outboundConnectionInfo: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary outboundConnectionInfo
 * @constant
 * @description
 * Alias of `NetwReached_outboundConnectionInfo`.
 */
export
const outboundConnectionInfo: number = NetwReached_outboundConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_netwCallingDevice: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `NetwReached_netwCallingDevice`.
 */
export
const netwCallingDevice: number = NetwReached_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.12).
 */
export
const NetwReached_netwCalledDevice: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `NetwReached_netwCalledDevice`.
 */
export
const netwCalledDevice: number = NetwReached_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.12).
 */
export
const NetwReached_languagePreferences: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `NetwReached_languagePreferences`.
 */
export
const languagePreferences: number = NetwReached_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.12).
 */
export
const NetwReached_deviceHistory: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `NetwReached_deviceHistory`.
 */
export
const deviceHistory: number = NetwReached_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.12).
 */
export
const NetwReached_privateData: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `NetwReached_privateData`.
 */
export
const privateData: number = NetwReached_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwReached_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.12).
 */
export
const NetwReached_locationInfoList: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `NetwReached_locationInfoList`.
 */
export
const locationInfoList: number = NetwReached_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NetwReached: $.ASN1Decoder<NetwReached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetwReached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetwReached (el: _Element): NetwReached {
    if (!_cached_decoder_for_NetwReached) { _cached_decoder_for_NetwReached = $._decodeBitString; }
    return _cached_decoder_for_NetwReached(el);
}

let _cached_encoder_for_NetwReached: $.ASN1Encoder<NetwReached> | null = null;

/**
 * @summary Encodes a(n) NetwReached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetwReached, encoded as an ASN.1 Element.
 */
export
function _encode_NetwReached (value: NetwReached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetwReached) { _cached_encoder_for_NetwReached = $._encodeBitString; }
    return _cached_encoder_for_NetwReached(value, elGetter);
}


/* eslint-enable */
