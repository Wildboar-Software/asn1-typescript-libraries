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
 * @summary DbFreeMarker_ResponseParams
 * @description
 *
 * Payload of a `dbFreeMarker` response BIP message
 * (`BioAPI_DbFreeMarker`). Slave→master. Always `NULL`; the BioAPI
 * outcome is `BIPResponse.returnValue` (`X.1083 §16.47`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbFreeMarker-ResponseParams  ::=  NULL
 * ```
 */
export type DbFreeMarker_ResponseParams = NULL; // NullType




export const _decode_DbFreeMarker_ResponseParams = $._decodeNull;




export const _encode_DbFreeMarker_ResponseParams = $._encodeNull;


/* eslint-enable */
