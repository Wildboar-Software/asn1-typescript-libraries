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
 * @summary AcknowledgeEventNotification_Response
 * @description
 *
 * Confirmed Result(+): acknowledgement was accepted. Empty.
 * Duplicate or mismatched (state/time) acks still yield
 * Result(+) after skipping the update procedure.
 *
 * [ISO 9506-1:2003 §18.4.1.2] [ISO 9506-2:2003 §18.4.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcknowledgeEventNotification-Response  ::=  NULL
 * ```
 */
export
type AcknowledgeEventNotification_Response = NULL; // NullType
export const _decode_AcknowledgeEventNotification_Response = $._decodeNull;
export const _encode_AcknowledgeEventNotification_Response = $._encodeNull;


/* eslint-enable */
