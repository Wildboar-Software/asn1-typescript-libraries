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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno */
/**
 * @summary PKIHeader_pvno
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIHeader-pvno ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKIHeader_pvno = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp1999 */
/**
 * @summary PKIHeader_pvno_cmp1999
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp1999: PKIHeader_pvno = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp1999 */

/* START_OF_SYMBOL_DEFINITION cmp1999 */
/**
 * @summary PKIHeader_pvno_cmp1999
 * @constant
 * @type {number}
 */
export const cmp1999: PKIHeader_pvno = PKIHeader_pvno_cmp1999; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cmp1999 */

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp2000 */
/**
 * @summary PKIHeader_pvno_cmp2000
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp2000: PKIHeader_pvno = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp2000 */

/* START_OF_SYMBOL_DEFINITION cmp2000 */
/**
 * @summary PKIHeader_pvno_cmp2000
 * @constant
 * @type {number}
 */
export const cmp2000: PKIHeader_pvno = PKIHeader_pvno_cmp2000; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cmp2000 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader_pvno */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _decode_PKIHeader_pvno */
export const _decode_PKIHeader_pvno = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader_pvno */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _encode_PKIHeader_pvno */
export const _encode_PKIHeader_pvno = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PKIHeader_pvno */

/* eslint-enable */
