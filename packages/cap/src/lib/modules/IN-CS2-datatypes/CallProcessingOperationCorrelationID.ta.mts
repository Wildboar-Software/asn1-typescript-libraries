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
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallProcessingOperationCorrelationID {
    aLERTing = 1,
    sETUP = 5,
    cONNect = 7,
    dISConnect = 69,
    rELease = 77,
    rELeaseCOMPlete = 90,
    fACility = 98,
}

/**
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
type CallProcessingOperationCorrelationID = _enum_for_CallProcessingOperationCorrelationID;

/**
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
const CallProcessingOperationCorrelationID = _enum_for_CallProcessingOperationCorrelationID;

/**
 * @summary CallProcessingOperationCorrelationID_aLERTing
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_aLERTing: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.aLERTing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLERTing
 * @constant
 * @type {number}
 */
export
const aLERTing: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.aLERTing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_sETUP
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_sETUP: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.sETUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sETUP
 * @constant
 * @type {number}
 */
export
const sETUP: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.sETUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_cONNect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_cONNect: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.cONNect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONNect
 * @constant
 * @type {number}
 */
export
const cONNect: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.cONNect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_dISConnect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_dISConnect: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.dISConnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISConnect
 * @constant
 * @type {number}
 */
export
const dISConnect: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.dISConnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELease
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELease: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.rELease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.rELease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELeaseCOMPlete: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.rELeaseCOMPlete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.rELeaseCOMPlete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_fACility
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_fACility: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.fACility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility: CallProcessingOperationCorrelationID = CallProcessingOperationCorrelationID.fACility; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CallProcessingOperationCorrelationID: $.ASN1Decoder<CallProcessingOperationCorrelationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallProcessingOperationCorrelationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallProcessingOperationCorrelationID (el: _Element): CallProcessingOperationCorrelationID {
    if (!_cached_decoder_for_CallProcessingOperationCorrelationID) { _cached_decoder_for_CallProcessingOperationCorrelationID = $._decodeEnumerated; }
    return _cached_decoder_for_CallProcessingOperationCorrelationID(el);
}

let _cached_encoder_for_CallProcessingOperationCorrelationID: $.ASN1Encoder<CallProcessingOperationCorrelationID> | null = null;

/**
 * @summary Encodes a(n) CallProcessingOperationCorrelationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallProcessingOperationCorrelationID, encoded as an ASN.1 Element.
 */
export
function _encode_CallProcessingOperationCorrelationID (value: CallProcessingOperationCorrelationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallProcessingOperationCorrelationID) { _cached_encoder_for_CallProcessingOperationCorrelationID = $._encodeEnumerated; }
    return _cached_encoder_for_CallProcessingOperationCorrelationID(value, elGetter);
}


/* eslint-enable */
