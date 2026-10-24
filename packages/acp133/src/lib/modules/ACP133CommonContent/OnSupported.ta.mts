/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OnSupported
 * @description
 *
 * Other notifications, besides MHS notifications, that
 * an `mta-acp127` gateway generates. If `onSupported`
 * is absent, the gateway generates none of them. A set
 * bit means that named notification is generated. The
 * gateway may generate all of them or none.
 *
 * The bits are `acp127-nn` (0), `acp127-pn` (1), and
 * `acp127-tn` (2). The common-content text names them
 * and does not expand the suffixes.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.92](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.92)
 * and
 * [section 6.14](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.14).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OnSupported  ::=  BIT STRING { acp127-nn(0), acp127-pn(1), acp127-tn(2) }
 * ```
 */
export
type OnSupported = BIT_STRING;

/**
 * Named bit 0. The common-content text does not expand the suffix `nn`.
 * @summary OnSupported_acp127_nn
 * @constant
 */
export
const OnSupported_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * Short name for {@link OnSupported_acp127_nn}.
 * @summary acp127_nn
 * @constant
 */
export
const acp127_nn: number = OnSupported_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * Named bit 1. The common-content text does not expand the suffix `pn`.
 * @summary OnSupported_acp127_pn
 * @constant
 */
export
const OnSupported_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * Short name for {@link OnSupported_acp127_pn}.
 * @summary acp127_pn
 * @constant
 */
export
const acp127_pn: number = OnSupported_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * Named bit 2. The common-content text does not expand the suffix `tn`.
 * @summary OnSupported_acp127_tn
 * @constant
 */
export
const OnSupported_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * Short name for {@link OnSupported_acp127_tn}.
 * @summary acp127_tn
 * @constant
 */
export
const acp127_tn: number = OnSupported_acp127_tn; /* SHORT_NAMED_BIT */
export const _decode_OnSupported = $._decodeBitString;
export const _encode_OnSupported = $._encodeBitString;


/* eslint-enable */
