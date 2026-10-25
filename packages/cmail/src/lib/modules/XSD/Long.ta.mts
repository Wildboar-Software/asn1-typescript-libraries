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
 * @summary Long
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Long  ::=  INTEGER (-9223372036854775808..9223372036854775807)
 * ```
 */
export type Long = INTEGER;




export const _decode_Long: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Long: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
