/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Role of a party on a unified-messaging event.
 *
 * The associated-party value ties a party to one element of the messaging
 * system. The usual case is a user configuring a greeting for a limited set of
 * parties.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Party_Qualifier {
    /**
     * The party cannot be classified as originating or terminating.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D
     * (`Messaging-Party-Qualifier`).
     */
    unknown_party = 0,
    /**
     * Identities of the originating party, and the information that party
     * provided.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D
     * (`Messaging-Party-Qualifier`).
     */
    originating_party = 1,
    /**
     * Identities of the terminating party, and the information that party
     * provided.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D
     * (`Messaging-Party-Qualifier`).
     */
    terminating_party = 2,
    /**
     * Identities of an associated party, and the information that party
     * provided. Used to associate a party with one element of the messaging
     * system, for example a greeting played only for some callers.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6 and annex D.
     */
    associated_party = 3,
}

/**
 * @summary Messaging_Party_Qualifier
 * @description
 *
 * Role of a party on a unified-messaging event.
 *
 * The associated-party value ties a party to one element of the messaging
 * system. The usual case is a user configuring a greeting for a limited set of
 * parties.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Qualifier  ::=  ENUMERATED
 * {
 *     unknown-party(0),
 *         -- In this case the party cannot be classified as either originating or terminating
 *     originating-party(1),
 *         -- In this case, the partyInformation parameter provides the identities related to
 *         -- the originating party and all information provided by this party.
 *     terminating-party(2),
 *         -- In this case, the partyInformation parameter provides the identities related to
 *         -- the terminating party and all information provided by this party.
 *     ...,
 *     associated-party(3)
 *         -- In this case, the partyInformation parameter provides the identities related to
 *         -- an associated party and all information provided by this party.
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Party_Qualifier = _enum_for_Messaging_Party_Qualifier | ENUMERATED;

/**
 * @summary Messaging_Party_Qualifier_unknown_party
 * @description
 *
 * The party cannot be classified as originating or terminating.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_unknown_party: _enum_for_Messaging_Party_Qualifier.unknown_party = _enum_for_Messaging_Party_Qualifier.unknown_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown_party
 * @description
 *
 * The party cannot be classified as originating or terminating.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const unknown_party: _enum_for_Messaging_Party_Qualifier.unknown_party = Messaging_Party_Qualifier_unknown_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_originating_party
 * @description
 *
 * Identities of the originating party, and the information that party provided.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_originating_party: _enum_for_Messaging_Party_Qualifier.originating_party = _enum_for_Messaging_Party_Qualifier.originating_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @description
 *
 * Identities of the originating party, and the information that party provided.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const originating_party: _enum_for_Messaging_Party_Qualifier.originating_party = Messaging_Party_Qualifier_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_terminating_party
 * @description
 *
 * Identities of the terminating party, and the information that party provided.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_terminating_party: _enum_for_Messaging_Party_Qualifier.terminating_party = _enum_for_Messaging_Party_Qualifier.terminating_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @description
 *
 * Identities of the terminating party, and the information that party provided.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`Messaging-Party-Qualifier`).
 *
 * @constant
 * @type {number}
 */
export
const terminating_party: _enum_for_Messaging_Party_Qualifier.terminating_party = Messaging_Party_Qualifier_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_associated_party
 * @description
 *
 * Identities of an associated party, and the information that party provided.
 * Used to associate a party with one element of the messaging system, for
 * example a greeting played only for some callers.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6 and annex D.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_associated_party: _enum_for_Messaging_Party_Qualifier.associated_party = _enum_for_Messaging_Party_Qualifier.associated_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associated_party
 * @description
 *
 * Identities of an associated party, and the information that party provided.
 * Used to associate a party with one element of the messaging system, for
 * example a greeting played only for some callers.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6 and annex D.
 *
 * @constant
 * @type {number}
 */
export
const associated_party: _enum_for_Messaging_Party_Qualifier.associated_party = Messaging_Party_Qualifier_associated_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Party_Qualifier: $.ASN1Decoder<Messaging_Party_Qualifier> = $._decodeEnumerated;
export const _encode_Messaging_Party_Qualifier: $.ASN1Encoder<Messaging_Party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
