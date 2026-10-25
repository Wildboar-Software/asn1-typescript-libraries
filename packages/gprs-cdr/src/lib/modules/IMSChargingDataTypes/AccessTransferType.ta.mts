/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessTransferType
 * @description
 *
 * Access technologies of an IMS service-continuity transfer: PS to CS, CS
 * to PS, PS to PS, or CS to CS (clause 5.1.11). Reported by the AS in
 * offline and online charging and by the ATCF in offline charging,
 * together with the inter-UE indication, the UE identity, and the
 * access-network information available at the transfer.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.11.
 *
 * This field indicates the type of access transfer performed for IMS service
 * continuity, for instance PS-to-PS in case of SRVCC.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.2aA.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessTransferType {
    pSToCS = 0,
    cSToPS = 1,
    pSToPS = 2,
    cSToCS = 3,
}

/**
 * @summary AccessTransferType
 * @description
 *
 * Access technologies of an IMS service-continuity transfer: PS to CS, CS
 * to PS, PS to PS, or CS to CS (clause 5.1.11). Reported by the AS in
 * offline and online charging and by the ATCF in offline charging,
 * together with the inter-UE indication, the UE identity, and the
 * access-network information available at the transfer.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.11.
 *
 * This field indicates the type of access transfer performed for IMS service
 * continuity, for instance PS-to-PS in case of SRVCC.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.2aA.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type AccessTransferType = _enum_for_AccessTransferType;

/**
 * @summary AccessTransferType
 * @description
 *
 * Access technologies of an IMS service-continuity transfer: PS to CS, CS
 * to PS, PS to PS, or CS to CS (clause 5.1.11). Reported by the AS in
 * offline and online charging and by the ATCF in offline charging,
 * together with the inter-UE indication, the UE identity, and the
 * access-network information available at the transfer.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.11.
 *
 * This field indicates the type of access transfer performed for IMS service
 * continuity, for instance PS-to-PS in case of SRVCC.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.2aA.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const AccessTransferType = _enum_for_AccessTransferType;

/**
 * @summary AccessTransferType_pSToCS
 * @description
 *
 * Packet-switched to circuit-switched access transfer (clause 5.1.11).
 * Requested Party Address may then hold the STN-SR..
 *
 * @constant
 * @type {number}
 */
export
const AccessTransferType_pSToCS = AccessTransferType.pSToCS satisfies AccessTransferType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSToCS
 * @description
 *
 * Packet-switched to circuit-switched access transfer (clause 5.1.11).
 * Requested Party Address may then hold the STN-SR..
 *
 * @constant
 * @type {number}
 */
export
const pSToCS = AccessTransferType.pSToCS satisfies AccessTransferType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_cSToPS
 * @description
 *
 * Circuit-switched to packet-switched access transfer (clause 5.1.11).
 * Requested Party Address may then hold the STI-SR..
 *
 * @constant
 * @type {number}
 */
export
const AccessTransferType_cSToPS = AccessTransferType.cSToPS satisfies AccessTransferType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSToPS
 * @description
 *
 * Circuit-switched to packet-switched access transfer (clause 5.1.11).
 * Requested Party Address may then hold the STI-SR..
 *
 * @constant
 * @type {number}
 */
export
const cSToPS = AccessTransferType.cSToPS satisfies AccessTransferType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_pSToPS
 * @description
 *
 * Packet-switched to packet-switched access transfer (clause 5.1.11). 3GPP
 * TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const AccessTransferType_pSToPS = AccessTransferType.pSToPS satisfies AccessTransferType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSToPS
 * @description
 *
 * Packet-switched to packet-switched access transfer (clause 5.1.11). 3GPP
 * TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const pSToPS = AccessTransferType.pSToPS satisfies AccessTransferType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_cSToCS
 * @description
 *
 * Circuit-switched to circuit-switched access transfer (clause 5.1.11).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const AccessTransferType_cSToCS = AccessTransferType.cSToCS satisfies AccessTransferType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSToCS
 * @description
 *
 * Circuit-switched to circuit-switched access transfer (clause 5.1.11).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const cSToCS = AccessTransferType.cSToCS satisfies AccessTransferType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AccessTransferType: $.ASN1Decoder<AccessTransferType> = $._decodeEnumerated;

export
const _encode_AccessTransferType: $.ASN1Encoder<AccessTransferType> = $._encodeEnumerated;

/* eslint-enable */
