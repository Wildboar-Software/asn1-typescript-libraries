/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSHandoverType
 * @description
 * 
 * The EPSHandoverType provides information about the type of handover being
 * performed in EPS. Defined in TS 36.413 [38] clause 9.2.1.13.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSHandoverType  ::=  ExternalASNType
 * ```
 */
export
type EPSHandoverType = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSHandoverType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSHandoverType: $.ASN1Decoder<EPSHandoverType> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) EPSHandoverType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSHandoverType, encoded as an ASN.1 Element.
 */
export const _encode_EPSHandoverType: (value: EPSHandoverType, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ExternalASNType;


/* eslint-enable */
