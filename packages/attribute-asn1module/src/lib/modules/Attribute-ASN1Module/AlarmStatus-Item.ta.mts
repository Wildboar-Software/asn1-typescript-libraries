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



/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item */
/**
 * @summary AlarmStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AlarmStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item_underRepair */
/**
 * @summary AlarmStatus_Item_underRepair
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_underRepair: AlarmStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item_underRepair */

/* START_OF_SYMBOL_DEFINITION underRepair */
/**
 * @summary AlarmStatus_Item_underRepair
 * @constant
 * @type {number}
 */
export
const underRepair: AlarmStatus_Item = AlarmStatus_Item_underRepair; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION underRepair */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item_critical */
/**
 * @summary AlarmStatus_Item_critical
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_critical: AlarmStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item_critical */

/* START_OF_SYMBOL_DEFINITION critical */
/**
 * @summary AlarmStatus_Item_critical
 * @constant
 * @type {number}
 */
export
const critical: AlarmStatus_Item = AlarmStatus_Item_critical; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION critical */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item_major */
/**
 * @summary AlarmStatus_Item_major
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_major: AlarmStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item_major */

/* START_OF_SYMBOL_DEFINITION major */
/**
 * @summary AlarmStatus_Item_major
 * @constant
 * @type {number}
 */
export
const major: AlarmStatus_Item = AlarmStatus_Item_major; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION major */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item_minor */
/**
 * @summary AlarmStatus_Item_minor
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_minor: AlarmStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item_minor */

/* START_OF_SYMBOL_DEFINITION minor */
/**
 * @summary AlarmStatus_Item_minor
 * @constant
 * @type {number}
 */
export
const minor: AlarmStatus_Item = AlarmStatus_Item_minor; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION minor */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_Item_alarmOutstanding */
/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_alarmOutstanding: AlarmStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_Item_alarmOutstanding */

/* START_OF_SYMBOL_DEFINITION alarmOutstanding */
/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @constant
 * @type {number}
 */
export
const alarmOutstanding: AlarmStatus_Item = AlarmStatus_Item_alarmOutstanding; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION alarmOutstanding */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus_Item */
let _cached_decoder_for_AlarmStatus_Item: $.ASN1Decoder<AlarmStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmStatus_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmStatus_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmStatus_Item} The decoded data structure.
 */
export
function _decode_AlarmStatus_Item (el: _Element) {
    if (!_cached_decoder_for_AlarmStatus_Item) { _cached_decoder_for_AlarmStatus_Item = $._decodeInteger; }
    return _cached_decoder_for_AlarmStatus_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus_Item */
let _cached_encoder_for_AlarmStatus_Item: $.ASN1Encoder<AlarmStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmStatus_Item */
/**
 * @summary Encodes a(n) AlarmStatus_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmStatus_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmStatus_Item (value: AlarmStatus_Item, elGetter: $.ASN1Encoder<AlarmStatus_Item>) {
    if (!_cached_encoder_for_AlarmStatus_Item) { _cached_encoder_for_AlarmStatus_Item = $._encodeInteger; }
    return _cached_encoder_for_AlarmStatus_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmStatus_Item */

/* eslint-enable */
