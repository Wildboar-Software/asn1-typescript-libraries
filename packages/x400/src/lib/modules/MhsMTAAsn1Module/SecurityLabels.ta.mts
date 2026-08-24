/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/**
 * @summary SecurityLabels
 * @description
 *
 * `SecurityLabels`. This component contains the security-labels of the MTS-user, if they
 * are to be constrained within a deliverable-class. If the security-labels of the
 * message to be delivered do not match those specified by the
 * deliverable-security-labels, then the message does not satisfy the constraints of this
 * deliverable-class and no other criteria of the deliverable-class need be considered.
 * See ITU-T X.411 (1999), §8.4.1.1.1.3.4. SET OF: order is insignificant; duplicates are
 * typically meaningless.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabels  ::=  SET OF SecurityLabel
 * ```
 */
export type SecurityLabels = SecurityLabel[]; // SetOfType

let _cached_decoder_for_SecurityLabels: $.ASN1Decoder<SecurityLabels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabels} The decoded data structure.
 */
export function _decode_SecurityLabels(el: _Element): SecurityLabels {
    if (!_cached_decoder_for_SecurityLabels) {
        _cached_decoder_for_SecurityLabels = $._decodeSetOf<SecurityLabel>(
            () => _decode_SecurityLabel
        );
    }
    return _cached_decoder_for_SecurityLabels(el);
}

let _cached_encoder_for_SecurityLabels: $.ASN1Encoder<SecurityLabels> | null = null;

/**
 * @summary Encodes a(n) SecurityLabels into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabels, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabels(
    value: SecurityLabels,
    elGetter: $.ASN1Encoder<SecurityLabels>
): _Element {
    if (!_cached_encoder_for_SecurityLabels) {
        _cached_encoder_for_SecurityLabels = $._encodeSetOf<SecurityLabel>(
            () => _encode_SecurityLabel,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabels(value, elGetter);
}


/* eslint-enable */
