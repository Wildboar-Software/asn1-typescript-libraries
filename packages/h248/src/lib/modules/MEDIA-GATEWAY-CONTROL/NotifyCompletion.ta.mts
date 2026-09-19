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
 * @summary NotifyCompletion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyCompletion  ::=  BIT STRING
 *     {
 *         onTimeOut(0), onInterruptByEvent(1),
 *         onInterruptByNewSignalDescr(2), otherReason(3), onIteration(4)
 *     }
 * ```
 */
export
type NotifyCompletion = BIT_STRING;

/**
 * @summary NotifyCompletion_onTimeOut
 * @constant
 */
export
const NotifyCompletion_onTimeOut: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary onTimeOut
 * @constant
 */
export
const onTimeOut: number = NotifyCompletion_onTimeOut; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onInterruptByEvent
 * @constant
 */
export
const NotifyCompletion_onInterruptByEvent: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary onInterruptByEvent
 * @constant
 */
export
const onInterruptByEvent: number = NotifyCompletion_onInterruptByEvent; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onInterruptByNewSignalDescr
 * @constant
 */
export
const NotifyCompletion_onInterruptByNewSignalDescr: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onInterruptByNewSignalDescr
 * @constant
 */
export
const onInterruptByNewSignalDescr: number = NotifyCompletion_onInterruptByNewSignalDescr; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_otherReason
 * @constant
 */
export
const NotifyCompletion_otherReason: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherReason
 * @constant
 */
export
const otherReason: number = NotifyCompletion_otherReason; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onIteration
 * @constant
 */
export
const NotifyCompletion_onIteration: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary onIteration
 * @constant
 */
export
const onIteration: number = NotifyCompletion_onIteration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NotifyCompletion: $.ASN1Decoder<NotifyCompletion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyCompletion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyCompletion (el: _Element): NotifyCompletion {
    if (!_cached_decoder_for_NotifyCompletion) { _cached_decoder_for_NotifyCompletion = $._decodeBitString; }
    return _cached_decoder_for_NotifyCompletion(el);
}

let _cached_encoder_for_NotifyCompletion: $.ASN1Encoder<NotifyCompletion> | null = null;

/**
 * @summary Encodes a(n) NotifyCompletion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyCompletion, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyCompletion (value: NotifyCompletion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyCompletion) { _cached_encoder_for_NotifyCompletion = $._encodeBitString; }
    return _cached_encoder_for_NotifyCompletion(value, elGetter);
}


/* eslint-enable */
