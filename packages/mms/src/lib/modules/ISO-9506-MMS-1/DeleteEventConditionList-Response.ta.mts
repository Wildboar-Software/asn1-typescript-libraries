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
 * @summary DeleteEventConditionList_Response
 * @description
 *
 * Confirmed Result(+): Event Condition List deleted. Empty.
 *
 * [ISO 9506-1:2003 §22.3.1.2]
 * [ISO 9506-2:2003 §22.3.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventConditionList-Response  ::=  NULL
 * ```
 */
export
type DeleteEventConditionList_Response = NULL; // NullType
export const _decode_DeleteEventConditionList_Response = $._decodeNull;
export const _encode_DeleteEventConditionList_Response = $._encodeNull;


/* eslint-enable */
