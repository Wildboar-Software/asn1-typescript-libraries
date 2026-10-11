/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtocolVersion
 * @description
 *
 * Versions the sender supports, one bit per version. Both Init
 * request and response carry this. The highest bit set by both peers
 * is the version in force. Bits above version 3 are ignored. If no
 * bit is shared, Init `result` should be reject. Versions 1 and 2
 * are the same; a system that supports version 2 should also set
 * version 1. Conformance requires at least version 2.
 * §3.2.1.1.1, §4.4.1, comment 9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolVersion  ::=  [3] IMPLICIT BIT STRING{
 *     version-1 (0), -- This bit should always be set, but does not correspond to any Z39.50 version.
 *     version-2 (1), -- "Version 2 supported." This bit should always be set.
 *     version-3 (2)  -- "Version 3 supported."
 *     -- See comment 9
 * }
 * ```
 */
export
type ProtocolVersion = BIT_STRING;

/**
 * @summary ProtocolVersion_version_1
 * @description
 *
 * Bit 0. Always set. Does not name a Z39.50 version defined by this
 * standard. Versions 1 and 2 are the same, so a version-2 system sets
 * this bit to interoperate with peers that indicate only version 1
 * (for example ISO 10163-1991). §3.2.1.1.1, comment 9.
 *
 * @constant
 */
export
const ProtocolVersion_version_1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version_1
 * @description
 *
 * Short name for `ProtocolVersion_version_1`. Bit 0, always set.
 * Does not name a version defined here; set it with version 2 so
 * version-1-only peers can interoperate. §3.2.1.1.1, comment 9.
 *
 * @constant
 */
export
const version_1: number = ProtocolVersion_version_1; /* SHORT_NAMED_BIT */

/**
 * @summary ProtocolVersion_version_2
 * @description
 *
 * Bit 1. "Version 2 supported." Always set. This standard's
 * conformance floor is version 2. Identical in procedure to version
 * 1. §3.2.1.1.1, §4.4.1, comment 9.
 *
 * @constant
 */
export
const ProtocolVersion_version_2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary version_2
 * @description
 *
 * Short name for `ProtocolVersion_version_2`. Bit 1: version 2 is
 * supported. Always set. §3.2.1.1.1, §4.4.1, comment 9.
 *
 * @constant
 */
export
const version_2: number = ProtocolVersion_version_2; /* SHORT_NAMED_BIT */

/**
 * @summary ProtocolVersion_version_3
 * @description
 *
 * Bit 2. "Version 3 supported." Version 3 is required for
 * segmentation, `otherInfo`, Close, concurrent operations as
 * negotiated, and the other version-3 parameters in this module.
 * §3.2.1.1.1, comment 9.
 *
 * @constant
 */
export
const ProtocolVersion_version_3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary version_3
 * @description
 *
 * Short name for `ProtocolVersion_version_3`. Bit 2: version 3 is
 * supported. §3.2.1.1.1, comment 9.
 *
 * @constant
 */
export
const version_3: number = ProtocolVersion_version_3; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolVersion (el: _Element): ProtocolVersion {
    if (!_cached_decoder_for_ProtocolVersion) { _cached_decoder_for_ProtocolVersion = $._decode_implicit<ProtocolVersion>(() => $._decodeBitString); }
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
    if (!_cached_encoder_for_ProtocolVersion) { _cached_encoder_for_ProtocolVersion = $._encode_implicit(_TagClass.context, 3, () => $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER), $.BER); }
    return _cached_encoder_for_ProtocolVersion(value, elGetter);
}


/* eslint-enable */
