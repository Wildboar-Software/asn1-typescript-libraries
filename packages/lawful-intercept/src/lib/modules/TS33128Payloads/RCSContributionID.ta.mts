/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";
// export { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";


/**
 * @summary RCSContributionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSContributionID  ::=  UUID
 * ```
 */
export
type RCSContributionID = UUID; // DefinedType

let _cached_decoder_for_RCSContributionID: $.ASN1Decoder<RCSContributionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSContributionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSContributionID (el: _Element): RCSContributionID {
    if (!_cached_decoder_for_RCSContributionID) { _cached_decoder_for_RCSContributionID = _decode_UUID; }
    return _cached_decoder_for_RCSContributionID(el);
}

let _cached_encoder_for_RCSContributionID: $.ASN1Encoder<RCSContributionID> | null = null;

/**
 * @summary Encodes a(n) RCSContributionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSContributionID, encoded as an ASN.1 Element.
 */
export
function _encode_RCSContributionID (value: RCSContributionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSContributionID) { _cached_encoder_for_RCSContributionID = _encode_UUID; }
    return _cached_encoder_for_RCSContributionID(value, elGetter);
}


/* eslint-enable */
