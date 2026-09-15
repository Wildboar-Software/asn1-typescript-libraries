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
 * @summary DefineEventAction_Response
 * @description
 *
 * Confirmed Result(+): Event Action created. Empty.
 *
 * [ISO 9506-1:2003 §20.2.1.2]
 * [ISO 9506-2:2003 §20.2.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineEventAction-Response  ::=  NULL
 * ```
 */
export
type DefineEventAction_Response = NULL; // NullType
export const _decode_DefineEventAction_Response = $._decodeNull;
export const _encode_DefineEventAction_Response = $._encodeNull;


/* eslint-enable */
