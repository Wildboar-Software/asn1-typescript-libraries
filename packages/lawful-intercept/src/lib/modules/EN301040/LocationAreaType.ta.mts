/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaType
 * @description
 * 
 * Location area, 14 bits, as defined in EN 300 392-2. Clause 4.4: the current
 * location area at which the target is registered. Roaming is a move from one
 * location area, or serving cell, to another inside the same SwMI
 * (clause 6.4.6).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type LocationAreaType = BIT_STRING;
export const _decode_LocationAreaType: $.ASN1Decoder<LocationAreaType> = (el: _Element): LocationAreaType => {
    const value = $._decodeBitString(el);
    if (value.length < 14 || value.length > 14) {
        throw new ASN1SizeError("LocationAreaType violates SIZE constraint");
    }
    return value;
};
export const _encode_LocationAreaType: $.ASN1Encoder<LocationAreaType> = $._encodeBitString;


/* eslint-enable */
