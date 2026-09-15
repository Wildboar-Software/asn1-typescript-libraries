/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedUTSI, _decode_RequestedUTSI, _encode_RequestedUTSI } from "../IN-CS2-datatypes/RequestedUTSI.ta.mjs";
// export { RequestedUTSI, _decode_RequestedUTSI, _encode_RequestedUTSI } from "../IN-CS2-datatypes/RequestedUTSI.ta.mjs";


/**
 * @summary RequestedUTSIList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUTSIList{PARAMETERS-BOUND:bound}  ::= 
 *   SEQUENCE
 *     SIZE (bound.&minRequestedUTSINum..bound.&maxRequestedUTSINum) OF
 *     RequestedUTSI{bound}
 * ```
 */
export
type RequestedUTSIList = RequestedUTSI[]; // SequenceOfType

let _cached_decoder_for_RequestedUTSIList: $.ASN1Decoder<RequestedUTSIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedUTSIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedUTSIList (el: _Element): RequestedUTSIList {
    if (!_cached_decoder_for_RequestedUTSIList) { _cached_decoder_for_RequestedUTSIList = $._decodeSequenceOf<RequestedUTSI>(() => _decode_RequestedUTSI); }
    return _cached_decoder_for_RequestedUTSIList(el);
}

let _cached_encoder_for_RequestedUTSIList: $.ASN1Encoder<RequestedUTSIList> | null = null;

/**
 * @summary Encodes a(n) RequestedUTSIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedUTSIList, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedUTSIList (value: RequestedUTSIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedUTSIList) { _cached_encoder_for_RequestedUTSIList = $._encodeSequenceOf<RequestedUTSI>(() => _encode_RequestedUTSI, $.BER); }
    return _cached_encoder_for_RequestedUTSIList(value, elGetter);
}


/* eslint-enable */
