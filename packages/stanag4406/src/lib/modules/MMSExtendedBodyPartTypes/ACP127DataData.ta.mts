/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_data_size } from "../MMSUpperBounds/ub-data-size.va.mjs";



/**
 * @summary ACP127DataData
 * @description
 * 
 * ACP 127 data-pattern traffic. One to 65535 IA5 characters (`ub-data-size`).
 * Used only when interworking with ACP 127. STANAG 4406 (Ed. 2), Annex A,
 * clause 7.3.12.5, B1.5, and Annex K.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataData  ::=  IA5String(SIZE (1..ub-data-size))
 * ```
 */
export
type ACP127DataData = IA5String; // IA5String

let _cached_decoder_for_ACP127DataData: $.ASN1Decoder<ACP127DataData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACP127DataData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACP127DataData (el: _Element): ACP127DataData {
    if (!_cached_decoder_for_ACP127DataData) { _cached_decoder_for_ACP127DataData = $._decodeIA5String; }
    const value = _cached_decoder_for_ACP127DataData(el);
    if (value.length < 1 || value.length > Number(ub_data_size)) {
        throw new ASN1SizeError("ACP127DataData violates SIZE constraint");
    }
    return value;
}

export const _encode_ACP127DataData: $.ASN1Encoder<ACP127DataData> = $._encodeIA5String;


/* eslint-enable */
