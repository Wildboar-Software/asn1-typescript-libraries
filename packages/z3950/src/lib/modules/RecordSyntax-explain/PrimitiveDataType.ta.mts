/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrimitiveDataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimitiveDataType  ::=  INTEGER{
 *                                 octetString     (0),
 *                                 numeric         (1),
 *                                 date            (2),
 *                                 external        (3),
 *                                 string          (4),
 *                                 trueOrFalse     (5),
 *                                 oid             (6),
 *                                 intUnit         (7),
 *                                 empty           (8),
 *                                 noneOfTheAbove  (100) -- see 'description'
 *                   }
 * ```
 */
export
type PrimitiveDataType = INTEGER;

/**
 * @summary PrimitiveDataType_octetString
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_octetString: PrimitiveDataType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_octetString
 * @constant
 * @type {number}
 */
export
const octetString: PrimitiveDataType = PrimitiveDataType_octetString; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_numeric
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_numeric: PrimitiveDataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_numeric
 * @constant
 * @type {number}
 */
export
const numeric: PrimitiveDataType = PrimitiveDataType_numeric; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_date
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_date: PrimitiveDataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_date
 * @constant
 * @type {number}
 */
export
const date: PrimitiveDataType = PrimitiveDataType_date; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_external
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_external: PrimitiveDataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_external
 * @constant
 * @type {number}
 */
export
const external: PrimitiveDataType = PrimitiveDataType_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_string_
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_string_: PrimitiveDataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_string_
 * @constant
 * @type {number}
 */
export
const string_: PrimitiveDataType = PrimitiveDataType_string_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_trueOrFalse
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_trueOrFalse: PrimitiveDataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_trueOrFalse
 * @constant
 * @type {number}
 */
export
const trueOrFalse: PrimitiveDataType = PrimitiveDataType_trueOrFalse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_oid
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_oid: PrimitiveDataType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_oid
 * @constant
 * @type {number}
 */
export
const oid: PrimitiveDataType = PrimitiveDataType_oid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_intUnit
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_intUnit: PrimitiveDataType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_intUnit
 * @constant
 * @type {number}
 */
export
const intUnit: PrimitiveDataType = PrimitiveDataType_intUnit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_empty
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_empty: PrimitiveDataType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_empty
 * @constant
 * @type {number}
 */
export
const empty: PrimitiveDataType = PrimitiveDataType_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_noneOfTheAbove
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_noneOfTheAbove: PrimitiveDataType = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_noneOfTheAbove
 * @constant
 * @type {number}
 */
export
const noneOfTheAbove: PrimitiveDataType = PrimitiveDataType_noneOfTheAbove; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PrimitiveDataType: $.ASN1Decoder<PrimitiveDataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimitiveDataType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrimitiveDataType (el: _Element): PrimitiveDataType {
    if (!_cached_decoder_for_PrimitiveDataType) { _cached_decoder_for_PrimitiveDataType = $._decodeInteger; }
    return _cached_decoder_for_PrimitiveDataType(el);
}

let _cached_encoder_for_PrimitiveDataType: $.ASN1Encoder<PrimitiveDataType> | null = null;

/**
 * @summary Encodes a(n) PrimitiveDataType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimitiveDataType, encoded as an ASN.1 Element.
 */
export
function _encode_PrimitiveDataType (value: PrimitiveDataType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrimitiveDataType) { _cached_encoder_for_PrimitiveDataType = $._encodeInteger; }
    return _cached_encoder_for_PrimitiveDataType(value, elGetter);
}


/* eslint-enable */
