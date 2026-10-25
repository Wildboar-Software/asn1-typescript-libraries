/* eslint-disable */
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
const TLS13ExtensionType: typeof _enum_for_TLS13ExtensionType = _enum_for_TLS13ExtensionType;

/**
 * @summary TLS13ExtensionType_serverName
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverName: _enum_for_TLS13ExtensionType.serverName = TLS13ExtensionType.serverName; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverName
 * @constant
 * @type {number}
 */
export
const serverName: _enum_for_TLS13ExtensionType.serverName = TLS13ExtensionType.serverName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_maxFragmentLength
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_maxFragmentLength: _enum_for_TLS13ExtensionType.maxFragmentLength = TLS13ExtensionType.maxFragmentLength; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxFragmentLength
 * @constant
 * @type {number}
 */
export
const maxFragmentLength: _enum_for_TLS13ExtensionType.maxFragmentLength = TLS13ExtensionType.maxFragmentLength; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_statusRequest
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_statusRequest: _enum_for_TLS13ExtensionType.statusRequest = TLS13ExtensionType.statusRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusRequest
 * @constant
 * @type {number}
 */
export
const statusRequest: _enum_for_TLS13ExtensionType.statusRequest = TLS13ExtensionType.statusRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedGroups
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedGroups: _enum_for_TLS13ExtensionType.supportedGroups = TLS13ExtensionType.supportedGroups; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedGroups
 * @constant
 * @type {number}
 */
export
const supportedGroups: _enum_for_TLS13ExtensionType.supportedGroups = TLS13ExtensionType.supportedGroups; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithms: _enum_for_TLS13ExtensionType.signatureAlgorithms = TLS13ExtensionType.signatureAlgorithms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const signatureAlgorithms: _enum_for_TLS13ExtensionType.signatureAlgorithms = TLS13ExtensionType.signatureAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_useSRTP
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_useSRTP: _enum_for_TLS13ExtensionType.useSRTP = TLS13ExtensionType.useSRTP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary useSRTP
 * @constant
 * @type {number}
 */
export
const useSRTP: _enum_for_TLS13ExtensionType.useSRTP = TLS13ExtensionType.useSRTP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_heartbeat
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_heartbeat: _enum_for_TLS13ExtensionType.heartbeat = TLS13ExtensionType.heartbeat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heartbeat
 * @constant
 * @type {number}
 */
export
const heartbeat: _enum_for_TLS13ExtensionType.heartbeat = TLS13ExtensionType.heartbeat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_applicationLayerProtocolNegotiation: _enum_for_TLS13ExtensionType.applicationLayerProtocolNegotiation = TLS13ExtensionType.applicationLayerProtocolNegotiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const applicationLayerProtocolNegotiation: _enum_for_TLS13ExtensionType.applicationLayerProtocolNegotiation = TLS13ExtensionType.applicationLayerProtocolNegotiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signedCertificateTimestamp: _enum_for_TLS13ExtensionType.signedCertificateTimestamp = TLS13ExtensionType.signedCertificateTimestamp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const signedCertificateTimestamp: _enum_for_TLS13ExtensionType.signedCertificateTimestamp = TLS13ExtensionType.signedCertificateTimestamp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_clientCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_clientCertificateType: _enum_for_TLS13ExtensionType.clientCertificateType = TLS13ExtensionType.clientCertificateType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientCertificateType
 * @constant
 * @type {number}
 */
export
const clientCertificateType: _enum_for_TLS13ExtensionType.clientCertificateType = TLS13ExtensionType.clientCertificateType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_serverCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverCertificateType: _enum_for_TLS13ExtensionType.serverCertificateType = TLS13ExtensionType.serverCertificateType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverCertificateType
 * @constant
 * @type {number}
 */
export
const serverCertificateType: _enum_for_TLS13ExtensionType.serverCertificateType = TLS13ExtensionType.serverCertificateType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_padding
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_padding: _enum_for_TLS13ExtensionType.padding = TLS13ExtensionType.padding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary padding
 * @constant
 * @type {number}
 */
export
const padding: _enum_for_TLS13ExtensionType.padding = TLS13ExtensionType.padding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_presharedKey
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_presharedKey: _enum_for_TLS13ExtensionType.presharedKey = TLS13ExtensionType.presharedKey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presharedKey
 * @constant
 * @type {number}
 */
export
const presharedKey: _enum_for_TLS13ExtensionType.presharedKey = TLS13ExtensionType.presharedKey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_earlyData
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_earlyData: _enum_for_TLS13ExtensionType.earlyData = TLS13ExtensionType.earlyData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyData
 * @constant
 * @type {number}
 */
export
const earlyData: _enum_for_TLS13ExtensionType.earlyData = TLS13ExtensionType.earlyData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedVersions
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedVersions: _enum_for_TLS13ExtensionType.supportedVersions = TLS13ExtensionType.supportedVersions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedVersions
 * @constant
 * @type {number}
 */
export
const supportedVersions: _enum_for_TLS13ExtensionType.supportedVersions = TLS13ExtensionType.supportedVersions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_cookie
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_cookie: _enum_for_TLS13ExtensionType.cookie = TLS13ExtensionType.cookie; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cookie
 * @constant
 * @type {number}
 */
export
const cookie: _enum_for_TLS13ExtensionType.cookie = TLS13ExtensionType.cookie; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_pSKKeyExchangeModes: _enum_for_TLS13ExtensionType.pSKKeyExchangeModes = TLS13ExtensionType.pSKKeyExchangeModes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const pSKKeyExchangeModes: _enum_for_TLS13ExtensionType.pSKKeyExchangeModes = TLS13ExtensionType.pSKKeyExchangeModes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_certificateAuthorities
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_certificateAuthorities: _enum_for_TLS13ExtensionType.certificateAuthorities = TLS13ExtensionType.certificateAuthorities; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificateAuthorities
 * @constant
 * @type {number}
 */
export
const certificateAuthorities: _enum_for_TLS13ExtensionType.certificateAuthorities = TLS13ExtensionType.certificateAuthorities; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_oIDFilters
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_oIDFilters: _enum_for_TLS13ExtensionType.oIDFilters = TLS13ExtensionType.oIDFilters; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oIDFilters
 * @constant
 * @type {number}
 */
export
const oIDFilters: _enum_for_TLS13ExtensionType.oIDFilters = TLS13ExtensionType.oIDFilters; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_postHandshakeAuth: _enum_for_TLS13ExtensionType.postHandshakeAuth = TLS13ExtensionType.postHandshakeAuth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const postHandshakeAuth: _enum_for_TLS13ExtensionType.postHandshakeAuth = TLS13ExtensionType.postHandshakeAuth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithmsCert: _enum_for_TLS13ExtensionType.signatureAlgorithmsCert = TLS13ExtensionType.signatureAlgorithmsCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const signatureAlgorithmsCert: _enum_for_TLS13ExtensionType.signatureAlgorithmsCert = TLS13ExtensionType.signatureAlgorithmsCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_keyShare
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_keyShare: _enum_for_TLS13ExtensionType.keyShare = TLS13ExtensionType.keyShare; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyShare
 * @constant
 * @type {number}
 */
export
const keyShare: _enum_for_TLS13ExtensionType.keyShare = TLS13ExtensionType.keyShare; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLS13ExtensionType: $.ASN1Decoder<TLS13ExtensionType> = $._decodeEnumerated;
export const _encode_TLS13ExtensionType: $.ASN1Encoder<TLS13ExtensionType> = $._encodeEnumerated;


/* eslint-enable */
