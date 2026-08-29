/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary `_enum_for_SchemeNumber`
 * @description
 *
 * TypeScript enum backing `SchemeNumber`. Values match the ASN.1
 * enumerations (0–7). ANS X9.42-2003 §A.4.
 *
 * @enum {number}
 */
export enum _enum_for_SchemeNumber {
    dhStatic_sha1 = 0,
    dhEphem_sha1 = 1,
    dhOneFlow_sha1 = 2,
    dhHybrid1_sha1 = 3,
    dhHybrid2_sha1 = 4,
    dhHybridOneFlow_sha1 = 5,
    mqv2_sha1 = 6,
    mqv1_sha1 = 7,
}


/**
 * @summary SchemeNumber
 * @description
 *
 * Enumerated form of `NamedSchemes` for environments that can rely on
 * a small integer instead of a globally unique OID. Each value means
 * `{ scheme, {id-sha1, NULL} }`. Extensible. ANS X9.42-2003 §A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeNumber  ::=  ENUMERATED {
 * dhStatic-sha1    (0),        -- { dhStatic, {id-sha1,NULL} }
 * dhEphem-sha1     (1),        -- { dhEphem, {id-sha1,NULL} }
 * dhOneFlow-sha1    (2),        -- { dhOneFlow, {id-sha1,NULL} }
 * dhHybrid1-sha1    (3),        -- { dhHybrid1, {id-sha1,NULL} }
 * dhHybrid2-sha1    (4),        -- { dhHybrid2, {id-sha1,NULL} }
 * dhHybridOneFlow-sha1 (5),     -- { dhHybridOneFlow, {id-sha1,NULL} }
 * mqv2-sha1        (6),        -- { mqv2,    {id-sha1,NULL} }
 * mqv1-sha1        (7),        -- { mqv1,    {id-sha1,NULL} }
 * ...
 * }
 * ```
 *
 * @enum {number}
 */
export type SchemeNumber = _enum_for_SchemeNumber | ENUMERATED;


/**
 * @summary SchemeNumber_dhStatic_sha1
 * @description
 *
 * `dhStatic` with SHA-1 KDF. Both parties use only static keys on one
 * group; `ZZ = oct(Zs)`. ANS X9.42-2003 §8.1.1, §A.4.1.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhStatic_sha1: SchemeNumber = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhStatic_sha1
 * @constant
 * @type {number}
 */
export const dhStatic_sha1: SchemeNumber = SchemeNumber_dhStatic_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_dhEphem_sha1
 * @description
 *
 * `dhEphem` with SHA-1 KDF. Both parties use only ephemeral keys;
 * destroy ephemeral private keys after use; `ZZ = oct(Ze)`. ANS
 * X9.42-2003 §8.1.2, §A.4.2.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhEphem_sha1: SchemeNumber = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhEphem_sha1
 * @constant
 * @type {number}
 */
export const dhEphem_sha1: SchemeNumber = SchemeNumber_dhEphem_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_dhOneFlow_sha1
 * @description
 *
 * `dhOneFlow` with SHA-1 KDF. Initiator ephemeral, responder static,
 * one group. ANS X9.42-2003 §8.1.3, §A.4.3.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhOneFlow_sha1: SchemeNumber = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhOneFlow_sha1
 * @constant
 * @type {number}
 */
export const dhOneFlow_sha1: SchemeNumber = SchemeNumber_dhOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_dhHybrid1_sha1
 * @description
 *
 * `dhHybrid1` with SHA-1 KDF. Both parties contribute static and
 * ephemeral keys on one group; `ZZ = oct(Ze)||oct(Zs)`. ANS
 * X9.42-2003 §8.1.4, §A.4.4.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybrid1_sha1: SchemeNumber = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhHybrid1_sha1
 * @constant
 * @type {number}
 */
export const dhHybrid1_sha1: SchemeNumber = SchemeNumber_dhHybrid1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_dhHybrid2_sha1
 * @description
 *
 * `dhHybrid2` with SHA-1 KDF. Static and ephemeral keys on two
 * separately identified groups; `ZZ = oct(Ze)||oct(Zs)`. ANS
 * X9.42-2003 §8.1.5, §A.4.5.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybrid2_sha1: SchemeNumber = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhHybrid2_sha1
 * @constant
 * @type {number}
 */
export const dhHybrid2_sha1: SchemeNumber = SchemeNumber_dhHybrid2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_dhHybridOneFlow_sha1
 * @description
 *
 * `dhHybridOneFlow` with SHA-1 KDF. Initiator static+ephemeral,
 * responder static only, one group. ANS X9.42-2003 §8.1.6, §A.4.6.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybridOneFlow_sha1: SchemeNumber = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dhHybridOneFlow_sha1
 * @constant
 * @type {number}
 */
export const dhHybridOneFlow_sha1: SchemeNumber = SchemeNumber_dhHybridOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_mqv2_sha1
 * @description
 *
 * `mqv2` with SHA-1 KDF. Interactive MQV: both parties static and
 * ephemeral keys, one group; `ZZ = oct(ZMQV)`. Provides forward
 * secrecy to both. ANS X9.42-2003 §8.2.1, §7.5.2.1, §A.4.7.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_mqv2_sha1: SchemeNumber = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mqv2_sha1
 * @constant
 * @type {number}
 */
export const mqv2_sha1: SchemeNumber = SchemeNumber_mqv2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SchemeNumber_mqv1_sha1
 * @description
 *
 * `mqv1` with SHA-1 KDF. Store-and-forward MQV: initiator
 * static+ephemeral, responder static only (e.g. email). Forward
 * secrecy for the initiator only. ANS X9.42-2003 §8.2.2, §7.5.2.2,
 * §A.4.8.
 *
 * @constant
 * @type {number}
 */
export const SchemeNumber_mqv1_sha1: SchemeNumber = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mqv1_sha1
 * @constant
 * @type {number}
 */
export const mqv1_sha1: SchemeNumber = SchemeNumber_mqv1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SchemeNumber = $._decodeEnumerated;




export const _encode_SchemeNumber = $._encodeEnumerated;


/* eslint-enable */
