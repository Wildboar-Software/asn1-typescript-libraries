/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIUnauthenticatedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSIUnauthenticatedIndication  ::=  BOOLEAN
 * ```
 */
export
type IMSIUnauthenticatedIndication = BOOLEAN; // BooleanType
export const _decode_IMSIUnauthenticatedIndication: $.ASN1Decoder<IMSIUnauthenticatedIndication> = $._decodeBoolean;
export const _encode_IMSIUnauthenticatedIndication: $.ASN1Encoder<IMSIUnauthenticatedIndication> = $._encodeBoolean;


/* eslint-enable */
