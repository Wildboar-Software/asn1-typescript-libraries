/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIUnauthenticatedIndication
 * @description
 * 
 * Shall be present if a SUPI is present in the message and set to "true" if the
 * SUPI has not been authenticated, or "false" if it has been authenticated.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
