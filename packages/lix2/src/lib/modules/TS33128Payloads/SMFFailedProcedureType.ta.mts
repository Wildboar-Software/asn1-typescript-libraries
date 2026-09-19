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
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMFFailedProcedureType {
    pDUSessionEstablishment = 1,
    pDUSessionModification = 2,
    pDUSessionRelease = 3,
}

/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMFFailedProcedureType = _enum_for_SMFFailedProcedureType;

/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMFFailedProcedureType = _enum_for_SMFFailedProcedureType;

/**
 * @summary SMFFailedProcedureType_pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionEstablishment: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionEstablishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionModification
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionModification: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionModification
 * @constant
 * @type {number}
 */
export
const pDUSessionModification: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionRelease: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const pDUSessionRelease: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMFFailedProcedureType: $.ASN1Decoder<SMFFailedProcedureType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFFailedProcedureType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFFailedProcedureType (el: _Element): SMFFailedProcedureType {
    if (!_cached_decoder_for_SMFFailedProcedureType) { _cached_decoder_for_SMFFailedProcedureType = $._decodeEnumerated; }
    return _cached_decoder_for_SMFFailedProcedureType(el);
}

let _cached_encoder_for_SMFFailedProcedureType: $.ASN1Encoder<SMFFailedProcedureType> | null = null;

/**
 * @summary Encodes a(n) SMFFailedProcedureType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFFailedProcedureType, encoded as an ASN.1 Element.
 */
export
function _encode_SMFFailedProcedureType (value: SMFFailedProcedureType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFFailedProcedureType) { _cached_encoder_for_SMFFailedProcedureType = $._encodeEnumerated; }
    return _cached_encoder_for_SMFFailedProcedureType(value, elGetter);
}


/* eslint-enable */
