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
 * @summary GetMicrophoneMute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneMute  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetMicrophoneMute = BIT_STRING;

/**
 * @summary GetMicrophoneMute_auditoryApparatus
 * @constant
 */
export
const GetMicrophoneMute_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetMicrophoneMute_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneMute_privateData
 * @constant
 */
export
const GetMicrophoneMute_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetMicrophoneMute_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneMute_privateDataInAck
 * @constant
 */
export
const GetMicrophoneMute_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetMicrophoneMute_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMicrophoneMute: $.ASN1Decoder<GetMicrophoneMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneMute (el: _Element): GetMicrophoneMute {
    if (!_cached_decoder_for_GetMicrophoneMute) { _cached_decoder_for_GetMicrophoneMute = $._decodeBitString; }
    return _cached_decoder_for_GetMicrophoneMute(el);
}

let _cached_encoder_for_GetMicrophoneMute: $.ASN1Encoder<GetMicrophoneMute> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneMute, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneMute (value: GetMicrophoneMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneMute) { _cached_encoder_for_GetMicrophoneMute = $._encodeBitString; }
    return _cached_encoder_for_GetMicrophoneMute(value, elGetter);
}


/* eslint-enable */
