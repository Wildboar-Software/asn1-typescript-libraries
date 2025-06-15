/* eslint-disable */
import {
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



/* START_OF_SYMBOL_DEFINITION _enum_for_SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
enum _enum_for_SourceIndicator {
    resourceOperation = 0,
    managementOperation = 1,
    unknown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
type SourceIndicator = _enum_for_SourceIndicator;
/* END_OF_SYMBOL_DEFINITION SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
const SourceIndicator = _enum_for_SourceIndicator;
/* END_OF_SYMBOL_DEFINITION SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_resourceOperation */
/**
 * @summary SourceIndicator_resourceOperation
 * @constant
 * @type {number}
 */
export
const SourceIndicator_resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_resourceOperation */

/* START_OF_SYMBOL_DEFINITION resourceOperation */
/**
 * @summary resourceOperation
 * @constant
 * @type {number}
 */
export
const resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceOperation */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_managementOperation */
/**
 * @summary SourceIndicator_managementOperation
 * @constant
 * @type {number}
 */
export
const SourceIndicator_managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_managementOperation */

/* START_OF_SYMBOL_DEFINITION managementOperation */
/**
 * @summary managementOperation
 * @constant
 * @type {number}
 */
export
const managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION managementOperation */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_unknown */
/**
 * @summary SourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const SourceIndicator_unknown: SourceIndicator = SourceIndicator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: SourceIndicator = SourceIndicator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_SourceIndicator */
export const _decode_SourceIndicator = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_SourceIndicator */
export const _encode_SourceIndicator = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SourceIndicator */

/* eslint-enable */
