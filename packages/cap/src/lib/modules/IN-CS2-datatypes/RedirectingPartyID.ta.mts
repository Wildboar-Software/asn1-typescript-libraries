/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectingPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectingPartyID{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minRedirectingPartyIDLength..
 *              bound.&maxRedirectingPartyIDLength))
 * ```
 */
export
type RedirectingPartyID = OCTET_STRING; // OctetStringType
export const _decode_RedirectingPartyID = $._decodeOctetString;
export const _encode_RedirectingPartyID = $._encodeOctetString;


/* eslint-enable */
