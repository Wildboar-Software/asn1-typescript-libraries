/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargedParty
 * @description
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
 * @constant
 * @type {number}
 */
export
const ChargedParty_sender: ChargedParty = ChargedParty.sender; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sender
 * @constant
 * @type {number}
 */
export
const sender: ChargedParty = ChargedParty.sender; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_recipient
 * @constant
 * @type {number}
 */
export
const ChargedParty_recipient: ChargedParty = ChargedParty.recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient
 * @constant
 * @type {number}
 */
export
const recipient: ChargedParty = ChargedParty.recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_both
 * @constant
 * @type {number}
 */
export
const ChargedParty_both: ChargedParty = ChargedParty.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: ChargedParty = ChargedParty.both; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_neither
 * @constant
 * @type {number}
 */
export
const ChargedParty_neither: ChargedParty = ChargedParty.neither; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary neither
 * @constant
 * @type {number}
 */
export
const neither: ChargedParty = ChargedParty.neither; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedParty_notspecifiedbyVASP
 * @constant
 * @type {number}
 */
export
const ChargedParty_notspecifiedbyVASP: ChargedParty = ChargedParty.notspecifiedbyVASP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notspecifiedbyVASP
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
