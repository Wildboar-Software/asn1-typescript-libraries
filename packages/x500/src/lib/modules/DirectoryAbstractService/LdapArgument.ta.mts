/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    LdapArgumentData,
    _decode_LdapArgumentData,
    _encode_LdapArgumentData,
} from "../DirectoryAbstractService/LdapArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary LdapArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LdapArgument  ::=  OPTIONALLY-PROTECTED-SEQ { LdapArgumentData }
 * ```
 */
export type LdapArgument = OPTIONALLY_PROTECTED_SEQ<LdapArgumentData>; // DefinedType

let _cached_decoder_for_LdapArgument: $.ASN1Decoder<LdapArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LdapArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LdapArgument} The decoded data structure.
 */
export function _decode_LdapArgument(el: _Element): LdapArgument {
    if (!_cached_decoder_for_LdapArgument) {
        _cached_decoder_for_LdapArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<LdapArgumentData>(
            _decode_LdapArgumentData
        );
    }
    return _cached_decoder_for_LdapArgument(el);
}

let _cached_encoder_for_LdapArgument: $.ASN1Encoder<LdapArgument> | null = null;

/**
 * @summary Encodes a(n) LdapArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapArgument, encoded as an ASN.1 Element.
 */
export function _encode_LdapArgument(
    value: LdapArgument,
    elGetter: $.ASN1Encoder<LdapArgument>
): _Element {
    if (!_cached_encoder_for_LdapArgument) {
        _cached_encoder_for_LdapArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<LdapArgumentData>(
            _encode_LdapArgumentData
        );
    }
    return _cached_encoder_for_LdapArgument(value, elGetter);
}


/* eslint-enable */
