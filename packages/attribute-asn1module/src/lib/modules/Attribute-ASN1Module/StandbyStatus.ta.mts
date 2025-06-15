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



/* START_OF_SYMBOL_DEFINITION StandbyStatus */
/**
 * @summary StandbyStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StandbyStatus  ::=  INTEGER {hotStandby(0), coldStandby(1), providingService(2)}
 * ```
 */
export
type StandbyStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION StandbyStatus */

/* START_OF_SYMBOL_DEFINITION StandbyStatus_hotStandby */
/**
 * @summary StandbyStatus_hotStandby
 * @constant
 * @type {number}
 */
export
const StandbyStatus_hotStandby: StandbyStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION StandbyStatus_hotStandby */

/* START_OF_SYMBOL_DEFINITION hotStandby */
/**
 * @summary StandbyStatus_hotStandby
 * @constant
 * @type {number}
 */
export
const hotStandby: StandbyStatus = StandbyStatus_hotStandby; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION hotStandby */

/* START_OF_SYMBOL_DEFINITION StandbyStatus_coldStandby */
/**
 * @summary StandbyStatus_coldStandby
 * @constant
 * @type {number}
 */
export
const StandbyStatus_coldStandby: StandbyStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION StandbyStatus_coldStandby */

/* START_OF_SYMBOL_DEFINITION coldStandby */
/**
 * @summary StandbyStatus_coldStandby
 * @constant
 * @type {number}
 */
export
const coldStandby: StandbyStatus = StandbyStatus_coldStandby; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION coldStandby */

/* START_OF_SYMBOL_DEFINITION StandbyStatus_providingService */
/**
 * @summary StandbyStatus_providingService
 * @constant
 * @type {number}
 */
export
const StandbyStatus_providingService: StandbyStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION StandbyStatus_providingService */

/* START_OF_SYMBOL_DEFINITION providingService */
/**
 * @summary StandbyStatus_providingService
 * @constant
 * @type {number}
 */
export
const providingService: StandbyStatus = StandbyStatus_providingService; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION providingService */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StandbyStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StandbyStatus */

/* START_OF_SYMBOL_DEFINITION _decode_StandbyStatus */
export const _decode_StandbyStatus = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_StandbyStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StandbyStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StandbyStatus */

/* START_OF_SYMBOL_DEFINITION _encode_StandbyStatus */
export const _encode_StandbyStatus = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_StandbyStatus */

/* eslint-enable */
