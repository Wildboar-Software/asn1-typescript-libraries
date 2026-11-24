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
 * @summary HeaderVersion_header_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-major ::= INTEGER { version1(1) } (0..15)
 * ```
 */
export type HeaderVersion_header_major = INTEGER;

/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_major_version1: 1 = 1 satisfies HeaderVersion_header_major; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const version1: 1 = HeaderVersion_header_major_version1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_HeaderVersion_header_major: $.ASN1Decoder<INTEGER> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 15, "HeaderVersion.header-major");
    return value;
};


export const _encode_HeaderVersion_header_major: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
