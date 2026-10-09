/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SuppliedRecords, _decode_SuppliedRecords, _encode_SuppliedRecords } from "../ESFormat-Update/SuppliedRecords.ta.mjs";
// export { SuppliedRecords, _decode_SuppliedRecords, _encode_SuppliedRecords } from "../ESFormat-Update/SuppliedRecords.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep  ::=  SuppliedRecords
 * ```
 */
export
type ClientPartNotToKeep = SuppliedRecords; // DefinedType

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = _decode_SuppliedRecords; }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = _encode_SuppliedRecords; }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
