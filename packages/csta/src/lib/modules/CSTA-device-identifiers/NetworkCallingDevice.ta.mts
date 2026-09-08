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
import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";
// export { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";


/**
 * @summary NetworkCallingDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCallingDevice  ::=  NetworkCallingDeviceID
 * ```
 */
export
type NetworkCallingDevice = NetworkCallingDeviceID; // DefinedType

let _cached_decoder_for_NetworkCallingDevice: $.ASN1Decoder<NetworkCallingDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCallingDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCallingDevice (el: _Element): NetworkCallingDevice {
    if (!_cached_decoder_for_NetworkCallingDevice) { _cached_decoder_for_NetworkCallingDevice = _decode_NetworkCallingDeviceID; }
    return _cached_decoder_for_NetworkCallingDevice(el);
}

let _cached_encoder_for_NetworkCallingDevice: $.ASN1Encoder<NetworkCallingDevice> | null = null;

/**
 * @summary Encodes a(n) NetworkCallingDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCallingDevice, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCallingDevice (value: NetworkCallingDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCallingDevice) { _cached_encoder_for_NetworkCallingDevice = _encode_NetworkCallingDeviceID; }
    return _cached_encoder_for_NetworkCallingDevice(value, elGetter);
}


/* eslint-enable */
