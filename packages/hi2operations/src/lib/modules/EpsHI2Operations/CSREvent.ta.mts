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
enum _enum_for_CSREvent {
    cSREventMessage = 1,
}

/**
 * @summary CSREvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSREvent  ::=  ENUMERATED
 * {
 *  cSREventMessage (1),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSREvent = _enum_for_CSREvent | ENUMERATED;

/**
 * @summary CSREvent_cSREventMessage
 * @constant
 * @type {number}
 */
export
const CSREvent_cSREventMessage: CSREvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSREventMessage
 * @constant
 * @type {number}
 */
export
const cSREventMessage: CSREvent = CSREvent_cSREventMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CSREvent: $.ASN1Decoder<CSREvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSREvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSREvent (el: _Element): CSREvent {
    if (!_cached_decoder_for_CSREvent) { _cached_decoder_for_CSREvent = $._decodeEnumerated; }
    return _cached_decoder_for_CSREvent(el);
}

let _cached_encoder_for_CSREvent: $.ASN1Encoder<CSREvent> | null = null;

/**
 * @summary Encodes a(n) CSREvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSREvent, encoded as an ASN.1 Element.
 */
export
function _encode_CSREvent (value: CSREvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSREvent) { _cached_encoder_for_CSREvent = $._encodeEnumerated; }
    return _cached_encoder_for_CSREvent(value, elGetter);
}


/* eslint-enable */
