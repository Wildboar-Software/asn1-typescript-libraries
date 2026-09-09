/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ProgressIndicator_progressLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressLocation ::= ENUMERATED {
 *     user (0),
 *     privateNetServingLocal (1),
 *     publicNetServingLocal (2),
 *     transitNetwork (3),
 *     publicNetServingRemote (4),
 *     privateNetServingRemote (5),
 *     localInterface (6),
 *     internationalNetwork (7),
 *     networkBeyondInterwk (8),
 *     other (9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProgressIndicator_progressLocation {
    user = 0,
    privateNetServingLocal = 1,
    publicNetServingLocal = 2,
    transitNetwork = 3,
    publicNetServingRemote = 4,
    privateNetServingRemote = 5,
    localInterface = 6,
    internationalNetwork = 7,
    networkBeyondInterwk = 8,
    other = 9,
}

/**
 * @summary ProgressIndicator_progressLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressLocation ::= ENUMERATED {
 *     user (0),
 *     privateNetServingLocal (1),
 *     publicNetServingLocal (2),
 *     transitNetwork (3),
 *     publicNetServingRemote (4),
 *     privateNetServingRemote (5),
 *     localInterface (6),
 *     internationalNetwork (7),
 *     networkBeyondInterwk (8),
 *     other (9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProgressIndicator_progressLocation = _enum_for_ProgressIndicator_progressLocation;

/**
 * @summary ProgressIndicator_progressLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressLocation ::= ENUMERATED {
 *     user (0),
 *     privateNetServingLocal (1),
 *     publicNetServingLocal (2),
 *     transitNetwork (3),
 *     publicNetServingRemote (4),
 *     privateNetServingRemote (5),
 *     localInterface (6),
 *     internationalNetwork (7),
 *     networkBeyondInterwk (8),
 *     other (9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ProgressIndicator_progressLocation = _enum_for_ProgressIndicator_progressLocation;

/**
 * @summary ProgressIndicator_progressLocation_user
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_user: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.user; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user
 * @constant
 * @type {number}
 */
export
const user: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_privateNetServingLocal
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_privateNetServingLocal: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.privateNetServingLocal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privateNetServingLocal
 * @constant
 * @type {number}
 */
export
const privateNetServingLocal: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.privateNetServingLocal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_publicNetServingLocal
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_publicNetServingLocal: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.publicNetServingLocal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary publicNetServingLocal
 * @constant
 * @type {number}
 */
export
const publicNetServingLocal: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.publicNetServingLocal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_transitNetwork
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_transitNetwork: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.transitNetwork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transitNetwork
 * @constant
 * @type {number}
 */
export
const transitNetwork: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.transitNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_publicNetServingRemote
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_publicNetServingRemote: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.publicNetServingRemote; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary publicNetServingRemote
 * @constant
 * @type {number}
 */
export
const publicNetServingRemote: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.publicNetServingRemote; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_privateNetServingRemote
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_privateNetServingRemote: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.privateNetServingRemote; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privateNetServingRemote
 * @constant
 * @type {number}
 */
export
const privateNetServingRemote: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.privateNetServingRemote; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_localInterface
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_localInterface: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.localInterface; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localInterface
 * @constant
 * @type {number}
 */
export
const localInterface: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.localInterface; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_internationalNetwork
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_internationalNetwork: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.internationalNetwork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internationalNetwork
 * @constant
 * @type {number}
 */
export
const internationalNetwork: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.internationalNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_networkBeyondInterwk
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_networkBeyondInterwk: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.networkBeyondInterwk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkBeyondInterwk
 * @constant
 * @type {number}
 */
export
const networkBeyondInterwk: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.networkBeyondInterwk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressLocation_other
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressLocation_other: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: ProgressIndicator_progressLocation = ProgressIndicator_progressLocation.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProgressIndicator_progressLocation: $.ASN1Decoder<ProgressIndicator_progressLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProgressIndicator_progressLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProgressIndicator_progressLocation (el: _Element): ProgressIndicator_progressLocation {
    if (!_cached_decoder_for_ProgressIndicator_progressLocation) { _cached_decoder_for_ProgressIndicator_progressLocation = $._decodeEnumerated; }
    return _cached_decoder_for_ProgressIndicator_progressLocation(el);
}

let _cached_encoder_for_ProgressIndicator_progressLocation: $.ASN1Encoder<ProgressIndicator_progressLocation> | null = null;

/**
 * @summary Encodes a(n) ProgressIndicator_progressLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProgressIndicator_progressLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ProgressIndicator_progressLocation (value: ProgressIndicator_progressLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProgressIndicator_progressLocation) { _cached_encoder_for_ProgressIndicator_progressLocation = $._encodeEnumerated; }
    return _cached_encoder_for_ProgressIndicator_progressLocation(value, elGetter);
}


/* eslint-enable */
