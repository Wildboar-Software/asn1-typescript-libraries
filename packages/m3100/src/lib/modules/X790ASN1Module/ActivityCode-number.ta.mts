/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export const ActivityCode_number_approved: 0 = 0 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export const approved: 0 = ActivityCode_number_approved; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export const ActivityCode_number_assign: 1 = 1 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export const assign: 1 = ActivityCode_number_assign; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export const ActivityCode_number_cancel: 2 = 2 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export const cancel: 2 = ActivityCode_number_cancel; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export const ActivityCode_number_clear: 3 = 3 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export const clear: 3 = ActivityCode_number_clear; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export const ActivityCode_number_close: 4 = 4 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export const close: 4 = ActivityCode_number_close; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_defer: 5 = 5 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export const defer: 5 = ActivityCode_number_defer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export const ActivityCode_number_dispatch: 6 = 6 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export const dispatch: 6 = ActivityCode_number_dispatch; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_refer: 7 = 7 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export const refer: 7 = ActivityCode_number_refer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export const ActivityCode_number_release: 8 = 8 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export const release: 8 = ActivityCode_number_release; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export const ActivityCode_number_re_open: 9 = 9 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export const re_open: 9 = ActivityCode_number_re_open; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export const ActivityCode_number_repair: 10 = 10 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export const repair: 10 = ActivityCode_number_repair; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export const ActivityCode_number_test: 11 = 11 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export const test: 11 = ActivityCode_number_test; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export const ActivityCode_number_transfer: 12 = 12 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export const transfer: 12 = ActivityCode_number_transfer; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ActivityCode_number: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_ActivityCode_number: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
