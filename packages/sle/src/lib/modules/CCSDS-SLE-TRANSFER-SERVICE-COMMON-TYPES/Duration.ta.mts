/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary Duration
 * @description
 * 
 * A length of time expressed in microseconds, from 0 through 4294967295.
 * Section 3 does not define an RAF parameter of this type.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Duration                 ::=    IntUnsignedLong
 * ```
 */
export
type Duration = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Duration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Duration: $.ASN1Decoder<Duration> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) Duration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Duration, encoded as an ASN.1 Element.
 */
export const _encode_Duration: (value: Duration, elGetter: $.ASN1Encoder<any>) => _Element = _encode_IntUnsignedLong;


/* eslint-enable */
