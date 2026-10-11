/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RDSAction {
    reservePort = 1,
    releasePort = 2,
}

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction_reservePort
 * @constant
 * @type {number}
 */
export
const RDSAction_reservePort: RDSAction = RDSAction.reservePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservePort
 * @constant
 * @type {number}
 */
export
const reservePort: RDSAction = RDSAction.reservePort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RDSAction_releasePort
 * @constant
 * @type {number}
 */
export
const RDSAction_releasePort: RDSAction = RDSAction.releasePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releasePort
 * @constant
 * @type {number}
 */
export
const releasePort: RDSAction = RDSAction.releasePort; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RDSAction: $.ASN1Decoder<RDSAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDSAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RDSAction (el: _Element): RDSAction {
    if (!_cached_decoder_for_RDSAction) { _cached_decoder_for_RDSAction = $._decodeEnumerated; }
    return _cached_decoder_for_RDSAction(el);
}

let _cached_encoder_for_RDSAction: $.ASN1Encoder<RDSAction> | null = null;

/**
 * @summary Encodes a(n) RDSAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDSAction, encoded as an ASN.1 Element.
 */
export
function _encode_RDSAction (value: RDSAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RDSAction) { _cached_encoder_for_RDSAction = $._encodeEnumerated; }
    return _cached_encoder_for_RDSAction(value, elGetter);
}


/* eslint-enable */
