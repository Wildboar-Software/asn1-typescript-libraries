/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Initiator {
    uE = 1,
    network = 2,
    unknown = 3,
}

/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Initiator = _enum_for_Initiator;

/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Initiator = _enum_for_Initiator;

/**
 * @summary Initiator_uE
 * @constant
 * @type {number}
 */
export
const Initiator_uE: Initiator = Initiator.uE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE
 * @constant
 * @type {number}
 */
export
const uE: Initiator = Initiator.uE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Initiator_network
 * @constant
 * @type {number}
 */
export
const Initiator_network: Initiator = Initiator.network; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary network
 * @constant
 * @type {number}
 */
export
const network: Initiator = Initiator.network; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Initiator_unknown
 * @constant
 * @type {number}
 */
export
const Initiator_unknown: Initiator = Initiator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Initiator = Initiator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Initiator: $.ASN1Decoder<Initiator> = $._decodeEnumerated;

export const _encode_Initiator: $.ASN1Encoder<Initiator> = $._encodeEnumerated;


/* eslint-enable */
