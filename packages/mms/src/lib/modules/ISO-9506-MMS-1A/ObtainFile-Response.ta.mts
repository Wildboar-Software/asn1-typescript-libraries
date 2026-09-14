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
 * @summary ObtainFile_Response
 * @description
 *
 * Result(+): empty. File transfer succeeded.
 * Normative Annex C.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.2]
 * [ISO 9506-2:2003 Annex C, C.2.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObtainFile-Response  ::=  NULL
 * ```
 */
export
type ObtainFile_Response = NULL; // NullType
export const _decode_ObtainFile_Response = $._decodeNull;
export const _encode_ObtainFile_Response = $._encodeNull;


/* eslint-enable */
