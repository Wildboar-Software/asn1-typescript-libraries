/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoSInformation  ::=  OCTET STRING ( SIZE( 4 .. 255 ) )
 * ```
 */
export
type QoSInformation = OCTET_STRING; // OctetStringType

export const _decode_QoSInformation = (el: _Element): QoSInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 255) {
        throw new ASN1SizeError("QoSInformation violates SIZE constraint");
    }
    return value;
};

export
const _encode_QoSInformation: $.ASN1Encoder<QoSInformation> = $._encodeOctetString;

/* eslint-enable */
