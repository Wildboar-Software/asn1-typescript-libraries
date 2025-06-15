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



/* START_OF_SYMBOL_DEFINITION ControlStatus_Item */
/**
 * @summary ControlStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ControlStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_subjectToTest */
/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_subjectToTest: ControlStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_subjectToTest */

/* START_OF_SYMBOL_DEFINITION subjectToTest */
/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const subjectToTest: ControlStatus_Item = ControlStatus_Item_subjectToTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subjectToTest */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_partOfServicesLocked */
/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_partOfServicesLocked: ControlStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_partOfServicesLocked */

/* START_OF_SYMBOL_DEFINITION partOfServicesLocked */
/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const partOfServicesLocked: ControlStatus_Item = ControlStatus_Item_partOfServicesLocked; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION partOfServicesLocked */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_reservedForTest */
/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_reservedForTest: ControlStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_reservedForTest */

/* START_OF_SYMBOL_DEFINITION reservedForTest */
/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const reservedForTest: ControlStatus_Item = ControlStatus_Item_reservedForTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reservedForTest */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_suspended */
/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_suspended: ControlStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_suspended */

/* START_OF_SYMBOL_DEFINITION suspended */
/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const suspended: ControlStatus_Item = ControlStatus_Item_suspended; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION suspended */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus_Item */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ControlStatus_Item */
export const _decode_ControlStatus_Item = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus_Item */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ControlStatus_Item */
export const _encode_ControlStatus_Item = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ControlStatus_Item */

/* eslint-enable */
