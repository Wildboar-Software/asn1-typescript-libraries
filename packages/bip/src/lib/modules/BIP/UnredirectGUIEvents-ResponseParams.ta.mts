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
 * @summary UnredirectGUIEvents_ResponseParams
 * @description
 *
 * Parameters of a successful `unredirectGUIEvents` response
 * BIP message (slave→master) for
 * `BioAPI_UnredirectGUIEvents`. Always `NULL`; a missing
 * matching row yields
 * `BioAPIERR_NO_SUCH_REDIRECTOR_FOUND`. X.1083 §16.29.2,
 * §16.29.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnredirectGUIEvents-ResponseParams  ::=  NULL
 * ```
 */
export type UnredirectGUIEvents_ResponseParams = NULL; // NullType




export const _decode_UnredirectGUIEvents_ResponseParams = $._decodeNull;




export const _encode_UnredirectGUIEvents_ResponseParams = $._encodeNull;


/* eslint-enable */
