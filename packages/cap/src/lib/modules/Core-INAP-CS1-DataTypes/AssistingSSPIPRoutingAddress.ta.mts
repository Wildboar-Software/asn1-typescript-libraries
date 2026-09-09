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
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";


/**
 * @summary AssistingSSPIPRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistingSSPIPRoutingAddress  ::=  Digits
 * ```
 */
export
type AssistingSSPIPRoutingAddress = Digits; // DefinedType

let _cached_decoder_for_AssistingSSPIPRoutingAddress: $.ASN1Decoder<AssistingSSPIPRoutingAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistingSSPIPRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistingSSPIPRoutingAddress (el: _Element): AssistingSSPIPRoutingAddress {
    if (!_cached_decoder_for_AssistingSSPIPRoutingAddress) { _cached_decoder_for_AssistingSSPIPRoutingAddress = _decode_Digits; }
    return _cached_decoder_for_AssistingSSPIPRoutingAddress(el);
}

let _cached_encoder_for_AssistingSSPIPRoutingAddress: $.ASN1Encoder<AssistingSSPIPRoutingAddress> | null = null;

/**
 * @summary Encodes a(n) AssistingSSPIPRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistingSSPIPRoutingAddress, encoded as an ASN.1 Element.
 */
export
function _encode_AssistingSSPIPRoutingAddress (value: AssistingSSPIPRoutingAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistingSSPIPRoutingAddress) { _cached_encoder_for_AssistingSSPIPRoutingAddress = _encode_Digits; }
    return _cached_encoder_for_AssistingSSPIPRoutingAddress(value, elGetter);
}


/* eslint-enable */
