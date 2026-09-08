/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from "../Attribute-ASN1Module/ProbableCause.ta.mjs";



/**
 * @summary ProbableCauseList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProbableCauseList  ::=  SET OF ProbableCause
 * ```
 */
export
type ProbableCauseList = ProbableCause[]; // SetOfType

let _cached_decoder_for_ProbableCauseList: $.ASN1Decoder<ProbableCauseList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbableCauseList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProbableCauseList (el: _Element): ProbableCauseList {
    if (!_cached_decoder_for_ProbableCauseList) { _cached_decoder_for_ProbableCauseList = $._decodeSetOf<ProbableCause>(() => _decode_ProbableCause); }
    return _cached_decoder_for_ProbableCauseList(el);
}

let _cached_encoder_for_ProbableCauseList: $.ASN1Encoder<ProbableCauseList> | null = null;

/**
 * @summary Encodes a(n) ProbableCauseList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbableCauseList, encoded as an ASN.1 Element.
 */
export
function _encode_ProbableCauseList (value: ProbableCauseList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProbableCauseList) { _cached_encoder_for_ProbableCauseList = $._encodeSetOf<ProbableCause>(() => _encode_ProbableCause, $.BER); }
    return _cached_encoder_for_ProbableCauseList(value, elGetter);
}


/* eslint-enable */
