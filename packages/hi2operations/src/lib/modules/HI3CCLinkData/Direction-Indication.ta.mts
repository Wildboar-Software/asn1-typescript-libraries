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
enum _enum_for_Direction_Indication {
    mono_mode = 0,
    cc_from_target = 1,
    cc_from_other_party = 2,
    direction_unknown = 3,
}

/**
 * @summary Direction_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction-Indication     ::=  ENUMERATED
 * {
 *     mono-mode(0),
 *     cc-from-target(1),
 *     cc-from-other-party(2),
 *     ...,
 *     direction-unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Direction_Indication = _enum_for_Direction_Indication | ENUMERATED;

/**
 * @summary Direction_Indication_mono_mode
 * @constant
 * @type {number}
 */
export
const Direction_Indication_mono_mode: Direction_Indication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mono_mode
 * @constant
 * @type {number}
 */
export
const mono_mode: Direction_Indication = Direction_Indication_mono_mode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_target
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_target: Direction_Indication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_target
 * @constant
 * @type {number}
 */
export
const cc_from_target: Direction_Indication = Direction_Indication_cc_from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_other_party
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_other_party: Direction_Indication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_other_party
 * @constant
 * @type {number}
 */
export
const cc_from_other_party: Direction_Indication = Direction_Indication_cc_from_other_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_direction_unknown
 * @constant
 * @type {number}
 */
export
const Direction_Indication_direction_unknown: Direction_Indication = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direction_unknown
 * @constant
 * @type {number}
 */
export
const direction_unknown: Direction_Indication = Direction_Indication_direction_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Direction_Indication: $.ASN1Decoder<Direction_Indication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Direction_Indication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Direction_Indication (el: _Element): Direction_Indication {
    if (!_cached_decoder_for_Direction_Indication) { _cached_decoder_for_Direction_Indication = $._decodeEnumerated; }
    return _cached_decoder_for_Direction_Indication(el);
}

let _cached_encoder_for_Direction_Indication: $.ASN1Encoder<Direction_Indication> | null = null;

/**
 * @summary Encodes a(n) Direction_Indication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Direction_Indication, encoded as an ASN.1 Element.
 */
export
function _encode_Direction_Indication (value: Direction_Indication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Direction_Indication) { _cached_encoder_for_Direction_Indication = $._encodeEnumerated; }
    return _cached_encoder_for_Direction_Indication(value, elGetter);
}


/* eslint-enable */
