/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductionStatus               ::=    INTEGER
 * {  operational                   (0)
 * ,  configured                    (1)
 * ,  interrupted                   (2)
 * ,  halted                        (3)
 * }
 * ```
 */
export
type ProductionStatus = INTEGER;

/**
 * @summary ProductionStatus_operational
 * @constant
 * @type {number}
 */
export
const ProductionStatus_operational: ProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_operational
 * @constant
 * @type {number}
 */
export
const operational: ProductionStatus = ProductionStatus_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const ProductionStatus_configured: ProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const configured: ProductionStatus = ProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const ProductionStatus_interrupted: ProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: ProductionStatus = ProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const ProductionStatus_halted: ProductionStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: ProductionStatus = ProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProductionStatus: $.ASN1Decoder<ProductionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProductionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProductionStatus (el: _Element): ProductionStatus {
    if (!_cached_decoder_for_ProductionStatus) { _cached_decoder_for_ProductionStatus = $._decodeInteger; }
    return _cached_decoder_for_ProductionStatus(el);
}

let _cached_encoder_for_ProductionStatus: $.ASN1Encoder<ProductionStatus> | null = null;

/**
 * @summary Encodes a(n) ProductionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProductionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ProductionStatus (value: ProductionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProductionStatus) { _cached_encoder_for_ProductionStatus = $._encodeInteger; }
    return _cached_encoder_for_ProductionStatus(value, elGetter);
}


/* eslint-enable */
