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
 * @summary Cancel_ResponseParams
 * @description
 *
 * Payload of a `cancel` response BIP message (`BioAPI_Cancel`).
 * Slave→master. Always `NULL`; the BioAPI outcome is
 * `BIPResponse.returnValue` (`X.1083 §16.57`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cancel-ResponseParams  ::=  NULL
 * ```
 */
export type Cancel_ResponseParams = NULL; // NullType




export const _decode_Cancel_ResponseParams = $._decodeNull;




export const _encode_Cancel_ResponseParams = $._encodeNull;


/* eslint-enable */
