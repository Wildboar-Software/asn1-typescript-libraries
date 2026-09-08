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
 * @summary AssociatedCallingDeviceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatedCallingDeviceID ::=  [APPLICATION 5] CHOICE
 * {    deviceIdentifier             DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type AssociatedCallingDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AssociatedCallingDeviceID: $.ASN1Decoder<AssociatedCallingDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCallingDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatedCallingDeviceID (el: _Element): AssociatedCallingDeviceID {
    if (!_cached_decoder_for_AssociatedCallingDeviceID) { _cached_decoder_for_AssociatedCallingDeviceID = $._decode_explicit<AssociatedCallingDeviceID>(() => $._decode_inextensible_choice<AssociatedCallingDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_AssociatedCallingDeviceID(el);
}

let _cached_encoder_for_AssociatedCallingDeviceID: $.ASN1Encoder<AssociatedCallingDeviceID> | null = null;

/**
 * @summary Encodes a(n) AssociatedCallingDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCallingDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatedCallingDeviceID (value: AssociatedCallingDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatedCallingDeviceID) { _cached_encoder_for_AssociatedCallingDeviceID = $._encode_explicit(_TagClass.application, 5, () => $._encode_choice<AssociatedCallingDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_AssociatedCallingDeviceID(value, elGetter);
}


/* eslint-enable */
