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



/**
 * @summary AbandonProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  INTEGER {
 *   noSuchOperation (1),
 *   tooLate         (2),
 *   cannotAbandon   (3) }
 * ```
 */
export
type AbandonProblem = INTEGER;

/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export
const AbandonProblem_noSuchOperation: AbandonProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export
const noSuchOperation: AbandonProblem = AbandonProblem_noSuchOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export
const AbandonProblem_tooLate: AbandonProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export
const tooLate: AbandonProblem = AbandonProblem_tooLate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export
const AbandonProblem_cannotAbandon: AbandonProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export
const cannotAbandon: AbandonProblem = AbandonProblem_cannotAbandon; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AbandonProblem: $.ASN1Decoder<AbandonProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbandonProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbandonProblem (el: _Element): AbandonProblem {
    if (!_cached_decoder_for_AbandonProblem) { _cached_decoder_for_AbandonProblem = $._decodeInteger; }
    return _cached_decoder_for_AbandonProblem(el);
}

let _cached_encoder_for_AbandonProblem: $.ASN1Encoder<AbandonProblem> | null = null;

/**
 * @summary Encodes a(n) AbandonProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonProblem, encoded as an ASN.1 Element.
 */
export
function _encode_AbandonProblem (value: AbandonProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbandonProblem) { _cached_encoder_for_AbandonProblem = $._encodeInteger; }
    return _cached_encoder_for_AbandonProblem(value, elGetter);
}


/* eslint-enable */
