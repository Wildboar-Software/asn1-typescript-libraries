/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";


/**
 * @summary CltuData
 * @description
 * 
 * One CLTU handed to the provider for radiation on the forward physical
 * channel. The provider buffers complete CLTUs only. Embedded TC frames may
 * already carry Space Data Link Security protection; that protection is
 * transparent to this service. CCSDS 912.1-B-5, sections 3.6.2.10 and 3.1.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuData                                ::=    SpaceLinkDataUnit
 * ```
 */
export
type CltuData = SpaceLinkDataUnit; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CltuData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CltuData: $.ASN1Decoder<CltuData> = _decode_SpaceLinkDataUnit;

/**
 * @summary Encodes a(n) CltuData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuData, encoded as an ASN.1 Element.
 */
export const _encode_CltuData: $.ASN1Encoder<CltuData> = _encode_SpaceLinkDataUnit;


/* eslint-enable */
