/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataPathDirection
 * @description
 *
 * Direction of transfer on the data path (ECMA-269 §24.2.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathDirection  ::=  ENUMERATED
 * {    computeFunctionToObject        (0),
 *     objectToComputeFunction        (1),
 *     bidirectional            (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DataPathDirection {
    computeFunctionToObject = 0,
    objectToComputeFunction = 1,
    bidirectional = 2,
}

/**
 * @summary DataPathDirection
 * @description
 *
 * Direction of transfer on the data path (ECMA-269 §24.2.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathDirection  ::=  ENUMERATED
 * {    computeFunctionToObject        (0),
 *     objectToComputeFunction        (1),
 *     bidirectional            (2) }
 * ```
 * 
 * @enum {number}
 */
export
type DataPathDirection = _enum_for_DataPathDirection;

/**
 * @summary DataPathDirection
 * @description
 *
 * Direction of transfer on the data path (ECMA-269 §24.2.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathDirection  ::=  ENUMERATED
 * {    computeFunctionToObject        (0),
 *     objectToComputeFunction        (1),
 *     bidirectional            (2) }
 * ```
 * 
 * @enum {number}
 */
export
const DataPathDirection = _enum_for_DataPathDirection;

/**
 * @summary DataPathDirection_computeFunctionToObject
 * @description
 *
 * Computing function toward the identified object (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const DataPathDirection_computeFunctionToObject: DataPathDirection = DataPathDirection.computeFunctionToObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary computeFunctionToObject
 * @description
 *
 * Computing function toward the identified object (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const computeFunctionToObject: DataPathDirection = DataPathDirection.computeFunctionToObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataPathDirection_objectToComputeFunction
 * @description
 *
 * Identified object toward the computing function (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const DataPathDirection_objectToComputeFunction: DataPathDirection = DataPathDirection.objectToComputeFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectToComputeFunction
 * @description
 *
 * Identified object toward the computing function (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const objectToComputeFunction: DataPathDirection = DataPathDirection.objectToComputeFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataPathDirection_bidirectional
 * @description
 *
 * Both directions between computing function and object (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const DataPathDirection_bidirectional: DataPathDirection = DataPathDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bidirectional
 * @description
 *
 * Both directions between computing function and object (ECMA-269 §24.2.8.1).
 *
 * @constant
 * @type {number}
 */
export
const bidirectional: DataPathDirection = DataPathDirection.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DataPathDirection: $.ASN1Decoder<DataPathDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathDirection (el: _Element): DataPathDirection {
    if (!_cached_decoder_for_DataPathDirection) { _cached_decoder_for_DataPathDirection = $._decodeEnumerated; }
    return _cached_decoder_for_DataPathDirection(el);
}

let _cached_encoder_for_DataPathDirection: $.ASN1Encoder<DataPathDirection> | null = null;

/**
 * @summary Encodes a(n) DataPathDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathDirection, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathDirection (value: DataPathDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathDirection) { _cached_encoder_for_DataPathDirection = $._encodeEnumerated; }
    return _cached_encoder_for_DataPathDirection(value, elGetter);
}


/* eslint-enable */
