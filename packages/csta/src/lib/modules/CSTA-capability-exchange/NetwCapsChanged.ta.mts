/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NetwCapsChanged
 * @description
 * Capability bitmap for the Network Capabilities Changed event (ECMA-269
 * C.6.11, ECMA-285 §9.10). Presence of this entry in `CallControlEvtsList`
 * means the SF supports that event. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationUser: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationUser
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationUser`.
 */
export
const progressLocationUser: number = NetwCapsChanged_progressLocationUser; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPrivateServLocal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationPrivateServLocal: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPrivateServLocal
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationPrivateServLocal`.
 */
export
const progressLocationPrivateServLocal: number = NetwCapsChanged_progressLocationPrivateServLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPublicServLocal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationPublicServLocal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPublicServLocal
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationPublicServLocal`.
 */
export
const progressLocationPublicServLocal: number = NetwCapsChanged_progressLocationPublicServLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationTransit
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationTransit: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationTransit
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationTransit`.
 */
export
const progressLocationTransit: number = NetwCapsChanged_progressLocationTransit; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPublicServRemote
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationPublicServRemote: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPublicServRemote
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationPublicServRemote`.
 */
export
const progressLocationPublicServRemote: number = NetwCapsChanged_progressLocationPublicServRemote; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationPrivateServRemote
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationPrivateServRemote: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationPrivateServRemote
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationPrivateServRemote`.
 */
export
const progressLocationPrivateServRemote: number = NetwCapsChanged_progressLocationPrivateServRemote; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationLocal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationLocal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationLocal
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationLocal`.
 */
export
const progressLocationLocal: number = NetwCapsChanged_progressLocationLocal; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationInternational
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationInternational: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationInternational
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationInternational`.
 */
export
const progressLocationInternational: number = NetwCapsChanged_progressLocationInternational; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationNetwBeyondInterworking
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationNetwBeyondInterworking: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationNetwBeyondInterworking
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationNetwBeyondInterworking`.
 */
export
const progressLocationNetwBeyondInterworking: number = NetwCapsChanged_progressLocationNetwBeyondInterworking; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressLocationOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressLocationOther: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary progressLocationOther
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressLocationOther`.
 */
export
const progressLocationOther: number = NetwCapsChanged_progressLocationOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionISDN
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressDescriptionISDN: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionISDN
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressDescriptionISDN`.
 */
export
const progressDescriptionISDN: number = NetwCapsChanged_progressDescriptionISDN; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionQSIG
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressDescriptionQSIG: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionQSIG
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressDescriptionQSIG`.
 */
export
const progressDescriptionQSIG: number = NetwCapsChanged_progressDescriptionQSIG; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_progressDescriptionOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_progressDescriptionOther: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary progressDescriptionOther
 * @constant
 * @description
 * Alias of `NetwCapsChanged_progressDescriptionOther`.
 */
export
const progressDescriptionOther: number = NetwCapsChanged_progressDescriptionOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.11).
 */
export
const NetwCapsChanged_userData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `NetwCapsChanged_userData`.
 */
export
const userData: number = NetwCapsChanged_userData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkISDNPublic
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_typeOfNetworkISDNPublic: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPublic
 * @constant
 * @description
 * Alias of `NetwCapsChanged_typeOfNetworkISDNPublic`.
 */
export
const typeOfNetworkISDNPublic: number = NetwCapsChanged_typeOfNetworkISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkNonISDNPublic
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_typeOfNetworkNonISDNPublic: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPublic
 * @constant
 * @description
 * Alias of `NetwCapsChanged_typeOfNetworkNonISDNPublic`.
 */
export
const typeOfNetworkNonISDNPublic: number = NetwCapsChanged_typeOfNetworkNonISDNPublic; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkISDNPrivate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_typeOfNetworkISDNPrivate: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkISDNPrivate
 * @constant
 * @description
 * Alias of `NetwCapsChanged_typeOfNetworkISDNPrivate`.
 */
export
const typeOfNetworkISDNPrivate: number = NetwCapsChanged_typeOfNetworkISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkNonISDNPrivate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_typeOfNetworkNonISDNPrivate: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkNonISDNPrivate
 * @constant
 * @description
 * Alias of `NetwCapsChanged_typeOfNetworkNonISDNPrivate`.
 */
export
const typeOfNetworkNonISDNPrivate: number = NetwCapsChanged_typeOfNetworkNonISDNPrivate; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_typeOfNetworkOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_typeOfNetworkOther: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary typeOfNetworkOther
 * @constant
 * @description
 * Alias of `NetwCapsChanged_typeOfNetworkOther`.
 */
export
const typeOfNetworkOther: number = NetwCapsChanged_typeOfNetworkOther; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedParameter
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedParameter: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedParameter
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedParameter`.
 */
export
const eventsProvidedParameter: number = NetwCapsChanged_eventsProvidedParameter; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedBridged
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedBridged: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedBridged
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedBridged`.
 */
export
const eventsProvidedBridged: number = NetwCapsChanged_eventsProvidedBridged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedCallCleared
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedCallCleared: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedCallCleared
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedCallCleared`.
 */
export
const eventsProvidedCallCleared: number = NetwCapsChanged_eventsProvidedCallCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedConferenced
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedConferenced: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConferenced
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedConferenced`.
 */
export
const eventsProvidedConferenced: number = NetwCapsChanged_eventsProvidedConferenced; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedConnectionCleared
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedConnectionCleared: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedConnectionCleared
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedConnectionCleared`.
 */
export
const eventsProvidedConnectionCleared: number = NetwCapsChanged_eventsProvidedConnectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDelivered
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedDelivered: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDelivered
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedDelivered`.
 */
export
const eventsProvidedDelivered: number = NetwCapsChanged_eventsProvidedDelivered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDigitsDialed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedDigitsDialed: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDigitsDialed
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedDigitsDialed`.
 */
export
const eventsProvidedDigitsDialed: number = NetwCapsChanged_eventsProvidedDigitsDialed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedDiverted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedDiverted: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedDiverted
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedDiverted`.
 */
export
const eventsProvidedDiverted: number = NetwCapsChanged_eventsProvidedDiverted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedEstablished
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedEstablished: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedEstablished
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedEstablished`.
 */
export
const eventsProvidedEstablished: number = NetwCapsChanged_eventsProvidedEstablished; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedFailed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedFailed: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedFailed
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedFailed`.
 */
export
const eventsProvidedFailed: number = NetwCapsChanged_eventsProvidedFailed; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedHeld
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedHeld: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedHeld
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedHeld`.
 */
export
const eventsProvidedHeld: number = NetwCapsChanged_eventsProvidedHeld; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedNetwCapsChanged
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedNetwCapsChanged: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwCapsChanged
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedNetwCapsChanged`.
 */
export
const eventsProvidedNetwCapsChanged: number = NetwCapsChanged_eventsProvidedNetwCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedNetwReached
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedNetwReached: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedNetwReached
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedNetwReached`.
 */
export
const eventsProvidedNetwReached: number = NetwCapsChanged_eventsProvidedNetwReached; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedOffered
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedOffered: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOffered
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedOffered`.
 */
export
const eventsProvidedOffered: number = NetwCapsChanged_eventsProvidedOffered; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedOriginated
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedOriginated: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedOriginated
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedOriginated`.
 */
export
const eventsProvidedOriginated: number = NetwCapsChanged_eventsProvidedOriginated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedQueued
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedQueued: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedQueued
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedQueued`.
 */
export
const eventsProvidedQueued: number = NetwCapsChanged_eventsProvidedQueued; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedRetrieved
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedRetrieved: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedRetrieved
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedRetrieved`.
 */
export
const eventsProvidedRetrieved: number = NetwCapsChanged_eventsProvidedRetrieved; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedServiceInitiated
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedServiceInitiated: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedServiceInitiated
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedServiceInitiated`.
 */
export
const eventsProvidedServiceInitiated: number = NetwCapsChanged_eventsProvidedServiceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_eventsProvidedTransferred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_eventsProvidedTransferred: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary eventsProvidedTransferred
 * @constant
 * @description
 * Alias of `NetwCapsChanged_eventsProvidedTransferred`.
 */
export
const eventsProvidedTransferred: number = NetwCapsChanged_eventsProvidedTransferred; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_servicesPermitted: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `NetwCapsChanged_servicesPermitted`.
 */
export
const servicesPermitted: number = NetwCapsChanged_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_mediaCallCharacteristics: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `NetwCapsChanged_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = NetwCapsChanged_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_callCharacteristics: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `NetwCapsChanged_callCharacteristics`.
 */
export
const callCharacteristics: number = NetwCapsChanged_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_outboundConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_outboundConnectionInfo: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary outboundConnectionInfo
 * @constant
 * @description
 * Alias of `NetwCapsChanged_outboundConnectionInfo`.
 */
export
const outboundConnectionInfo: number = NetwCapsChanged_outboundConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_languagePreferences: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `NetwCapsChanged_languagePreferences`.
 */
export
const languagePreferences: number = NetwCapsChanged_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.11).
 */
export
const NetwCapsChanged_privateData: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `NetwCapsChanged_privateData`.
 */
export
const privateData: number = NetwCapsChanged_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary NetwCapsChanged_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.11).
 */
export
const NetwCapsChanged_locationInfoList: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `NetwCapsChanged_locationInfoList`.
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
