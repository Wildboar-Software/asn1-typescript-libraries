/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from "../Attribute-ASN1Module/PerceivedSeverity.ta.mjs";



/**
 * @summary PerceivedSeverityList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerceivedSeverityList  ::=  SET OF PerceivedSeverity
 * ```
 */
export
type PerceivedSeverityList = PerceivedSeverity[]; // SetOfType

let _cached_decoder_for_PerceivedSeverityList: $.ASN1Decoder<PerceivedSeverityList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerceivedSeverityList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PerceivedSeverityList (el: _Element): PerceivedSeverityList {
    if (!_cached_decoder_for_PerceivedSeverityList) { _cached_decoder_for_PerceivedSeverityList = $._decodeSetOf<PerceivedSeverity>(() => _decode_PerceivedSeverity); }
    return _cached_decoder_for_PerceivedSeverityList(el);
}

let _cached_encoder_for_PerceivedSeverityList: $.ASN1Encoder<PerceivedSeverityList> | null = null;

/**
 * @summary Encodes a(n) PerceivedSeverityList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerceivedSeverityList, encoded as an ASN.1 Element.
 */
export
function _encode_PerceivedSeverityList (value: PerceivedSeverityList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PerceivedSeverityList) { _cached_encoder_for_PerceivedSeverityList = $._encodeSetOf<PerceivedSeverity>(() => _encode_PerceivedSeverity, $.BER); }
    return _cached_encoder_for_PerceivedSeverityList(value, elGetter);
}


/* eslint-enable */
