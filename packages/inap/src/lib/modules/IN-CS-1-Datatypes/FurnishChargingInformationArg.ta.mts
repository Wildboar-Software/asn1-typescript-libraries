/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FCIBillingChargingCharacteristics, _decode_FCIBillingChargingCharacteristics, _encode_FCIBillingChargingCharacteristics } from "../IN-CS-1-Datatypes/FCIBillingChargingCharacteristics.ta.mjs";
// export { FCIBillingChargingCharacteristics, _decode_FCIBillingChargingCharacteristics, _encode_FCIBillingChargingCharacteristics } from "../IN-CS-1-Datatypes/FCIBillingChargingCharacteristics.ta.mjs";


/**
 * @summary FurnishChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FurnishChargingInformationArg  ::=  FCIBillingChargingCharacteristics
 * ```
 */
export
type FurnishChargingInformationArg = FCIBillingChargingCharacteristics; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FurnishChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FurnishChargingInformationArg: $.ASN1Decoder<FurnishChargingInformationArg> = _decode_FCIBillingChargingCharacteristics;

/**
 * @summary Encodes a(n) FurnishChargingInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FurnishChargingInformationArg, encoded as an ASN.1 Element.
 */
export const _encode_FurnishChargingInformationArg: $.ASN1Encoder<FurnishChargingInformationArg> = _encode_FCIBillingChargingCharacteristics;


/* eslint-enable */
