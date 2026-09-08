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
import { SpeakerVolumeList_Item, _decode_SpeakerVolumeList_Item, _encode_SpeakerVolumeList_Item } from "../CSTA-get-speaker-volume/SpeakerVolumeList-Item.ta.mjs";
// export { SpeakerVolumeList_Item, _decode_SpeakerVolumeList_Item, _encode_SpeakerVolumeList_Item } from "../CSTA-get-speaker-volume/SpeakerVolumeList-Item.ta.mjs";


/**
 * @summary SpeakerVolumeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerVolumeList  ::=  SEQUENCE OF SEQUENCE
 * {    auditoryApparatus        AuditoryApparatusID,
 *     speakerVolAbs            VolAbs                    OPTIONAL }
 * ```
 */
export
type SpeakerVolumeList = SpeakerVolumeList_Item[]; // SequenceOfType

let _cached_decoder_for_SpeakerVolumeList: $.ASN1Decoder<SpeakerVolumeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolumeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolumeList (el: _Element): SpeakerVolumeList {
    if (!_cached_decoder_for_SpeakerVolumeList) { _cached_decoder_for_SpeakerVolumeList = $._decodeSequenceOf<SpeakerVolumeList_Item>(() => _decode_SpeakerVolumeList_Item); }
    return _cached_decoder_for_SpeakerVolumeList(el);
}

let _cached_encoder_for_SpeakerVolumeList: $.ASN1Encoder<SpeakerVolumeList> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolumeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolumeList, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolumeList (value: SpeakerVolumeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolumeList) { _cached_encoder_for_SpeakerVolumeList = $._encodeSequenceOf<SpeakerVolumeList_Item>(() => _encode_SpeakerVolumeList_Item, $.BER); }
    return _cached_encoder_for_SpeakerVolumeList(value, elGetter);
}


/* eslint-enable */
