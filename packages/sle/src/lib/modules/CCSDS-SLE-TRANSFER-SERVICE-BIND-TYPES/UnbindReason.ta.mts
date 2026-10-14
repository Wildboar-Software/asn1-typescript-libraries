/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnbindReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnbindReason         ::=    INTEGER
 * { end                  (0)
 * , suspend              (1)
 * , versionNotSupported (2)
 * , other                (127)
 * }
 * ```
 */
export
type UnbindReason = INTEGER;

/**
 * @summary UnbindReason_end
 * @constant
 * @type {number}
 */
export
const UnbindReason_end: UnbindReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_end
 * @constant
 * @type {number}
 */
export
const end: UnbindReason = UnbindReason_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @constant
 * @type {number}
 */
export
const UnbindReason_suspend: UnbindReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @constant
 * @type {number}
 */
export
const suspend: UnbindReason = UnbindReason_suspend; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @constant
 * @type {number}
 */
export
const UnbindReason_versionNotSupported: UnbindReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @constant
 * @type {number}
 */
export
const versionNotSupported: UnbindReason = UnbindReason_versionNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @constant
 * @type {number}
 */
export
const UnbindReason_other: UnbindReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @constant
 * @type {number}
 */
export
const other: UnbindReason = UnbindReason_other; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UnbindReason: $.ASN1Decoder<UnbindReason> = $._decodeInteger;
export const _encode_UnbindReason: $.ASN1Encoder<UnbindReason> = $._encodeInteger;


/* eslint-enable */
