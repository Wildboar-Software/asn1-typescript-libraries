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
 * @summary DeleteMaster_ResponseParams
 * @description
 *
 * Success payload of a `deleteMaster` response (slave→master) for
 * BioAPI_UnlinkFromEndpoint. Always `NULL`; outcome is
 * `BIPResponse.returnValue` (0, or
 * `BioAPIERR_NO_SUCH_MASTER_FOUND`). X.1083 §16.5.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteMaster-ResponseParams  ::=  NULL
 * ```
 */
export type DeleteMaster_ResponseParams = NULL; // NullType




export const _decode_DeleteMaster_ResponseParams = $._decodeNull;




export const _encode_DeleteMaster_ResponseParams = $._encodeNull;


/* eslint-enable */
