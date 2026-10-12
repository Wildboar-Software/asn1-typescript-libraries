/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Party_Qualifier {
    unknown_party = 0,
    originating_party = 1,
    terminating_party = 2,
    associated_party = 3,
}

/**
 * @summary Messaging_Party_Qualifier
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_unknown_party: Messaging_Party_Qualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown_party
 * @constant
 * @type {number}
 */
export
const unknown_party: Messaging_Party_Qualifier = Messaging_Party_Qualifier_unknown_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_originating_party
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_originating_party: Messaging_Party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @constant
 * @type {number}
 */
export
const originating_party: Messaging_Party_Qualifier = Messaging_Party_Qualifier_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_terminating_party
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_terminating_party: Messaging_Party_Qualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @constant
 * @type {number}
 */
export
const terminating_party: Messaging_Party_Qualifier = Messaging_Party_Qualifier_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Qualifier_associated_party
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Qualifier_associated_party: Messaging_Party_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associated_party
 * @constant
 * @type {number}
 */
export
const associated_party: Messaging_Party_Qualifier = Messaging_Party_Qualifier_associated_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Party_Qualifier: $.ASN1Decoder<Messaging_Party_Qualifier> = $._decodeEnumerated;
export const _encode_Messaging_Party_Qualifier: $.ASN1Encoder<Messaging_Party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
