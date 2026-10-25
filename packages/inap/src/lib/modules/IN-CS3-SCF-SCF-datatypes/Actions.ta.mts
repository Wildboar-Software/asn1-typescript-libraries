/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const Actions: typeof _enum_for_Actions = _enum_for_Actions;

/**
 * @summary Actions_play
 * @constant
 * @type {number}
 */
export
const Actions_play: _enum_for_Actions.play = Actions.play; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary play
 * @constant
 * @type {number}
 */
export
const play: _enum_for_Actions.play = Actions.play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Actions_playandcollect
 * @constant
 * @type {number}
 */
export
const Actions_playandcollect: _enum_for_Actions.playandcollect = Actions.playandcollect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary playandcollect
 * @constant
 * @type {number}
 */
export
const playandcollect: _enum_for_Actions.playandcollect = Actions.playandcollect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Actions(el: _Element): Actions {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Actions.play: return Actions.play;
        case Actions.playandcollect: return Actions.playandcollect;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Actions.",
                el,
            );
    }
}

export
const _encode_Actions: $.ASN1Encoder<Actions> = $._encodeEnumerated as $.ASN1Encoder<Actions>;

/* eslint-enable */
