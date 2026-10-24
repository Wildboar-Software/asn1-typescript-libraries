/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWRNSI
 * @description
 * 
 * Shall be present if the PGW Redirection due to mismatch with Network Slice
 * subscribed by the UE Support Indication is present in the Create Session
 * Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRNSI  ::=  BOOLEAN
 * ```
 */
export
type PGWRNSI = BOOLEAN; // BooleanType
export const _decode_PGWRNSI: $.ASN1Decoder<PGWRNSI> = $._decodeBoolean;
export const _encode_PGWRNSI: $.ASN1Encoder<PGWRNSI> = $._encodeBoolean;


/* eslint-enable */
