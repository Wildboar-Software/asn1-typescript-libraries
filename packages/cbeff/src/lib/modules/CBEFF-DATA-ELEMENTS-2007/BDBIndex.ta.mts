/* eslint-disable */
import {
  type OCTET_STRING,
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
import { assertOctetSize } from "../../constraints.mjs";

/**
 * @summary BDBIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBIndex  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BDBIndex = OCTET_STRING; // OctetStringType


export const _decode_BDBIndex: $.ASN1Decoder<OCTET_STRING> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 16, 16, "BDBIndex");
    return value;
};


export const _encode_BDBIndex: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
