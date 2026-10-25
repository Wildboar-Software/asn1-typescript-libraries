/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary SubcarrierDivisor
 * @description
 * 
 * Ratio of the subcarrier frequency to the uplink bit rate. One means the data
 * are modulated directly onto the carrier. The Annex A comment calls this the
 * divisor of the subcarrier frequency. CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubcarrierDivisor              ::=    IntPosShort
 * ```
 */
export
type SubcarrierDivisor = IntPosShort; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubcarrierDivisor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubcarrierDivisor: $.ASN1Decoder<SubcarrierDivisor> = _decode_IntPosShort;

/**
 * @summary Encodes a(n) SubcarrierDivisor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubcarrierDivisor, encoded as an ASN.1 Element.
 */
export const _encode_SubcarrierDivisor: $.ASN1Encoder<SubcarrierDivisor> = _encode_IntPosShort;


/* eslint-enable */
