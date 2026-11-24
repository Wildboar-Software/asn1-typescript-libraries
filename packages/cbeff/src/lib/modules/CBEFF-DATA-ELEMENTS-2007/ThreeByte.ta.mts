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
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary ThreeByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreeByte  ::=  INTEGER(0..16777215)
 * ```
 */
export type ThreeByte = INTEGER;


export const _decode_ThreeByte: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 16777215, "ThreeByte");
    return value;
};


export const _encode_ThreeByte: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
