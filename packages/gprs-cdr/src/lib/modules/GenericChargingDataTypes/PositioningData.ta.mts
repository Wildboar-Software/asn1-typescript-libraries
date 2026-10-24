/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningData  ::=  OCTET STRING ( SIZE( 1 .. 33 ) )
 * ```
 */
export
type PositioningData = OCTET_STRING; // OctetStringType

export const _decode_PositioningData = (el: _Element): PositioningData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 33) {
        throw new ASN1SizeError("PositioningData violates SIZE constraint");
    }
    return value;
};

export
const _encode_PositioningData: $.ASN1Encoder<PositioningData> = $._encodeOctetString;

/* eslint-enable */
