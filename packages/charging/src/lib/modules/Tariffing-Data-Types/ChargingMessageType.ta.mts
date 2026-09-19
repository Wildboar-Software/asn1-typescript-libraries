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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingTariffInformation, _decode_ChargingTariffInformation, _encode_ChargingTariffInformation } from "../Tariffing-Data-Types/ChargingTariffInformation.ta.mjs";
// export { ChargingTariffInformation, _decode_ChargingTariffInformation, _encode_ChargingTariffInformation } from "../Tariffing-Data-Types/ChargingTariffInformation.ta.mjs";
import { AddOnChargingInformation, _decode_AddOnChargingInformation, _encode_AddOnChargingInformation } from "../Tariffing-Data-Types/AddOnChargingInformation.ta.mjs";
// export { AddOnChargingInformation, _decode_AddOnChargingInformation, _encode_AddOnChargingInformation } from "../Tariffing-Data-Types/AddOnChargingInformation.ta.mjs";
import { ChargingAcknowledgementInformation, _decode_ChargingAcknowledgementInformation, _encode_ChargingAcknowledgementInformation } from "../Tariffing-Data-Types/ChargingAcknowledgementInformation.ta.mjs";
// export { ChargingAcknowledgementInformation, _decode_ChargingAcknowledgementInformation, _encode_ChargingAcknowledgementInformation } from "../Tariffing-Data-Types/ChargingAcknowledgementInformation.ta.mjs";
import { StartCharging, _decode_StartCharging, _encode_StartCharging } from "../Tariffing-Data-Types/StartCharging.ta.mjs";
// export { StartCharging, _decode_StartCharging, _encode_StartCharging } from "../Tariffing-Data-Types/StartCharging.ta.mjs";
import { StopCharging, _decode_StopCharging, _encode_StopCharging } from "../Tariffing-Data-Types/StopCharging.ta.mjs";
// export { StopCharging, _decode_StopCharging, _encode_StopCharging } from "../Tariffing-Data-Types/StopCharging.ta.mjs";


/**
 * @summary ChargingMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingMessageType  ::=  CHOICE {
 *     crgt [0] ChargingTariffInformation,
 *     aocrg [1] AddOnChargingInformation ,
 *     crga [2] ChargingAcknowledgementInformation ,
 *     start [3] StartCharging ,
 *     stop [4] StopCharging }
 * ```
 */
export
type ChargingMessageType =
    { crgt: ChargingTariffInformation } /* CHOICE_ALT_ROOT */
    | { aocrg: AddOnChargingInformation } /* CHOICE_ALT_ROOT */
    | { crga: ChargingAcknowledgementInformation } /* CHOICE_ALT_ROOT */
    | { start: StartCharging } /* CHOICE_ALT_ROOT */
    | { stop: StopCharging } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingMessageType: $.ASN1Decoder<ChargingMessageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingMessageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingMessageType (el: _Element): ChargingMessageType {
    if (!_cached_decoder_for_ChargingMessageType) { _cached_decoder_for_ChargingMessageType = $._decode_inextensible_choice<ChargingMessageType>({
    "CONTEXT 0": [ "crgt", $._decode_implicit<ChargingTariffInformation>(() => _decode_ChargingTariffInformation) ],
    "CONTEXT 1": [ "aocrg", $._decode_implicit<AddOnChargingInformation>(() => _decode_AddOnChargingInformation) ],
    "CONTEXT 2": [ "crga", $._decode_implicit<ChargingAcknowledgementInformation>(() => _decode_ChargingAcknowledgementInformation) ],
    "CONTEXT 3": [ "start", $._decode_implicit<StartCharging>(() => _decode_StartCharging) ],
    "CONTEXT 4": [ "stop", $._decode_implicit<StopCharging>(() => _decode_StopCharging) ]
}); }
    return _cached_decoder_for_ChargingMessageType(el);
}

let _cached_encoder_for_ChargingMessageType: $.ASN1Encoder<ChargingMessageType> | null = null;

/**
 * @summary Encodes a(n) ChargingMessageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingMessageType, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingMessageType (value: ChargingMessageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingMessageType) { _cached_encoder_for_ChargingMessageType = $._encode_choice<ChargingMessageType>({
    "crgt": $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingTariffInformation, $.BER),
    "aocrg": $._encode_implicit(_TagClass.context, 1, () => _encode_AddOnChargingInformation, $.BER),
    "crga": $._encode_implicit(_TagClass.context, 2, () => _encode_ChargingAcknowledgementInformation, $.BER),
    "start": $._encode_implicit(_TagClass.context, 3, () => _encode_StartCharging, $.BER),
    "stop": $._encode_implicit(_TagClass.context, 4, () => _encode_StopCharging, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargingMessageType(value, elGetter);
}


/* eslint-enable */
