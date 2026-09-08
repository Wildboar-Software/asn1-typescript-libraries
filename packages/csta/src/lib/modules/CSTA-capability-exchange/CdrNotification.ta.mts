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
 * @summary CdrNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CdrNotification  ::=  BIT STRING
 * {     cdrReasonTimeout             ( 0),     -- optional parameters
 *     cdrReasonThresholdReached         ( 1),     -- optional parameters
 *     cdrReasonOther                 ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4) }
 * ```
 */
export
type CdrNotification = BIT_STRING;

/**
 * @summary CdrNotification_cdrReasonTimeout
 * @constant
 */
export
const CdrNotification_cdrReasonTimeout: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonTimeout
 * @constant
 */
export
const cdrReasonTimeout: number = CdrNotification_cdrReasonTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_cdrReasonThresholdReached
 * @constant
 */
export
const CdrNotification_cdrReasonThresholdReached: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonThresholdReached
 * @constant
 */
export
const cdrReasonThresholdReached: number = CdrNotification_cdrReasonThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_cdrReasonOther
 * @constant
 */
export
const CdrNotification_cdrReasonOther: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonOther
 * @constant
 */
export
const cdrReasonOther: number = CdrNotification_cdrReasonOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_privateData
 * @constant
 */
export
const CdrNotification_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CdrNotification_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_privateDataInAck
 * @constant
 */
export
const CdrNotification_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CdrNotification_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CdrNotification: $.ASN1Decoder<CdrNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CdrNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CdrNotification (el: _Element): CdrNotification {
    if (!_cached_decoder_for_CdrNotification) { _cached_decoder_for_CdrNotification = $._decodeBitString; }
    return _cached_decoder_for_CdrNotification(el);
}

let _cached_encoder_for_CdrNotification: $.ASN1Encoder<CdrNotification> | null = null;

/**
 * @summary Encodes a(n) CdrNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CdrNotification, encoded as an ASN.1 Element.
 */
export
function _encode_CdrNotification (value: CdrNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CdrNotification) { _cached_encoder_for_CdrNotification = $._encodeBitString; }
    return _cached_encoder_for_CdrNotification(value, elGetter);
}


/* eslint-enable */
