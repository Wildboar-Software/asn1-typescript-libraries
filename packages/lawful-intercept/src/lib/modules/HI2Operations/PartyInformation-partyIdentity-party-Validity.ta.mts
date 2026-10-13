/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_partyIdentity_party_Validity {
    trusted = 0,
    untrusted = 1,
    operator_added = 2,
}

/**
 * @summary PartyInformation_partyIdentity_party_Validity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity-party-Validity ::= ENUMERATED {
 *     trusted(0),
 *     -- The operator has assured the party identity
 *     untrusted(1),
 *     -- The operator does not assure the party identity
 *     operator-added(2),
 *     -- The party identity is added by the operator, e.g. the roaming number
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_partyIdentity_party_Validity = _enum_for_PartyInformation_partyIdentity_party_Validity | ENUMERATED;

/**
 * @summary PartyInformation_partyIdentity_party_Validity_trusted
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_trusted: PartyInformation_partyIdentity_party_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @constant
 * @type {number}
 */
export
const trusted: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_untrusted
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_untrusted: PartyInformation_partyIdentity_party_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @constant
 * @type {number}
 */
export
const untrusted: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_operator_added
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_operator_added: PartyInformation_partyIdentity_party_Validity = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operator_added
 * @constant
 * @type {number}
 */
export
const operator_added: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_operator_added; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_partyIdentity_party_Validity: $.ASN1Decoder<PartyInformation_partyIdentity_party_Validity> = $._decodeEnumerated;
export const _encode_PartyInformation_partyIdentity_party_Validity: $.ASN1Encoder<PartyInformation_partyIdentity_party_Validity> = $._encodeEnumerated;


/* eslint-enable */
