/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACP127DataParameters
 * @description
 * 
 * Parameters of the ACP 127 data body part. Edition 2 does not define the
 * integer. The traffic is `ACP127DataData`. STANAG 4406 (Ed. 2), Annex A, B1.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataParameters  ::=  INTEGER
 * ```
 */
export
type ACP127DataParameters = INTEGER;
export const _decode_ACP127DataParameters: $.ASN1Decoder<ACP127DataParameters> = $._decodeInteger;
export const _encode_ACP127DataParameters: $.ASN1Encoder<ACP127DataParameters> = $._encodeInteger;


/* eslint-enable */
