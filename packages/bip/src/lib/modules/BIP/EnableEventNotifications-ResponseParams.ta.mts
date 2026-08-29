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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary EnableEventNotifications_ResponseParams
 * @description
 *
 * Success payload of an `enableEventNotifications` response
 * (slave→master) for BioAPI_EnableEventNotifications. Always
 * `NULL`; outcome is `BIPResponse.returnValue`. X.1083 §16.16.2,
 * §16.16.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableEventNotifications-ResponseParams  ::=  NULL
 * ```
 */
export type EnableEventNotifications_ResponseParams = NULL; // NullType




export const _decode_EnableEventNotifications_ResponseParams = $._decodeNull;




export const _encode_EnableEventNotifications_ResponseParams = $._encodeNull;


/* eslint-enable */
