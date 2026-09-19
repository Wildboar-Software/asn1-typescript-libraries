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
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LINotificationType {
    activation = 1,
    deactivation = 2,
    modification = 3,
}

/**
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LINotificationType = _enum_for_LINotificationType;

/**
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LINotificationType = _enum_for_LINotificationType;

/**
 * @summary LINotificationType_activation
 * @constant
 * @type {number}
 */
export
const LINotificationType_activation: LINotificationType = LINotificationType.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @constant
 * @type {number}
 */
export
const activation: LINotificationType = LINotificationType.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_deactivation
 * @constant
 * @type {number}
 */
export
const LINotificationType_deactivation: LINotificationType = LINotificationType.deactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivation
 * @constant
 * @type {number}
 */
export
const deactivation: LINotificationType = LINotificationType.deactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_modification
 * @constant
 * @type {number}
 */
export
const LINotificationType_modification: LINotificationType = LINotificationType.modification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modification
 * @constant
 * @type {number}
 */
export
const modification: LINotificationType = LINotificationType.modification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LINotificationType: $.ASN1Decoder<LINotificationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LINotificationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LINotificationType (el: _Element): LINotificationType {
    if (!_cached_decoder_for_LINotificationType) { _cached_decoder_for_LINotificationType = $._decodeEnumerated; }
    return _cached_decoder_for_LINotificationType(el);
}

let _cached_encoder_for_LINotificationType: $.ASN1Encoder<LINotificationType> | null = null;

/**
 * @summary Encodes a(n) LINotificationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LINotificationType, encoded as an ASN.1 Element.
 */
export
function _encode_LINotificationType (value: LINotificationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LINotificationType) { _cached_encoder_for_LINotificationType = $._encodeEnumerated; }
    return _cached_encoder_for_LINotificationType(value, elGetter);
}


/* eslint-enable */
