/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_DNSResolverRotation: {
    readonly inOrder: 0;
    readonly roundRobin: 1;
    readonly random: 2;
    readonly meritocracy: 3;
} = {
    inOrder: 0,
    roundRobin: 1,
    random: 2,
    meritocracy: 3,
};

export
type _enum_for_DNSResolverRotation = ENUMERATED;

/**
 * @summary DNSResolverRotation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSResolverRotation  ::=  ENUMERATED {
 *     inOrder (0),
 *     roundRobin (1),
 *     random (2),
 *     meritocracy (3), -- lowest latency or some other metric
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DNSResolverRotation = _enum_for_DNSResolverRotation | ENUMERATED;

/**
 * @summary DNSResolverRotation_inOrder
 * @constant
 * @type {number}
 */
export
const DNSResolverRotation_inOrder: number = 0 satisfies DNSResolverRotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inOrder
 * @constant
 * @type {number}
 */
export
const inOrder: number = DNSResolverRotation_inOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNSResolverRotation_roundRobin
 * @constant
 * @type {number}
 */
export
const DNSResolverRotation_roundRobin: number = 1 satisfies DNSResolverRotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roundRobin
 * @constant
 * @type {number}
 */
export
const roundRobin: number = DNSResolverRotation_roundRobin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNSResolverRotation_random
 * @constant
 * @type {number}
 */
export
const DNSResolverRotation_random: number = 2 satisfies DNSResolverRotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary random
 * @constant
 * @type {number}
 */
export
const random: number = DNSResolverRotation_random; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNSResolverRotation_meritocracy
 * @constant
 * @type {number}
 */
export
const DNSResolverRotation_meritocracy: number = 3 satisfies DNSResolverRotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary meritocracy
 * @constant
 * @type {number}
 */
export
const meritocracy: number = DNSResolverRotation_meritocracy; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNSResolverRotation: $.ASN1Decoder<DNSResolverRotation> = $._decodeEnumerated;

export
const _encode_DNSResolverRotation: $.ASN1Encoder<DNSResolverRotation> = $._encodeEnumerated;

/* eslint-enable */
