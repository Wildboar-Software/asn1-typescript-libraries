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
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *  from-target (1),
 *  to-target (2),
 *  unknown (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TPDU_direction {
    from_target = 1,
    to_target = 2,
    unknown = 3,
}

/**
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *  from-target (1),
 *  to-target (2),
 *  unknown (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *  from-target (1),
 *  to-target (2),
 *  unknown (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction_from_target
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target: TPDU_direction = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @constant
 * @type {number}
 */
export
const from_target: TPDU_direction = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target: TPDU_direction = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @constant
 * @type {number}
 */
export
const to_target: TPDU_direction = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown: TPDU_direction = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: TPDU_direction = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TPDU_direction: $.ASN1Decoder<TPDU_direction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TPDU_direction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TPDU_direction (el: _Element): TPDU_direction {
    if (!_cached_decoder_for_TPDU_direction) { _cached_decoder_for_TPDU_direction = $._decodeEnumerated; }
    return _cached_decoder_for_TPDU_direction(el);
}

let _cached_encoder_for_TPDU_direction: $.ASN1Encoder<TPDU_direction> | null = null;

/**
 * @summary Encodes a(n) TPDU_direction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPDU_direction, encoded as an ASN.1 Element.
 */
export
function _encode_TPDU_direction (value: TPDU_direction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TPDU_direction) { _cached_encoder_for_TPDU_direction = $._encodeEnumerated; }
    return _cached_encoder_for_TPDU_direction(value, elGetter);
}


/* eslint-enable */
