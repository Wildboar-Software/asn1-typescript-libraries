/* eslint-disable */
import {
  type INTEGER,
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
 * @summary Microseconds
 * @description
 *
 * Microsecond component of a timestamp (0..999999)
 * ([RFC 4120 §5.2.4](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.4)). Used with `KerberosTime` fields such as
 * `ctime`/`cusec`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Microseconds     ::=  INTEGER (0..999999)
 * ```
 */
export type Microseconds = INTEGER;




export const _decode_Microseconds: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Microseconds: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
