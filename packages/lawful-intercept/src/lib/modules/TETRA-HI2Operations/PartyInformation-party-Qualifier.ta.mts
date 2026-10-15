/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    /**
     * Identities of the originating party and the information that party
     * provided. Also the redirecting party, when a forwarded call reaches the
     * target.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    originating_Party = 0,
    /**
     * Identities of the terminating party and the information that party
     * provided. When the target forwards the call, the target's redirecting
     * information is placed here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    terminating_Party = 1,
    /**
     * Identities of the forwarded-to party and of parties beyond it, including
     * the information those parties provided and the call-forwarding reason.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    forwarded_to_Party = 2,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRS_Target = 3,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party described by `PartyInformation`. The originating role also
 * carries redirecting-party information when a forwarded call reaches the
 * target. An extension marker follows the named roles.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
 *     originating-Party(0),
 *     -- In this case, the partyInformation parameter provides the identities related to
 *     -- the originating party and all information provided by this party.
 *     -- This parameter provides also all the information concerning the redirecting
 *     -- party when a forwarded call reaches a target.
 *     terminating-Party(1),
 *     -- In this case, the partyInformation parameter provides the identities related to
 *     -- the terminating party and all information provided by this party.
 *     forwarded-to-Party(2),
 *     -- In this case, the partyInformation parameter provides the identities related to
 *     -- the forwarded to party and parties beyond this one and all information
 *     -- provided by this parties, including the call forwarding reason.
 *     gPRS-Target(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_originating_Party
 * @description
 *
 * Identities of the originating party and the information that party provided.
 * Also the redirecting party, when a forwarded call reaches the target.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_originating_Party: PartyInformation_party_Qualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Party
 * @description
 *
 * Identities of the originating party and the information that party provided.
 * Also the redirecting party, when a forwarded call reaches the target.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const originating_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_originating_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_terminating_Party
 * @description
 *
 * Identities of the terminating party and the information that party provided.
 * When the target forwards the call, the target's redirecting information is
 * placed here.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_terminating_Party: PartyInformation_party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Party
 * @description
 *
 * Identities of the terminating party and the information that party provided.
 * When the target forwards the call, the target's redirecting information is
 * placed here.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const terminating_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_terminating_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_forwarded_to_Party
 * @description
 *
 * Identities of the forwarded-to party and of parties beyond it, including the
 * information those parties provided and the call-forwarding reason.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_forwarded_to_Party: PartyInformation_party_Qualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_Party
 * @description
 *
 * Identities of the forwarded-to party and of parties beyond it, including the
 * information those parties provided and the call-forwarding reason.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const forwarded_to_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_forwarded_to_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_gPRS_Target
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_gPRS_Target: PartyInformation_party_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Target
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRS_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_gPRS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
