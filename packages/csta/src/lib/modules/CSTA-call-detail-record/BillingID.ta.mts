/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary BillingID
 * @description
 *
 * Type of charging recorded in a CDR. ECMA-269 §27.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingID  ::=  ENUMERATED
 * {     normalCharging                 (0),
 *     reverseCharging             (1),
 *     creditCardCharging             (2),
 *     callForwarding                 (3),
 *     callDeflection                 (4),
 *     callTransfer                 (5),
 *     other                     (6) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BillingID {
    normalCharging = 0,
    reverseCharging = 1,
    creditCardCharging = 2,
    callForwarding = 3,
    callDeflection = 4,
    callTransfer = 5,
    other = 6,
}

/**
 * @summary BillingID
 * @description
 *
 * Type of charging recorded in a CDR. ECMA-269 §27.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingID  ::=  ENUMERATED
 * {     normalCharging                 (0),
 *     reverseCharging             (1),
 *     creditCardCharging             (2),
 *     callForwarding                 (3),
 *     callDeflection                 (4),
 *     callTransfer                 (5),
 *     other                     (6) }
 * ```
 * 
 * @enum {number}
 */
export
type BillingID = _enum_for_BillingID;

/**
 * @summary BillingID
 * @description
 *
 * Type of charging recorded in a CDR. ECMA-269 §27.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingID  ::=  ENUMERATED
 * {     normalCharging                 (0),
 *     reverseCharging             (1),
 *     creditCardCharging             (2),
 *     callForwarding                 (3),
 *     callDeflection                 (4),
 *     callTransfer                 (5),
 *     other                     (6) }
 * ```
 * 
 * @enum {number}
 */
export
const BillingID: typeof _enum_for_BillingID = _enum_for_BillingID;

/**
 * @summary BillingID_normalCharging
 * @description
 *
 * Normal charging. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_normalCharging: _enum_for_BillingID.normalCharging = BillingID.normalCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalCharging
 * @constant
 * @type {number}
 */
export
const normalCharging: _enum_for_BillingID.normalCharging = BillingID.normalCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_reverseCharging
 * @description
 *
 * Reverse charging. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_reverseCharging: _enum_for_BillingID.reverseCharging = BillingID.reverseCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reverseCharging
 * @constant
 * @type {number}
 */
export
const reverseCharging: _enum_for_BillingID.reverseCharging = BillingID.reverseCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_creditCardCharging
 * @description
 *
 * Credit-card charging. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_creditCardCharging: _enum_for_BillingID.creditCardCharging = BillingID.creditCardCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditCardCharging
 * @constant
 * @type {number}
 */
export
const creditCardCharging: _enum_for_BillingID.creditCardCharging = BillingID.creditCardCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_callForwarding
 * @description
 *
 * Charging associated with call forwarding. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_callForwarding: _enum_for_BillingID.callForwarding = BillingID.callForwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwarding
 * @constant
 * @type {number}
 */
export
const callForwarding: _enum_for_BillingID.callForwarding = BillingID.callForwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_callDeflection
 * @description
 *
 * Charging associated with call deflection. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_callDeflection: _enum_for_BillingID.callDeflection = BillingID.callDeflection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeflection
 * @constant
 * @type {number}
 */
export
const callDeflection: _enum_for_BillingID.callDeflection = BillingID.callDeflection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_callTransfer
 * @description
 *
 * Charging associated with call transfer. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_callTransfer: _enum_for_BillingID.callTransfer = BillingID.callTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTransfer
 * @constant
 * @type {number}
 */
export
const callTransfer: _enum_for_BillingID.callTransfer = BillingID.callTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BillingID_other
 * @description
 *
 * Other charging type. ECMA-269 §27.1.2.
 *
 * @constant
 * @type {number}
 */
export
const BillingID_other: _enum_for_BillingID.other = BillingID.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_BillingID.other = BillingID.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BillingID: $.ASN1Decoder<BillingID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BillingID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BillingID (el: _Element): BillingID {
    if (!_cached_decoder_for_BillingID) { _cached_decoder_for_BillingID = $._decodeEnumerated; }
    return _cached_decoder_for_BillingID(el);
}

let _cached_encoder_for_BillingID: $.ASN1Encoder<BillingID> | null = null;

/**
 * @summary Encodes a(n) BillingID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BillingID, encoded as an ASN.1 Element.
 */
export
function _encode_BillingID (value: BillingID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BillingID) { _cached_encoder_for_BillingID = $._encodeEnumerated; }
    return _cached_encoder_for_BillingID(value, elGetter);
}


/* eslint-enable */
