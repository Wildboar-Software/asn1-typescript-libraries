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
 * @summary SubscribeToGUIEvents_ResponseParams
 * @description
 *
 * Parameters of a successful `subscribeToGUIEvents` response
 * BIP message (slave→master) for `BioAPI_SubscribeToGUIEvents`.
 * Always `NULL`; outcome is the BIP return value. X.1083
 * §16.22.2, §16.22.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscribeToGUIEvents-ResponseParams  ::=  NULL
 * ```
 */
export type SubscribeToGUIEvents_ResponseParams = NULL; // NullType




export const _decode_SubscribeToGUIEvents_ResponseParams = $._decodeNull;




export const _encode_SubscribeToGUIEvents_ResponseParams = $._encodeNull;


/* eslint-enable */
