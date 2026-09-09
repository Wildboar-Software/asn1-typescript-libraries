/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NetwCapsChanged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetwCapsChanged  ::=  BIT STRING
 * {     progressLocationUser             ( 0),     -- optional parameters
 *     progressLocationPrivateServLocal     ( 1),     -- optional parameters
 *     progressLocationPublicServLocal     ( 2),     -- optional parameters
 *     progressLocationTransit         ( 3),     -- optional parameters
 *     progressLocationPublicServRemote     ( 4),     -- optional parameters
 *     progressLocationPrivateServRemote     ( 5),     -- optional parameters
 *     progressLocationLocal             ( 6),     -- optional parameters
 *     progressLocationInternational         ( 7),     -- optional parameters
 *     progressLocationNetwBeyondInterworking     ( 8),     -- optional parameters
 *     progressLocationOther             ( 9),     -- optional parameters
 *     progressDescriptionISDN         (10),     -- optional parameters
 *     progressDescriptionQSIG         (11),     -- optional parameters
 *     progressDescriptionOther         (12),     -- optional parameters
 *     userData                 (13),     -- optional parameters
 *     typeOfNetworkISDNPublic         (14),     -- optional parameters
 *     typeOfNetworkNonISDNPublic         (15),     -- optional parameters
 *     typeOfNetworkISDNPrivate         (16),     -- optional parameters
 *     typeOfNetworkNonISDNPrivate         (17),     -- optional parameters
 *     typeOfNetworkOther             (18),     -- optional parameters
 *     eventsProvidedParameter         (19),     -- optional parameters
 *     eventsProvidedBridged             (20),     -- optional parameters
 *     eventsProvidedCallCleared         (21),     -- optional parameters
 *     eventsProvidedConferenced         (22),     -- optional parameters
 *     eventsProvidedConnectionCleared     (23),     -- optional parameters
 *     eventsProvidedDelivered         (24),     -- optional parameters
 *     eventsProvidedDigitsDialed         (25),     -- optional parameters
 *     eventsProvidedDiverted             (26),     -- optional parameters
 *     eventsProvidedEstablished         (27),     -- optional parameters
 *     eventsProvidedFailed             (28),     -- optional parameters
 *     eventsProvidedHeld             (29),     -- optional parameters
 *     eventsProvidedNetwCapsChanged         (30),     -- optional parameters
 *     eventsProvidedNetwReached         (31),     -- optional parameters
 *     eventsProvidedOffered             (32),     -- optional parameters
 *     eventsProvidedOriginated         (33),     -- optional parameters
 *     eventsProvidedQueued             (34),     -- optional parameters
 *     eventsProvidedRetrieved         (35),     -- optional parameters
 *     eventsProvidedServiceInitiated         (36),     -- optional parameters
 *     eventsProvidedTransferred         (37),     -- optional parameters
 *     servicesPermitted             (38),     -- optional parameters
 *     mediaCallCharacteristics         (39),     -- optional parameters
 *     callCharacteristics             (40),     -- optional parameters
 *     outboundConnectionInfo             (41),     -- optional parameters
 *     languagePreferences            (43),     -- optional parameters
 *     privateData                 (42),     -- optional parameters
 *     locationInfoList            (44) }
 * ```
 */
export
type NetwCapsChanged = BIT_STRING;

/**
 * @summary NetwCapsChanged_progressLocationUser
 * @constant
 */
export
const NetwCapsChanged_progressLocationUser: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationUser
 * @constant
 */
export
const progressLocationUser: number = NetwCapsChanged_progressLocationUser; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPrivateServLocal
 * @constant
 */
export
const NetwCapsChanged_progressLocationPrivateServLocal: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPrivateServLocal
 * @constant
 */
export
const progressLocationPrivateServLocal: number = NetwCapsChanged_progressLocationPrivateServLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPublicServLocal
 * @constant
 */
export
const NetwCapsChanged_progressLocationPublicServLocal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPublicServLocal
 * @constant
 */
export
const progressLocationPublicServLocal: number = NetwCapsChanged_progressLocationPublicServLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationTransit
 * @constant
 */
export
const NetwCapsChanged_progressLocationTransit: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationTransit
 * @constant
 */
export
const progressLocationTransit: number = NetwCapsChanged_progressLocationTransit; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPublicServRemote
 * @constant
 */
export
const NetwCapsChanged_progressLocationPublicServRemote: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPublicServRemote
 * @constant
 */
export
const progressLocationPublicServRemote: number = NetwCapsChanged_progressLocationPublicServRemote; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPrivateServRemote
 * @constant
 */
export
const NetwCapsChanged_progressLocationPrivateServRemote: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPrivateServRemote
 * @constant
 */
export
const progressLocationPrivateServRemote: number = NetwCapsChanged_progressLocationPrivateServRemote; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationLocal
 * @constant
 */
export
const NetwCapsChanged_progressLocationLocal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationLocal
 * @constant
 */
export
const progressLocationLocal: number = NetwCapsChanged_progressLocationLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationInternational
 * @constant
 */
export
const NetwCapsChanged_progressLocationInternational: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationInternational
 * @constant
 */
export
const progressLocationInternational: number = NetwCapsChanged_progressLocationInternational; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationNetwBeyondInterworking
 * @constant
 */
export
const NetwCapsChanged_progressLocationNetwBeyondInterworking: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationNetwBeyondInterworking
 * @constant
 */
export
const progressLocationNetwBeyondInterworking: number = NetwCapsChanged_progressLocationNetwBeyondInterworking; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationOther
 * @constant
 */
export
const NetwCapsChanged_progressLocationOther: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationOther
 * @constant
 */
export
const progressLocationOther: number = NetwCapsChanged_progressLocationOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionISDN
 * @constant
 */
export
const NetwCapsChanged_progressDescriptionISDN: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionISDN
 * @constant
 */
export
const progressDescriptionISDN: number = NetwCapsChanged_progressDescriptionISDN; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionQSIG
 * @constant
 */
export
const NetwCapsChanged_progressDescriptionQSIG: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionQSIG
 * @constant
 */
export
const progressDescriptionQSIG: number = NetwCapsChanged_progressDescriptionQSIG; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionOther
 * @constant
 */
export
const NetwCapsChanged_progressDescriptionOther: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionOther
 * @constant
 */
export
const progressDescriptionOther: number = NetwCapsChanged_progressDescriptionOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_userData
 * @constant
 */
export
const NetwCapsChanged_userData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = NetwCapsChanged_userData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkISDNPublic
 * @constant
 */
export
const NetwCapsChanged_typeOfNetworkISDNPublic: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPublic
 * @constant
 */
export
const typeOfNetworkISDNPublic: number = NetwCapsChanged_typeOfNetworkISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkNonISDNPublic
 * @constant
 */
export
const NetwCapsChanged_typeOfNetworkNonISDNPublic: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPublic
 * @constant
 */
export
const typeOfNetworkNonISDNPublic: number = NetwCapsChanged_typeOfNetworkNonISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkISDNPrivate
 * @constant
 */
export
const NetwCapsChanged_typeOfNetworkISDNPrivate: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPrivate
 * @constant
 */
export
const typeOfNetworkISDNPrivate: number = NetwCapsChanged_typeOfNetworkISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkNonISDNPrivate
 * @constant
 */
export
const NetwCapsChanged_typeOfNetworkNonISDNPrivate: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPrivate
 * @constant
 */
export
const typeOfNetworkNonISDNPrivate: number = NetwCapsChanged_typeOfNetworkNonISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkOther
 * @constant
 */
export
const NetwCapsChanged_typeOfNetworkOther: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkOther
 * @constant
 */
export
const typeOfNetworkOther: number = NetwCapsChanged_typeOfNetworkOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedParameter
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedParameter: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedParameter
 * @constant
 */
export
const eventsProvidedParameter: number = NetwCapsChanged_eventsProvidedParameter; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedBridged
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedBridged: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedBridged
 * @constant
 */
export
const eventsProvidedBridged: number = NetwCapsChanged_eventsProvidedBridged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedCallCleared
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedCallCleared: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedCallCleared
 * @constant
 */
export
const eventsProvidedCallCleared: number = NetwCapsChanged_eventsProvidedCallCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedConferenced
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedConferenced: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConferenced
 * @constant
 */
export
const eventsProvidedConferenced: number = NetwCapsChanged_eventsProvidedConferenced; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedConnectionCleared
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedConnectionCleared: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConnectionCleared
 * @constant
 */
export
const eventsProvidedConnectionCleared: number = NetwCapsChanged_eventsProvidedConnectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDelivered
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedDelivered: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDelivered
 * @constant
 */
export
const eventsProvidedDelivered: number = NetwCapsChanged_eventsProvidedDelivered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDigitsDialed
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedDigitsDialed: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDigitsDialed
 * @constant
 */
export
const eventsProvidedDigitsDialed: number = NetwCapsChanged_eventsProvidedDigitsDialed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDiverted
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedDiverted: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDiverted
 * @constant
 */
export
const eventsProvidedDiverted: number = NetwCapsChanged_eventsProvidedDiverted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedEstablished
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedEstablished: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedEstablished
 * @constant
 */
export
const eventsProvidedEstablished: number = NetwCapsChanged_eventsProvidedEstablished; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedFailed
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedFailed: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedFailed
 * @constant
 */
export
const eventsProvidedFailed: number = NetwCapsChanged_eventsProvidedFailed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedHeld
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedHeld: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedHeld
 * @constant
 */
export
const eventsProvidedHeld: number = NetwCapsChanged_eventsProvidedHeld; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedNetwCapsChanged
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedNetwCapsChanged: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwCapsChanged
 * @constant
 */
export
const eventsProvidedNetwCapsChanged: number = NetwCapsChanged_eventsProvidedNetwCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedNetwReached
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedNetwReached: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwReached
 * @constant
 */
export
const eventsProvidedNetwReached: number = NetwCapsChanged_eventsProvidedNetwReached; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedOffered
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedOffered: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOffered
 * @constant
 */
export
const eventsProvidedOffered: number = NetwCapsChanged_eventsProvidedOffered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedOriginated
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedOriginated: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOriginated
 * @constant
 */
export
const eventsProvidedOriginated: number = NetwCapsChanged_eventsProvidedOriginated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedQueued
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedQueued: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedQueued
 * @constant
 */
export
const eventsProvidedQueued: number = NetwCapsChanged_eventsProvidedQueued; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedRetrieved
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedRetrieved: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedRetrieved
 * @constant
 */
export
const eventsProvidedRetrieved: number = NetwCapsChanged_eventsProvidedRetrieved; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedServiceInitiated
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedServiceInitiated: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedServiceInitiated
 * @constant
 */
export
const eventsProvidedServiceInitiated: number = NetwCapsChanged_eventsProvidedServiceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedTransferred
 * @constant
 */
export
const NetwCapsChanged_eventsProvidedTransferred: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedTransferred
 * @constant
 */
export
const eventsProvidedTransferred: number = NetwCapsChanged_eventsProvidedTransferred; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_servicesPermitted
 * @constant
 */
export
const NetwCapsChanged_servicesPermitted: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = NetwCapsChanged_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_mediaCallCharacteristics
 * @constant
 */
export
const NetwCapsChanged_mediaCallCharacteristics: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = NetwCapsChanged_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_callCharacteristics
 * @constant
 */
export
const NetwCapsChanged_callCharacteristics: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = NetwCapsChanged_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_outboundConnectionInfo
 * @constant
 */
export
const NetwCapsChanged_outboundConnectionInfo: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary outboundConnectionInfo
 * @constant
 */
export
const outboundConnectionInfo: number = NetwCapsChanged_outboundConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_languagePreferences
 * @constant
 */
export
const NetwCapsChanged_languagePreferences: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = NetwCapsChanged_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_privateData
 * @constant
 */
export
const NetwCapsChanged_privateData: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = NetwCapsChanged_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_locationInfoList
 * @constant
 */
export
const NetwCapsChanged_locationInfoList: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = NetwCapsChanged_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NetwCapsChanged: $.ASN1Decoder<NetwCapsChanged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetwCapsChanged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetwCapsChanged (el: _Element): NetwCapsChanged {
    if (!_cached_decoder_for_NetwCapsChanged) { _cached_decoder_for_NetwCapsChanged = $._decodeBitString; }
    return _cached_decoder_for_NetwCapsChanged(el);
}

let _cached_encoder_for_NetwCapsChanged: $.ASN1Encoder<NetwCapsChanged> | null = null;

/**
 * @summary Encodes a(n) NetwCapsChanged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetwCapsChanged, encoded as an ASN.1 Element.
 */
export
function _encode_NetwCapsChanged (value: NetwCapsChanged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetwCapsChanged) { _cached_encoder_for_NetwCapsChanged = $._encodeBitString; }
    return _cached_encoder_for_NetwCapsChanged(value, elGetter);
}


/* eslint-enable */
