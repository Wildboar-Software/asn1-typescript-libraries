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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainState
 * @description
 * 
 * Domain lifecycle. Prior to creation:
 * non-existent. loading during download; complete after last
 * DownloadSegment; incomplete if the sequence ends early; ready after
 * successful download; in-use when ≥1 Program Invocation is bound.
 * d1–d9 are transitory request/response states. ISO 9506-1:2003 §11.1.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainState  ::=  INTEGER {
 *     non-existent     (0),
 *     loading          (1),
 *     ready            (2),
 *     in-use           (3),
 *     complete         (4),
 *     incomplete       (5),
 *     d1               (7),
 *     d2               (8),
 *     d3               (9),
 *     d4               (10),
 *     d5               (11),
 *     d6               (12),
 *     d7               (13),
 *     d8               (14),
 *     d9               (15)
 * } (0..15)
 * ```
 */
export
type DomainState = INTEGER;

/**
 * @summary DomainState_non_existent
 * @description
 *
 * Before the Domain exists. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_non_existent: 0 = 0 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_non_existent
 * @description
 *
 * Before the Domain exists. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const non_existent: 0 = DomainState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_loading
 * @description
 *
 * Download in progress. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_loading: 1 = 1 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_loading
 * @description
 *
 * Download in progress. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const loading: 1 = DomainState_loading; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_ready
 * @description
 *
 * Successful download; no PI bound. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_ready: 2 = 2 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_ready
 * @description
 *
 * Successful download; no PI bound. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ready: 2 = DomainState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_in_use
 * @description
 *
 * ≥1 Program Invocation is bound. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_in_use: 3 = 3 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_in_use
 * @description
 *
 * ≥1 Program Invocation is bound. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const in_use: 3 = DomainState_in_use; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_complete
 * @description
 *
 * Last DownloadSegment received; TerminateDownloadSequence not yet done. ISO
 * 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_complete: 4 = 4 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_complete
 * @description
 *
 * Last DownloadSegment received; TerminateDownloadSequence not yet done. ISO
 * 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const complete: 4 = DomainState_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_incomplete
 * @description
 *
 * Download sequence ended before loading finished. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_incomplete: 5 = 5 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_incomplete
 * @description
 *
 * Download sequence ended before loading finished. ISO 9506-1:2003 §11.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const incomplete: 5 = DomainState_incomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d1
 * @description
 *
 * Transitory request/response state d1. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d1: 7 = 7 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d1
 * @description
 *
 * Transitory request/response state d1. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d1: 7 = DomainState_d1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d2
 * @description
 *
 * Transitory request/response state d2. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d2: 8 = 8 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d2
 * @description
 *
 * Transitory request/response state d2. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d2: 8 = DomainState_d2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d3
 * @description
 *
 * Transitory request/response state d3. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d3: 9 = 9 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d3
 * @description
 *
 * Transitory request/response state d3. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d3: 9 = DomainState_d3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d4
 * @description
 *
 * Transitory request/response state d4. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d4: 10 = 10 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d4
 * @description
 *
 * Transitory request/response state d4. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d4: 10 = DomainState_d4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d5
 * @description
 *
 * Transitory request/response state d5. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d5: 11 = 11 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d5
 * @description
 *
 * Transitory request/response state d5. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d5: 11 = DomainState_d5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d6
 * @description
 *
 * Transitory request/response state d6. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d6: 12 = 12 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d6
 * @description
 *
 * Transitory request/response state d6. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d6: 12 = DomainState_d6; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d7
 * @description
 *
 * Transitory request/response state d7. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d7: 13 = 13 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d7
 * @description
 *
 * Transitory request/response state d7. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d7: 13 = DomainState_d7; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d8
 * @description
 *
 * Transitory request/response state d8. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d8: 14 = 14 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d8
 * @description
 *
 * Transitory request/response state d8. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d8: 14 = DomainState_d8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d9
 * @description
 *
 * Transitory request/response state d9. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DomainState_d9: 15 = 15 satisfies DomainState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d9
 * @description
 *
 * Transitory request/response state d9. ISO 9506-1:2003 §11.1.1.3, §11.1.3.
 *
 * @constant
 * @type {number}
 */
export
const d9: 15 = DomainState_d9; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DomainState: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_DomainState: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
