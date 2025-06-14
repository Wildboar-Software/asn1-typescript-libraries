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

/* START_OF_SYMBOL_DEFINITION ActivityCode_number */
/**
 * @summary ActivityCode_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityCode-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ActivityCode_number = INTEGER;
/* END_OF_SYMBOL_DEFINITION ActivityCode_number */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_approved */
/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export const ActivityCode_number_approved: ActivityCode_number = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_approved */

/* START_OF_SYMBOL_DEFINITION approved */
/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export const approved: ActivityCode_number = ActivityCode_number_approved; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION approved */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_assign */
/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export const ActivityCode_number_assign: ActivityCode_number = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_assign */

/* START_OF_SYMBOL_DEFINITION assign */
/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export const assign: ActivityCode_number = ActivityCode_number_assign; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION assign */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_cancel */
/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export const ActivityCode_number_cancel: ActivityCode_number = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_cancel */

/* START_OF_SYMBOL_DEFINITION cancel */
/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export const cancel: ActivityCode_number = ActivityCode_number_cancel; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cancel */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_clear */
/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export const ActivityCode_number_clear: ActivityCode_number = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_clear */

/* START_OF_SYMBOL_DEFINITION clear */
/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export const clear: ActivityCode_number = ActivityCode_number_clear; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clear */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_close */
/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export const ActivityCode_number_close: ActivityCode_number = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_close */

/* START_OF_SYMBOL_DEFINITION close */
/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export const close: ActivityCode_number = ActivityCode_number_close; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION close */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_defer */
/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_defer: ActivityCode_number = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_defer */

/* START_OF_SYMBOL_DEFINITION defer */
/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export const defer: ActivityCode_number = ActivityCode_number_defer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION defer */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_dispatch */
/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export const ActivityCode_number_dispatch: ActivityCode_number = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_dispatch */

/* START_OF_SYMBOL_DEFINITION dispatch */
/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export const dispatch: ActivityCode_number = ActivityCode_number_dispatch; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dispatch */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_refer */
/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_refer: ActivityCode_number = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_refer */

/* START_OF_SYMBOL_DEFINITION refer */
/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export const refer: ActivityCode_number = ActivityCode_number_refer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION refer */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_release */
/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export const ActivityCode_number_release: ActivityCode_number = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_release */

/* START_OF_SYMBOL_DEFINITION release */
/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export const release: ActivityCode_number = ActivityCode_number_release; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION release */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_re_open */
/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export const ActivityCode_number_re_open: ActivityCode_number = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_re_open */

/* START_OF_SYMBOL_DEFINITION re_open */
/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export const re_open: ActivityCode_number = ActivityCode_number_re_open; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION re_open */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_repair */
/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export const ActivityCode_number_repair: ActivityCode_number = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_repair */

/* START_OF_SYMBOL_DEFINITION repair */
/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export const repair: ActivityCode_number = ActivityCode_number_repair; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION repair */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_test */
/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export const ActivityCode_number_test: ActivityCode_number = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_test */

/* START_OF_SYMBOL_DEFINITION test */
/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export const test: ActivityCode_number = ActivityCode_number_test; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION test */

/* START_OF_SYMBOL_DEFINITION ActivityCode_number_transfer */
/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_transfer: ActivityCode_number = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivityCode_number_transfer */

/* START_OF_SYMBOL_DEFINITION transfer */
/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export const transfer: ActivityCode_number = ActivityCode_number_transfer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transfer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityCode_number */
let _cached_decoder_for_ActivityCode_number: $.ASN1Decoder<ActivityCode_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityCode_number */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityCode_number */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityCode_number
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityCode_number} The decoded data structure.
 */
export function _decode_ActivityCode_number(el: _Element) {
    if (!_cached_decoder_for_ActivityCode_number) {
        _cached_decoder_for_ActivityCode_number = $._decodeInteger;
    }
    return _cached_decoder_for_ActivityCode_number(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityCode_number */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityCode_number */
let _cached_encoder_for_ActivityCode_number: $.ASN1Encoder<ActivityCode_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityCode_number */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityCode_number */
/**
 * @summary Encodes a(n) ActivityCode_number into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityCode_number, encoded as an ASN.1 Element.
 */
export function _encode_ActivityCode_number(
    value: ActivityCode_number,
    elGetter: $.ASN1Encoder<ActivityCode_number>
) {
    if (!_cached_encoder_for_ActivityCode_number) {
        _cached_encoder_for_ActivityCode_number = $._encodeInteger;
    }
    return _cached_encoder_for_ActivityCode_number(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityCode_number */

/* eslint-enable */
