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
 * @summary CreateJournal_Response
 * @description
 *
 * Confirmed success. No service-specific parameters.
 * ISO 9506-1:2003 §23.6.1.2. ISO 9506-2:2003 §23.6.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateJournal-Response  ::=  NULL
 * ```
 */
export
type CreateJournal_Response = NULL; // NullType
export const _decode_CreateJournal_Response = $._decodeNull;
export const _encode_CreateJournal_Response = $._encodeNull;


/* eslint-enable */
