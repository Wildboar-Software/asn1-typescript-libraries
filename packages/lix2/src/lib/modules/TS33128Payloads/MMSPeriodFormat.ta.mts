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
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSPeriodFormat {
    absolute = 1,
    relative = 2,
}

/**
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSPeriodFormat = _enum_for_MMSPeriodFormat;

/**
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSPeriodFormat = _enum_for_MMSPeriodFormat;

/**
 * @summary MMSPeriodFormat_absolute
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_absolute: MMSPeriodFormat = MMSPeriodFormat.absolute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absolute
 * @constant
 * @type {number}
 */
export
const absolute: MMSPeriodFormat = MMSPeriodFormat.absolute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPeriodFormat_relative
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_relative: MMSPeriodFormat = MMSPeriodFormat.relative; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relative
 * @constant
 * @type {number}
 */
export
const relative: MMSPeriodFormat = MMSPeriodFormat.relative; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSPeriodFormat: $.ASN1Decoder<MMSPeriodFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPeriodFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPeriodFormat (el: _Element): MMSPeriodFormat {
    if (!_cached_decoder_for_MMSPeriodFormat) { _cached_decoder_for_MMSPeriodFormat = $._decodeEnumerated; }
    return _cached_decoder_for_MMSPeriodFormat(el);
}

let _cached_encoder_for_MMSPeriodFormat: $.ASN1Encoder<MMSPeriodFormat> | null = null;

/**
 * @summary Encodes a(n) MMSPeriodFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPeriodFormat, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPeriodFormat (value: MMSPeriodFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPeriodFormat) { _cached_encoder_for_MMSPeriodFormat = $._encodeEnumerated; }
    return _cached_encoder_for_MMSPeriodFormat(value, elGetter);
}


/* eslint-enable */
