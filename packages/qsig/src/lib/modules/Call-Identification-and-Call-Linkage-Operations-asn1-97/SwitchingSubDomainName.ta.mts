/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SwitchingSubDomainName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchingSubDomainName  ::=  IA5String (SIZE(1..64))
 * ```
 */
export
type SwitchingSubDomainName = IA5String; // IA5String

export
const _decode_SwitchingSubDomainName = (el: _Element): SwitchingSubDomainName => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 64) {
        throw new ASN1SizeError("SwitchingSubDomainName violates SIZE constraint");
    }
    return value;
};

export
const _encode_SwitchingSubDomainName: $.ASN1Encoder<SwitchingSubDomainName> = $._encodeIA5String;

/* eslint-enable */
