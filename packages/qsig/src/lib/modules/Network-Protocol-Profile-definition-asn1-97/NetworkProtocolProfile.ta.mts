/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NetworkProtocolProfile
 * @description
 *
 * X.680 edition in ECMA-165 §11.3.3 Table 29, object identifier
 * `network-protocol-profile-definition-asn1-97(19)`. Selects the service APDUs
 * in octets 4 onwards of a Facility information element whose protocol profile
 * is Networking Extensions (ECMA-165 §11.3.3, Table 30). `acse` (19) selects
 * ACSE; `dse` (32) selects DSE. If this element is absent, the service APDUs
 * are ROSE (§11.3.3 NOTE 3, §7.1.2.3). Table 29 assigns no ROSE value. An
 * incorrectly coded profile causes the whole Facility information element to be
 * discarded (§7.1.2.3). Any other profile value causes the Coordination
 * Function to discard the APDUs (§8.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkProtocolProfile  ::=  [18] IMPLICIT INTEGER {
 *     acse(19),
 *     dse(32)
 * } (0..254)
 * ```
 */
export
type NetworkProtocolProfile = INTEGER;

/**
 * @summary NetworkProtocolProfile_acse
 * @description
 *
 * Service APDUs in this Facility information element are ACSE APDUs (ECMA-165
 * §11.3.3, §8.1.2, §11.3.3.5). Value 19.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const NetworkProtocolProfile_acse: 19 = 19 satisfies NetworkProtocolProfile; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary acse
 * @description Alias of {@link NetworkProtocolProfile_acse}.
 * @constant
 * @type {number}
 */
export
const acse: 19 = NetworkProtocolProfile_acse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_dse
 * @description
 *
 * Service APDUs in this Facility information element are DSE APDUs (ECMA-165
 * §11.3.3, §8.1.2, §11.3.3.3). Value 32.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const NetworkProtocolProfile_dse: 32 = 32 satisfies NetworkProtocolProfile; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary dse
 * @description Alias of {@link NetworkProtocolProfile_dse}.
 * @constant
 * @type {number}
 */
export
const dse: 32 = NetworkProtocolProfile_dse; /* SHORT_NAMED_INTEGER_VALUE */

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
    const _value = _cached_decoder_for_NetworkProtocolProfile(el);
    if ((typeof _value === "bigint" ? (_value < 0n || _value > 254n) : (_value < 0 || _value > 254))) {
        throw new ASN1OverflowError("NetworkProtocolProfile violates INTEGER constraint");
    }
    return _value;
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
