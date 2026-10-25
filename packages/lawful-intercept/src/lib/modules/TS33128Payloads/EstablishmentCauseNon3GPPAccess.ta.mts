/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentCauseNon3GPPAccess
 * @description
 * 
 * Encoded per TS 24.502 [128] clause 9.2.2 omitting the first octet.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentCauseNon3GPPAccess  ::=  OCTET STRING
 * ```
 */
export
type EstablishmentCauseNon3GPPAccess = OCTET_STRING; // OctetStringType
export const _decode_EstablishmentCauseNon3GPPAccess: $.ASN1Decoder<EstablishmentCauseNon3GPPAccess> = $._decodeOctetString;
export const _encode_EstablishmentCauseNon3GPPAccess: $.ASN1Encoder<EstablishmentCauseNon3GPPAccess> = $._encodeOctetString;


/* eslint-enable */
