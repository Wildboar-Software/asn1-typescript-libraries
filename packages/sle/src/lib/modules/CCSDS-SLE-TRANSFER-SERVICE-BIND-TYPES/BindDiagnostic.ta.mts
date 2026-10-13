/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BindDiagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BindDiagnostic                   ::=     INTEGER
 * { accessDenied                      (0)
 * , serviceTypeNotSupported           (1)
 * , versionNotSupported               (2)
 * , noSuchServiceInstance             (3)
 * , alreadyBound                      (4)
 * , siNotAccessibleToThisInitiator    (5)
 * , inconsistentServiceType           (6)
 * , invalidTime                       (7)
 * , outOfService                      (8)
 * , otherReason                       (127)
 * }
 * ```
 */
export
type BindDiagnostic = INTEGER;

/**
 * @summary BindDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_accessDenied: BindDiagnostic = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: BindDiagnostic = BindDiagnostic_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_serviceTypeNotSupported: BindDiagnostic = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @constant
 * @type {number}
 */
export
const serviceTypeNotSupported: BindDiagnostic = BindDiagnostic_serviceTypeNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_versionNotSupported: BindDiagnostic = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @constant
 * @type {number}
 */
export
const versionNotSupported: BindDiagnostic = BindDiagnostic_versionNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_noSuchServiceInstance: BindDiagnostic = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @constant
 * @type {number}
 */
export
const noSuchServiceInstance: BindDiagnostic = BindDiagnostic_noSuchServiceInstance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_alreadyBound: BindDiagnostic = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @constant
 * @type {number}
 */
export
const alreadyBound: BindDiagnostic = BindDiagnostic_alreadyBound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_siNotAccessibleToThisInitiator: BindDiagnostic = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @constant
 * @type {number}
 */
export
const siNotAccessibleToThisInitiator: BindDiagnostic = BindDiagnostic_siNotAccessibleToThisInitiator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_inconsistentServiceType: BindDiagnostic = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @constant
 * @type {number}
 */
export
const inconsistentServiceType: BindDiagnostic = BindDiagnostic_inconsistentServiceType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_invalidTime: BindDiagnostic = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @constant
 * @type {number}
 */
export
const invalidTime: BindDiagnostic = BindDiagnostic_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_outOfService: BindDiagnostic = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: BindDiagnostic = BindDiagnostic_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_otherReason: BindDiagnostic = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const otherReason: BindDiagnostic = BindDiagnostic_otherReason; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_BindDiagnostic: $.ASN1Decoder<BindDiagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindDiagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BindDiagnostic (el: _Element): BindDiagnostic {
    if (!_cached_decoder_for_BindDiagnostic) { _cached_decoder_for_BindDiagnostic = $._decodeInteger; }
    return _cached_decoder_for_BindDiagnostic(el);
}

let _cached_encoder_for_BindDiagnostic: $.ASN1Encoder<BindDiagnostic> | null = null;

/**
 * @summary Encodes a(n) BindDiagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindDiagnostic, encoded as an ASN.1 Element.
 */
export
function _encode_BindDiagnostic (value: BindDiagnostic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BindDiagnostic) { _cached_encoder_for_BindDiagnostic = $._encodeInteger; }
    return _cached_encoder_for_BindDiagnostic(value, elGetter);
}


/* eslint-enable */
