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
    RemoveTpsFromGtpInformation_Item,
    _decode_RemoveTpsFromGtpInformation_Item,
    _encode_RemoveTpsFromGtpInformation_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpInformation-Item.ta.mjs';

/**
 * @summary RemoveTpsFromGtpInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpInformation  ::=
 *   SEQUENCE OF SEQUENCE {fromGtp  ObjectInstance,
 *                         tps      SET OF ObjectInstance}
 * ```
 */
export type RemoveTpsFromGtpInformation = RemoveTpsFromGtpInformation_Item[]; // SequenceOfType


let _cached_decoder_for_RemoveTpsFromGtpInformation: $.ASN1Decoder<RemoveTpsFromGtpInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpInformation} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpInformation(el: _Element): RemoveTpsFromGtpInformation {
    if (!_cached_decoder_for_RemoveTpsFromGtpInformation) {
        _cached_decoder_for_RemoveTpsFromGtpInformation = $._decodeSequenceOf<RemoveTpsFromGtpInformation_Item>(
            () => _decode_RemoveTpsFromGtpInformation_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromGtpInformation(el);
}


let _cached_encoder_for_RemoveTpsFromGtpInformation: $.ASN1Encoder<RemoveTpsFromGtpInformation> | null = null;


/**
 * @summary Encodes a(n) RemoveTpsFromGtpInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpInformation(
    value: RemoveTpsFromGtpInformation,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpInformation>
): _Element {
    if (!_cached_encoder_for_RemoveTpsFromGtpInformation) {
        _cached_encoder_for_RemoveTpsFromGtpInformation = $._encodeSequenceOf<RemoveTpsFromGtpInformation_Item>(
            () => _encode_RemoveTpsFromGtpInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromGtpInformation(value, elGetter);
}


/* eslint-enable */
