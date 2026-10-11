/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSHandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSHandoverType  ::=  ExternalASNType
 * ```
 */
export
type EPSHandoverType = ExternalASNType; // DefinedType

let _cached_decoder_for_EPSHandoverType: $.ASN1Decoder<EPSHandoverType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSHandoverType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSHandoverType (el: _Element): EPSHandoverType {
    if (!_cached_decoder_for_EPSHandoverType) { _cached_decoder_for_EPSHandoverType = _decode_ExternalASNType; }
    return _cached_decoder_for_EPSHandoverType(el);
}

let _cached_encoder_for_EPSHandoverType: $.ASN1Encoder<EPSHandoverType> | null = null;

/**
 * @summary Encodes a(n) EPSHandoverType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSHandoverType, encoded as an ASN.1 Element.
 */
export
function _encode_EPSHandoverType (value: EPSHandoverType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSHandoverType) { _cached_encoder_for_EPSHandoverType = _encode_ExternalASNType; }
    return _cached_encoder_for_EPSHandoverType(value, elGetter);
}


/* eslint-enable */
