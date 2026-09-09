/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_switchingSubDomainCCIEType ::= ENUMERATED {
 *     isdn (0),
 *     atm (1),
 *     isoEthernet (2),
 *     rsvp (3),
 *     other (4),
 *     sip (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType {
    isdn = 0,
    atm = 1,
    isoEthernet = 2,
    rsvp = 3,
    other = 4,
    sip = 5,
}

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_switchingSubDomainCCIEType ::= ENUMERATED {
 *     isdn (0),
 *     atm (1),
 *     isoEthernet (2),
 *     rsvp (3),
 *     other (4),
 *     sip (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaCallCharacteristics_switchingSubDomainCCIEType = _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType;

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_switchingSubDomainCCIEType ::= ENUMERATED {
 *     isdn (0),
 *     atm (1),
 *     isoEthernet (2),
 *     rsvp (3),
 *     other (4),
 *     sip (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType = _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType;

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_isdn
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_isdn: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.isdn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdn
 * @constant
 * @type {number}
 */
export
const isdn: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.isdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_atm
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_atm: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.atm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary atm
 * @constant
 * @type {number}
 */
export
const atm: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.atm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_isoEthernet
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_isoEthernet: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.isoEthernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isoEthernet
 * @constant
 * @type {number}
 */
export
const isoEthernet: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.isoEthernet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_rsvp
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_rsvp: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.rsvp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rsvp
 * @constant
 * @type {number}
 */
export
const rsvp: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.rsvp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_other
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_other: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_switchingSubDomainCCIEType_sip
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_switchingSubDomainCCIEType_sip: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.sip; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sip
 * @constant
 * @type {number}
 */
export
const sip: MediaCallCharacteristics_switchingSubDomainCCIEType = MediaCallCharacteristics_switchingSubDomainCCIEType.sip; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType: $.ASN1Decoder<MediaCallCharacteristics_switchingSubDomainCCIEType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaCallCharacteristics_switchingSubDomainCCIEType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaCallCharacteristics_switchingSubDomainCCIEType (el: _Element): MediaCallCharacteristics_switchingSubDomainCCIEType {
    if (!_cached_decoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType) { _cached_decoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType = $._decodeEnumerated; }
    return _cached_decoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType(el);
}

let _cached_encoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType: $.ASN1Encoder<MediaCallCharacteristics_switchingSubDomainCCIEType> | null = null;

/**
 * @summary Encodes a(n) MediaCallCharacteristics_switchingSubDomainCCIEType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaCallCharacteristics_switchingSubDomainCCIEType, encoded as an ASN.1 Element.
 */
export
function _encode_MediaCallCharacteristics_switchingSubDomainCCIEType (value: MediaCallCharacteristics_switchingSubDomainCCIEType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType) { _cached_encoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType = $._encodeEnumerated; }
    return _cached_encoder_for_MediaCallCharacteristics_switchingSubDomainCCIEType(value, elGetter);
}


/* eslint-enable */
