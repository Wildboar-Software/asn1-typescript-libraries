/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary TraceActivation
 * @description
 * 
 * Information related to a trace session activation provided from the core to
 * the RAN node. The ExternalASNType.encodedASNValue.alignedPER choice shall be
 * used when populating this type and it shall be populated with the contents of
 * the Trace Activation IE as described in the tables for the records that use
 * this Type.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceActivation  ::=  ExternalASNType
 * ```
 */
export
type TraceActivation = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TraceActivation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceActivation: $.ASN1Decoder<TraceActivation> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) TraceActivation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceActivation, encoded as an ASN.1 Element.
 */
export const _encode_TraceActivation: $.ASN1Encoder<TraceActivation> = _encode_ExternalASNType;


/* eslint-enable */
