/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeltaSeconds
 * @description
 * 
 * Duration form of a `WaitTime`: the number of seconds before expiry, or
 * the number of seconds to wait before delivery, rather than an absolute
 * time.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeltaSeconds  ::=  OCTET STRING ( SIZE( 8 ) )
 * ```
 */
export
type DeltaSeconds = OCTET_STRING; // OctetStringType

export const _decode_DeltaSeconds = (el: _Element): DeltaSeconds => {
    const value = $._decodeOctetString(el);
    if (value.length !== 8) {
        throw new ASN1SizeError("DeltaSeconds violates SIZE constraint");
    }
    return value;
};

export
const _encode_DeltaSeconds: $.ASN1Encoder<DeltaSeconds> = $._encodeOctetString;

/* eslint-enable */
