/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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



/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V8Diag_Item_v8Result {
    v8ComNeg = 0,
    v8NoComNeg = 1,
    v8NoNegAuto = 2,
}

/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type V8Diag_Item_v8Result = _enum_for_V8Diag_Item_v8Result;

/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const V8Diag_Item_v8Result = _enum_for_V8Diag_Item_v8Result;

/**
 * @summary V8Diag_Item_v8Result_v8ComNeg
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8ComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8ComNeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8ComNeg
 * @constant
 * @type {number}
 */
export
const v8ComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8ComNeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V8Diag_Item_v8Result_v8NoComNeg
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8NoComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoComNeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8NoComNeg
 * @constant
 * @type {number}
 */
export
const v8NoComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoComNeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V8Diag_Item_v8Result_v8NoNegAuto
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8NoNegAuto: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoNegAuto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8NoNegAuto
 * @constant
 * @type {number}
 */
export
const v8NoNegAuto: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoNegAuto; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_V8Diag_Item_v8Result: $.ASN1Decoder<V8Diag_Item_v8Result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8Diag_Item_v8Result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8Diag_Item_v8Result (el: _Element): V8Diag_Item_v8Result {
    if (!_cached_decoder_for_V8Diag_Item_v8Result) { _cached_decoder_for_V8Diag_Item_v8Result = $._decodeEnumerated; }
    return _cached_decoder_for_V8Diag_Item_v8Result(el);
}

let _cached_encoder_for_V8Diag_Item_v8Result: $.ASN1Encoder<V8Diag_Item_v8Result> | null = null;

/**
 * @summary Encodes a(n) V8Diag_Item_v8Result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8Diag_Item_v8Result, encoded as an ASN.1 Element.
 */
export
function _encode_V8Diag_Item_v8Result (value: V8Diag_Item_v8Result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8Diag_Item_v8Result) { _cached_encoder_for_V8Diag_Item_v8Result = $._encodeEnumerated; }
    return _cached_encoder_for_V8Diag_Item_v8Result(value, elGetter);
}


/* eslint-enable */
