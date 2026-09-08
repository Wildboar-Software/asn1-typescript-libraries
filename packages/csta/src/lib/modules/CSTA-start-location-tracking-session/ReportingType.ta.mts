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
 * @summary ReportingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportingType {
    immediate = 0,
    periodic = 1,
    count = 2,
}

/**
 * @summary ReportingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
type ReportingType = _enum_for_ReportingType;

/**
 * @summary ReportingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
const ReportingType = _enum_for_ReportingType;

/**
 * @summary ReportingType_immediate
 * @constant
 * @type {number}
 */
export
const ReportingType_immediate: ReportingType = ReportingType.immediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate
 * @constant
 * @type {number}
 */
export
const immediate: ReportingType = ReportingType.immediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingType_periodic
 * @constant
 * @type {number}
 */
export
const ReportingType_periodic: ReportingType = ReportingType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: ReportingType = ReportingType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingType_count
 * @constant
 * @type {number}
 */
export
const ReportingType_count: ReportingType = ReportingType.count; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count
 * @constant
 * @type {number}
 */
export
const count: ReportingType = ReportingType.count; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportingType: $.ASN1Decoder<ReportingType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingType (el: _Element): ReportingType {
    if (!_cached_decoder_for_ReportingType) { _cached_decoder_for_ReportingType = $._decodeEnumerated; }
    return _cached_decoder_for_ReportingType(el);
}

let _cached_encoder_for_ReportingType: $.ASN1Encoder<ReportingType> | null = null;

/**
 * @summary Encodes a(n) ReportingType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingType, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingType (value: ReportingType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingType) { _cached_encoder_for_ReportingType = $._encodeEnumerated; }
    return _cached_encoder_for_ReportingType(value, elGetter);
}


/* eslint-enable */
