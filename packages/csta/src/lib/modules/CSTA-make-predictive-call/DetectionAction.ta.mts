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
 * @summary DetectionAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetectionAction  ::=  ENUMERATED
 * {     clearCalledConnection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DetectionAction {
    clearCalledConnection = 0,
    remainConnected = 1,
}

/**
 * @summary DetectionAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetectionAction  ::=  ENUMERATED
 * {     clearCalledConnection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type DetectionAction = _enum_for_DetectionAction;

/**
 * @summary DetectionAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetectionAction  ::=  ENUMERATED
 * {     clearCalledConnection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const DetectionAction = _enum_for_DetectionAction;

/**
 * @summary DetectionAction_clearCalledConnection
 * @constant
 * @type {number}
 */
export
const DetectionAction_clearCalledConnection: DetectionAction = DetectionAction.clearCalledConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clearCalledConnection
 * @constant
 * @type {number}
 */
export
const clearCalledConnection: DetectionAction = DetectionAction.clearCalledConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetectionAction_remainConnected
 * @constant
 * @type {number}
 */
export
const DetectionAction_remainConnected: DetectionAction = DetectionAction.remainConnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainConnected
 * @constant
 * @type {number}
 */
export
const remainConnected: DetectionAction = DetectionAction.remainConnected; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DetectionAction: $.ASN1Decoder<DetectionAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetectionAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetectionAction (el: _Element): DetectionAction {
    if (!_cached_decoder_for_DetectionAction) { _cached_decoder_for_DetectionAction = $._decodeEnumerated; }
    return _cached_decoder_for_DetectionAction(el);
}

let _cached_encoder_for_DetectionAction: $.ASN1Encoder<DetectionAction> | null = null;

/**
 * @summary Encodes a(n) DetectionAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetectionAction, encoded as an ASN.1 Element.
 */
export
function _encode_DetectionAction (value: DetectionAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetectionAction) { _cached_encoder_for_DetectionAction = $._encodeEnumerated; }
    return _cached_encoder_for_DetectionAction(value, elGetter);
}


/* eslint-enable */
