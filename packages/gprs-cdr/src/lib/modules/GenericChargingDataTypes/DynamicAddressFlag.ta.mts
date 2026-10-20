/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DynamicAddressFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DynamicAddressFlag  ::=  BOOLEAN
 * ```
 */
export
type DynamicAddressFlag = BOOLEAN; // BooleanType

export
const _decode_DynamicAddressFlag: $.ASN1Decoder<DynamicAddressFlag> = $._decodeBoolean;

export
const _encode_DynamicAddressFlag: $.ASN1Encoder<DynamicAddressFlag> = $._encodeBoolean;

/* eslint-enable */
