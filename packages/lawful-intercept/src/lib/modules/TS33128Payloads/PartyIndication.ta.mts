/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartyIndication {
    callingParty = 1,
    calledParty = 2,
}

/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyIndication = _enum_for_PartyIndication;

/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PartyIndication = _enum_for_PartyIndication;

/**
 * @summary PartyIndication_callingParty
 * @constant
 * @type {number}
 */
export
const PartyIndication_callingParty: PartyIndication = PartyIndication.callingParty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingParty
 * @constant
 * @type {number}
 */
export
const callingParty: PartyIndication = PartyIndication.callingParty; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyIndication_calledParty
 * @constant
 * @type {number}
 */
export
const PartyIndication_calledParty: PartyIndication = PartyIndication.calledParty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledParty
 * @constant
 * @type {number}
 */
export
const calledParty: PartyIndication = PartyIndication.calledParty; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyIndication: $.ASN1Decoder<PartyIndication> = $._decodeEnumerated;
export const _encode_PartyIndication: $.ASN1Encoder<PartyIndication> = $._encodeEnumerated;


/* eslint-enable */
