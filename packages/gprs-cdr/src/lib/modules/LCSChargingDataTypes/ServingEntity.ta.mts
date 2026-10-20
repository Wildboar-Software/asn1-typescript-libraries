/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServingEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingEntity  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type ServingEntity = OCTET_STRING; // OctetStringType

export const _decode_ServingEntity = (el: _Element): ServingEntity => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("ServingEntity violates SIZE constraint");
    }
    return value;
};

export
const _encode_ServingEntity: $.ASN1Encoder<ServingEntity> = $._encodeOctetString;

/* eslint-enable */
