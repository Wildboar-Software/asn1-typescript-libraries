/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";
// export { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";


/**
 * @summary ListOfInvolvedParties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListOfInvolvedParties  ::=  SEQUENCE  OF
 *    InvolvedParty
 * ```
 */
export
type ListOfInvolvedParties = InvolvedParty[]; // SequenceOfType

let _cached_decoder_for_ListOfInvolvedParties: $.ASN1Decoder<ListOfInvolvedParties> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListOfInvolvedParties
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListOfInvolvedParties (el: _Element): ListOfInvolvedParties {
    if (!_cached_decoder_for_ListOfInvolvedParties) { _cached_decoder_for_ListOfInvolvedParties = $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty); }
    return _cached_decoder_for_ListOfInvolvedParties(el);
}

let _cached_encoder_for_ListOfInvolvedParties: $.ASN1Encoder<ListOfInvolvedParties> | null = null;

/**
 * @summary Encodes a(n) ListOfInvolvedParties into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfInvolvedParties, encoded as an ASN.1 Element.
 */
export
function _encode_ListOfInvolvedParties (value: ListOfInvolvedParties, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListOfInvolvedParties) { _cached_encoder_for_ListOfInvolvedParties = $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER); }
    return _cached_encoder_for_ListOfInvolvedParties(value, elGetter);
}


/* eslint-enable */
