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
 * @summary DbSetMarker_ResponseParams
 * @description
 *
 * Payload of a `dbSetMarker` response BIP message
 * (`BioAPI_DbSetMarker`). Slave→master. Always `NULL`; the BioAPI
 * outcome is `BIPResponse.returnValue` (`X.1083 §16.46`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbSetMarker-ResponseParams  ::=  NULL
 * ```
 */
export type DbSetMarker_ResponseParams = NULL; // NullType




export const _decode_DbSetMarker_ResponseParams = $._decodeNull;




export const _encode_DbSetMarker_ResponseParams = $._encodeNull;


/* eslint-enable */
