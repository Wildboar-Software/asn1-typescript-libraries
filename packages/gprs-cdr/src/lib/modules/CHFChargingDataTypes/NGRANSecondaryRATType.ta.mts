/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGRANSecondaryRATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGRANSecondaryRATType  ::=  OCTET STRING
 * ```
 */
export
type NGRANSecondaryRATType = OCTET_STRING; // OctetStringType

export
const _decode_NGRANSecondaryRATType: $.ASN1Decoder<NGRANSecondaryRATType> = $._decodeOctetString;

export
const _encode_NGRANSecondaryRATType: $.ASN1Encoder<NGRANSecondaryRATType> = $._encodeOctetString;

/* eslint-enable */
