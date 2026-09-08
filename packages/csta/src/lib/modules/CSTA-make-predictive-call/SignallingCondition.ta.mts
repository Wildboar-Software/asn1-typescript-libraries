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
 * @summary SignallingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SignallingCondition {
    callDelivered = 0,
    callEstablished = 1,
}

/**
 * @summary SignallingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type SignallingCondition = _enum_for_SignallingCondition;

/**
 * @summary SignallingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const SignallingCondition = _enum_for_SignallingCondition;

/**
 * @summary SignallingCondition_callDelivered
 * @constant
 * @type {number}
 */
export
const SignallingCondition_callDelivered: SignallingCondition = SignallingCondition.callDelivered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDelivered
 * @constant
 * @type {number}
 */
export
const callDelivered: SignallingCondition = SignallingCondition.callDelivered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignallingCondition_callEstablished
 * @constant
 * @type {number}
 */
export
const SignallingCondition_callEstablished: SignallingCondition = SignallingCondition.callEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablished
 * @constant
 * @type {number}
 */
export
const callEstablished: SignallingCondition = SignallingCondition.callEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignallingCondition: $.ASN1Decoder<SignallingCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignallingCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignallingCondition (el: _Element): SignallingCondition {
    if (!_cached_decoder_for_SignallingCondition) { _cached_decoder_for_SignallingCondition = $._decodeEnumerated; }
    return _cached_decoder_for_SignallingCondition(el);
}

let _cached_encoder_for_SignallingCondition: $.ASN1Encoder<SignallingCondition> | null = null;

/**
 * @summary Encodes a(n) SignallingCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignallingCondition, encoded as an ASN.1 Element.
 */
export
function _encode_SignallingCondition (value: SignallingCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignallingCondition) { _cached_encoder_for_SignallingCondition = $._encodeEnumerated; }
    return _cached_encoder_for_SignallingCondition(value, elGetter);
}


/* eslint-enable */
