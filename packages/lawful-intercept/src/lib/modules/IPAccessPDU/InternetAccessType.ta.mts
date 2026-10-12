/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_InternetAccessType {
    undefined = 0,
    dialUp = 1,
    xDSL = 2,
    cableModem = 3,
    lAN = 4,
    wirelessLAN = 5,
    fTTx = 6,
    wIMAX_HIPERMAN = 7,
    satellite = 8,
    wireless_other = 9,
}

/**
 * @summary InternetAccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternetAccessType  ::=  ENUMERATED
 * {
 *     undefined(0),
 *     dialUp(1),
 *         -- IAS via DialUp access
 *     xDSL(2),
 *         -- IAS via DSL access
 *     cableModem(3),
 *         -- IAS via Cable access
 *     lAN(4),
 *         -- IAS via LAN access
 *     ...,
 *     wirelessLAN(5),
 *         -- IAS via Wireless LAN access
 *     fTTx(6),
 *         -- IAS via Fiber access
 *     wIMAX-HIPERMAN(7),
 *         -- IAS via WIMAX/HIPERMAN (fixed access)
 *     satellite(8),
 *         -- IAS via Satellite access
 *         -- (when it is not covered by any 3GPP or ETSI mobile Lawful Interception specifications)
 *     wireless-other(9)
 *         -- IAS via other type of Wireless access
 *         -- (when it is not covered by any 3GPP or ETSI mobile Lawful Interception specifications)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InternetAccessType = _enum_for_InternetAccessType | ENUMERATED;

/**
 * @summary InternetAccessType_undefined
 * @constant
 * @type {number}
 */
export
const InternetAccessType_undefined: InternetAccessType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: InternetAccessType = InternetAccessType_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_dialUp
 * @constant
 * @type {number}
 */
export
const InternetAccessType_dialUp: InternetAccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialUp
 * @constant
 * @type {number}
 */
export
const dialUp: InternetAccessType = InternetAccessType_dialUp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_xDSL
 * @constant
 * @type {number}
 */
export
const InternetAccessType_xDSL: InternetAccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xDSL
 * @constant
 * @type {number}
 */
export
const xDSL: InternetAccessType = InternetAccessType_xDSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_cableModem
 * @constant
 * @type {number}
 */
export
const InternetAccessType_cableModem: InternetAccessType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cableModem
 * @constant
 * @type {number}
 */
export
const cableModem: InternetAccessType = InternetAccessType_cableModem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_lAN
 * @constant
 * @type {number}
 */
export
const InternetAccessType_lAN: InternetAccessType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lAN
 * @constant
 * @type {number}
 */
export
const lAN: InternetAccessType = InternetAccessType_lAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wirelessLAN
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wirelessLAN: InternetAccessType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelessLAN
 * @constant
 * @type {number}
 */
export
const wirelessLAN: InternetAccessType = InternetAccessType_wirelessLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_fTTx
 * @constant
 * @type {number}
 */
export
const InternetAccessType_fTTx: InternetAccessType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fTTx
 * @constant
 * @type {number}
 */
export
const fTTx: InternetAccessType = InternetAccessType_fTTx; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wIMAX_HIPERMAN
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wIMAX_HIPERMAN: InternetAccessType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wIMAX_HIPERMAN
 * @constant
 * @type {number}
 */
export
const wIMAX_HIPERMAN: InternetAccessType = InternetAccessType_wIMAX_HIPERMAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_satellite
 * @constant
 * @type {number}
 */
export
const InternetAccessType_satellite: InternetAccessType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary satellite
 * @constant
 * @type {number}
 */
export
const satellite: InternetAccessType = InternetAccessType_satellite; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wireless_other
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wireless_other: InternetAccessType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wireless_other
 * @constant
 * @type {number}
 */
export
const wireless_other: InternetAccessType = InternetAccessType_wireless_other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InternetAccessType: $.ASN1Decoder<InternetAccessType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternetAccessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InternetAccessType (el: _Element): InternetAccessType {
    if (!_cached_decoder_for_InternetAccessType) { _cached_decoder_for_InternetAccessType = $._decodeEnumerated; }
    return _cached_decoder_for_InternetAccessType(el);
}

let _cached_encoder_for_InternetAccessType: $.ASN1Encoder<InternetAccessType> | null = null;

/**
 * @summary Encodes a(n) InternetAccessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternetAccessType, encoded as an ASN.1 Element.
 */
export
function _encode_InternetAccessType (value: InternetAccessType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InternetAccessType) { _cached_encoder_for_InternetAccessType = $._encodeEnumerated; }
    return _cached_encoder_for_InternetAccessType(value, elGetter);
}


/* eslint-enable */
