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
 * @summary Conclude_ResponsePDU
 * @description
 *
 * Successful Conclude has no parameters (ISO 9506-1:2003 §8.3;
 * ISO 9506-2:2003 §8.3). The MMS environment is terminated; AA-specific
 * objects are released. The responder shall refuse if a confirmed response is
 * still owed, an upload state machine exists, a Domain is loading, or a
 * semaphore is held across the association.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conclude-ResponsePDU  ::=  NULL
 * ```
 */
export
type Conclude_ResponsePDU = NULL; // NullType
export const _decode_Conclude_ResponsePDU = $._decodeNull;
export const _encode_Conclude_ResponsePDU = $._encodeNull;


/* eslint-enable */
