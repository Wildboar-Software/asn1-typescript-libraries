/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PLMN_Id, _encode_PLMN_Id, PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary AdjacentPLMN_List
 * @description
 *
 * PLMNs where a UE served by the SGSN is likely to hand over from the SGSN's
 * PLMN. Statically configured by the operator according to geography and
 * roaming agreements. Sent in MAP_UPDATE_GPRS_LOCATION (3GPP TS 29.002 V19.1.0
 * clauses 8.1.7.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdjacentPLMN-List  ::=  SEQUENCE SIZE (1..50) OF
 *     PLMN-Id
 * ```
 */
export
type AdjacentPLMN_List = PLMN_Id[]; // SequenceOfType

let _cached_decoder_for_AdjacentPLMN_List: $.ASN1Decoder<AdjacentPLMN_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdjacentPLMN_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdjacentPLMN_List (el: _Element): AdjacentPLMN_List {
    if (!_cached_decoder_for_AdjacentPLMN_List) { _cached_decoder_for_AdjacentPLMN_List = $._decodeSequenceOf<PLMN_Id>(() => _decode_PLMN_Id); }
    const value = _cached_decoder_for_AdjacentPLMN_List(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("AdjacentPLMN_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AdjacentPLMN_List: $.ASN1Encoder<AdjacentPLMN_List> | null = null;

/**
 * @summary Encodes a(n) AdjacentPLMN_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacentPLMN_List, encoded as an ASN.1 Element.
 */
export
function _encode_AdjacentPLMN_List (value: AdjacentPLMN_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdjacentPLMN_List) { _cached_encoder_for_AdjacentPLMN_List = $._encodeSequenceOf<PLMN_Id>(() => _encode_PLMN_Id, $.BER); }
    return _cached_encoder_for_AdjacentPLMN_List(value, elGetter);
}


/* eslint-enable */
