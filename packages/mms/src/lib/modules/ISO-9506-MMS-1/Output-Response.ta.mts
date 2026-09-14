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
 * @summary Output_Response
 * @description
 *
 * Confirmed success. No service-specific parameters.
 * ISO 9506-1:2003 §17.3.1.2. ISO 9506-2:2003 §17.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Output-Response  ::=  NULL
 * ```
 */
export
type Output_Response = NULL; // NullType
export const _decode_Output_Response = $._decodeNull;
export const _encode_Output_Response = $._encodeNull;


/* eslint-enable */
