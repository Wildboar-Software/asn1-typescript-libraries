/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary VersionNumber
 * @description
 * 
 * Version of the service specification that governs the association if BIND
 * succeeds. For the RAF service in this issue the value is 6. The allowed
 * values are 1 through 65535. A provider that does not negotiate versions
 * accepts only the managed service-version-number.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.8 and annex A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionNumber        ::=    IntPosShort
 * ```
 */
export
type VersionNumber = IntPosShort; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) VersionNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VersionNumber: $.ASN1Decoder<VersionNumber> = _decode_IntPosShort;

/**
 * @summary Encodes a(n) VersionNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionNumber, encoded as an ASN.1 Element.
 */
export const _encode_VersionNumber: $.ASN1Encoder<VersionNumber> = _encode_IntPosShort;


/* eslint-enable */
