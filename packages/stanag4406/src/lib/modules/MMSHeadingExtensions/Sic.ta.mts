/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { lb_military_sic } from "../MMSUpperBounds/lb-military-sic.va.mjs";
import { ub_military_sic } from "../MMSUpperBounds/ub-military-sic.va.mjs";



/**
 * @summary Sic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sic  ::=  PrintableString(SIZE (lb-military-sic..ub-military-sic))
 * ```
 */
export
type Sic = PrintableString; // PrintableString

let _cached_decoder_for_Sic: $.ASN1Decoder<Sic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Sic (el: _Element): Sic {
    if (!_cached_decoder_for_Sic) { _cached_decoder_for_Sic = $._decodePrintableString; }
    const value = _cached_decoder_for_Sic(el);
    if (value.length < Number(lb_military_sic) || value.length > Number(ub_military_sic)) {
        throw new ASN1SizeError("Sic violates SIZE constraint");
    }
    return value;
}

export const _encode_Sic: $.ASN1Encoder<Sic> = $._encodePrintableString;


/* eslint-enable */
