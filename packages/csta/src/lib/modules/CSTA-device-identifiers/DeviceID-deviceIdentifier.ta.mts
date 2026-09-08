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
import { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../CSTA-device-identifiers/NumberDigits.ta.mjs";
// export { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../CSTA-device-identifiers/NumberDigits.ta.mjs";
import { DeviceNumber, _decode_DeviceNumber, _encode_DeviceNumber } from "../CSTA-device-identifiers/DeviceNumber.ta.mjs";
// export { DeviceNumber, _decode_DeviceNumber, _encode_DeviceNumber } from "../CSTA-device-identifiers/DeviceNumber.ta.mjs";
import { PublicTON, _decode_PublicTON, _encode_PublicTON } from "../CSTA-device-identifiers/PublicTON.ta.mjs";
// export { PublicTON, _decode_PublicTON, _encode_PublicTON } from "../CSTA-device-identifiers/PublicTON.ta.mjs";
import { PrivateTON, _decode_PrivateTON, _encode_PrivateTON } from "../CSTA-device-identifiers/PrivateTON.ta.mjs";
// export { PrivateTON, _decode_PrivateTON, _encode_PrivateTON } from "../CSTA-device-identifiers/PrivateTON.ta.mjs";
import { OtherPlan, _decode_OtherPlan, _encode_OtherPlan } from "../CSTA-device-identifiers/OtherPlan.ta.mjs";
// export { OtherPlan, _decode_OtherPlan, _encode_OtherPlan } from "../CSTA-device-identifiers/OtherPlan.ta.mjs";


/**
 * @summary DeviceID_deviceIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceID-deviceIdentifier ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DeviceID_deviceIdentifier =
    { dialingNumber: NumberDigits } /* CHOICE_ALT_ROOT */
    | { deviceNumber: DeviceNumber } /* CHOICE_ALT_ROOT */
    | { implicitPublic: NumberDigits } /* CHOICE_ALT_ROOT */
    | { explicitPublic: PublicTON } /* CHOICE_ALT_ROOT */
    | { implicitPrivate: NumberDigits } /* CHOICE_ALT_ROOT */
    | { explicitPrivate: PrivateTON } /* CHOICE_ALT_ROOT */
    | { other: OtherPlan } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeviceID_deviceIdentifier: $.ASN1Decoder<DeviceID_deviceIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceID_deviceIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceID_deviceIdentifier (el: _Element): DeviceID_deviceIdentifier {
    if (!_cached_decoder_for_DeviceID_deviceIdentifier) { _cached_decoder_for_DeviceID_deviceIdentifier = $._decode_inextensible_choice<DeviceID_deviceIdentifier>({
    "CONTEXT 0": [ "dialingNumber", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 1": [ "deviceNumber", $._decode_implicit<DeviceNumber>(() => _decode_DeviceNumber) ],
    "CONTEXT 2": [ "implicitPublic", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 3": [ "explicitPublic", $._decode_explicit<PublicTON>(() => _decode_PublicTON) ],
    "CONTEXT 4": [ "implicitPrivate", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 5": [ "explicitPrivate", $._decode_explicit<PrivateTON>(() => _decode_PrivateTON) ],
    "CONTEXT 6": [ "other", $._decode_implicit<OtherPlan>(() => _decode_OtherPlan) ]
}); }
    return _cached_decoder_for_DeviceID_deviceIdentifier(el);
}

let _cached_encoder_for_DeviceID_deviceIdentifier: $.ASN1Encoder<DeviceID_deviceIdentifier> | null = null;

/**
 * @summary Encodes a(n) DeviceID_deviceIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceID_deviceIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceID_deviceIdentifier (value: DeviceID_deviceIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceID_deviceIdentifier) { _cached_encoder_for_DeviceID_deviceIdentifier = $._encode_choice<DeviceID_deviceIdentifier>({
    "dialingNumber": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberDigits, $.BER),
    "deviceNumber": $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceNumber, $.BER),
    "implicitPublic": $._encode_implicit(_TagClass.context, 2, () => _encode_NumberDigits, $.BER),
    "explicitPublic": $._encode_explicit(_TagClass.context, 3, () => _encode_PublicTON, $.BER),
    "implicitPrivate": $._encode_implicit(_TagClass.context, 4, () => _encode_NumberDigits, $.BER),
    "explicitPrivate": $._encode_explicit(_TagClass.context, 5, () => _encode_PrivateTON, $.BER),
    "other": $._encode_implicit(_TagClass.context, 6, () => _encode_OtherPlan, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeviceID_deviceIdentifier(value, elGetter);
}


/* eslint-enable */
