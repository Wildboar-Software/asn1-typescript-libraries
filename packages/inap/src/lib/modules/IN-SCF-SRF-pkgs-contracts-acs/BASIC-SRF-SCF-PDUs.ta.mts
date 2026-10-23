/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BASIC_SRF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BASIC-SRF-SCF-PDUs  ::=  TCMessage{{SRF-SCF-Invokable}, {SRF-SCF-Returnable}}
 * ```
 */
export
type BASIC_SRF_SCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BASIC_SRF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BASIC_SRF_SCF_PDUs: $.ASN1Decoder<BASIC_SRF_SCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) BASIC_SRF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BASIC_SRF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_BASIC_SRF_SCF_PDUs: $.ASN1Encoder<BASIC_SRF_SCF_PDUs> = _encode_TCMessage;


/* eslint-enable */
