/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_military_bigstring } from "../MMSUpperBounds/ub-military-bigstring.va.mjs";



/**
 * @summary Acp127SuppInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127SuppInfo  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127SuppInfo = PrintableString; // PrintableString

let _cached_decoder_for_Acp127SuppInfo: $.ASN1Decoder<Acp127SuppInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127SuppInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127SuppInfo (el: _Element): Acp127SuppInfo {
    if (!_cached_decoder_for_Acp127SuppInfo) { _cached_decoder_for_Acp127SuppInfo = $._decodePrintableString; }
    const value = _cached_decoder_for_Acp127SuppInfo(el);
    if (value.length < 1 || value.length > Number(ub_military_bigstring)) {
        throw new ASN1SizeError("Acp127SuppInfo violates SIZE constraint");
    }
    return value;
}

export const _encode_Acp127SuppInfo: $.ASN1Encoder<Acp127SuppInfo> = $._encodePrintableString;


/* eslint-enable */
