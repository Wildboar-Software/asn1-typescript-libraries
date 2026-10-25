/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkProtocolProfile
 * @description
 * 
 * Network protocol profile (NPP). Optional component (context tag 18) included
 * only when the Facility information element protocol profile is "networking
 * extensions". It identifies the protocol of the service components. Omit it to
 * indicate ROSE; a receiver that finds no NPP assumes ROSE. If the receiver
 * does not recognize the NPP value, it discards the whole Facility information
 * element.
 *
 * Named values are `acse` (19) and `dse` (32). Other integers from 0 to 254 are
 * syntactically allowed. Q.932 does not expand the name `dse`. The definition
 * is an extract of ISO/IEC 11582; differences are resolved in favour of ISO/IEC
 * 11582.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.3 and Annex D, D.3.6.2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkProtocolProfile  ::=  [18] IMPLICIT INTEGER {acse(19), dse(32)}(0..254)
 * ```
 */
export
type NetworkProtocolProfile = INTEGER;

/**
 * @summary NetworkProtocolProfile_acse
 * @description
 * 
 * Service components are ACSE. Integer 19. Omit the NPP entirely to indicate
 * ROSE. ITU-T Rec. Q.932 (05/1998) Annex D, Figure D.2.
 * 
 * @constant
 * @type {number}
 */
export
const NetworkProtocolProfile_acse = 19 satisfies NetworkProtocolProfile; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_acse
 * @description
 * 
 * Service components are ACSE. Integer 19. Omit the NPP entirely to indicate
 * ROSE. ITU-T Rec. Q.932 (05/1998) Annex D, Figure D.2.
 * 
 * @constant
 * @type {number}
 */
export
const acse = NetworkProtocolProfile_acse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_dse
 * @description
 * 
 * Named profile integer 32. Q.932 does not expand the name `dse`. ITU-T Rec.
 * Q.932 (05/1998) Annex D, Figure D.2.
 * 
 * @constant
 * @type {number}
 */
export
const NetworkProtocolProfile_dse = 32 satisfies NetworkProtocolProfile; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_dse
 * @description
 * 
 * Named profile integer 32. Q.932 does not expand the name `dse`. ITU-T Rec.
 * Q.932 (05/1998) Annex D, Figure D.2.
 * 
 * @constant
 * @type {number}
 */
export
const dse = NetworkProtocolProfile_dse; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_NetworkProtocolProfile: $.ASN1Decoder<NetworkProtocolProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkProtocolProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkProtocolProfile (el: _Element): NetworkProtocolProfile {
    if (!_cached_decoder_for_NetworkProtocolProfile) { _cached_decoder_for_NetworkProtocolProfile = $._decode_implicit<NetworkProtocolProfile>(() => $._decodeInteger); }
    const value = _cached_decoder_for_NetworkProtocolProfile(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 254n) {
        throw new ASN1OverflowError("NetworkProtocolProfile violates INTEGER (0..254)");
    }
    return value;
}

let _cached_encoder_for_NetworkProtocolProfile: $.ASN1Encoder<NetworkProtocolProfile> | null = null;

/**
 * @summary Encodes a(n) NetworkProtocolProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkProtocolProfile, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkProtocolProfile (value: NetworkProtocolProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkProtocolProfile) { _cached_encoder_for_NetworkProtocolProfile = $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_NetworkProtocolProfile(value, elGetter);
}


/* eslint-enable */
