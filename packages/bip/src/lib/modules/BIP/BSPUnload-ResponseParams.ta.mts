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
 * @summary BSPUnload_ResponseParams
 * @description
 *
 * Success payload of a `bspUnload` response (slave→master) for
 * BioAPI_BSPUnload. Always `NULL`; outcome is
 * `BIPResponse.returnValue` (0, or
 * `BioAPIERR_NOT_A_RUNNING_BSP`). X.1083 §16.10.2, §16.10.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPUnload-ResponseParams  ::=  NULL
 * ```
 */
export type BSPUnload_ResponseParams = NULL; // NullType




export const _decode_BSPUnload_ResponseParams = $._decodeNull;




export const _encode_BSPUnload_ResponseParams = $._encodeNull;


/* eslint-enable */
