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
 * @summary EnableUnitEvents_ResponseParams
 * @description
 *
 * Success payload of an `enableUnitEvents` response (slave→master)
 * for BioAPI_EnableEvents. Always `NULL`; outcome is
 * `BIPResponse.returnValue`. X.1083 §16.15.2, §16.15.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableUnitEvents-ResponseParams  ::=  NULL
 * ```
 */
export type EnableUnitEvents_ResponseParams = NULL; // NullType




export const _decode_EnableUnitEvents_ResponseParams = $._decodeNull;




export const _encode_EnableUnitEvents_ResponseParams = $._encodeNull;


/* eslint-enable */
