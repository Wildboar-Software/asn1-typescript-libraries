/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ALType
 * @description
 *
 * Kind of address list. An address list is a shorthand
 * for a predetermined set of recipients (ACP 133,
 * June 1998, paragraph 105.a).
 *
 * `0` AIG (Address Indicator Group). `1` Type
 * Organization Collective: units of one type, such as
 * destroyers. `2` CAD (Collective Address Designator).
 * `3` Task Force. `4` DAG (DSSCS Address Group).
 *
 * The September 2000 common-content draft named only
 * `0`–`3` and left `4` for a later assignment.
 * ACP 133 SUPP-1(A) assigns `4`.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.22](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.22)
 * and
 * [section 6.6](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.6).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ALType  ::=  INTEGER { aig(0), type(1), cad(2), taskforce(3), dag(4) }
 * ```
 */
export
type ALType = INTEGER;

/**
 * Address Indicator Group.
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const ALType_aig: 0 = 0 satisfies ALType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ALType_aig}.
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const aig: 0 = ALType_aig; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Type Organization Collective. Units of one type, such as destroyers.
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const ALType_type_: 1 = 1 satisfies ALType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ALType_type_}.
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const type_: 1 = ALType_type_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Collective Address Designator.
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const ALType_cad: 2 = 2 satisfies ALType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ALType_cad}.
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const cad: 2 = ALType_cad; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Task Force address list.
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const ALType_taskforce: 3 = 3 satisfies ALType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ALType_taskforce}.
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const taskforce: 3 = ALType_taskforce; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * DSSCS Address Group. Named in ACP 133 SUPP-1(A).
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const ALType_dag: 4 = 4 satisfies ALType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ALType_dag}.
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const dag: 4 = ALType_dag; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ALType: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ALType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
