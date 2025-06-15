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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION MaxLogSize */
/**
 * @summary MaxLogSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLogSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export
type MaxLogSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxLogSize */

/* START_OF_SYMBOL_DEFINITION MaxLogSize_unlimited */
/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const MaxLogSize_unlimited: MaxLogSize = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaxLogSize_unlimited */

/* START_OF_SYMBOL_DEFINITION unlimited */
/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const unlimited: MaxLogSize = MaxLogSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unlimited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxLogSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxLogSize */
export const _decode_MaxLogSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxLogSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxLogSize */
export const _encode_MaxLogSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaxLogSize */

/* eslint-enable */
