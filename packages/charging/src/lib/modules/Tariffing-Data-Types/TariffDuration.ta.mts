/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffDuration  ::=  INTEGER (0..36000)
 * ```
 */
export
type TariffDuration = INTEGER;
export const _decode_TariffDuration = $._decodeInteger;
export const _encode_TariffDuration = $._encodeInteger;


/* eslint-enable */
