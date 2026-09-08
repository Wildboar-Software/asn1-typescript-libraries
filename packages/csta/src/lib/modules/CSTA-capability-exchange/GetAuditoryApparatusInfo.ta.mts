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
 * @summary GetAuditoryApparatusInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAuditoryApparatusInfo  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     auditoryApparatusTypeSpeakerphone     ( 2),     -- optional parameters
 *     auditoryApparatusTypeHandset         ( 3),     -- optional parameters
 *     auditoryApparatusTypeHeadset         ( 4),     -- optional parameters
 *     auditoryApparatusTypeSpeakerOnlyPhone     ( 5),     -- optional parameters
 *     auditoryApparatusTypeother         ( 6),     -- optional parameters
 *     speakerPresent                 ( 7),     -- optional parameters
 *     speakerVolumeSettable             ( 8),     -- optional parameters
 *     speakerVolumeReadable             ( 9),     -- optional parameters
 *     speakerMuteSettable             (10),     -- optional parameters
 *     speakerMuteReadable             (11),     -- optional parameters
 *     microphonePresent             (12),     -- optional parameters
 *     microphoneGainSettable             (13),     -- optional parameters
 *     microphoneGainReadable             (14),     -- optional parameters
 *     microphoneMuteSettable             (15),     -- optional parameters
 *     microphoneMuteReadable             (16),     -- optional parameters
 *     hookswitchSettable             (17),     -- optional parameters
 *     hookswitchOnHook             (18),     -- optional parameters
 *     privateDataInAck             (19) }
 * ```
 */
export
type GetAuditoryApparatusInfo = BIT_STRING;

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatus
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetAuditoryApparatusInfo_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_privateData
 * @constant
 */
export
const GetAuditoryApparatusInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetAuditoryApparatusInfo_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeSpeakerphone
 * @constant
 */
export
const auditoryApparatusTypeSpeakerphone: number = GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeHandset
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeHandset: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeHandset
 * @constant
 */
export
const auditoryApparatusTypeHandset: number = GetAuditoryApparatusInfo_auditoryApparatusTypeHandset; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeHeadset
 * @constant
 */
export
const auditoryApparatusTypeHeadset: number = GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeSpeakerOnlyPhone
 * @constant
 */
export
const auditoryApparatusTypeSpeakerOnlyPhone: number = GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeother
 * @constant
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeother: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeother
 * @constant
 */
export
const auditoryApparatusTypeother: number = GetAuditoryApparatusInfo_auditoryApparatusTypeother; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerPresent
 * @constant
 */
export
const GetAuditoryApparatusInfo_speakerPresent: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary speakerPresent
 * @constant
 */
export
const speakerPresent: number = GetAuditoryApparatusInfo_speakerPresent; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerVolumeSettable
 * @constant
 */
export
const GetAuditoryApparatusInfo_speakerVolumeSettable: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeSettable
 * @constant
 */
export
const speakerVolumeSettable: number = GetAuditoryApparatusInfo_speakerVolumeSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerVolumeReadable
 * @constant
 */
export
const GetAuditoryApparatusInfo_speakerVolumeReadable: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeReadable
 * @constant
 */
export
const speakerVolumeReadable: number = GetAuditoryApparatusInfo_speakerVolumeReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerMuteSettable
 * @constant
 */
export
const GetAuditoryApparatusInfo_speakerMuteSettable: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary speakerMuteSettable
 * @constant
 */
export
const speakerMuteSettable: number = GetAuditoryApparatusInfo_speakerMuteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerMuteReadable
 * @constant
 */
export
const GetAuditoryApparatusInfo_speakerMuteReadable: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary speakerMuteReadable
 * @constant
 */
export
const speakerMuteReadable: number = GetAuditoryApparatusInfo_speakerMuteReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphonePresent
 * @constant
 */
export
const GetAuditoryApparatusInfo_microphonePresent: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary microphonePresent
 * @constant
 */
export
const microphonePresent: number = GetAuditoryApparatusInfo_microphonePresent; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneGainSettable
 * @constant
 */
export
const GetAuditoryApparatusInfo_microphoneGainSettable: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainSettable
 * @constant
 */
export
const microphoneGainSettable: number = GetAuditoryApparatusInfo_microphoneGainSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneGainReadable
 * @constant
 */
export
const GetAuditoryApparatusInfo_microphoneGainReadable: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainReadable
 * @constant
 */
export
const microphoneGainReadable: number = GetAuditoryApparatusInfo_microphoneGainReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneMuteSettable
 * @constant
 */
export
const GetAuditoryApparatusInfo_microphoneMuteSettable: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMuteSettable
 * @constant
 */
export
const microphoneMuteSettable: number = GetAuditoryApparatusInfo_microphoneMuteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneMuteReadable
 * @constant
 */
export
const GetAuditoryApparatusInfo_microphoneMuteReadable: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMuteReadable
 * @constant
 */
export
const microphoneMuteReadable: number = GetAuditoryApparatusInfo_microphoneMuteReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_hookswitchSettable
 * @constant
 */
export
const GetAuditoryApparatusInfo_hookswitchSettable: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchSettable
 * @constant
 */
export
const hookswitchSettable: number = GetAuditoryApparatusInfo_hookswitchSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_hookswitchOnHook
 * @constant
 */
export
const GetAuditoryApparatusInfo_hookswitchOnHook: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchOnHook
 * @constant
 */
export
const hookswitchOnHook: number = GetAuditoryApparatusInfo_hookswitchOnHook; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_privateDataInAck
 * @constant
 */
export
const GetAuditoryApparatusInfo_privateDataInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetAuditoryApparatusInfo_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAuditoryApparatusInfo: $.ASN1Decoder<GetAuditoryApparatusInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAuditoryApparatusInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAuditoryApparatusInfo (el: _Element): GetAuditoryApparatusInfo {
    if (!_cached_decoder_for_GetAuditoryApparatusInfo) { _cached_decoder_for_GetAuditoryApparatusInfo = $._decodeBitString; }
    return _cached_decoder_for_GetAuditoryApparatusInfo(el);
}

let _cached_encoder_for_GetAuditoryApparatusInfo: $.ASN1Encoder<GetAuditoryApparatusInfo> | null = null;

/**
 * @summary Encodes a(n) GetAuditoryApparatusInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAuditoryApparatusInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GetAuditoryApparatusInfo (value: GetAuditoryApparatusInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAuditoryApparatusInfo) { _cached_encoder_for_GetAuditoryApparatusInfo = $._encodeBitString; }
    return _cached_encoder_for_GetAuditoryApparatusInfo(value, elGetter);
}


/* eslint-enable */
