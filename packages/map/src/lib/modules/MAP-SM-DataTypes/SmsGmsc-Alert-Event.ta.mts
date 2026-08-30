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
 * @summary SmsGmsc_Alert_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsGmsc-Alert-Event  ::=  ENUMERATED {
 *     msAvailableForMtSms  (0),
 *     msUnderNewServingNode  (1)  }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SmsGmsc_Alert_Event {
    msAvailableForMtSms = 0,
    msUnderNewServingNode = 1,
}

/**
 * @summary SmsGmsc_Alert_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsGmsc-Alert-Event  ::=  ENUMERATED {
 *     msAvailableForMtSms  (0),
 *     msUnderNewServingNode  (1)  }
 * ```
 * 
 * @enum {number}
 */
export
type SmsGmsc_Alert_Event = _enum_for_SmsGmsc_Alert_Event;

/**
 * @summary SmsGmsc_Alert_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsGmsc-Alert-Event  ::=  ENUMERATED {
 *     msAvailableForMtSms  (0),
 *     msUnderNewServingNode  (1)  }
 * ```
 * 
 * @enum {number}
 */
export
const SmsGmsc_Alert_Event = _enum_for_SmsGmsc_Alert_Event;

/**
 * @summary SmsGmsc_Alert_Event_msAvailableForMtSms
 * @constant
 * @type {number}
 */
export
const SmsGmsc_Alert_Event_msAvailableForMtSms: SmsGmsc_Alert_Event = SmsGmsc_Alert_Event.msAvailableForMtSms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msAvailableForMtSms
 * @constant
 * @type {number}
 */
export
const msAvailableForMtSms: SmsGmsc_Alert_Event = SmsGmsc_Alert_Event.msAvailableForMtSms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SmsGmsc_Alert_Event_msUnderNewServingNode
 * @constant
 * @type {number}
 */
export
const SmsGmsc_Alert_Event_msUnderNewServingNode: SmsGmsc_Alert_Event = SmsGmsc_Alert_Event.msUnderNewServingNode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msUnderNewServingNode
 * @constant
 * @type {number}
 */
export
const msUnderNewServingNode: SmsGmsc_Alert_Event = SmsGmsc_Alert_Event.msUnderNewServingNode; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SmsGmsc_Alert_Event: $.ASN1Decoder<SmsGmsc_Alert_Event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsGmsc_Alert_Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsGmsc_Alert_Event (el: _Element): SmsGmsc_Alert_Event {
    if (!_cached_decoder_for_SmsGmsc_Alert_Event) { _cached_decoder_for_SmsGmsc_Alert_Event = $._decodeEnumerated; }
    return _cached_decoder_for_SmsGmsc_Alert_Event(el);
}

let _cached_encoder_for_SmsGmsc_Alert_Event: $.ASN1Encoder<SmsGmsc_Alert_Event> | null = null;

/**
 * @summary Encodes a(n) SmsGmsc_Alert_Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsGmsc_Alert_Event, encoded as an ASN.1 Element.
 */
export
function _encode_SmsGmsc_Alert_Event (value: SmsGmsc_Alert_Event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsGmsc_Alert_Event) { _cached_encoder_for_SmsGmsc_Alert_Event = $._encodeEnumerated; }
    return _cached_encoder_for_SmsGmsc_Alert_Event(value, elGetter);
}


/* eslint-enable */
