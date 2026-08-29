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
 * @summary UnsubscribeFromGUIEvents_ResponseParams
 * @description
 *
 * Parameters of a successful `unsubscribeFromGUIEvents`
 * response BIP message (slave→master) for
 * `BioAPI_UnsubscribeFromGUIEvents`. Always `NULL`; a missing
 * matching row yields
 * `BioAPIERR_NO_SUCH_SUBSCRIPTION_FOUND`. X.1083 §16.23.2,
 * §16.23.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsubscribeFromGUIEvents-ResponseParams  ::=  NULL
 * ```
 */
export type UnsubscribeFromGUIEvents_ResponseParams = NULL; // NullType




export const _decode_UnsubscribeFromGUIEvents_ResponseParams = $._decodeNull;




export const _encode_UnsubscribeFromGUIEvents_ResponseParams = $._encodeNull;


/* eslint-enable */
