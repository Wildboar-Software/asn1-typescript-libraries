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
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFFailedProcedureType {
    registration = 1,
    sMS = 2,
    pDUSessionEstablishment = 3,
}

/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFFailedProcedureType = _enum_for_AMFFailedProcedureType;

/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFFailedProcedureType = _enum_for_AMFFailedProcedureType;

/**
 * @summary AMFFailedProcedureType_registration
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_registration: AMFFailedProcedureType = AMFFailedProcedureType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: AMFFailedProcedureType = AMFFailedProcedureType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_sMS
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_sMS: AMFFailedProcedureType = AMFFailedProcedureType.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS: AMFFailedProcedureType = AMFFailedProcedureType.sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_pDUSessionEstablishment: AMFFailedProcedureType = AMFFailedProcedureType.pDUSessionEstablishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment: AMFFailedProcedureType = AMFFailedProcedureType.pDUSessionEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFFailedProcedureType: $.ASN1Decoder<AMFFailedProcedureType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFFailedProcedureType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFFailedProcedureType (el: _Element): AMFFailedProcedureType {
    if (!_cached_decoder_for_AMFFailedProcedureType) { _cached_decoder_for_AMFFailedProcedureType = $._decodeEnumerated; }
    return _cached_decoder_for_AMFFailedProcedureType(el);
}

let _cached_encoder_for_AMFFailedProcedureType: $.ASN1Encoder<AMFFailedProcedureType> | null = null;

/**
 * @summary Encodes a(n) AMFFailedProcedureType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFFailedProcedureType, encoded as an ASN.1 Element.
 */
export
function _encode_AMFFailedProcedureType (value: AMFFailedProcedureType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFFailedProcedureType) { _cached_encoder_for_AMFFailedProcedureType = $._encodeEnumerated; }
    return _cached_encoder_for_AMFFailedProcedureType(value, elGetter);
}


/* eslint-enable */
