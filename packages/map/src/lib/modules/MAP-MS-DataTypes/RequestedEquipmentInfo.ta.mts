/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedEquipmentInfo
 * @description
 *
 * Which equipment information Check IMEI should return (equipment status and/or
 * UESBI-Iu). Unknown bits shall be discarded by the receiver.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.7.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedEquipmentInfo ::=  BIT STRING {
 *     equipmentStatus  (0),
 *     bmuef  (1)} (SIZE (2..8))
 * ```
 */
export
type RequestedEquipmentInfo = BIT_STRING;

/**
 * @summary RequestedEquipmentInfo_equipmentStatus
 * @constant
 */
export
const RequestedEquipmentInfo_equipmentStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary equipmentStatus
 * @constant
 */
export
const equipmentStatus: number = RequestedEquipmentInfo_equipmentStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestedEquipmentInfo_bmuef
 * @constant
 */
export
const RequestedEquipmentInfo_bmuef: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary bmuef
 * @constant
 */
export
const bmuef: number = RequestedEquipmentInfo_bmuef; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedEquipmentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestedEquipmentInfo = (el: _Element): RequestedEquipmentInfo => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("RequestedEquipmentInfo violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RequestedEquipmentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedEquipmentInfo, encoded as an ASN.1 Element.
 */
export const _encode_RequestedEquipmentInfo = $._encodeBitString;


/* eslint-enable */
