/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PLMN_Id, _encode_PLMN_Id, PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary MDT_Allowed_PLMNId_List
 * @description
 *
 * SEQUENCE SIZE (1..16) OF PLMN-Id (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDT-Allowed-PLMNId-List  ::=  SEQUENCE SIZE (1..16) OF
 *     PLMN-Id
 * ```
 */
export
type MDT_Allowed_PLMNId_List = PLMN_Id[]; // SequenceOfType

let _cached_decoder_for_MDT_Allowed_PLMNId_List: $.ASN1Decoder<MDT_Allowed_PLMNId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDT_Allowed_PLMNId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDT_Allowed_PLMNId_List (el: _Element): MDT_Allowed_PLMNId_List {
    if (!_cached_decoder_for_MDT_Allowed_PLMNId_List) { _cached_decoder_for_MDT_Allowed_PLMNId_List = $._decodeSequenceOf<PLMN_Id>(() => _decode_PLMN_Id); }
    const value = _cached_decoder_for_MDT_Allowed_PLMNId_List(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("MDT_Allowed_PLMNId_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_MDT_Allowed_PLMNId_List: $.ASN1Encoder<MDT_Allowed_PLMNId_List> | null = null;

/**
 * @summary Encodes a(n) MDT_Allowed_PLMNId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDT_Allowed_PLMNId_List, encoded as an ASN.1 Element.
 */
export
function _encode_MDT_Allowed_PLMNId_List (value: MDT_Allowed_PLMNId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDT_Allowed_PLMNId_List) { _cached_encoder_for_MDT_Allowed_PLMNId_List = $._encodeSequenceOf<PLMN_Id>(() => _encode_PLMN_Id, $.BER); }
    return _cached_encoder_for_MDT_Allowed_PLMNId_List(value, elGetter);
}


/* eslint-enable */
