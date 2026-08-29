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
 * Version of `TCPIPBIPMessage`. This Recommendation defines
 * `version-1(1)`. Constrained to `0..255`. ITU-T Rec. X.1083
 * (11/2007)
 * [Annex A.2](https://www.itu.int/rec/T-REC-X.1083-200711-I).
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
 * @description
 *
 * Version 1 of the TCP/IP transport-level message. X.1083
 * Annex A.2.
 *
 * @constant
 * @type {number}
 */
export const TCPIPBIPMessage_version_version_1: TCPIPBIPMessage_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TCPIPBIPMessage_version_version_1
 * @description
 *
 * Version 1 of the TCP/IP transport-level message. X.1083
 * Annex A.2.
 *
 * @constant
 * @type {number}
 */
export const version_1: TCPIPBIPMessage_version = TCPIPBIPMessage_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TCPIPBIPMessage_version = $._decodeInteger;




export const _encode_TCPIPBIPMessage_version = $._encodeInteger;


/* eslint-enable */
