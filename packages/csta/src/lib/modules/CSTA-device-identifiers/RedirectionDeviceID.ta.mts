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
 * @summary RedirectionDeviceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectionDeviceID  ::=  [APPLICATION 4] CHOICE
 * {    numberdialed                DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     notRequired                [ 8] IMPLICIT     NULL,
 *     notSpecified                [ 9] IMPLICIT     NULL,
 *     restricted                [10] IMPLICIT     NULL }
 * ```
 */
export
type RedirectionDeviceID =
    { numberdialed: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { notRequired: NULL } /* CHOICE_ALT_ROOT */
    | { notSpecified: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RedirectionDeviceID: $.ASN1Decoder<RedirectionDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RedirectionDeviceID (el: _Element): RedirectionDeviceID {
    if (!_cached_decoder_for_RedirectionDeviceID) { _cached_decoder_for_RedirectionDeviceID = $._decode_explicit<RedirectionDeviceID>(() => $._decode_inextensible_choice<RedirectionDeviceID>({
    "UNIVERSAL 16": [ "numberdialed", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "notRequired", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "notSpecified", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 10": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_RedirectionDeviceID(el);
}

let _cached_encoder_for_RedirectionDeviceID: $.ASN1Encoder<RedirectionDeviceID> | null = null;

/**
 * @summary Encodes a(n) RedirectionDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_RedirectionDeviceID (value: RedirectionDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RedirectionDeviceID) { _cached_encoder_for_RedirectionDeviceID = $._encode_explicit(_TagClass.application, 4, () => $._encode_choice<RedirectionDeviceID>({
    "numberdialed": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "notRequired": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "notSpecified": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_RedirectionDeviceID(value, elGetter);
}


/* eslint-enable */
