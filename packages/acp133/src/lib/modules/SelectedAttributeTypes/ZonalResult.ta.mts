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
enum _enum_for_ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}

/**
 * @summary ZonalResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZonalResult  ::=  ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```
 * 
 * @enum {number}
 */
export
type ZonalResult = _enum_for_ZonalResult | ENUMERATED;

/**
 * @summary ZonalResult_cannot_select_mapping
 * @constant
 * @type {number}
 */
export
const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_select_mapping
 * @constant
 * @type {number}
 */
export
const cannot_select_mapping: ZonalResult = ZonalResult_cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_zero_mappings
 * @constant
 * @type {number}
 */
export
const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary zero_mappings
 * @constant
 * @type {number}
 */
export
const zero_mappings: ZonalResult = ZonalResult_zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_multiple_mappings
 * @constant
 * @type {number}
 */
export
const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiple_mappings
 * @constant
 * @type {number}
 */
export
const multiple_mappings: ZonalResult = ZonalResult_multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ZonalResult: $.ASN1Decoder<ZonalResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ZonalResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ZonalResult (el: _Element): ZonalResult {
    if (!_cached_decoder_for_ZonalResult) { _cached_decoder_for_ZonalResult = $._decodeEnumerated; }
    return _cached_decoder_for_ZonalResult(el);
}

let _cached_encoder_for_ZonalResult: $.ASN1Encoder<ZonalResult> | null = null;

/**
 * @summary Encodes a(n) ZonalResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalResult, encoded as an ASN.1 Element.
 */
export
function _encode_ZonalResult (value: ZonalResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ZonalResult) { _cached_encoder_for_ZonalResult = $._encodeEnumerated; }
    return _cached_encoder_for_ZonalResult(value, elGetter);
}


/* eslint-enable */
