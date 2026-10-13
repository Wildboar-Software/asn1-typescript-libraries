/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Diagnostics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Diagnostics              ::=    INTEGER
 * { duplicateInvokeId              (100)
 * , otherReason                    (127)
 * }
 * ```
 */
export
type Diagnostics = INTEGER;

/**
 * @summary Diagnostics_duplicateInvokeId
 * @constant
 * @type {number}
 */
export
const Diagnostics_duplicateInvokeId: Diagnostics = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_duplicateInvokeId
 * @constant
 * @type {number}
 */
export
const duplicateInvokeId: Diagnostics = Diagnostics_duplicateInvokeId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @constant
 * @type {number}
 */
export
const Diagnostics_otherReason: Diagnostics = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @constant
 * @type {number}
 */
export
const otherReason: Diagnostics = Diagnostics_otherReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Diagnostics: $.ASN1Decoder<Diagnostics> = $._decodeInteger;
export const _encode_Diagnostics: $.ASN1Encoder<Diagnostics> = $._encodeInteger;


/* eslint-enable */
