/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_MOLR_Class, _encode_MOLR_Class, MOLR_Class } from "../MAP-MS-DataTypes/MOLR-Class.ta.mjs";


import { maxNumOfMOLR_Class } from "./maxNumOfMOLR-Class.va.mjs";

/**
 * @summary MOLR_List
 * @description
 *
 * MO-LR classes for which a subscription exists (SIZE 1..3). (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.65A and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOLR-List  ::=  SEQUENCE SIZE (1..maxNumOfMOLR-Class) OF
 *     MOLR-Class
 * ```
 */
export
type MOLR_List = MOLR_Class[]; // SequenceOfType

let _cached_decoder_for_MOLR_List: $.ASN1Decoder<MOLR_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOLR_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOLR_List (el: _Element): MOLR_List {
    if (!_cached_decoder_for_MOLR_List) { _cached_decoder_for_MOLR_List = $._decodeSequenceOf<MOLR_Class>(() => _decode_MOLR_Class); }
    const value = _cached_decoder_for_MOLR_List(el);
    if (value.length < 1 || value.length > maxNumOfMOLR_Class) {
        throw new ASN1SizeError("MOLR_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_MOLR_List: $.ASN1Encoder<MOLR_List> | null = null;

/**
 * @summary Encodes a(n) MOLR_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOLR_List, encoded as an ASN.1 Element.
 */
export
function _encode_MOLR_List (value: MOLR_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOLR_List) { _cached_encoder_for_MOLR_List = $._encodeSequenceOf<MOLR_Class>(() => _encode_MOLR_Class, $.BER); }
    return _cached_encoder_for_MOLR_List(value, elGetter);
}


/* eslint-enable */
