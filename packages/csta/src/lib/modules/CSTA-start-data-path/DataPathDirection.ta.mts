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
 * @summary DataPathDirection
 * @description
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
 * @constant
 * @type {number}
 */
export
const DataPathDirection_computeFunctionToObject: DataPathDirection = DataPathDirection.computeFunctionToObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary computeFunctionToObject
 * @constant
 * @type {number}
 */
export
const computeFunctionToObject: DataPathDirection = DataPathDirection.computeFunctionToObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataPathDirection_objectToComputeFunction
 * @constant
 * @type {number}
 */
export
const DataPathDirection_objectToComputeFunction: DataPathDirection = DataPathDirection.objectToComputeFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectToComputeFunction
 * @constant
 * @type {number}
 */
export
const objectToComputeFunction: DataPathDirection = DataPathDirection.objectToComputeFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataPathDirection_bidirectional
 * @constant
 * @type {number}
 */
export
const DataPathDirection_bidirectional: DataPathDirection = DataPathDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bidirectional
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
