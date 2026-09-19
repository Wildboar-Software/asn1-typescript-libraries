/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13ExtensionType  ::=  ENUMERATED
 * {
 *         serverName(1),
 *         maxFragmentLength(2),
 *         statusRequest(3),
 *         supportedGroups(4),
 *         signatureAlgorithms(5),
 *         useSRTP(6),
 *         heartbeat(7),
 *         applicationLayerProtocolNegotiation(8),
 *         signedCertificateTimestamp(9),
 *         clientCertificateType(10),
 *         serverCertificateType(11),
 *         padding(12),
 *         presharedKey(13),
 *         earlyData(14),
 *         supportedVersions(15),
 *         cookie(16),
 *         pSKKeyExchangeModes(17),
 *         certificateAuthorities(18),
 *         oIDFilters(19),
 *         postHandshakeAuth(20),
 *         signatureAlgorithmsCert(21),
 *         keyShare(22)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13ExtensionType {
    serverName = 1,
    maxFragmentLength = 2,
    statusRequest = 3,
    supportedGroups = 4,
    signatureAlgorithms = 5,
    useSRTP = 6,
    heartbeat = 7,
    applicationLayerProtocolNegotiation = 8,
    signedCertificateTimestamp = 9,
    clientCertificateType = 10,
    serverCertificateType = 11,
    padding = 12,
    presharedKey = 13,
    earlyData = 14,
    supportedVersions = 15,
    cookie = 16,
    pSKKeyExchangeModes = 17,
    certificateAuthorities = 18,
    oIDFilters = 19,
    postHandshakeAuth = 20,
    signatureAlgorithmsCert = 21,
    keyShare = 22,
}

/**
 * @summary TLS13ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13ExtensionType  ::=  ENUMERATED
 * {
 *         serverName(1),
 *         maxFragmentLength(2),
 *         statusRequest(3),
 *         supportedGroups(4),
 *         signatureAlgorithms(5),
 *         useSRTP(6),
 *         heartbeat(7),
 *         applicationLayerProtocolNegotiation(8),
 *         signedCertificateTimestamp(9),
 *         clientCertificateType(10),
 *         serverCertificateType(11),
 *         padding(12),
 *         presharedKey(13),
 *         earlyData(14),
 *         supportedVersions(15),
 *         cookie(16),
 *         pSKKeyExchangeModes(17),
 *         certificateAuthorities(18),
 *         oIDFilters(19),
 *         postHandshakeAuth(20),
 *         signatureAlgorithmsCert(21),
 *         keyShare(22)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13ExtensionType = _enum_for_TLS13ExtensionType;

/**
 * @summary TLS13ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13ExtensionType  ::=  ENUMERATED
 * {
 *         serverName(1),
 *         maxFragmentLength(2),
 *         statusRequest(3),
 *         supportedGroups(4),
 *         signatureAlgorithms(5),
 *         useSRTP(6),
 *         heartbeat(7),
 *         applicationLayerProtocolNegotiation(8),
 *         signedCertificateTimestamp(9),
 *         clientCertificateType(10),
 *         serverCertificateType(11),
 *         padding(12),
 *         presharedKey(13),
 *         earlyData(14),
 *         supportedVersions(15),
 *         cookie(16),
 *         pSKKeyExchangeModes(17),
 *         certificateAuthorities(18),
 *         oIDFilters(19),
 *         postHandshakeAuth(20),
 *         signatureAlgorithmsCert(21),
 *         keyShare(22)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13ExtensionType = _enum_for_TLS13ExtensionType;

/**
 * @summary TLS13ExtensionType_serverName
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverName: TLS13ExtensionType = TLS13ExtensionType.serverName; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverName
 * @constant
 * @type {number}
 */
export
const serverName: TLS13ExtensionType = TLS13ExtensionType.serverName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_maxFragmentLength
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_maxFragmentLength: TLS13ExtensionType = TLS13ExtensionType.maxFragmentLength; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxFragmentLength
 * @constant
 * @type {number}
 */
export
const maxFragmentLength: TLS13ExtensionType = TLS13ExtensionType.maxFragmentLength; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_statusRequest
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_statusRequest: TLS13ExtensionType = TLS13ExtensionType.statusRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusRequest
 * @constant
 * @type {number}
 */
export
const statusRequest: TLS13ExtensionType = TLS13ExtensionType.statusRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedGroups
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedGroups: TLS13ExtensionType = TLS13ExtensionType.supportedGroups; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedGroups
 * @constant
 * @type {number}
 */
export
const supportedGroups: TLS13ExtensionType = TLS13ExtensionType.supportedGroups; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithms: TLS13ExtensionType = TLS13ExtensionType.signatureAlgorithms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const signatureAlgorithms: TLS13ExtensionType = TLS13ExtensionType.signatureAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_useSRTP
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_useSRTP: TLS13ExtensionType = TLS13ExtensionType.useSRTP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary useSRTP
 * @constant
 * @type {number}
 */
export
const useSRTP: TLS13ExtensionType = TLS13ExtensionType.useSRTP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_heartbeat
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_heartbeat: TLS13ExtensionType = TLS13ExtensionType.heartbeat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heartbeat
 * @constant
 * @type {number}
 */
export
const heartbeat: TLS13ExtensionType = TLS13ExtensionType.heartbeat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_applicationLayerProtocolNegotiation: TLS13ExtensionType = TLS13ExtensionType.applicationLayerProtocolNegotiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const applicationLayerProtocolNegotiation: TLS13ExtensionType = TLS13ExtensionType.applicationLayerProtocolNegotiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signedCertificateTimestamp: TLS13ExtensionType = TLS13ExtensionType.signedCertificateTimestamp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const signedCertificateTimestamp: TLS13ExtensionType = TLS13ExtensionType.signedCertificateTimestamp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_clientCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_clientCertificateType: TLS13ExtensionType = TLS13ExtensionType.clientCertificateType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientCertificateType
 * @constant
 * @type {number}
 */
export
const clientCertificateType: TLS13ExtensionType = TLS13ExtensionType.clientCertificateType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_serverCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverCertificateType: TLS13ExtensionType = TLS13ExtensionType.serverCertificateType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverCertificateType
 * @constant
 * @type {number}
 */
export
const serverCertificateType: TLS13ExtensionType = TLS13ExtensionType.serverCertificateType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_padding
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_padding: TLS13ExtensionType = TLS13ExtensionType.padding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary padding
 * @constant
 * @type {number}
 */
export
const padding: TLS13ExtensionType = TLS13ExtensionType.padding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_presharedKey
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_presharedKey: TLS13ExtensionType = TLS13ExtensionType.presharedKey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presharedKey
 * @constant
 * @type {number}
 */
export
const presharedKey: TLS13ExtensionType = TLS13ExtensionType.presharedKey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_earlyData
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_earlyData: TLS13ExtensionType = TLS13ExtensionType.earlyData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyData
 * @constant
 * @type {number}
 */
export
const earlyData: TLS13ExtensionType = TLS13ExtensionType.earlyData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedVersions
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedVersions: TLS13ExtensionType = TLS13ExtensionType.supportedVersions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedVersions
 * @constant
 * @type {number}
 */
export
const supportedVersions: TLS13ExtensionType = TLS13ExtensionType.supportedVersions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_cookie
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_cookie: TLS13ExtensionType = TLS13ExtensionType.cookie; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cookie
 * @constant
 * @type {number}
 */
export
const cookie: TLS13ExtensionType = TLS13ExtensionType.cookie; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_pSKKeyExchangeModes: TLS13ExtensionType = TLS13ExtensionType.pSKKeyExchangeModes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const pSKKeyExchangeModes: TLS13ExtensionType = TLS13ExtensionType.pSKKeyExchangeModes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_certificateAuthorities
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_certificateAuthorities: TLS13ExtensionType = TLS13ExtensionType.certificateAuthorities; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificateAuthorities
 * @constant
 * @type {number}
 */
export
const certificateAuthorities: TLS13ExtensionType = TLS13ExtensionType.certificateAuthorities; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_oIDFilters
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_oIDFilters: TLS13ExtensionType = TLS13ExtensionType.oIDFilters; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oIDFilters
 * @constant
 * @type {number}
 */
export
const oIDFilters: TLS13ExtensionType = TLS13ExtensionType.oIDFilters; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_postHandshakeAuth: TLS13ExtensionType = TLS13ExtensionType.postHandshakeAuth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const postHandshakeAuth: TLS13ExtensionType = TLS13ExtensionType.postHandshakeAuth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithmsCert: TLS13ExtensionType = TLS13ExtensionType.signatureAlgorithmsCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const signatureAlgorithmsCert: TLS13ExtensionType = TLS13ExtensionType.signatureAlgorithmsCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_keyShare
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_keyShare: TLS13ExtensionType = TLS13ExtensionType.keyShare; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyShare
 * @constant
 * @type {number}
 */
export
const keyShare: TLS13ExtensionType = TLS13ExtensionType.keyShare; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLS13ExtensionType: $.ASN1Decoder<TLS13ExtensionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13ExtensionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13ExtensionType (el: _Element): TLS13ExtensionType {
    if (!_cached_decoder_for_TLS13ExtensionType) { _cached_decoder_for_TLS13ExtensionType = $._decodeEnumerated; }
    return _cached_decoder_for_TLS13ExtensionType(el);
}

let _cached_encoder_for_TLS13ExtensionType: $.ASN1Encoder<TLS13ExtensionType> | null = null;

/**
 * @summary Encodes a(n) TLS13ExtensionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13ExtensionType, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13ExtensionType (value: TLS13ExtensionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13ExtensionType) { _cached_encoder_for_TLS13ExtensionType = $._encodeEnumerated; }
    return _cached_encoder_for_TLS13ExtensionType(value, elGetter);
}


/* eslint-enable */
