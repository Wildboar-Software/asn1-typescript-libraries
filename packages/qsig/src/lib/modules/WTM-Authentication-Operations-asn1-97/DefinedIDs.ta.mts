/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DefinedIDs
 * @description
 *
 * Integer identifiers for authentication algorithms, range 0 to 255 (ECMA-306
 * §6.3.1). Named values are `ct2` (0), `dect` (1), `gsm` (2), `pci` (3), `pwt`
 * (4), `us-gsm` (5), `phs` (6), and `tetra` (7). ECMA-306 does not expand these
 * names, does not assign the other values in the range, and does not define the
 * algorithms (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
 * @description Identifier `ct2` (0). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_ct2: 0 = 0 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_ct2
 * @description Alias of {@link DefinedIDs_ct2}.
 * @constant
 * @type {number}
 */
export
const ct2: 0 = DefinedIDs_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_dect
 * @description
 * Identifier `dect` (1). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_dect: 1 = 1 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_dect
 * @description Alias of {@link DefinedIDs_dect}.
 * @constant
 * @type {number}
 */
export
const dect: 1 = DefinedIDs_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_gsm
 * @description Identifier `gsm` (2). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_gsm: 2 = 2 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_gsm
 * @description Alias of {@link DefinedIDs_gsm}.
 * @constant
 * @type {number}
 */
export
const gsm: 2 = DefinedIDs_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pci
 * @description Identifier `pci` (3). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_pci: 3 = 3 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pci
 * @description Alias of {@link DefinedIDs_pci}.
 * @constant
 * @type {number}
 */
export
const pci: 3 = DefinedIDs_pci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pwt
 * @description Identifier `pwt` (4). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_pwt: 4 = 4 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_pwt
 * @description Alias of {@link DefinedIDs_pwt}.
 * @constant
 * @type {number}
 */
export
const pwt: 4 = DefinedIDs_pwt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_us_gsm
 * @description
 * Identifier `us-gsm` (5). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_us_gsm: 5 = 5 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_us_gsm
 * @description Alias of {@link DefinedIDs_us_gsm}.
 * @constant
 * @type {number}
 */
export
const us_gsm: 5 = DefinedIDs_us_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_phs
 * @description Identifier `phs` (6). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_phs: 6 = 6 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_phs
 * @description Alias of {@link DefinedIDs_phs}.
 * @constant
 * @type {number}
 */
export
const phs: 6 = DefinedIDs_phs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_tetra
 * @description
 * Identifier `tetra` (7). ECMA-306 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const DefinedIDs_tetra: 7 = 7 satisfies DefinedIDs; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DefinedIDs_tetra
 * @description Alias of {@link DefinedIDs_tetra}.
 * @constant
 * @type {number}
 */
export
const tetra: 7 = DefinedIDs_tetra; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_DefinedIDs = (el: _Element): DefinedIDs => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("DefinedIDs violates INTEGER constraint");
    }
    return value;
};

export
const _encode_DefinedIDs: $.ASN1Encoder<DefinedIDs> = $._encodeInteger;

/* eslint-enable */
