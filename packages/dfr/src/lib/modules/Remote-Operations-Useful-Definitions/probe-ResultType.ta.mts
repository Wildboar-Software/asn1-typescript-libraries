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
enum _enum_for_probe_ResultType {
    running = 0,
    finished = 1,
    unknown = 2,
}

/**
 * @summary probe_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * probe-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type probe_ResultType = _enum_for_probe_ResultType | ENUMERATED;

/**
 * @summary probe_ResultType_running
 * @constant
 * @type {number}
 */
export
const probe_ResultType_running: probe_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary running
 * @constant
 * @type {number}
 */
export
const running: probe_ResultType = probe_ResultType_running; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary probe_ResultType_finished
 * @constant
 * @type {number}
 */
export
const probe_ResultType_finished: probe_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary finished
 * @constant
 * @type {number}
 */
export
const finished: probe_ResultType = probe_ResultType_finished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary probe_ResultType_unknown
 * @constant
 * @type {number}
 */
export
const probe_ResultType_unknown: probe_ResultType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: probe_ResultType = probe_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_probe_ResultType: $.ASN1Decoder<probe_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) probe_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_probe_ResultType (el: _Element): probe_ResultType {
    if (!_cached_decoder_for_probe_ResultType) { _cached_decoder_for_probe_ResultType = $._decodeEnumerated; }
    return _cached_decoder_for_probe_ResultType(el);
}

let _cached_encoder_for_probe_ResultType: $.ASN1Encoder<probe_ResultType> | null = null;

/**
 * @summary Encodes a(n) probe_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The probe_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_probe_ResultType (value: probe_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_probe_ResultType) { _cached_encoder_for_probe_ResultType = $._encodeEnumerated; }
    return _cached_encoder_for_probe_ResultType(value, elGetter);
}


/* eslint-enable */
