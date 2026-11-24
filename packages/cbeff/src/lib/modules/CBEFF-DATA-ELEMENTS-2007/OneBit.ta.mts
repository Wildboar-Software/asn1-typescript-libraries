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
 * @summary OneBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneBit  ::=  INTEGER(0..1)
 * ```
 */
export type OneBit = INTEGER;


export const _decode_OneBit: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 1, "OneBit");
    return value;
};


export const _encode_OneBit: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
