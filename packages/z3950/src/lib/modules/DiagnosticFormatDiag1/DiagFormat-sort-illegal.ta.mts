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
 * @summary DiagFormat_sort_illegal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-illegal ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_sort_illegal = INTEGER;

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_relation: DiagFormat_sort_illegal = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const relation: DiagFormat_sort_illegal = DiagFormat_sort_illegal_relation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_case_: DiagFormat_sort_illegal = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const case_: DiagFormat_sort_illegal = DiagFormat_sort_illegal_case_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_action: DiagFormat_sort_illegal = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const action: DiagFormat_sort_illegal = DiagFormat_sort_illegal_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_sort: DiagFormat_sort_illegal = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const sort: DiagFormat_sort_illegal = DiagFormat_sort_illegal_sort; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_sort_illegal: $.ASN1Decoder<DiagFormat_sort_illegal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_sort_illegal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_sort_illegal (el: _Element): DiagFormat_sort_illegal {
    if (!_cached_decoder_for_DiagFormat_sort_illegal) { _cached_decoder_for_DiagFormat_sort_illegal = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_sort_illegal(el);
}

let _cached_encoder_for_DiagFormat_sort_illegal: $.ASN1Encoder<DiagFormat_sort_illegal> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_sort_illegal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_sort_illegal, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_sort_illegal (value: DiagFormat_sort_illegal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_sort_illegal) { _cached_encoder_for_DiagFormat_sort_illegal = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_sort_illegal(value, elGetter);
}


/* eslint-enable */
