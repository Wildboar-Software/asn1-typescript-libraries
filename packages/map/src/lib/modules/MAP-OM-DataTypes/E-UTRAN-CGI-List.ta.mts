/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_E_UTRAN_CGI, _encode_E_UTRAN_CGI, E_UTRAN_CGI } from "../MAP-CommonDataTypes/E-UTRAN-CGI.ta.mjs";


/**
 * @summary E_UTRAN_CGI_List
 * @description
 *
 * SEQUENCE SIZE (1..32) OF E-UTRAN-CGI (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-UTRAN-CGI-List  ::=  SEQUENCE SIZE (1..32) OF
 *     E-UTRAN-CGI
 * ```
 */
export
type E_UTRAN_CGI_List = E_UTRAN_CGI[]; // SequenceOfType

let _cached_decoder_for_E_UTRAN_CGI_List: $.ASN1Decoder<E_UTRAN_CGI_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E_UTRAN_CGI_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E_UTRAN_CGI_List (el: _Element): E_UTRAN_CGI_List {
    if (!_cached_decoder_for_E_UTRAN_CGI_List) { _cached_decoder_for_E_UTRAN_CGI_List = $._decodeSequenceOf<E_UTRAN_CGI>(() => _decode_E_UTRAN_CGI); }
    const value = _cached_decoder_for_E_UTRAN_CGI_List(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("E_UTRAN_CGI_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_E_UTRAN_CGI_List: $.ASN1Encoder<E_UTRAN_CGI_List> | null = null;

/**
 * @summary Encodes a(n) E_UTRAN_CGI_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_UTRAN_CGI_List, encoded as an ASN.1 Element.
 */
export
function _encode_E_UTRAN_CGI_List (value: E_UTRAN_CGI_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E_UTRAN_CGI_List) { _cached_encoder_for_E_UTRAN_CGI_List = $._encodeSequenceOf<E_UTRAN_CGI>(() => _encode_E_UTRAN_CGI, $.BER); }
    return _cached_encoder_for_E_UTRAN_CGI_List(value, elGetter);
}


/* eslint-enable */
