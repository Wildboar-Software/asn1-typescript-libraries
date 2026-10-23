/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSSubscriptionBasedUEDifferentiationIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSubscriptionBasedUEDifferentiationIndication  ::=  ExternalASNType
 * ```
 */
export
type EPSSubscriptionBasedUEDifferentiationIndication = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSSubscriptionBasedUEDifferentiationIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSSubscriptionBasedUEDifferentiationIndication: $.ASN1Decoder<EPSSubscriptionBasedUEDifferentiationIndication> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) EPSSubscriptionBasedUEDifferentiationIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSSubscriptionBasedUEDifferentiationIndication, encoded as an ASN.1 Element.
 */
export const _encode_EPSSubscriptionBasedUEDifferentiationIndication: $.ASN1Encoder<EPSSubscriptionBasedUEDifferentiationIndication> = _encode_ExternalASNType;


/* eslint-enable */
