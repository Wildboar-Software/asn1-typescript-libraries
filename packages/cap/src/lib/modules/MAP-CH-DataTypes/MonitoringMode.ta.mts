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



export
enum _enum_for_MonitoringMode {
    a_side = 0,
    b_side = 1,
}

/**
 * @summary MonitoringMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringMode  ::=  ENUMERATED {
 *     a-side    (0),
 *     b-side    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type MonitoringMode = _enum_for_MonitoringMode | ENUMERATED;

/**
 * @summary MonitoringMode_a_side
 * @constant
 * @type {number}
 */
export
const MonitoringMode_a_side: MonitoringMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary a_side
 * @constant
 * @type {number}
 */
export
const a_side: MonitoringMode = MonitoringMode_a_side; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringMode_b_side
 * @constant
 * @type {number}
 */
export
const MonitoringMode_b_side: MonitoringMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary b_side
 * @constant
 * @type {number}
 */
export
const b_side: MonitoringMode = MonitoringMode_b_side; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MonitoringMode: $.ASN1Decoder<MonitoringMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringMode (el: _Element): MonitoringMode {
    if (!_cached_decoder_for_MonitoringMode) { _cached_decoder_for_MonitoringMode = $._decodeEnumerated; }
    return _cached_decoder_for_MonitoringMode(el);
}

let _cached_encoder_for_MonitoringMode: $.ASN1Encoder<MonitoringMode> | null = null;

/**
 * @summary Encodes a(n) MonitoringMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringMode, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringMode (value: MonitoringMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringMode) { _cached_encoder_for_MonitoringMode = $._encodeEnumerated; }
    return _cached_encoder_for_MonitoringMode(value, elGetter);
}


/* eslint-enable */
