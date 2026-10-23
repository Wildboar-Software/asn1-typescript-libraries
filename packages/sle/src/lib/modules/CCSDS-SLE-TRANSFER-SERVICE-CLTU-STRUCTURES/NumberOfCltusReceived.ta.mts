/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusReceived
 * @description
 * 
 * How many CLTUs have been received, checked successfully, and buffered during
 * this service instance. Zero when none have been received. Rejected CLTUs are
 * omitted. Accumulated for the whole provision period. CCSDS 912.1-B-5,
 * sections 3.9.2.10 and 3.1.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusReceived          ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusReceived = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusReceived
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfCltusReceived: $.ASN1Decoder<NumberOfCltusReceived> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) NumberOfCltusReceived into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusReceived, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfCltusReceived: (value: NumberOfCltusReceived, elGetter: $.ASN1Encoder<any>) => _Element = _encode_IntUnsignedLong;


/* eslint-enable */
