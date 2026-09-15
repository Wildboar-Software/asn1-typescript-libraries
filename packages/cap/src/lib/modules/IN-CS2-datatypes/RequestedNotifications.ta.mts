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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-CS2-datatypes/CallConditions.ta.mjs";
// export { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-CS2-datatypes/CallConditions.ta.mjs";


/**
 * @summary RequestedNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNotifications{PARAMETERS-BOUND:bound}  ::=  SET OF CallConditions{bound}
 * ```
 */
export
type RequestedNotifications = CallConditions[]; // SetOfType

let _cached_decoder_for_RequestedNotifications: $.ASN1Decoder<RequestedNotifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNotifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNotifications (el: _Element): RequestedNotifications {
    if (!_cached_decoder_for_RequestedNotifications) { _cached_decoder_for_RequestedNotifications = $._decodeSetOf<CallConditions>(() => _decode_CallConditions); }
    return _cached_decoder_for_RequestedNotifications(el);
}

let _cached_encoder_for_RequestedNotifications: $.ASN1Encoder<RequestedNotifications> | null = null;

/**
 * @summary Encodes a(n) RequestedNotifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNotifications (value: RequestedNotifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNotifications) { _cached_encoder_for_RequestedNotifications = $._encodeSetOf<CallConditions>(() => _encode_CallConditions, $.BER); }
    return _cached_encoder_for_RequestedNotifications(value, elGetter);
}


/* eslint-enable */
