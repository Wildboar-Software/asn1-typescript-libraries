/* eslint-disable */
import {
    BIT_STRING
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

export
const _decode_LocationCellExtension: $.ASN1Decoder<LocationCellExtension> = $._decodeBitString;

export
const _encode_LocationCellExtension: $.ASN1Encoder<LocationCellExtension> = $._encodeBitString;

/* eslint-enable */
