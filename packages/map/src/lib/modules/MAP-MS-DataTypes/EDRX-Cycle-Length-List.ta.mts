/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EDRX_Cycle_Length, _encode_EDRX_Cycle_Length, EDRX_Cycle_Length } from "../MAP-MS-DataTypes/EDRX-Cycle-Length.ta.mjs";


/**
 * @summary EDRX_Cycle_Length_List
 * @description
 *
 * Subscribed eDRX cycle lengths, each with the RAT type to which it applies.
 * Sent in Insert Subscriber Data (3GPP TS 29.002 V19.1.0 clauses 8.8.1.3 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDRX-Cycle-Length-List  ::=  SEQUENCE SIZE (1..8) OF
 *     EDRX-Cycle-Length
 * ```
 */
export
type EDRX_Cycle_Length_List = EDRX_Cycle_Length[]; // SequenceOfType

let _cached_decoder_for_EDRX_Cycle_Length_List: $.ASN1Decoder<EDRX_Cycle_Length_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDRX_Cycle_Length_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDRX_Cycle_Length_List (el: _Element): EDRX_Cycle_Length_List {
    if (!_cached_decoder_for_EDRX_Cycle_Length_List) { _cached_decoder_for_EDRX_Cycle_Length_List = $._decodeSequenceOf<EDRX_Cycle_Length>(() => _decode_EDRX_Cycle_Length); }
    const value = _cached_decoder_for_EDRX_Cycle_Length_List(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("EDRX_Cycle_Length_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_EDRX_Cycle_Length_List: $.ASN1Encoder<EDRX_Cycle_Length_List> | null = null;

/**
 * @summary Encodes a(n) EDRX_Cycle_Length_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDRX_Cycle_Length_List, encoded as an ASN.1 Element.
 */
export
function _encode_EDRX_Cycle_Length_List (value: EDRX_Cycle_Length_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDRX_Cycle_Length_List) { _cached_encoder_for_EDRX_Cycle_Length_List = $._encodeSequenceOf<EDRX_Cycle_Length>(() => _encode_EDRX_Cycle_Length, $.BER); }
    return _cached_encoder_for_EDRX_Cycle_Length_List(value, elGetter);
}


/* eslint-enable */
