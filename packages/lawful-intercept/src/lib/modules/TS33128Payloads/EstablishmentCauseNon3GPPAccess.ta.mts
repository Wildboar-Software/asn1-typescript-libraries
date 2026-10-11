/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EstablishmentCauseNon3GPPAccess
 * @description
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
