/* eslint-disable */
import {
  INTEGER,
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
 * @summary TCPIPBIPMessage_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCPIPBIPMessage-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TCPIPBIPMessage_version = INTEGER;


/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const TCPIPBIPMessage_version_version_1: TCPIPBIPMessage_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const version_1: TCPIPBIPMessage_version = TCPIPBIPMessage_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TCPIPBIPMessage_version = $._decodeInteger;




export const _encode_TCPIPBIPMessage_version = $._encodeInteger;


/* eslint-enable */
