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
 * @summary GetSpeakerVolume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSpeakerVolume  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     speakerVolAbsInAck             ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type GetSpeakerVolume = BIT_STRING;

/**
 * @summary GetSpeakerVolume_auditoryApparatus
 * @constant
 */
export
const GetSpeakerVolume_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetSpeakerVolume_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_privateData
 * @constant
 */
export
const GetSpeakerVolume_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetSpeakerVolume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_speakerVolAbsInAck
 * @constant
 */
export
const GetSpeakerVolume_speakerVolAbsInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolAbsInAck
 * @constant
 */
export
const speakerVolAbsInAck: number = GetSpeakerVolume_speakerVolAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_privateDataInAck
 * @constant
 */
export
const GetSpeakerVolume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetSpeakerVolume_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetSpeakerVolume: $.ASN1Decoder<GetSpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerVolume (el: _Element): GetSpeakerVolume {
    if (!_cached_decoder_for_GetSpeakerVolume) { _cached_decoder_for_GetSpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_GetSpeakerVolume(el);
}

let _cached_encoder_for_GetSpeakerVolume: $.ASN1Encoder<GetSpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerVolume (value: GetSpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerVolume) { _cached_encoder_for_GetSpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_GetSpeakerVolume(value, elGetter);
}


/* eslint-enable */
