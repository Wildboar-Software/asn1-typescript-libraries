/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";


/**
 * @summary ModulationFrequency
 * @description
 * 
 * Subcarrier frequency, or the frequency of direct-on-carrier data modulation,
 * in tenths of a hertz. Set by service management as modulation-frequency.
 * CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModulationFrequency               ::=    IntPosLong
 * ```
 */
export
type ModulationFrequency = IntPosLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ModulationFrequency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ModulationFrequency: $.ASN1Decoder<ModulationFrequency> = _decode_IntPosLong;

/**
 * @summary Encodes a(n) ModulationFrequency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModulationFrequency, encoded as an ASN.1 Element.
 */
export const _encode_ModulationFrequency: $.ASN1Encoder<ModulationFrequency> = _encode_IntPosLong;


/* eslint-enable */
