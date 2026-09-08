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
import { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";
// export { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";


/**
 * @summary LastRedirectionDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastRedirectionDevice  ::=  RedirectionDeviceID
 * ```
 */
export
type LastRedirectionDevice = RedirectionDeviceID; // DefinedType

let _cached_decoder_for_LastRedirectionDevice: $.ASN1Decoder<LastRedirectionDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastRedirectionDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LastRedirectionDevice (el: _Element): LastRedirectionDevice {
    if (!_cached_decoder_for_LastRedirectionDevice) { _cached_decoder_for_LastRedirectionDevice = _decode_RedirectionDeviceID; }
    return _cached_decoder_for_LastRedirectionDevice(el);
}

let _cached_encoder_for_LastRedirectionDevice: $.ASN1Encoder<LastRedirectionDevice> | null = null;

/**
 * @summary Encodes a(n) LastRedirectionDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastRedirectionDevice, encoded as an ASN.1 Element.
 */
export
function _encode_LastRedirectionDevice (value: LastRedirectionDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LastRedirectionDevice) { _cached_encoder_for_LastRedirectionDevice = _encode_RedirectionDeviceID; }
    return _cached_encoder_for_LastRedirectionDevice(value, elGetter);
}


/* eslint-enable */
