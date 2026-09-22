/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";


/**
 * @summary AddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressInformation  ::=  PartyNumber
 * ```
 */
export
type AddressInformation = PartyNumber; // DefinedType

let _cached_decoder_for_AddressInformation: $.ASN1Decoder<AddressInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressInformation (el: _Element): AddressInformation {
    if (!_cached_decoder_for_AddressInformation) { _cached_decoder_for_AddressInformation = _decode_PartyNumber; }
    return _cached_decoder_for_AddressInformation(el);
}

let _cached_encoder_for_AddressInformation: $.ASN1Encoder<AddressInformation> | null = null;

/**
 * @summary Encodes a(n) AddressInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AddressInformation (value: AddressInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressInformation) { _cached_encoder_for_AddressInformation = _encode_PartyNumber; }
    return _cached_encoder_for_AddressInformation(value, elGetter);
}


/* eslint-enable */
