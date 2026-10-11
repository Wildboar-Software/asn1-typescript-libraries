/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGMembershipIndication {
    notCSGMember = 1,
    cSGMember = 2,
}

/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGMembershipIndication = _enum_for_CSGMembershipIndication;

/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGMembershipIndication = _enum_for_CSGMembershipIndication;

/**
 * @summary CSGMembershipIndication_notCSGMember
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_notCSGMember: CSGMembershipIndication = CSGMembershipIndication.notCSGMember; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notCSGMember
 * @constant
 * @type {number}
 */
export
const notCSGMember: CSGMembershipIndication = CSGMembershipIndication.notCSGMember; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGMembershipIndication_cSGMember
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_cSGMember: CSGMembershipIndication = CSGMembershipIndication.cSGMember; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSGMember
 * @constant
 * @type {number}
 */
export
const cSGMember: CSGMembershipIndication = CSGMembershipIndication.cSGMember; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CSGMembershipIndication: $.ASN1Decoder<CSGMembershipIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSGMembershipIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSGMembershipIndication (el: _Element): CSGMembershipIndication {
    if (!_cached_decoder_for_CSGMembershipIndication) { _cached_decoder_for_CSGMembershipIndication = $._decodeEnumerated; }
    return _cached_decoder_for_CSGMembershipIndication(el);
}

let _cached_encoder_for_CSGMembershipIndication: $.ASN1Encoder<CSGMembershipIndication> | null = null;

/**
 * @summary Encodes a(n) CSGMembershipIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGMembershipIndication, encoded as an ASN.1 Element.
 */
export
function _encode_CSGMembershipIndication (value: CSGMembershipIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSGMembershipIndication) { _cached_encoder_for_CSGMembershipIndication = $._encodeEnumerated; }
    return _cached_encoder_for_CSGMembershipIndication(value, elGetter);
}


/* eslint-enable */
