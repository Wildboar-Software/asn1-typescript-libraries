/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_function
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-function ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesRequest_function = INTEGER;

/**
 * @summary ExtendedServicesRequest_function_create
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_create: ExtendedServicesRequest_function = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_create
 * @constant
 * @type {number}
 */
export
const create: ExtendedServicesRequest_function = ExtendedServicesRequest_function_create; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_delete_: ExtendedServicesRequest_function = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @constant
 * @type {number}
 */
export
const delete_: ExtendedServicesRequest_function = ExtendedServicesRequest_function_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_modify: ExtendedServicesRequest_function = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @constant
 * @type {number}
 */
export
const modify: ExtendedServicesRequest_function = ExtendedServicesRequest_function_modify; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ExtendedServicesRequest_function: $.ASN1Decoder<ExtendedServicesRequest_function> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesRequest_function
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesRequest_function (el: _Element): ExtendedServicesRequest_function {
    if (!_cached_decoder_for_ExtendedServicesRequest_function) { _cached_decoder_for_ExtendedServicesRequest_function = $._decodeInteger; }
    return _cached_decoder_for_ExtendedServicesRequest_function(el);
}

let _cached_encoder_for_ExtendedServicesRequest_function: $.ASN1Encoder<ExtendedServicesRequest_function> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesRequest_function into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesRequest_function, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesRequest_function (value: ExtendedServicesRequest_function, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesRequest_function) { _cached_encoder_for_ExtendedServicesRequest_function = $._encodeInteger; }
    return _cached_encoder_for_ExtendedServicesRequest_function(value, elGetter);
}


/* eslint-enable */
