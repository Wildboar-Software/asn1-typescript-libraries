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
 * @summary SetMessageWaitingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMessageWaitingIndicator  ::=  BIT STRING
 * {     deviceForMsg                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SetMessageWaitingIndicator = BIT_STRING;

/**
 * @summary SetMessageWaitingIndicator_deviceForMsg
 * @constant
 */
export
const SetMessageWaitingIndicator_deviceForMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsg
 * @constant
 */
export
const deviceForMsg: number = SetMessageWaitingIndicator_deviceForMsg; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateData
 * @constant
 */
export
const SetMessageWaitingIndicator_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetMessageWaitingIndicator_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateDataInAck
 * @constant
 */
export
const SetMessageWaitingIndicator_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetMessageWaitingIndicator_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_ackModelMultiStep
 * @constant
 */
export
const SetMessageWaitingIndicator_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetMessageWaitingIndicator_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetMessageWaitingIndicator: $.ASN1Decoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMessageWaitingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMessageWaitingIndicator (el: _Element): SetMessageWaitingIndicator {
    if (!_cached_decoder_for_SetMessageWaitingIndicator) { _cached_decoder_for_SetMessageWaitingIndicator = $._decodeBitString; }
    return _cached_decoder_for_SetMessageWaitingIndicator(el);
}

let _cached_encoder_for_SetMessageWaitingIndicator: $.ASN1Encoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Encodes a(n) SetMessageWaitingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMessageWaitingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SetMessageWaitingIndicator (value: SetMessageWaitingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMessageWaitingIndicator) { _cached_encoder_for_SetMessageWaitingIndicator = $._encodeBitString; }
    return _cached_encoder_for_SetMessageWaitingIndicator(value, elGetter);
}


/* eslint-enable */
