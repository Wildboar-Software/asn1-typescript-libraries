/* eslint-disable */
import {
    INTEGER,
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
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";


/**
 * @summary RequestedInformationValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationValue      ::=  CHOICE {
 *      callAttemptElapsedTimeValue     [0] INTEGER (0..255),
 *      callStopTimeValue     [1] DateAndTime,
 *      callConnectedElapsedTimeValue     [2] Integer4,
 *      calledAddressValue     [3] Digits,
 *      releaseCauseValue     [30] Cause
 *      }
 * ```
 */
export
type RequestedInformationValue =
    { callAttemptElapsedTimeValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { callStopTimeValue: DateAndTime } /* CHOICE_ALT_ROOT */
    | { callConnectedElapsedTimeValue: Integer4 } /* CHOICE_ALT_ROOT */
    | { calledAddressValue: Digits } /* CHOICE_ALT_ROOT */
    | { releaseCauseValue: Cause } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestedInformationValue: $.ASN1Decoder<RequestedInformationValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInformationValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInformationValue (el: _Element): RequestedInformationValue {
    if (!_cached_decoder_for_RequestedInformationValue) { _cached_decoder_for_RequestedInformationValue = $._decode_inextensible_choice<RequestedInformationValue>({
    "CONTEXT 0": [ "callAttemptElapsedTimeValue", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "callStopTimeValue", $._decode_implicit<DateAndTime>(() => _decode_DateAndTime) ],
    "CONTEXT 2": [ "callConnectedElapsedTimeValue", $._decode_implicit<Integer4>(() => _decode_Integer4) ],
    "CONTEXT 3": [ "calledAddressValue", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 30": [ "releaseCauseValue", $._decode_implicit<Cause>(() => _decode_Cause) ]
}); }
    return _cached_decoder_for_RequestedInformationValue(el);
}

let _cached_encoder_for_RequestedInformationValue: $.ASN1Encoder<RequestedInformationValue> | null = null;

/**
 * @summary Encodes a(n) RequestedInformationValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInformationValue, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInformationValue (value: RequestedInformationValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInformationValue) { _cached_encoder_for_RequestedInformationValue = $._encode_choice<RequestedInformationValue>({
    "callAttemptElapsedTimeValue": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "callStopTimeValue": $._encode_implicit(_TagClass.context, 1, () => _encode_DateAndTime, $.BER),
    "callConnectedElapsedTimeValue": $._encode_implicit(_TagClass.context, 2, () => _encode_Integer4, $.BER),
    "calledAddressValue": $._encode_implicit(_TagClass.context, 3, () => _encode_Digits, $.BER),
    "releaseCauseValue": $._encode_implicit(_TagClass.context, 30, () => _encode_Cause, $.BER),
}, $.BER); }
    return _cached_encoder_for_RequestedInformationValue(value, elGetter);
}


/* eslint-enable */
