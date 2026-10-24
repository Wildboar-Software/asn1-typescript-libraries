/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RestorationOfPDNConnectionsSupport
 * @description
 * 
 * Shall be present if the Restoration of PDN connection after an PGW-C/SMF
 * Change Support Indication is present in the message that triggered the
 * generation of the xIRI or known at the context (see TS 29.274 [87] clauses
 * 7.2.1, 7.2.7 and 8.12).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestorationOfPDNConnectionsSupport  ::=  BOOLEAN
 * ```
 */
export
type RestorationOfPDNConnectionsSupport = BOOLEAN; // BooleanType
export const _decode_RestorationOfPDNConnectionsSupport: $.ASN1Decoder<RestorationOfPDNConnectionsSupport> = $._decodeBoolean;
export const _encode_RestorationOfPDNConnectionsSupport: $.ASN1Encoder<RestorationOfPDNConnectionsSupport> = $._encodeBoolean;


/* eslint-enable */
