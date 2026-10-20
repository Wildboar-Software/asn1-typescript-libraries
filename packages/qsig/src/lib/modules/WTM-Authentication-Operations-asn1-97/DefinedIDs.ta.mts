/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DefinedIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefinedIDs  ::=  INTEGER {
 *     ct2(0),
 *     dect(1),
 *     gsm(2),
 *     pci(3),
 *     pwt(4),
 *     us-gsm(5),
 *     phs(6),
 *     tetra(7)
 * } (0..255)
 * ```
 */
export
type DefinedIDs = INTEGER;

/**
 * @summary DefinedIDs_ct2
 * @constant
 * @type {number}
 */
export
const DefinedIDs_ct2: DefinedIDs = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_ct2
 * @constant
 * @type {number}
 */
export
const ct2: DefinedIDs = DefinedIDs_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_dect
 * @constant
 * @type {number}
 */
export
const DefinedIDs_dect: DefinedIDs = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_dect
 * @constant
 * @type {number}
 */
export
const dect: DefinedIDs = DefinedIDs_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_gsm
 * @constant
 * @type {number}
 */
export
const DefinedIDs_gsm: DefinedIDs = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_gsm
 * @constant
 * @type {number}
 */
export
const gsm: DefinedIDs = DefinedIDs_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pci
 * @constant
 * @type {number}
 */
export
const DefinedIDs_pci: DefinedIDs = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pci
 * @constant
 * @type {number}
 */
export
const pci: DefinedIDs = DefinedIDs_pci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pwt
 * @constant
 * @type {number}
 */
export
const DefinedIDs_pwt: DefinedIDs = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pwt
 * @constant
 * @type {number}
 */
export
const pwt: DefinedIDs = DefinedIDs_pwt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_us_gsm
 * @constant
 * @type {number}
 */
export
const DefinedIDs_us_gsm: DefinedIDs = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_us_gsm
 * @constant
 * @type {number}
 */
export
const us_gsm: DefinedIDs = DefinedIDs_us_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_phs
 * @constant
 * @type {number}
 */
export
const DefinedIDs_phs: DefinedIDs = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_phs
 * @constant
 * @type {number}
 */
export
const phs: DefinedIDs = DefinedIDs_phs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_tetra
 * @constant
 * @type {number}
 */
export
const DefinedIDs_tetra: DefinedIDs = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_tetra
 * @constant
 * @type {number}
 */
export
const tetra: DefinedIDs = DefinedIDs_tetra; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_DefinedIDs: $.ASN1Decoder<DefinedIDs> = $._decodeInteger;

export
const _encode_DefinedIDs: $.ASN1Encoder<DefinedIDs> = $._encodeInteger;

/* eslint-enable */
