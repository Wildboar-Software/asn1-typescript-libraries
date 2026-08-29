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
 * @summary Port
 * @description
 *
 * UDP/TCP port number (`0..65535`). Default for BIP discovery,
 * announcement, and the recommended TCP BIP port is 4376
 * (changeable via a management interface). ITU-T Rec. X.1083
 * (11/2007)
 * [Annex B.12](https://www.itu.int/rec/T-REC-X.1083-200711-I),
 * A.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Port  ::=  INTEGER(0..65535)
 * ```
 */
export type Port = INTEGER;




export const _decode_Port = $._decodeInteger;




export const _encode_Port = $._encodeInteger;


/* eslint-enable */
