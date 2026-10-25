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
const TLS13ExtensionType = _enum_for_TLS13ExtensionType;

/**
 * @summary TLS13ExtensionType_serverName
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverName = TLS13ExtensionType.serverName satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverName
 * @constant
 * @type {number}
 */
export
const serverName = TLS13ExtensionType.serverName satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_maxFragmentLength
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_maxFragmentLength = TLS13ExtensionType.maxFragmentLength satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxFragmentLength
 * @constant
 * @type {number}
 */
export
const maxFragmentLength = TLS13ExtensionType.maxFragmentLength satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_statusRequest
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_statusRequest = TLS13ExtensionType.statusRequest satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusRequest
 * @constant
 * @type {number}
 */
export
const statusRequest = TLS13ExtensionType.statusRequest satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedGroups
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedGroups = TLS13ExtensionType.supportedGroups satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedGroups
 * @constant
 * @type {number}
 */
export
const supportedGroups = TLS13ExtensionType.supportedGroups satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithms = TLS13ExtensionType.signatureAlgorithms satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithms
 * @constant
 * @type {number}
 */
export
const signatureAlgorithms = TLS13ExtensionType.signatureAlgorithms satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_useSRTP
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_useSRTP = TLS13ExtensionType.useSRTP satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary useSRTP
 * @constant
 * @type {number}
 */
export
const useSRTP = TLS13ExtensionType.useSRTP satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_heartbeat
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_heartbeat = TLS13ExtensionType.heartbeat satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heartbeat
 * @constant
 * @type {number}
 */
export
const heartbeat = TLS13ExtensionType.heartbeat satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_applicationLayerProtocolNegotiation = TLS13ExtensionType.applicationLayerProtocolNegotiation satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationLayerProtocolNegotiation
 * @constant
 * @type {number}
 */
export
const applicationLayerProtocolNegotiation = TLS13ExtensionType.applicationLayerProtocolNegotiation satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signedCertificateTimestamp = TLS13ExtensionType.signedCertificateTimestamp satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signedCertificateTimestamp
 * @constant
 * @type {number}
 */
export
const signedCertificateTimestamp = TLS13ExtensionType.signedCertificateTimestamp satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_clientCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_clientCertificateType = TLS13ExtensionType.clientCertificateType satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientCertificateType
 * @constant
 * @type {number}
 */
export
const clientCertificateType = TLS13ExtensionType.clientCertificateType satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_serverCertificateType
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_serverCertificateType = TLS13ExtensionType.serverCertificateType satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serverCertificateType
 * @constant
 * @type {number}
 */
export
const serverCertificateType = TLS13ExtensionType.serverCertificateType satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_padding
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_padding = TLS13ExtensionType.padding satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary padding
 * @constant
 * @type {number}
 */
export
const padding = TLS13ExtensionType.padding satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_presharedKey
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_presharedKey = TLS13ExtensionType.presharedKey satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presharedKey
 * @constant
 * @type {number}
 */
export
const presharedKey = TLS13ExtensionType.presharedKey satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_earlyData
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_earlyData = TLS13ExtensionType.earlyData satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyData
 * @constant
 * @type {number}
 */
export
const earlyData = TLS13ExtensionType.earlyData satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_supportedVersions
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_supportedVersions = TLS13ExtensionType.supportedVersions satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedVersions
 * @constant
 * @type {number}
 */
export
const supportedVersions = TLS13ExtensionType.supportedVersions satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_cookie
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_cookie = TLS13ExtensionType.cookie satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cookie
 * @constant
 * @type {number}
 */
export
const cookie = TLS13ExtensionType.cookie satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_pSKKeyExchangeModes = TLS13ExtensionType.pSKKeyExchangeModes satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKKeyExchangeModes
 * @constant
 * @type {number}
 */
export
const pSKKeyExchangeModes = TLS13ExtensionType.pSKKeyExchangeModes satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_certificateAuthorities
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_certificateAuthorities = TLS13ExtensionType.certificateAuthorities satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificateAuthorities
 * @constant
 * @type {number}
 */
export
const certificateAuthorities = TLS13ExtensionType.certificateAuthorities satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_oIDFilters
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_oIDFilters = TLS13ExtensionType.oIDFilters satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oIDFilters
 * @constant
 * @type {number}
 */
export
const oIDFilters = TLS13ExtensionType.oIDFilters satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_postHandshakeAuth = TLS13ExtensionType.postHandshakeAuth satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary postHandshakeAuth
 * @constant
 * @type {number}
 */
export
const postHandshakeAuth = TLS13ExtensionType.postHandshakeAuth satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_signatureAlgorithmsCert = TLS13ExtensionType.signatureAlgorithmsCert satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signatureAlgorithmsCert
 * @constant
 * @type {number}
 */
export
const signatureAlgorithmsCert = TLS13ExtensionType.signatureAlgorithmsCert satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13ExtensionType_keyShare
 * @constant
 * @type {number}
 */
export
const TLS13ExtensionType_keyShare = TLS13ExtensionType.keyShare satisfies TLS13ExtensionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyShare
 * @constant
 * @type {number}
 */
export
const keyShare = TLS13ExtensionType.keyShare satisfies TLS13ExtensionType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLS13ExtensionType: $.ASN1Decoder<TLS13ExtensionType> = $._decodeEnumerated;
export const _encode_TLS13ExtensionType: $.ASN1Encoder<TLS13ExtensionType> = $._encodeEnumerated;


/* eslint-enable */
