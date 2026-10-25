/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TAI, _decode_TAI, _encode_TAI } from "../TS33128IdentityAssociation/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128IdentityAssociation/TAI.ta.mjs";


/**
 * @summary FiveGSTAIList
 * @description
 * 
 * List of tracking areas associated with the registration area within which the
 * UE is current registered, see TS 24.501 [13] clause 9.11.3.9 (see NOTE 2).
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSTAIList  ::=  SEQUENCE OF TAI
 * ```
 */
export
type FiveGSTAIList = TAI[]; // SequenceOfType

let _cached_decoder_for_FiveGSTAIList: $.ASN1Decoder<FiveGSTAIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSTAIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSTAIList (el: _Element): FiveGSTAIList {
    if (!_cached_decoder_for_FiveGSTAIList) { _cached_decoder_for_FiveGSTAIList = $._decodeSequenceOf<TAI>(() => _decode_TAI); }
    return _cached_decoder_for_FiveGSTAIList(el);
}

let _cached_encoder_for_FiveGSTAIList: $.ASN1Encoder<FiveGSTAIList> | null = null;

/**
 * @summary Encodes a(n) FiveGSTAIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSTAIList, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSTAIList (value: FiveGSTAIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSTAIList) { _cached_encoder_for_FiveGSTAIList = $._encodeSequenceOf<TAI>(() => _encode_TAI, $.BER); }
    return _cached_encoder_for_FiveGSTAIList(value, elGetter);
}


/* eslint-enable */
