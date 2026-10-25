/* eslint-disable */
import {
    type BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaintServiceCharge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaintServiceCharge  ::=  BOOLEAN
 * ```
 */
export
type MaintServiceCharge = BOOLEAN; // BooleanType
export const _decode_MaintServiceCharge: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_MaintServiceCharge: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
