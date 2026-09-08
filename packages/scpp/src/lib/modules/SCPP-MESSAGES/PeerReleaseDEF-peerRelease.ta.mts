/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeerReleaseDEF_peerRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerReleaseDEF-peerRelease ::= ENUMERATED {
 *     request(0),
 *     confirm(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeerReleaseDEF_peerRelease {
    request = 0,
    confirm = 1,
}

/**
 * @summary PeerReleaseDEF_peerRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerReleaseDEF-peerRelease ::= ENUMERATED {
 *     request(0),
 *     confirm(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PeerReleaseDEF_peerRelease = _enum_for_PeerReleaseDEF_peerRelease;

/**
 * @summary PeerReleaseDEF_peerRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerReleaseDEF-peerRelease ::= ENUMERATED {
 *     request(0),
 *     confirm(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PeerReleaseDEF_peerRelease = _enum_for_PeerReleaseDEF_peerRelease;

/**
 * @summary PeerReleaseDEF_peerRelease_request
 * @constant
 * @type {number}
 */
export
const PeerReleaseDEF_peerRelease_request: PeerReleaseDEF_peerRelease = PeerReleaseDEF_peerRelease.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: PeerReleaseDEF_peerRelease = PeerReleaseDEF_peerRelease.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeerReleaseDEF_peerRelease_confirm
 * @constant
 * @type {number}
 */
export
const PeerReleaseDEF_peerRelease_confirm: PeerReleaseDEF_peerRelease = PeerReleaseDEF_peerRelease.confirm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirm
 * @constant
 * @type {number}
 */
export
const confirm: PeerReleaseDEF_peerRelease = PeerReleaseDEF_peerRelease.confirm; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PeerReleaseDEF_peerRelease = $._decodeEnumerated;
export const _encode_PeerReleaseDEF_peerRelease = $._encodeEnumerated;


/* eslint-enable */
