/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSHandoverRestrictionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSHandoverRestrictionList  ::=  ExternalASNType
 * ```
 */
export
type EPSHandoverRestrictionList = ExternalASNType; // DefinedType

let _cached_decoder_for_EPSHandoverRestrictionList: $.ASN1Decoder<EPSHandoverRestrictionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSHandoverRestrictionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSHandoverRestrictionList (el: _Element): EPSHandoverRestrictionList {
    if (!_cached_decoder_for_EPSHandoverRestrictionList) { _cached_decoder_for_EPSHandoverRestrictionList = _decode_ExternalASNType; }
    return _cached_decoder_for_EPSHandoverRestrictionList(el);
}

let _cached_encoder_for_EPSHandoverRestrictionList: $.ASN1Encoder<EPSHandoverRestrictionList> | null = null;

/**
 * @summary Encodes a(n) EPSHandoverRestrictionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSHandoverRestrictionList, encoded as an ASN.1 Element.
 */
export
function _encode_EPSHandoverRestrictionList (value: EPSHandoverRestrictionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSHandoverRestrictionList) { _cached_encoder_for_EPSHandoverRestrictionList = _encode_ExternalASNType; }
    return _cached_encoder_for_EPSHandoverRestrictionList(value, elGetter);
}


/* eslint-enable */
