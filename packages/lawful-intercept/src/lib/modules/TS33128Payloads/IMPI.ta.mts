/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary IMPI
 * @description
 * 
 * IMPI of the target.
 *
 * 3GPP TS 33.128, clause 7.20.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMPI  ::=  NAI
 * ```
 */
export
type IMPI = NAI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IMPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMPI: $.ASN1Decoder<IMPI> = _decode_NAI;

/**
 * @summary Encodes a(n) IMPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMPI, encoded as an ASN.1 Element.
 */
export const _encode_IMPI: (value: IMPI, elGetter: $.ASN1Encoder<any>) => _Element = _encode_NAI;


/* eslint-enable */
