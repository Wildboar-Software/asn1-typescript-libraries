/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainInfo  ::=  ABSTRACT-SYNTAX.&Type
 * ```
 */
export
type DomainInfo = _Element; // ObjectClassFieldType

export
const _decode_DomainInfo: $.ASN1Decoder<DomainInfo> = $._decodeAny;

export
const _encode_DomainInfo: $.ASN1Encoder<DomainInfo> = $._encodeAny;

/* eslint-enable */
