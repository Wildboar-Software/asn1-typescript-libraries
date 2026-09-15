/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingEvent, _decode_ChargingEvent, _encode_ChargingEvent } from "../Core-INAP-CS1-DataTypes/ChargingEvent.ta.mjs";
// export { ChargingEvent, _decode_ChargingEvent, _encode_ChargingEvent } from "../Core-INAP-CS1-DataTypes/ChargingEvent.ta.mjs";


/**
 * @summary RequestNotificationChargingEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestNotificationChargingEventArg      ::=  SEQUENCE SIZE (1..numOfChargingEvents) OF ChargingEvent
 * ```
 */
export
type RequestNotificationChargingEventArg = ChargingEvent[]; // SequenceOfType

let _cached_decoder_for_RequestNotificationChargingEventArg: $.ASN1Decoder<RequestNotificationChargingEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestNotificationChargingEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestNotificationChargingEventArg (el: _Element): RequestNotificationChargingEventArg {
    if (!_cached_decoder_for_RequestNotificationChargingEventArg) { _cached_decoder_for_RequestNotificationChargingEventArg = $._decodeSequenceOf<ChargingEvent>(() => _decode_ChargingEvent); }
    const value = _cached_decoder_for_RequestNotificationChargingEventArg(el);
    if (value.length < 1) {
        throw new ASN1SizeError("RequestNotificationChargingEventArg violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RequestNotificationChargingEventArg: $.ASN1Encoder<RequestNotificationChargingEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestNotificationChargingEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestNotificationChargingEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestNotificationChargingEventArg (value: RequestNotificationChargingEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestNotificationChargingEventArg) { _cached_encoder_for_RequestNotificationChargingEventArg = $._encodeSequenceOf<ChargingEvent>(() => _encode_ChargingEvent, $.BER); }
    return _cached_encoder_for_RequestNotificationChargingEventArg(value, elGetter);
}


/* eslint-enable */
