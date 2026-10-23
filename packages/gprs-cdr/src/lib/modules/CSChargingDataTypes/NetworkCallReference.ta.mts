/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkCallReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCallReference  ::=  OCTET STRING ( SIZE( 1 .. 8 ) )
 * ```
 */
export
type NetworkCallReference = OCTET_STRING; // OctetStringType

export const _decode_NetworkCallReference = (el: _Element): NetworkCallReference => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("NetworkCallReference violates SIZE constraint");
    }
    return value;
};

export
const _encode_NetworkCallReference: $.ASN1Encoder<NetworkCallReference> = $._encodeOctetString;

/* eslint-enable */
