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
import { DeviceList_Item, _decode_DeviceList_Item, _encode_DeviceList_Item } from "../CSTA-switching-function-devices/DeviceList-Item.ta.mjs";
// export { DeviceList_Item, _decode_DeviceList_Item, _encode_DeviceList_Item } from "../CSTA-switching-function-devices/DeviceList-Item.ta.mjs";


/**
 * @summary DeviceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceList  ::=  SEQUENCE OF SEQUENCE
 * {     deviceID             DeviceID,
 *     deviceCategory             [0] IMPLICIT DeviceCategory     DEFAULT station,
 *     namedDeviceTypes         [1] IMPLICIT NamedDeviceTypes     OPTIONAL,
 *     deviceAttributes         DeviceAttributes         OPTIONAL,
 *     deviceModelName         IA5String (SIZE(0..64))     OPTIONAL, 
 *     nidGroup            DeviceID            OPTIONAL }
 * ```
 */
export
type DeviceList = DeviceList_Item[]; // SequenceOfType

let _cached_decoder_for_DeviceList: $.ASN1Decoder<DeviceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceList (el: _Element): DeviceList {
    if (!_cached_decoder_for_DeviceList) { _cached_decoder_for_DeviceList = $._decodeSequenceOf<DeviceList_Item>(() => _decode_DeviceList_Item); }
    return _cached_decoder_for_DeviceList(el);
}

let _cached_encoder_for_DeviceList: $.ASN1Encoder<DeviceList> | null = null;

/**
 * @summary Encodes a(n) DeviceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceList (value: DeviceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceList) { _cached_encoder_for_DeviceList = $._encodeSequenceOf<DeviceList_Item>(() => _encode_DeviceList_Item, $.BER); }
    return _cached_encoder_for_DeviceList(value, elGetter);
}


/* eslint-enable */
