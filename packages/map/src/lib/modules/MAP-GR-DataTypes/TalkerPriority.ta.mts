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
 * @summary TalkerPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TalkerPriority {
    normal = 0,
    privileged = 1,
    emergency = 2,
}

/**
 * @summary TalkerPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type TalkerPriority = _enum_for_TalkerPriority;

/**
 * @summary TalkerPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const TalkerPriority = _enum_for_TalkerPriority;

/**
 * @summary TalkerPriority_normal
 * @constant
 * @type {number}
 */
export
const TalkerPriority_normal: TalkerPriority = TalkerPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: TalkerPriority = TalkerPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TalkerPriority_privileged
 * @constant
 * @type {number}
 */
export
const TalkerPriority_privileged: TalkerPriority = TalkerPriority.privileged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privileged
 * @constant
 * @type {number}
 */
export
const privileged: TalkerPriority = TalkerPriority.privileged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TalkerPriority_emergency
 * @constant
 * @type {number}
 */
export
const TalkerPriority_emergency: TalkerPriority = TalkerPriority.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: TalkerPriority = TalkerPriority.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TalkerPriority: $.ASN1Decoder<TalkerPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TalkerPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TalkerPriority (el: _Element): TalkerPriority {
    if (!_cached_decoder_for_TalkerPriority) { _cached_decoder_for_TalkerPriority = $._decodeEnumerated; }
    return _cached_decoder_for_TalkerPriority(el);
}

let _cached_encoder_for_TalkerPriority: $.ASN1Encoder<TalkerPriority> | null = null;

/**
 * @summary Encodes a(n) TalkerPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TalkerPriority, encoded as an ASN.1 Element.
 */
export
function _encode_TalkerPriority (value: TalkerPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TalkerPriority) { _cached_encoder_for_TalkerPriority = $._encodeEnumerated; }
    return _cached_encoder_for_TalkerPriority(value, elGetter);
}


/* eslint-enable */
