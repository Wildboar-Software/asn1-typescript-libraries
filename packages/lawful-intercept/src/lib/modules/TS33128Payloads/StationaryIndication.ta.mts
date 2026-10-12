/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StationaryIndication {
    stationary = 1,
    mobile = 2,
}

/**
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication_stationary
 * @constant
 * @type {number}
 */
export
const StationaryIndication_stationary: StationaryIndication = StationaryIndication.stationary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stationary
 * @constant
 * @type {number}
 */
export
const stationary: StationaryIndication = StationaryIndication.stationary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StationaryIndication_mobile
 * @constant
 * @type {number}
 */
export
const StationaryIndication_mobile: StationaryIndication = StationaryIndication.mobile; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobile
 * @constant
 * @type {number}
 */
export
const mobile: StationaryIndication = StationaryIndication.mobile; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StationaryIndication: $.ASN1Decoder<StationaryIndication> = $._decodeEnumerated;
export const _encode_StationaryIndication: $.ASN1Encoder<StationaryIndication> = $._encodeEnumerated;


/* eslint-enable */
