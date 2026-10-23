/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary HeNBLocation
 * @description
 * 
 * Location of the home eNB that is serving the target, when the warrant
 * authorizes it (table 10.5.2). Conditional on an E-UTRAN attach that uses a
 * HeNB (table 10.5.1.1.1). Same information as the target EPS location. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeNBLocation  ::=  EPSLocation
 * ```
 */
export
type HeNBLocation = EPSLocation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) HeNBLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HeNBLocation: $.ASN1Decoder<HeNBLocation> = _decode_EPSLocation;

/**
 * @summary Encodes a(n) HeNBLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeNBLocation, encoded as an ASN.1 Element.
 */
export const _encode_HeNBLocation: $.ASN1Encoder<HeNBLocation> = _encode_EPSLocation;


/* eslint-enable */
