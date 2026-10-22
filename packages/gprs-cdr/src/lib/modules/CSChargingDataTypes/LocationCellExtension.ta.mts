/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationCellExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationCellExtension  ::=  BIT STRING ( SIZE( 12 ) )
 * ```
 */
export
type LocationCellExtension = BIT_STRING;

export const _decode_LocationCellExtension = (el: _Element): LocationCellExtension => {
    const value = $._decodeBitString(el);
    if (value.length !== 12) {
        throw new ASN1SizeError("LocationCellExtension violates SIZE constraint");
    }
    return value;
};

export
const _encode_LocationCellExtension: $.ASN1Encoder<LocationCellExtension> = $._encodeBitString;

/* eslint-enable */
