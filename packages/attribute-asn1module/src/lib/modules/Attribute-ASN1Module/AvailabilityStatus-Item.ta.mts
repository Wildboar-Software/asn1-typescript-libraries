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



/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item */
/**
 * @summary AvailabilityStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvailabilityStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AvailabilityStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_inTest */
/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_inTest: AvailabilityStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_inTest */

/* START_OF_SYMBOL_DEFINITION inTest */
/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const inTest: AvailabilityStatus_Item = AvailabilityStatus_Item_inTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inTest */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_failed */
/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_failed: AvailabilityStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const failed: AvailabilityStatus_Item = AvailabilityStatus_Item_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_powerOff */
/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_powerOff: AvailabilityStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_powerOff */

/* START_OF_SYMBOL_DEFINITION powerOff */
/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const powerOff: AvailabilityStatus_Item = AvailabilityStatus_Item_powerOff; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION powerOff */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offLine */
/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offLine: AvailabilityStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offLine */

/* START_OF_SYMBOL_DEFINITION offLine */
/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const offLine: AvailabilityStatus_Item = AvailabilityStatus_Item_offLine; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION offLine */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offDuty */
/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offDuty: AvailabilityStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offDuty */

/* START_OF_SYMBOL_DEFINITION offDuty */
/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const offDuty: AvailabilityStatus_Item = AvailabilityStatus_Item_offDuty; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION offDuty */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_dependency */
/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_dependency: AvailabilityStatus_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_dependency */

/* START_OF_SYMBOL_DEFINITION dependency */
/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const dependency: AvailabilityStatus_Item = AvailabilityStatus_Item_dependency; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dependency */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_degraded */
/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_degraded: AvailabilityStatus_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_degraded */

/* START_OF_SYMBOL_DEFINITION degraded */
/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const degraded: AvailabilityStatus_Item = AvailabilityStatus_Item_degraded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION degraded */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_notInstalled */
/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_notInstalled: AvailabilityStatus_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_notInstalled */

/* START_OF_SYMBOL_DEFINITION notInstalled */
/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const notInstalled: AvailabilityStatus_Item = AvailabilityStatus_Item_notInstalled; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION notInstalled */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_logFull */
/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_logFull: AvailabilityStatus_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_logFull */

/* START_OF_SYMBOL_DEFINITION logFull */
/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const logFull: AvailabilityStatus_Item = AvailabilityStatus_Item_logFull; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION logFull */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus_Item */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus_Item */
export const _decode_AvailabilityStatus_Item = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus_Item */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus_Item */
export const _encode_AvailabilityStatus_Item = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus_Item */

/* eslint-enable */
