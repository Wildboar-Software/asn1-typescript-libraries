/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargedParty
 * @description
 * 
 * Party expected to be charged for an MM when a VASP supplies the
 * indication. `sender` is the sending party, `recipient` the receiving
 * party, `both` both parties, and `neither` neither party.
 * `notspecifiedbyVASP` means the VASP did not specify a party. Clause
 * 5.1.4 also allows a third party; that party's address is not a value of
 * this enumeration.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1.4 and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedParty  ::=  ENUMERATED {
 *    sender                ( 0 ),
 *    recipient             ( 1 ),
 *    both                  ( 2 ),
 *    neither               ( 3 ),
 *    notspecifiedbyVASP    ( 99 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargedParty {
    sender = 0,
    recipient = 1,
    both = 2,
    neither = 3,
    notspecifiedbyVASP = 99,
}

/**
 * @summary ChargedParty
 * @description
 * 
 * Party expected to be charged for an MM when a VASP supplies the
 * indication. `sender` is the sending party, `recipient` the receiving
 * party, `both` both parties, and `neither` neither party.
 * `notspecifiedbyVASP` means the VASP did not specify a party. Clause
 * 5.1.4 also allows a third party; that party's address is not a value of
 * this enumeration.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1.4 and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedParty  ::=  ENUMERATED {
 *    sender                ( 0 ),
 *    recipient             ( 1 ),
 *    both                  ( 2 ),
 *    neither               ( 3 ),
 *    notspecifiedbyVASP    ( 99 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChargedParty = _enum_for_ChargedParty;

/**
 * @summary ChargedParty
 * @description
 * 
 * Party expected to be charged for an MM when a VASP supplies the
 * indication. `sender` is the sending party, `recipient` the receiving
 * party, `both` both parties, and `neither` neither party.
 * `notspecifiedbyVASP` means the VASP did not specify a party. Clause
 * 5.1.4 also allows a third party; that party's address is not a value of
 * this enumeration.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1.4 and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedParty  ::=  ENUMERATED {
 *    sender                ( 0 ),
 *    recipient             ( 1 ),
 *    both                  ( 2 ),
 *    neither               ( 3 ),
 *    notspecifiedbyVASP    ( 99 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChargedParty = _enum_for_ChargedParty;

/**
 * @summary ChargedParty_sender
 * @description
 *
 * The sending party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargedParty_sender: ChargedParty = ChargedParty.sender; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sender
 * @description
 *
 * The sending party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const sender: ChargedParty = ChargedParty.sender; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_recipient
 * @description
 *
 * The receiving party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargedParty_recipient: ChargedParty = ChargedParty.recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient
 * @description
 *
 * The receiving party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const recipient: ChargedParty = ChargedParty.recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_both
 * @description
 *
 * Both the sending and the receiving parties are expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargedParty_both: ChargedParty = ChargedParty.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @description
 *
 * Both the sending and the receiving parties are expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const both: ChargedParty = ChargedParty.both; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_neither
 * @description
 *
 * Neither the sending nor the receiving party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargedParty_neither: ChargedParty = ChargedParty.neither; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary neither
 * @description
 *
 * Neither the sending nor the receiving party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const neither: ChargedParty = ChargedParty.neither; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_notspecifiedbyVASP
 * @description
 *
 * The VASP did not specify which party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 5.1.4.
 *
 * @constant
 * @type {number}
 */
export
const ChargedParty_notspecifiedbyVASP: ChargedParty = ChargedParty.notspecifiedbyVASP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notspecifiedbyVASP
 * @description
 *
 * The VASP did not specify which party is expected to be charged.
 *
 * 3GPP TS 32.270 V19.0.0 clause 5.1.4.
 *
 * @constant
 * @type {number}
 */
export
const notspecifiedbyVASP: ChargedParty = ChargedParty.notspecifiedbyVASP; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargedParty: $.ASN1Decoder<ChargedParty> = $._decodeEnumerated;

export
const _encode_ChargedParty: $.ASN1Encoder<ChargedParty> = $._encodeEnumerated;

/* eslint-enable */
