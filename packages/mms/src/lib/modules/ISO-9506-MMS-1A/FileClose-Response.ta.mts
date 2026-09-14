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
 * @summary FileClose_Response
 * @description
 *
 * Result(+): empty. Close succeeded; FRSM
 * deleted. Informative Annex D.
 *
 * [ISO 9506-1:2003 Annex D, D.5.1.2]
 * [ISO 9506-2:2003 Annex D, D.4.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileClose-Response  ::=  NULL
 * ```
 */
export
type FileClose_Response = NULL; // NullType
export const _decode_FileClose_Response = $._decodeNull;
export const _encode_FileClose_Response = $._encodeNull;


/* eslint-enable */
