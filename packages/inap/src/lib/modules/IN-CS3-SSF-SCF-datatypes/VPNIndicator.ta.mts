/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VPNIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VPNIndicator  ::=  BOOLEAN
 * ```
 */
export
type VPNIndicator = BOOLEAN; // BooleanType

export
const _decode_VPNIndicator: $.ASN1Decoder<VPNIndicator> = $._decodeBoolean;

export
const _encode_VPNIndicator: $.ASN1Encoder<VPNIndicator> = $._encodeBoolean;

/* eslint-enable */
