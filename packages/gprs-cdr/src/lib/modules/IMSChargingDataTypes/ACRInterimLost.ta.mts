/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACRInterimLost
 * @description
 *
 * Whether interim Charging Data Requests were missing when the CDF built
 * this CDR. Clause 6.1.3.2 uses [Interim] to generate partial CDRs. TS
 * 32.260 does not define the values no, yes, and unknown.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACRInterimLost {
    no = 0,
    yes = 1,
    unknown = 2,
}

/**
 * @summary ACRInterimLost
 * @description
 *
 * Whether interim Charging Data Requests were missing when the CDF built
 * this CDR. Clause 6.1.3.2 uses [Interim] to generate partial CDRs. TS
 * 32.260 does not define the values no, yes, and unknown.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ACRInterimLost = _enum_for_ACRInterimLost;

/**
 * @summary ACRInterimLost
 * @description
 *
 * Whether interim Charging Data Requests were missing when the CDF built
 * this CDR. Clause 6.1.3.2 uses [Interim] to generate partial CDRs. TS
 * 32.260 does not define the values no, yes, and unknown.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ACRInterimLost = _enum_for_ACRInterimLost;

/**
 * @summary ACRInterimLost_no
 * @description
 *
 * No interim Charging Data Request was detected missing. TS 32.260 does
 * not define this value (clause 6.1.3.2).
 *
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_no = ACRInterimLost.no satisfies ACRInterimLost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @description
 *
 * No interim Charging Data Request was detected missing. TS 32.260 does
 * not define this value (clause 6.1.3.2).
 *
 * @constant
 * @type {number}
 */
export
const no = ACRInterimLost.no satisfies ACRInterimLost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRInterimLost_yes
 * @description
 *
 * An interim Charging Data Request was missing. TS 32.260 does not define
 * this value (clause 6.1.3.2).
 *
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_yes = ACRInterimLost.yes satisfies ACRInterimLost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @description
 *
 * An interim Charging Data Request was missing. TS 32.260 does not define
 * this value (clause 6.1.3.2).
 *
 * @constant
 * @type {number}
 */
export
const yes = ACRInterimLost.yes satisfies ACRInterimLost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRInterimLost_unknown
 * @description
 *
 * It is unknown whether an interim Charging Data Request was missing. TS
 * 32.260 does not define this value.
 *
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_unknown = ACRInterimLost.unknown satisfies ACRInterimLost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * It is unknown whether an interim Charging Data Request was missing. TS
 * 32.260 does not define this value.
 *
 * @constant
 * @type {number}
 */
export
const unknown = ACRInterimLost.unknown satisfies ACRInterimLost; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ACRInterimLost: $.ASN1Decoder<ACRInterimLost> = $._decodeEnumerated;

export
const _encode_ACRInterimLost: $.ASN1Encoder<ACRInterimLost> = $._encodeEnumerated;

/* eslint-enable */
