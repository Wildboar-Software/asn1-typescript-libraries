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



/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority */
/**
 * @summary PrioritisedObject_Item_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrioritisedObject-Item-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PrioritisedObject_Item_priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_highest */
/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_highest: PrioritisedObject_Item_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_highest */

/* START_OF_SYMBOL_DEFINITION highest */
/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const highest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_highest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION highest */

/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_lowest */
/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_lowest: PrioritisedObject_Item_priority = 127; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_lowest */

/* START_OF_SYMBOL_DEFINITION lowest */
/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const lowest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_lowest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION lowest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item_priority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item_priority */
export const _decode_PrioritisedObject_Item_priority = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item_priority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item_priority */
export const _encode_PrioritisedObject_Item_priority = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item_priority */

/* eslint-enable */
