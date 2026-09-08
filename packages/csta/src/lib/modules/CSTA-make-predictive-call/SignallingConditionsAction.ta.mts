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
 * @summary SignallingConditionsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SignallingConditionsAction {
    destinationDetection = 0,
    remainConnected = 1,
}

/**
 * @summary SignallingConditionsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type SignallingConditionsAction = _enum_for_SignallingConditionsAction;

/**
 * @summary SignallingConditionsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const SignallingConditionsAction = _enum_for_SignallingConditionsAction;

/**
 * @summary SignallingConditionsAction_destinationDetection
 * @constant
 * @type {number}
 */
export
const SignallingConditionsAction_destinationDetection: SignallingConditionsAction = SignallingConditionsAction.destinationDetection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetection
 * @constant
 * @type {number}
 */
export
const destinationDetection: SignallingConditionsAction = SignallingConditionsAction.destinationDetection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignallingConditionsAction_remainConnected
 * @constant
 * @type {number}
 */
export
const SignallingConditionsAction_remainConnected: SignallingConditionsAction = SignallingConditionsAction.remainConnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainConnected
 * @constant
 * @type {number}
 */
export
const remainConnected: SignallingConditionsAction = SignallingConditionsAction.remainConnected; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignallingConditionsAction: $.ASN1Decoder<SignallingConditionsAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignallingConditionsAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignallingConditionsAction (el: _Element): SignallingConditionsAction {
    if (!_cached_decoder_for_SignallingConditionsAction) { _cached_decoder_for_SignallingConditionsAction = $._decodeEnumerated; }
    return _cached_decoder_for_SignallingConditionsAction(el);
}

let _cached_encoder_for_SignallingConditionsAction: $.ASN1Encoder<SignallingConditionsAction> | null = null;

/**
 * @summary Encodes a(n) SignallingConditionsAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignallingConditionsAction, encoded as an ASN.1 Element.
 */
export
function _encode_SignallingConditionsAction (value: SignallingConditionsAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignallingConditionsAction) { _cached_encoder_for_SignallingConditionsAction = $._encodeEnumerated; }
    return _cached_encoder_for_SignallingConditionsAction(value, elGetter);
}


/* eslint-enable */
