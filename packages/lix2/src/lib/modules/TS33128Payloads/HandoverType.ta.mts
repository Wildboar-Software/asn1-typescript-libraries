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
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_HandoverType {
    intra5GS = 1,
    fiveGStoEPS = 2,
    ePSto5GS = 3,
    fiveGStoUTRA = 4,
}

/**
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType_intra5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_intra5GS: HandoverType = HandoverType.intra5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intra5GS
 * @constant
 * @type {number}
 */
export
const intra5GS: HandoverType = HandoverType.intra5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_ePSto5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSto5GS
 * @constant
 * @type {number}
 */
export
const ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_HandoverType: $.ASN1Decoder<HandoverType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandoverType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandoverType (el: _Element): HandoverType {
    if (!_cached_decoder_for_HandoverType) { _cached_decoder_for_HandoverType = $._decodeEnumerated; }
    return _cached_decoder_for_HandoverType(el);
}

let _cached_encoder_for_HandoverType: $.ASN1Encoder<HandoverType> | null = null;

/**
 * @summary Encodes a(n) HandoverType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandoverType, encoded as an ASN.1 Element.
 */
export
function _encode_HandoverType (value: HandoverType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandoverType) { _cached_encoder_for_HandoverType = $._encodeEnumerated; }
    return _cached_encoder_for_HandoverType(value, elGetter);
}


/* eslint-enable */
