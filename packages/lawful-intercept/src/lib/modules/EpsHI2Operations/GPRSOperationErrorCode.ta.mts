/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 * 
 * Failure cause of a GPRS attach, a PDP-context activation, or a PDP-context
 * deactivation (table 6.2). Clause 6.5.0 also uses the name for PDP-context
 * operation error codes. Carried when that packet-domain event is reported on
 * this HI2 (clause 6.5.1) or the PDN-GW reports the Gn/Gp case (clause 10.0).
 * EPS attach and bearer failures use the GTPv2 cause fields instead (table
 * 10.5.2). The specification text does not define the octet layout. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> = $._decodeOctetString;
export const _encode_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
