/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffId    ::=  INTEGER
 * ```
 */
export
type TariffId = INTEGER;

export
const _decode_TariffId: $.ASN1Decoder<TariffId> = $._decodeInteger;

export
const _encode_TariffId: $.ASN1Encoder<TariffId> = $._encodeInteger;

/* eslint-enable */
