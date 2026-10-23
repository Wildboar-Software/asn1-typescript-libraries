/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary ModulationIndex
 * @description
 * 
 * Peak RF-carrier phase shift from the unmodulated carrier, in milliradians
 * (10^-3 rad). Set by service management as modulation-index. CCSDS 912.1-B-5,
 * table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModulationIndex                ::=    IntPosShort
 * ```
 */
export
type ModulationIndex = IntPosShort; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ModulationIndex
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ModulationIndex: $.ASN1Decoder<ModulationIndex> = _decode_IntPosShort;

/**
 * @summary Encodes a(n) ModulationIndex into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModulationIndex, encoded as an ASN.1 Element.
 */
export const _encode_ModulationIndex: $.ASN1Encoder<ModulationIndex> = _encode_IntPosShort;


/* eslint-enable */
