/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_ResourceState
 * @description
 *
 * `reserved` (1) or `committed` (2), carried optionally on `CCChange`.
 * This edition does not define either state. See `ResourceState`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_ResourceState {
    /**
     * Enumeration value 1 on `CCChange`. This edition does not define the
     * state. Parameters commented "Reserved" elsewhere are `NULL`, which is a
     * different use of the word.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    reserved = 1,
    /**
     * Enumeration value 2 on `CCChange`. This edition does not define the
     * state.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    committed = 2,
}

/**
 * @summary ResourceState
 * @description
 *
 * State carried optionally on `CCChange`. The named values are `reserved` (1)
 * and `committed` (2).
 *
 * This edition does not define either state. Here `reserved` is enumeration
 * value 1. Elsewhere in the module, parameters commented "Reserved" are `NULL`
 * and have no defined use.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceState  ::=  ENUMERATED {
 *     reserved (1),
 *     committed (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ResourceState = _enum_for_ResourceState | ENUMERATED;

/**
 * @summary ResourceState_reserved
 * @description
 *
 * Enumeration value 1 on `CCChange`. This edition does not define the state.
 * Parameters commented "Reserved" elsewhere are `NULL`, which is a different
 * use of the word.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const ResourceState_reserved = _enum_for_ResourceState.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description
 *
 * Enumeration value 1 on `CCChange`. This edition does not define the state.
 * Parameters commented "Reserved" elsewhere are `NULL`, which is a different
 * use of the word.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const reserved = ResourceState_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceState_committed
 * @description
 *
 * Enumeration value 2 on `CCChange`. This edition does not define the state.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const ResourceState_committed = _enum_for_ResourceState.committed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary committed
 * @description
 *
 * Enumeration value 2 on `CCChange`. This edition does not define the state.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const committed = ResourceState_committed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ResourceState: $.ASN1Decoder<ResourceState> = $._decodeEnumerated;
export const _encode_ResourceState: $.ASN1Encoder<ResourceState> = $._encodeEnumerated;


/* eslint-enable */
