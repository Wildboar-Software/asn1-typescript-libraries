/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_GlobalCellId, _encode_GlobalCellId, GlobalCellId } from "../MAP-CommonDataTypes/GlobalCellId.ta.mjs";


/**
 * @summary CGI_List
 * @description
 *
 * SEQUENCE SIZE (1..32) OF GlobalCellId (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGI-List  ::=  SEQUENCE SIZE (1..32) OF
 *     GlobalCellId
 * ```
 */
export
type CGI_List = GlobalCellId[]; // SequenceOfType

let _cached_decoder_for_CGI_List: $.ASN1Decoder<CGI_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CGI_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CGI_List (el: _Element): CGI_List {
    if (!_cached_decoder_for_CGI_List) { _cached_decoder_for_CGI_List = $._decodeSequenceOf<GlobalCellId>(() => _decode_GlobalCellId); }
    const value = _cached_decoder_for_CGI_List(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("CGI_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CGI_List: $.ASN1Encoder<CGI_List> | null = null;

/**
 * @summary Encodes a(n) CGI_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CGI_List, encoded as an ASN.1 Element.
 */
export
function _encode_CGI_List (value: CGI_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CGI_List) { _cached_encoder_for_CGI_List = $._encodeSequenceOf<GlobalCellId>(() => _encode_GlobalCellId, $.BER); }
    return _cached_encoder_for_CGI_List(value, elGetter);
}


/* eslint-enable */
