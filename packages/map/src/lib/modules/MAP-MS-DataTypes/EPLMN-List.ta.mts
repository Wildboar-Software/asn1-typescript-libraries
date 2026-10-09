/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PLMN_Id, _encode_PLMN_Id, PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary EPLMN_List
 * @description
 *
 * Equivalent PLMN list for which the VLR or MME/SGSN requests corresponding CSG
 * Subscription data (SIZE 1..50) (3GPP TS 29.002 V19.1.0 clauses 8.1.2.3,
 * 8.1.7.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPLMN-List  ::=  SEQUENCE SIZE (1..50) OF
 *     PLMN-Id
 * ```
 */
export
type EPLMN_List = PLMN_Id[]; // SequenceOfType

let _cached_decoder_for_EPLMN_List: $.ASN1Decoder<EPLMN_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPLMN_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPLMN_List (el: _Element): EPLMN_List {
    if (!_cached_decoder_for_EPLMN_List) { _cached_decoder_for_EPLMN_List = $._decodeSequenceOf<PLMN_Id>(() => _decode_PLMN_Id); }
    const value = _cached_decoder_for_EPLMN_List(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("EPLMN_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_EPLMN_List: $.ASN1Encoder<EPLMN_List> | null = null;

/**
 * @summary Encodes a(n) EPLMN_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPLMN_List, encoded as an ASN.1 Element.
 */
export
function _encode_EPLMN_List (value: EPLMN_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPLMN_List) { _cached_encoder_for_EPLMN_List = $._encodeSequenceOf<PLMN_Id>(() => _encode_PLMN_Id, $.BER); }
    return _cached_encoder_for_EPLMN_List(value, elGetter);
}


/* eslint-enable */
