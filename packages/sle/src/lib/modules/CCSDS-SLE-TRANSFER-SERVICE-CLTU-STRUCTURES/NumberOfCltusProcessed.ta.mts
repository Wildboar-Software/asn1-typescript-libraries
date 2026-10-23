/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusProcessed
 * @description
 * 
 * How many CLTUs the provider has attempted to radiate during this service
 * instance. The count includes CLTUs that radiated, expired, or aborted, and a
 * CLTU currently being radiated. Zero when none have been attempted.
 * Accumulated for the whole provision period and kept across release, abort,
 * and protocol abort. CCSDS 912.1-B-5, sections 3.9.2.11, 3.1.11, and 2.6.4.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusProcessed         ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusProcessed = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfCltusProcessed: $.ASN1Decoder<NumberOfCltusProcessed> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) NumberOfCltusProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusProcessed, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfCltusProcessed: $.ASN1Encoder<NumberOfCltusProcessed> = _encode_IntUnsignedLong;


/* eslint-enable */
