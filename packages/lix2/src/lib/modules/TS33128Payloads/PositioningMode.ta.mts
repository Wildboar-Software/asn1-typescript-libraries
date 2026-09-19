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
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PositioningMode {
    uEBased = 1,
    uEAssisted = 2,
    conventional = 3,
}

/**
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode_uEBased
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEBased: PositioningMode = PositioningMode.uEBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEBased
 * @constant
 * @type {number}
 */
export
const uEBased: PositioningMode = PositioningMode.uEBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_uEAssisted
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEAssisted: PositioningMode = PositioningMode.uEAssisted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEAssisted
 * @constant
 * @type {number}
 */
export
const uEAssisted: PositioningMode = PositioningMode.uEAssisted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_conventional
 * @constant
 * @type {number}
 */
export
const PositioningMode_conventional: PositioningMode = PositioningMode.conventional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conventional
 * @constant
 * @type {number}
 */
export
const conventional: PositioningMode = PositioningMode.conventional; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PositioningMode: $.ASN1Decoder<PositioningMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositioningMode (el: _Element): PositioningMode {
    if (!_cached_decoder_for_PositioningMode) { _cached_decoder_for_PositioningMode = $._decodeEnumerated; }
    return _cached_decoder_for_PositioningMode(el);
}

let _cached_encoder_for_PositioningMode: $.ASN1Encoder<PositioningMode> | null = null;

/**
 * @summary Encodes a(n) PositioningMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningMode, encoded as an ASN.1 Element.
 */
export
function _encode_PositioningMode (value: PositioningMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositioningMode) { _cached_encoder_for_PositioningMode = $._encodeEnumerated; }
    return _cached_encoder_for_PositioningMode(value, elGetter);
}


/* eslint-enable */
