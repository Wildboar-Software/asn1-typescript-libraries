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
 * @summary InterrogationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterrogationType  ::=  ENUMERATED {
 *     basicCall  (0),
 *     forwarding  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InterrogationType {
    basicCall = 0,
    forwarding = 1,
}

/**
 * @summary InterrogationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterrogationType  ::=  ENUMERATED {
 *     basicCall  (0),
 *     forwarding  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type InterrogationType = _enum_for_InterrogationType;

/**
 * @summary InterrogationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterrogationType  ::=  ENUMERATED {
 *     basicCall  (0),
 *     forwarding  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const InterrogationType = _enum_for_InterrogationType;

/**
 * @summary InterrogationType_basicCall
 * @constant
 * @type {number}
 */
export
const InterrogationType_basicCall: InterrogationType = InterrogationType.basicCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCall
 * @constant
 * @type {number}
 */
export
const basicCall: InterrogationType = InterrogationType.basicCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterrogationType_forwarding
 * @constant
 * @type {number}
 */
export
const InterrogationType_forwarding: InterrogationType = InterrogationType.forwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarding
 * @constant
 * @type {number}
 */
export
const forwarding: InterrogationType = InterrogationType.forwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InterrogationType: $.ASN1Decoder<InterrogationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterrogationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterrogationType (el: _Element): InterrogationType {
    if (!_cached_decoder_for_InterrogationType) { _cached_decoder_for_InterrogationType = $._decodeEnumerated; }
    return _cached_decoder_for_InterrogationType(el);
}

let _cached_encoder_for_InterrogationType: $.ASN1Encoder<InterrogationType> | null = null;

/**
 * @summary Encodes a(n) InterrogationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterrogationType, encoded as an ASN.1 Element.
 */
export
function _encode_InterrogationType (value: InterrogationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterrogationType) { _cached_encoder_for_InterrogationType = $._encodeEnumerated; }
    return _cached_encoder_for_InterrogationType(value, elGetter);
}


/* eslint-enable */
