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
enum _enum_for_ProSeTargetType {
    pRoSeRemoteUE = 1,
    pRoSeUEtoNwRelay = 2,
}

/**
 * @summary ProSeTargetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeTargetType  ::=  ENUMERATED
 * {
 *  pRoSeRemoteUE (1),
 *  pRoSeUEtoNwRelay (2),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeTargetType = _enum_for_ProSeTargetType | ENUMERATED;

/**
 * @summary ProSeTargetType_pRoSeRemoteUE
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeRemoteUE: ProSeTargetType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeRemoteUE
 * @constant
 * @type {number}
 */
export
const pRoSeRemoteUE: ProSeTargetType = ProSeTargetType_pRoSeRemoteUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeTargetType_pRoSeUEtoNwRelay
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeUEtoNwRelay: ProSeTargetType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeUEtoNwRelay
 * @constant
 * @type {number}
 */
export
const pRoSeUEtoNwRelay: ProSeTargetType = ProSeTargetType_pRoSeUEtoNwRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProSeTargetType: $.ASN1Decoder<ProSeTargetType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeTargetType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeTargetType (el: _Element): ProSeTargetType {
    if (!_cached_decoder_for_ProSeTargetType) { _cached_decoder_for_ProSeTargetType = $._decodeEnumerated; }
    return _cached_decoder_for_ProSeTargetType(el);
}

let _cached_encoder_for_ProSeTargetType: $.ASN1Encoder<ProSeTargetType> | null = null;

/**
 * @summary Encodes a(n) ProSeTargetType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeTargetType, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeTargetType (value: ProSeTargetType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeTargetType) { _cached_encoder_for_ProSeTargetType = $._encodeEnumerated; }
    return _cached_encoder_for_ProSeTargetType(value, elGetter);
}


/* eslint-enable */
