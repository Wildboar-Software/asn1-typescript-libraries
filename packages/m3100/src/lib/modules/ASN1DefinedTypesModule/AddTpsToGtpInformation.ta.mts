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
    AddTpsToGtpInformation_Item,
    _decode_AddTpsToGtpInformation_Item,
    _encode_AddTpsToGtpInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpInformation-Item.ta.mjs';

/**
 * @summary AddTpsToGtpInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {tpsAdded  SEQUENCE OF TerminationPointInformation,
 *               gtp       ObjectInstance OPTIONAL}
 * ```
 */
export type AddTpsToGtpInformation = AddTpsToGtpInformation_Item[]; // SequenceOfType


let _cached_decoder_for_AddTpsToGtpInformation: $.ASN1Decoder<AddTpsToGtpInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpInformation} The decoded data structure.
 */
export function _decode_AddTpsToGtpInformation(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpInformation) {
        _cached_decoder_for_AddTpsToGtpInformation = $._decodeSequenceOf<AddTpsToGtpInformation_Item>(
            () => _decode_AddTpsToGtpInformation_Item
        );
    }
    return _cached_decoder_for_AddTpsToGtpInformation(el);
}


let _cached_encoder_for_AddTpsToGtpInformation: $.ASN1Encoder<AddTpsToGtpInformation> | null = null;


/**
 * @summary Encodes a(n) AddTpsToGtpInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpInformation(
    value: AddTpsToGtpInformation,
    elGetter: $.ASN1Encoder<AddTpsToGtpInformation>
) {
    if (!_cached_encoder_for_AddTpsToGtpInformation) {
        _cached_encoder_for_AddTpsToGtpInformation = $._encodeSequenceOf<AddTpsToGtpInformation_Item>(
            () => _encode_AddTpsToGtpInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpInformation(value, elGetter);
}


/* eslint-enable */
