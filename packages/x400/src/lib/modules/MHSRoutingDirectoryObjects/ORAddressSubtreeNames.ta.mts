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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
/**
 * @summary ORAddressSubtreeNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressSubtreeNames  ::=  SEQUENCE OF DistinguishedName
 * ```
 */
export type ORAddressSubtreeNames = DistinguishedName[]; // SequenceOfType

let _cached_decoder_for_ORAddressSubtreeNames: $.ASN1Decoder<ORAddressSubtreeNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressSubtreeNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressSubtreeNames} The decoded data structure.
 */
export function _decode_ORAddressSubtreeNames(el: _Element) {
    if (!_cached_decoder_for_ORAddressSubtreeNames) {
        _cached_decoder_for_ORAddressSubtreeNames = $._decodeSequenceOf<DistinguishedName>(
            () => _decode_DistinguishedName
        );
    }
    return _cached_decoder_for_ORAddressSubtreeNames(el);
}

let _cached_encoder_for_ORAddressSubtreeNames: $.ASN1Encoder<ORAddressSubtreeNames> | null = null;

/**
 * @summary Encodes a(n) ORAddressSubtreeNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressSubtreeNames, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressSubtreeNames(
    value: ORAddressSubtreeNames,
    elGetter: $.ASN1Encoder<ORAddressSubtreeNames>
) {
    if (!_cached_encoder_for_ORAddressSubtreeNames) {
        _cached_encoder_for_ORAddressSubtreeNames = $._encodeSequenceOf<DistinguishedName>(
            () => _encode_DistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_ORAddressSubtreeNames(value, elGetter);
}


/* eslint-enable */
