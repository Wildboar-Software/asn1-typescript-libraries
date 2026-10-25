/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Whether the CSP has assured the party identity in
 * `Messaging_Party_Information`.
 *
 * Clause 8.6 does not define `unknown`, `trusted`, or `untrusted` individually.
 * Note 2: validity does not mean the CSP identified a natural person. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Party_Validity {
    /**
     * Clause 8.6 does not define this value. The field as a whole only signals
     * whether the CSP has assured the identity.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    unknown = 0,
    /**
     * Clause 8.6 does not define this value. The field as a whole only signals
     * whether the CSP has assured the identity.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    trusted = 1,
    /**
     * Clause 8.6 does not define this value. The field as a whole only signals
     * whether the CSP has assured the identity.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    untrusted = 2,
}

/**
 * @summary Messaging_Party_Validity
 * @description
 *
 * Whether the CSP has assured the party identity in
 * `Messaging_Party_Information`.
 *
 * Clause 8.6 does not define `unknown`, `trusted`, or `untrusted` individually.
 * Note 2: validity does not mean the CSP identified a natural person. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Validity  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     trusted(1),
 *     untrusted(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Party_Validity = _enum_for_Messaging_Party_Validity | ENUMERATED;

/**
 * @summary Messaging_Party_Validity_unknown
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_unknown = _enum_for_Messaging_Party_Validity.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const unknown = Messaging_Party_Validity_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_trusted
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_trusted = _enum_for_Messaging_Party_Validity.trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const trusted = Messaging_Party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_untrusted
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_untrusted = _enum_for_Messaging_Party_Validity.untrusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @description
 *
 * Clause 8.6 does not define this value. The field as a whole only signals
 * whether the CSP has assured the identity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const untrusted = Messaging_Party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Party_Validity: $.ASN1Decoder<Messaging_Party_Validity> = $._decodeEnumerated;
export const _encode_Messaging_Party_Validity: $.ASN1Encoder<Messaging_Party_Validity> = $._encodeEnumerated;


/* eslint-enable */
