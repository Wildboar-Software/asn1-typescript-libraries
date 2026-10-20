/* eslint-disable */
import {
    IA5String
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
const _decode_SwitchingSubDomainName: $.ASN1Decoder<SwitchingSubDomainName> = $._decodeIA5String;

export
const _encode_SwitchingSubDomainName: $.ASN1Encoder<SwitchingSubDomainName> = $._encodeIA5String;

/* eslint-enable */
