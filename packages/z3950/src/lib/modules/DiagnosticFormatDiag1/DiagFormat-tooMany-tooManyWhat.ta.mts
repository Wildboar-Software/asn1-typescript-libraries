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
 * @summary DiagFormat_tooMany_tooManyWhat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-tooMany-tooManyWhat ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_tooMany_tooManyWhat = INTEGER;

/**
 * @summary DiagFormat_tooMany_tooManyWhat_argumentWords
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_argumentWords: DiagFormat_tooMany_tooManyWhat = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_argumentWords
 * @constant
 * @type {number}
 */
export
const argumentWords: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_argumentWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_truncatedWords
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_truncatedWords: DiagFormat_tooMany_tooManyWhat = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_truncatedWords
 * @constant
 * @type {number}
 */
export
const truncatedWords: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_truncatedWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_booleanOperators
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_booleanOperators: DiagFormat_tooMany_tooManyWhat = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_booleanOperators
 * @constant
 * @type {number}
 */
export
const booleanOperators: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_booleanOperators; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_incompleteSubfields
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_incompleteSubfields: DiagFormat_tooMany_tooManyWhat = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_incompleteSubfields
 * @constant
 * @type {number}
 */
export
const incompleteSubfields: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_incompleteSubfields; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_characters
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_characters: DiagFormat_tooMany_tooManyWhat = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_characters
 * @constant
 * @type {number}
 */
export
const characters: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_characters; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_recordsRetrieved
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_recordsRetrieved: DiagFormat_tooMany_tooManyWhat = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_recordsRetrieved
 * @constant
 * @type {number}
 */
export
const recordsRetrieved: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_recordsRetrieved; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_dataBasesSpecified
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_dataBasesSpecified: DiagFormat_tooMany_tooManyWhat = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_dataBasesSpecified
 * @constant
 * @type {number}
 */
export
const dataBasesSpecified: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_dataBasesSpecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_resultSetsCreated
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_resultSetsCreated: DiagFormat_tooMany_tooManyWhat = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_resultSetsCreated
 * @constant
 * @type {number}
 */
export
const resultSetsCreated: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_resultSetsCreated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_indexTermsProcessed
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_indexTermsProcessed: DiagFormat_tooMany_tooManyWhat = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_indexTermsProcessed
 * @constant
 * @type {number}
 */
export
const indexTermsProcessed: DiagFormat_tooMany_tooManyWhat = DiagFormat_tooMany_tooManyWhat_indexTermsProcessed; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_tooMany_tooManyWhat: $.ASN1Decoder<DiagFormat_tooMany_tooManyWhat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_tooMany_tooManyWhat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_tooMany_tooManyWhat (el: _Element): DiagFormat_tooMany_tooManyWhat {
    if (!_cached_decoder_for_DiagFormat_tooMany_tooManyWhat) { _cached_decoder_for_DiagFormat_tooMany_tooManyWhat = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_tooMany_tooManyWhat(el);
}

let _cached_encoder_for_DiagFormat_tooMany_tooManyWhat: $.ASN1Encoder<DiagFormat_tooMany_tooManyWhat> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_tooMany_tooManyWhat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_tooMany_tooManyWhat, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_tooMany_tooManyWhat (value: DiagFormat_tooMany_tooManyWhat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_tooMany_tooManyWhat) { _cached_encoder_for_DiagFormat_tooMany_tooManyWhat = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_tooMany_tooManyWhat(value, elGetter);
}


/* eslint-enable */
