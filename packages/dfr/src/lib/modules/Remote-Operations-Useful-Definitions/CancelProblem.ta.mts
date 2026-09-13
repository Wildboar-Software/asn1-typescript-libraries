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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CancelProblem {
    unknownOperation = 0,
    tooLate = 1,
    operationNotCancellable = 2,
}

/**
 * @summary CancelProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownOperation(0), tooLate(1), operationNotCancellable(2), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type CancelProblem = _enum_for_CancelProblem | ENUMERATED;

/**
 * @summary CancelProblem_unknownOperation
 * @constant
 * @type {number}
 */
export
const CancelProblem_unknownOperation: CancelProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperation
 * @constant
 * @type {number}
 */
export
const unknownOperation: CancelProblem = CancelProblem_unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancelProblem_tooLate
 * @constant
 * @type {number}
 */
export
const CancelProblem_tooLate: CancelProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export
const tooLate: CancelProblem = CancelProblem_tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancelProblem_operationNotCancellable
 * @constant
 * @type {number}
 */
export
const CancelProblem_operationNotCancellable: CancelProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotCancellable
 * @constant
 * @type {number}
 */
export
const operationNotCancellable: CancelProblem = CancelProblem_operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CancelProblem: $.ASN1Decoder<CancelProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelProblem (el: _Element): CancelProblem {
    if (!_cached_decoder_for_CancelProblem) { _cached_decoder_for_CancelProblem = $._decodeEnumerated; }
    return _cached_decoder_for_CancelProblem(el);
}

let _cached_encoder_for_CancelProblem: $.ASN1Encoder<CancelProblem> | null = null;

/**
 * @summary Encodes a(n) CancelProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelProblem, encoded as an ASN.1 Element.
 */
export
function _encode_CancelProblem (value: CancelProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelProblem) { _cached_encoder_for_CancelProblem = $._encodeEnumerated; }
    return _cached_encoder_for_CancelProblem(value, elGetter);
}


/* eslint-enable */
