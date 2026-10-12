/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProtocolVersion {
    v3 = 3,
    v4 = 4,
}

/**
 * @summary ProtocolVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {
 *     -- Versions IO1 and IO2 do not support protocol versioning.
 *     v3(3), -- Version supporting PacketCable Electronic Surveillance
 *     -- Specification I03
 *     v4(4), -- Version supporting PacketCable Electronic Surveillance
 *     -- Specification I04
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProtocolVersion = _enum_for_ProtocolVersion | ENUMERATED;

/**
 * @summary ProtocolVersion_v3
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v3: ProtocolVersion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @constant
 * @type {number}
 */
export
const v3: ProtocolVersion = ProtocolVersion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolVersion_v4
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v4: ProtocolVersion = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v4
 * @constant
 * @type {number}
 */
export
const v4: ProtocolVersion = ProtocolVersion_v4; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolVersion (el: _Element): ProtocolVersion {
    if (!_cached_decoder_for_ProtocolVersion) { _cached_decoder_for_ProtocolVersion = $._decodeEnumerated; }
    return _cached_decoder_for_ProtocolVersion(el);
}

let _cached_encoder_for_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> | null = null;

/**
 * @summary Encodes a(n) ProtocolVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersion, encoded as an ASN.1 Element.
 */
export
function _encode_ProtocolVersion (value: ProtocolVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtocolVersion) { _cached_encoder_for_ProtocolVersion = $._encodeEnumerated; }
    return _cached_encoder_for_ProtocolVersion(value, elGetter);
}


/* eslint-enable */
