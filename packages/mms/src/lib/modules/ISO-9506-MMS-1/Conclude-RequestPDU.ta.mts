/* eslint-disable */
import {
    NULL,
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
 * @summary Conclude_RequestPDU
 * @description
 *
 * Conclude request has no parameters (ISO 9506-1:2003 §8.3;
 * ISO 9506-2:2003 §8.3). After sending, the requester issues no further
 * requests except Abort until Conclude confirms. Do not request if a Domain on
 * this association is loading/complete/incomplete (or d1, d2, d3, d9). Success
 * deletes AA-specific objects; failure leaves the environment unchanged.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conclude-RequestPDU  ::=  NULL
 * ```
 */
export
type Conclude_RequestPDU = NULL; // NullType
export const _decode_Conclude_RequestPDU = $._decodeNull;
export const _encode_Conclude_RequestPDU = $._encodeNull;


/* eslint-enable */
