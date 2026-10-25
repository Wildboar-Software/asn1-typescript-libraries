/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary DirectiveExecutedId
 * @description
 * 
 * Directive identification of the FSP-INVOKE-DIRECTIVE invocation whose
 * completion is being reported. Present for a positive or negative confirm
 * response to a directive, and omitted for every other notification. Annex A
 * types it as an unsigned long integer.
 * 
 * CCSDS 912.3-B-3, section 3.7.2.4 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectiveExecutedId      ::=    IntUnsignedLong
 * ```
 */
export
type DirectiveExecutedId = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DirectiveExecutedId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DirectiveExecutedId: $.ASN1Decoder<DirectiveExecutedId> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) DirectiveExecutedId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectiveExecutedId, encoded as an ASN.1 Element.
 */
export const _encode_DirectiveExecutedId: $.ASN1Encoder<DirectiveExecutedId> = _encode_IntUnsignedLong;


/* eslint-enable */
