/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELAccessPointNameOI
 * @description
 *
 * CAMEL Access Point Name OI (S-CDR): This field contains the operator
 * identifier part of APN before modification by the CSE.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELAccessPointNameOI  ::=  IA5String  ( SIZE( 1 .. 37 ) )
 * ```
 */
export
type CAMELAccessPointNameOI = IA5String; // IA5String

export const _decode_CAMELAccessPointNameOI = (el: _Element): CAMELAccessPointNameOI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 37) {
        throw new ASN1SizeError("CAMELAccessPointNameOI violates SIZE constraint");
    }
    return value;
};

export
const _encode_CAMELAccessPointNameOI: $.ASN1Encoder<CAMELAccessPointNameOI> = $._encodeIA5String;

/* eslint-enable */
