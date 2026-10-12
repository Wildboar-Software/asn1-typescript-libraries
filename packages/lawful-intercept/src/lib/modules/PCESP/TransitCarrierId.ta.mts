/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCarrierId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCarrierId  ::=  VisibleString (SIZE(3..7, ...))
 * ```
 */
export
type TransitCarrierId = VisibleString; // VisibleString
export const _decode_TransitCarrierId: $.ASN1Decoder<TransitCarrierId> = $._decodeVisibleString;
export const _encode_TransitCarrierId: $.ASN1Encoder<TransitCarrierId> = $._encodeVisibleString;


/* eslint-enable */
