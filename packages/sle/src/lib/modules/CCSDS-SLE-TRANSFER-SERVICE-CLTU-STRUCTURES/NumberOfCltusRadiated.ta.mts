/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusRadiated
 * @description
 * 
 * How many CLTUs have been radiated completely during this service instance. A
 * CLTU still being radiated is omitted. Zero when none have completed.
 * Accumulated for the whole provision period. CCSDS 912.1-B-5, sections
 * 3.9.2.12 and 3.1.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusRadiated          ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusRadiated = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusRadiated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfCltusRadiated: $.ASN1Decoder<NumberOfCltusRadiated> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) NumberOfCltusRadiated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusRadiated, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfCltusRadiated: $.ASN1Encoder<NumberOfCltusRadiated> = _encode_IntUnsignedLong;


/* eslint-enable */
