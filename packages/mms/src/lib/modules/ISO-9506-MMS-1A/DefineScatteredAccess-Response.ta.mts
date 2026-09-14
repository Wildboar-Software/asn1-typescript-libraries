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
 * @summary DefineScatteredAccess_Response
 * @description
 *
 * Result(+): empty. Object created; MMS
 * Deletable initialized true. Informative
 * Annex E.
 *
 * [ISO 9506-1:2003 Annex E, E.3.1.2]
 * [ISO 9506-2:2003 Annex E, E.2.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineScatteredAccess-Response  ::=  NULL
 * ```
 */
export
type DefineScatteredAccess_Response = NULL; // NullType
export const _decode_DefineScatteredAccess_Response = $._decodeNull;
export const _encode_DefineScatteredAccess_Response = $._encodeNull;


/* eslint-enable */
