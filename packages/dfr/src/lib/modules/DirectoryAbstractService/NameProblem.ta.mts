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
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  INTEGER {
 *   noSuchObject              (1),
 *   aliasProblem              (2),
 *   invalidAttributeSyntax    (3),
 *   aliasDereferencingProblem (4)
 *   -- not to be used         (5)-- }
 * ```
 */
export
type NameProblem = INTEGER;

/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export
const NameProblem_noSuchObject: NameProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export
const noSuchObject: NameProblem = NameProblem_noSuchObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export
const NameProblem_aliasProblem: NameProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export
const aliasProblem: NameProblem = NameProblem_aliasProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export
const NameProblem_invalidAttributeSyntax: NameProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export
const invalidAttributeSyntax: NameProblem = NameProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export
const NameProblem_aliasDereferencingProblem: NameProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export
const aliasDereferencingProblem: NameProblem = NameProblem_aliasDereferencingProblem; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_NameProblem: $.ASN1Decoder<NameProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameProblem (el: _Element): NameProblem {
    if (!_cached_decoder_for_NameProblem) { _cached_decoder_for_NameProblem = $._decodeInteger; }
    return _cached_decoder_for_NameProblem(el);
}

let _cached_encoder_for_NameProblem: $.ASN1Encoder<NameProblem> | null = null;

/**
 * @summary Encodes a(n) NameProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameProblem, encoded as an ASN.1 Element.
 */
export
function _encode_NameProblem (value: NameProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameProblem) { _cached_encoder_for_NameProblem = $._encodeInteger; }
    return _cached_encoder_for_NameProblem(value, elGetter);
}


/* eslint-enable */
