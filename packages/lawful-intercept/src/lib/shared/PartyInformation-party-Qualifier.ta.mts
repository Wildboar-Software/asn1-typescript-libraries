/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party described by one `PartyInformation`. For a basic call the
 * party is originating or terminating. A forwarded call also uses the
 * forwarded-to role. Clause A.3.2.3 says which identities are encapsulated in
 * which role. The module names a GPRS target and does not define that value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.2.3, clause
 * D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
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
enum _enum_for_PartyInformation_party_Qualifier {
    /**
     * Identities of the originating party and all information that party
     * provided. Also the redirecting party when a forwarded call reaches the
     * target. If the call to the target was previously forwarded, parameters of
     * the redirecting parties are placed in the originating-party information.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    originating_Party = 0,
    /**
     * Identities of the terminating party and all information that party
     * provided. If the call is forwarded at the target's access, parameters of
     * the redirecting party, which is the target, are placed in the
     * terminating-party information.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    terminating_Party = 1,
    /**
     * Identities of the forwarded-to party and of parties beyond it, and the
     * information those parties provided, including the call-forwarding reason.
     * Parameters related to the forwarded-to party or beyond are placed here,
     * including the supplementary-service information that carries the
     * forwarded-to address and the redirection information.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    forwarded_to_Party = 2,
    /**
     * The module names this qualifier and does not define it. Annex B.5 maps
     * the observed MSISDN, IMSI, and IMEI to `PartyInformation` and does not
     * say which qualifier to use.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRS_Target = 3,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party described by one `PartyInformation`. For a basic call the
 * party is originating or terminating. A forwarded call also uses the
 * forwarded-to role. Clause A.3.2.3 says which identities are encapsulated in
 * which role. The module names a GPRS target and does not define that value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.2.3, clause
 * D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
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
 * Identities of the originating party and all information that party provided.
 * Also the redirecting party when a forwarded call reaches the target. If the
 * call to the target was previously forwarded, parameters of the redirecting
 * parties are placed in the originating-party information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * Identities of the originating party and all information that party provided.
 * Also the redirecting party when a forwarded call reaches the target. If the
 * call to the target was previously forwarded, parameters of the redirecting
 * parties are placed in the originating-party information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * Identities of the terminating party and all information that party provided.
 * If the call is forwarded at the target's access, parameters of the
 * redirecting party, which is the target, are placed in the terminating-party
 * information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * Identities of the terminating party and all information that party provided.
 * If the call is forwarded at the target's access, parameters of the
 * redirecting party, which is the target, are placed in the terminating-party
 * information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * Identities of the forwarded-to party and of parties beyond it, and the
 * information those parties provided, including the call-forwarding reason.
 * Parameters related to the forwarded-to party or beyond are placed here,
 * including the supplementary-service information that carries the forwarded-to
 * address and the redirection information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * Identities of the forwarded-to party and of parties beyond it, and the
 * information those parties provided, including the call-forwarding reason.
 * Parameters related to the forwarded-to party or beyond are placed here,
 * including the supplementary-service information that carries the forwarded-to
 * address and the redirection information.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.5.
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
 * The module names this qualifier and does not define it. Annex B.5 maps the
 * observed MSISDN, IMSI, and IMEI to `PartyInformation` and does not say which
 * qualifier to use.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
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
 * The module names this qualifier and does not define it. Annex B.5 maps the
 * observed MSISDN, IMSI, and IMEI to `PartyInformation` and does not say which
 * qualifier to use.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
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
