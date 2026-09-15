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
 * @summary AddEventConditionListReference_Response
 * @description
 *
 * Confirmed Result(+): references added. Empty.
 *
 * [ISO 9506-1:2003 §22.4]
 * [ISO 9506-2:2003 §22.4.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEventConditionListReference-Response  ::=  NULL
 * ```
 */
export
type AddEventConditionListReference_Response = NULL; // NullType
export const _decode_AddEventConditionListReference_Response = $._decodeNull;
export const _encode_AddEventConditionListReference_Response = $._encodeNull;


/* eslint-enable */
