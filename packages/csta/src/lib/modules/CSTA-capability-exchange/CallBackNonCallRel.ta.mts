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
 * @summary CallBackNonCallRel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackNonCallRel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     additionalReqForbidden             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type CallBackNonCallRel = BIT_STRING;

/**
 * @summary CallBackNonCallRel_privateData
 * @constant
 */
export
const CallBackNonCallRel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallBackNonCallRel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_privateDataInAck
 * @constant
 */
export
const CallBackNonCallRel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CallBackNonCallRel_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_additionalReqForbidden
 * @constant
 */
export
const CallBackNonCallRel_additionalReqForbidden: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary additionalReqForbidden
 * @constant
 */
export
const additionalReqForbidden: number = CallBackNonCallRel_additionalReqForbidden; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_ackModelMultiStep
 * @constant
 */
export
const CallBackNonCallRel_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CallBackNonCallRel_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackNonCallRel: $.ASN1Decoder<CallBackNonCallRel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackNonCallRel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackNonCallRel (el: _Element): CallBackNonCallRel {
    if (!_cached_decoder_for_CallBackNonCallRel) { _cached_decoder_for_CallBackNonCallRel = $._decodeBitString; }
    return _cached_decoder_for_CallBackNonCallRel(el);
}

let _cached_encoder_for_CallBackNonCallRel: $.ASN1Encoder<CallBackNonCallRel> | null = null;

/**
 * @summary Encodes a(n) CallBackNonCallRel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackNonCallRel, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackNonCallRel (value: CallBackNonCallRel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackNonCallRel) { _cached_encoder_for_CallBackNonCallRel = $._encodeBitString; }
    return _cached_encoder_for_CallBackNonCallRel(value, elGetter);
}


/* eslint-enable */
