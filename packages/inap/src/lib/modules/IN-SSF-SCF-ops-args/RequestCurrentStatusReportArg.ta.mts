/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-SSF-SCF-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-SSF-SCF-datatypes/ResourceID.ta.mjs";


/**
 * @summary RequestCurrentStatusReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestCurrentStatusReportArg  ::= 
 *   ResourceID
 * ```
 */
export
type RequestCurrentStatusReportArg = ResourceID; // DefinedType

let _cached_decoder_for_RequestCurrentStatusReportArg: $.ASN1Decoder<RequestCurrentStatusReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestCurrentStatusReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestCurrentStatusReportArg (el: _Element): RequestCurrentStatusReportArg {
    if (!_cached_decoder_for_RequestCurrentStatusReportArg) { _cached_decoder_for_RequestCurrentStatusReportArg = _decode_ResourceID; }
    return _cached_decoder_for_RequestCurrentStatusReportArg(el);
}

let _cached_encoder_for_RequestCurrentStatusReportArg: $.ASN1Encoder<RequestCurrentStatusReportArg> | null = null;

/**
 * @summary Encodes a(n) RequestCurrentStatusReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestCurrentStatusReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestCurrentStatusReportArg (value: RequestCurrentStatusReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestCurrentStatusReportArg) { _cached_encoder_for_RequestCurrentStatusReportArg = _encode_ResourceID; }
    return _cached_encoder_for_RequestCurrentStatusReportArg(value, elGetter);
}


/* eslint-enable */
