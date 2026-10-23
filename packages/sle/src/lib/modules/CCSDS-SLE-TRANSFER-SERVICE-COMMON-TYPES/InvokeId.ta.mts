/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedShort, _decode_IntUnsignedShort, _encode_IntUnsignedShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedShort.ta.mjs";


/**
 * @summary InvokeId
 * @description
 * 
 * Invoker-chosen integer, returned unchanged, that pairs a return with its
 * invocation. Confirmed operations other than BIND and UNBIND carry it and are
 * non-blocking. A value that still has an outstanding return in the same
 * service instance is rejected with `duplicateInvokeId`. The range is 0 through
 * 65535.
 * 
 * CCSDS 911.1-B-5, section 3.1.6 and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeId                ::=     IntUnsignedShort
 * ```
 */
export
type InvokeId = IntUnsignedShort; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InvokeId: $.ASN1Decoder<InvokeId> = _decode_IntUnsignedShort;

/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export const _encode_InvokeId: (value: InvokeId, elGetter: $.ASN1Encoder<any>) => _Element = _encode_IntUnsignedShort;


/* eslint-enable */
