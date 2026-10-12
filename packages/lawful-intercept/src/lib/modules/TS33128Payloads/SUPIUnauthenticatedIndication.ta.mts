/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIUnauthenticatedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIUnauthenticatedIndication  ::=  BOOLEAN
 * ```
 */
export
type SUPIUnauthenticatedIndication = BOOLEAN; // BooleanType
export const _decode_SUPIUnauthenticatedIndication: $.ASN1Decoder<SUPIUnauthenticatedIndication> = $._decodeBoolean;
export const _encode_SUPIUnauthenticatedIndication: $.ASN1Encoder<SUPIUnauthenticatedIndication> = $._encodeBoolean;


/* eslint-enable */
