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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_StrengthOfFunction */
/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```@enum {number}
 */
export
enum _enum_for_StrengthOfFunction {
    basic = 0,
    medium = 1,
    high = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION StrengthOfFunction */
/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```@enum {number}
 */
export
type StrengthOfFunction = _enum_for_StrengthOfFunction;
/* END_OF_SYMBOL_DEFINITION StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION StrengthOfFunction */
/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```@enum {number}
 */
export
const StrengthOfFunction = _enum_for_StrengthOfFunction;
/* END_OF_SYMBOL_DEFINITION StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION StrengthOfFunction_basic */
/**
 * @summary StrengthOfFunction_basic
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_basic: StrengthOfFunction = StrengthOfFunction.basic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StrengthOfFunction_basic */

/* START_OF_SYMBOL_DEFINITION basic */
/**
 * @summary basic
 * @constant
 * @type {number}
 */
export
const basic: StrengthOfFunction = StrengthOfFunction.basic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION basic */

/* START_OF_SYMBOL_DEFINITION StrengthOfFunction_medium */
/**
 * @summary StrengthOfFunction_medium
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_medium: StrengthOfFunction = StrengthOfFunction.medium; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StrengthOfFunction_medium */

/* START_OF_SYMBOL_DEFINITION medium */
/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: StrengthOfFunction = StrengthOfFunction.medium; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION medium */

/* START_OF_SYMBOL_DEFINITION StrengthOfFunction_high */
/**
 * @summary StrengthOfFunction_high
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_high: StrengthOfFunction = StrengthOfFunction.high; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StrengthOfFunction_high */

/* START_OF_SYMBOL_DEFINITION high */
/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: StrengthOfFunction = StrengthOfFunction.high; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION high */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StrengthOfFunction */
let _cached_decoder_for_StrengthOfFunction: $.ASN1Decoder<StrengthOfFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION _decode_StrengthOfFunction */
/**
 * @summary Decodes an ASN.1 element into a(n) StrengthOfFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StrengthOfFunction} The decoded data structure.
 */
export
function _decode_StrengthOfFunction (el: _Element) {
    if (!_cached_decoder_for_StrengthOfFunction) { _cached_decoder_for_StrengthOfFunction = $._decodeEnumerated; }
    return _cached_decoder_for_StrengthOfFunction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StrengthOfFunction */
let _cached_encoder_for_StrengthOfFunction: $.ASN1Encoder<StrengthOfFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StrengthOfFunction */

/* START_OF_SYMBOL_DEFINITION _encode_StrengthOfFunction */
/**
 * @summary Encodes a(n) StrengthOfFunction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StrengthOfFunction, encoded as an ASN.1 Element.
 */
export
function _encode_StrengthOfFunction (value: StrengthOfFunction, elGetter: $.ASN1Encoder<StrengthOfFunction>) {
    if (!_cached_encoder_for_StrengthOfFunction) { _cached_encoder_for_StrengthOfFunction = $._encodeEnumerated; }
    return _cached_encoder_for_StrengthOfFunction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StrengthOfFunction */

/* eslint-enable */
