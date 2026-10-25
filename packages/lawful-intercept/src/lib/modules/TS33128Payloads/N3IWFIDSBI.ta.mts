/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N3IWFIDSBI
 * @description
 * 
 * The N3IWFIDSBI type is used to report the N3IWF Identity received over SBI.
 * The N3IWFIDSBI type is derived from the data present in the N3IWFID parameter
 * of the GloalRanNodeID defined in TS 29.571[17] clause 5.4.4.28.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDSBI  ::=  UTF8String
 * ```
 */
export
type N3IWFIDSBI = UTF8String; // UTF8String
export const _decode_N3IWFIDSBI: $.ASN1Decoder<N3IWFIDSBI> = $._decodeUTF8String;
export const _encode_N3IWFIDSBI: $.ASN1Encoder<N3IWFIDSBI> = $._encodeUTF8String;


/* eslint-enable */
