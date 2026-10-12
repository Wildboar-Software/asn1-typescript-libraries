/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RATRestrictionItem, _decode_RATRestrictionItem, _encode_RATRestrictionItem } from "../TS33128Payloads/RATRestrictionItem.ta.mjs";
// export { RATRestrictionItem, _decode_RATRestrictionItem, _encode_RATRestrictionItem } from "../TS33128Payloads/RATRestrictionItem.ta.mjs";


/**
 * @summary RATRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATRestrictions  ::=  SEQUENCE (SIZE(1..MAX)) OF RATRestrictionItem
 * ```
 */
export
type RATRestrictions = RATRestrictionItem[]; // SequenceOfType

let _cached_decoder_for_RATRestrictions: $.ASN1Decoder<RATRestrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RATRestrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RATRestrictions (el: _Element): RATRestrictions {
    if (!_cached_decoder_for_RATRestrictions) { _cached_decoder_for_RATRestrictions = $._decodeSequenceOf<RATRestrictionItem>(() => _decode_RATRestrictionItem); }
    return _cached_decoder_for_RATRestrictions(el);
}

let _cached_encoder_for_RATRestrictions: $.ASN1Encoder<RATRestrictions> | null = null;

/**
 * @summary Encodes a(n) RATRestrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_RATRestrictions (value: RATRestrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RATRestrictions) { _cached_encoder_for_RATRestrictions = $._encodeSequenceOf<RATRestrictionItem>(() => _encode_RATRestrictionItem, $.BER); }
    return _cached_encoder_for_RATRestrictions(value, elGetter);
}


/* eslint-enable */
