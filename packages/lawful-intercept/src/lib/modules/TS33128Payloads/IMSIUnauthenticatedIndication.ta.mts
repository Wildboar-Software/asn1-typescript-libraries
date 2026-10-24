/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIUnauthenticatedIndication
 * @description
 * 
 * Shall be present if an IMSI is present in the ePSSubscriberIDs and set to
 * "true" if the IMSI has not been authenticated, or "false" if it has been
 * authenticated.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
