/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyInformation_partyIdentity_party_Validity
 * @description
 * 
 * How far the operator stands behind a party identity. The module defines
 * trusted, untrusted, and operator-added. It does not say when the component
 * has to be sent.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
enum _enum_for_PartyInformation_partyIdentity_party_Validity {
    /**
     * The operator has assured the party identity.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    trusted = 0,
    /**
     * The operator does not assure the party identity.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    untrusted = 1,
    /**
     * The operator added the party identity, for example the roaming number.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    operator_added = 2,
}

/**
 * @summary PartyInformation_partyIdentity_party_Validity
 * @description
 * 
 * How far the operator stands behind a party identity. The module defines
 * trusted, untrusted, and operator-added. It does not say when the component
 * has to be sent.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
 * @description
 *
 * The operator has assured the party identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_trusted: _enum_for_PartyInformation_partyIdentity_party_Validity.trusted = _enum_for_PartyInformation_partyIdentity_party_Validity.trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @description
 *
 * The operator has assured the party identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const trusted: _enum_for_PartyInformation_partyIdentity_party_Validity.trusted = PartyInformation_partyIdentity_party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_untrusted
 * @description
 *
 * The operator does not assure the party identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_untrusted: _enum_for_PartyInformation_partyIdentity_party_Validity.untrusted = _enum_for_PartyInformation_partyIdentity_party_Validity.untrusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @description
 *
 * The operator does not assure the party identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const untrusted: _enum_for_PartyInformation_partyIdentity_party_Validity.untrusted = PartyInformation_partyIdentity_party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_operator_added
 * @description
 *
 * The operator added the party identity, for example the roaming number.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_operator_added: _enum_for_PartyInformation_partyIdentity_party_Validity.operator_added = _enum_for_PartyInformation_partyIdentity_party_Validity.operator_added; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operator_added
 * @description
 *
 * The operator added the party identity, for example the roaming number.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const operator_added: _enum_for_PartyInformation_partyIdentity_party_Validity.operator_added = PartyInformation_partyIdentity_party_Validity_operator_added; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_partyIdentity_party_Validity: $.ASN1Decoder<PartyInformation_partyIdentity_party_Validity> = $._decodeEnumerated;
export const _encode_PartyInformation_partyIdentity_party_Validity: $.ASN1Encoder<PartyInformation_partyIdentity_party_Validity> = $._encodeEnumerated;


/* eslint-enable */
