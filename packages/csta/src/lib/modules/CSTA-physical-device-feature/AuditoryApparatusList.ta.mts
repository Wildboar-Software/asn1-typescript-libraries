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
import { AuditoryApparatusList_Item, _decode_AuditoryApparatusList_Item, _encode_AuditoryApparatusList_Item } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item.ta.mjs";
// export { AuditoryApparatusList_Item, _decode_AuditoryApparatusList_Item, _encode_AuditoryApparatusList_Item } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item.ta.mjs";


/**
 * @summary AuditoryApparatusList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList  ::=  SEQUENCE OF SEQUENCE 
 * {    auditoryApparatus     AuditoryApparatusID,
 *     auditoryApparatusType     ENUMERATED 
 *     {    speakerphone             (0),
 *         handset             (1),
 *         headset             (2),
 *         speakerOnlyPhone         (3),
 *         other                 (4) },
 * 
 *     speaker         BIT STRING 
 *     {    present             (0),
 *         volumeSettable             (1),
 *         volumeReadable             (2),
 *         muteSettable             (3),
 *         muteReadable             (4) },
 * 
 *     microphone         BIT STRING 
 *     {    present             (0),
 *         gainSettable             (1),
 *         gainReadable             (2),
 *         muteSettable             (3),
 *         muteReadable             (4) },
 * 
 *     hookswitch         BIT STRING 
 *     {    hookswitchSettable         (0),
 *         hookswitchOnHook         (1) },
 * 
 *     hookswitchID         HookswitchID }
 * ```
 */
export
type AuditoryApparatusList = AuditoryApparatusList_Item[]; // SequenceOfType

let _cached_decoder_for_AuditoryApparatusList: $.ASN1Decoder<AuditoryApparatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList (el: _Element): AuditoryApparatusList {
    if (!_cached_decoder_for_AuditoryApparatusList) { _cached_decoder_for_AuditoryApparatusList = $._decodeSequenceOf<AuditoryApparatusList_Item>(() => _decode_AuditoryApparatusList_Item); }
    return _cached_decoder_for_AuditoryApparatusList(el);
}

let _cached_encoder_for_AuditoryApparatusList: $.ASN1Encoder<AuditoryApparatusList> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList (value: AuditoryApparatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList) { _cached_encoder_for_AuditoryApparatusList = $._encodeSequenceOf<AuditoryApparatusList_Item>(() => _encode_AuditoryApparatusList_Item, $.BER); }
    return _cached_encoder_for_AuditoryApparatusList(value, elGetter);
}


/* eslint-enable */
