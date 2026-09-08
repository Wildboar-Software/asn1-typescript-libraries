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
 * @summary ParticipationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipationType {
    silent = 0,
    active = 1,
    none = 2,
}

/**
 * @summary ParticipationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipationType = _enum_for_ParticipationType;

/**
 * @summary ParticipationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipationType = _enum_for_ParticipationType;

/**
 * @summary ParticipationType_silent
 * @constant
 * @type {number}
 */
export
const ParticipationType_silent: ParticipationType = ParticipationType.silent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silent
 * @constant
 * @type {number}
 */
export
const silent: ParticipationType = ParticipationType.silent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipationType_active
 * @constant
 * @type {number}
 */
export
const ParticipationType_active: ParticipationType = ParticipationType.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: ParticipationType = ParticipationType.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipationType_none
 * @constant
 * @type {number}
 */
export
const ParticipationType_none: ParticipationType = ParticipationType.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: ParticipationType = ParticipationType.none; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ParticipationType: $.ASN1Decoder<ParticipationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParticipationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParticipationType (el: _Element): ParticipationType {
    if (!_cached_decoder_for_ParticipationType) { _cached_decoder_for_ParticipationType = $._decodeEnumerated; }
    return _cached_decoder_for_ParticipationType(el);
}

let _cached_encoder_for_ParticipationType: $.ASN1Encoder<ParticipationType> | null = null;

/**
 * @summary Encodes a(n) ParticipationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParticipationType, encoded as an ASN.1 Element.
 */
export
function _encode_ParticipationType (value: ParticipationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParticipationType) { _cached_encoder_for_ParticipationType = $._encodeEnumerated; }
    return _cached_encoder_for_ParticipationType(value, elGetter);
}


/* eslint-enable */
