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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";


/**
 * @summary ChargedDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedDevice  ::=  CHOICE
 * {     operator             [ 0] IMPLICIT     DeviceID,
 *     nonOperator             [ 1] IMPLICIT     DeviceID }
 * ```
 */
export
type ChargedDevice =
    { operator: DeviceID } /* CHOICE_ALT_ROOT */
    | { nonOperator: DeviceID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargedDevice: $.ASN1Decoder<ChargedDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargedDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargedDevice (el: _Element): ChargedDevice {
    if (!_cached_decoder_for_ChargedDevice) { _cached_decoder_for_ChargedDevice = $._decode_inextensible_choice<ChargedDevice>({
    "CONTEXT 0": [ "operator", $._decode_implicit<DeviceID>(() => _decode_DeviceID) ],
    "CONTEXT 1": [ "nonOperator", $._decode_implicit<DeviceID>(() => _decode_DeviceID) ]
}); }
    return _cached_decoder_for_ChargedDevice(el);
}

let _cached_encoder_for_ChargedDevice: $.ASN1Encoder<ChargedDevice> | null = null;

/**
 * @summary Encodes a(n) ChargedDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargedDevice, encoded as an ASN.1 Element.
 */
export
function _encode_ChargedDevice (value: ChargedDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargedDevice) { _cached_encoder_for_ChargedDevice = $._encode_choice<ChargedDevice>({
    "operator": $._encode_implicit(_TagClass.context, 0, () => _encode_DeviceID, $.BER),
    "nonOperator": $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceID, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargedDevice(value, elGetter);
}


/* eslint-enable */
