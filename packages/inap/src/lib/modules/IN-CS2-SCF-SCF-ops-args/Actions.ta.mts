/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Actions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Actions  ::=  ENUMERATED {play(0), playandcollect(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Actions {
    play = 0,
    playandcollect = 1,
}

/**
 * @summary Actions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Actions  ::=  ENUMERATED {play(0), playandcollect(1)}
 * ```
 * 
 * @enum {number}
 */
export
type Actions = _enum_for_Actions;

/**
 * @summary Actions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Actions  ::=  ENUMERATED {play(0), playandcollect(1)}
 * ```
 * 
 * @enum {number}
 */
export
const Actions = _enum_for_Actions;

/**
 * @summary Actions_play
 * @constant
 * @type {number}
 */
export
const Actions_play: Actions = Actions.play; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary play
 * @constant
 * @type {number}
 */
export
const play: Actions = Actions.play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Actions_playandcollect
 * @constant
 * @type {number}
 */
export
const Actions_playandcollect: Actions = Actions.playandcollect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary playandcollect
 * @constant
 * @type {number}
 */
export
const playandcollect: Actions = Actions.playandcollect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Actions: $.ASN1Decoder<Actions> = $._decodeEnumerated;

export
const _encode_Actions: $.ASN1Encoder<Actions> = $._encodeEnumerated;

/* eslint-enable */
