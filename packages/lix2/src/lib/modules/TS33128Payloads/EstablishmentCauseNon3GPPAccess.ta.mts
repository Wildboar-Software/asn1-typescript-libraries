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

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentCauseNon3GPPAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EstablishmentCauseNon3GPPAccess = $._decodeOctetString;

/**
 * @summary Encodes a(n) EstablishmentCauseNon3GPPAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentCauseNon3GPPAccess, encoded as an ASN.1 Element.
 */
export const _encode_EstablishmentCauseNon3GPPAccess = $._encodeOctetString;


/* eslint-enable */
