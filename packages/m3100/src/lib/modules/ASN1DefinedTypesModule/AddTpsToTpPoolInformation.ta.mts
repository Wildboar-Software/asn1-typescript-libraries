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
    AddTpsToTpPoolInformation_Item,
    _decode_AddTpsToTpPoolInformation_Item,
    _encode_AddTpsToTpPoolInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolInformation-Item.ta.mjs';

/**
 * @summary AddTpsToTpPoolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {tps       SET OF TerminationPointInformation,
 *               toTpPool  ObjectInstance OPTIONAL}
 * ```
 */
export type AddTpsToTpPoolInformation = AddTpsToTpPoolInformation_Item[]; // SequenceOfType


let _cached_decoder_for_AddTpsToTpPoolInformation: $.ASN1Decoder<AddTpsToTpPoolInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolInformation} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolInformation(el: _Element): AddTpsToTpPoolInformation {
    if (!_cached_decoder_for_AddTpsToTpPoolInformation) {
        _cached_decoder_for_AddTpsToTpPoolInformation = $._decodeSequenceOf<AddTpsToTpPoolInformation_Item>(
            () => _decode_AddTpsToTpPoolInformation_Item
        );
    }
    return _cached_decoder_for_AddTpsToTpPoolInformation(el);
}


let _cached_encoder_for_AddTpsToTpPoolInformation: $.ASN1Encoder<AddTpsToTpPoolInformation> | null = null;


/**
 * @summary Encodes a(n) AddTpsToTpPoolInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolInformation(
    value: AddTpsToTpPoolInformation,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolInformation>
): _Element {
    if (!_cached_encoder_for_AddTpsToTpPoolInformation) {
        _cached_encoder_for_AddTpsToTpPoolInformation = $._encodeSequenceOf<AddTpsToTpPoolInformation_Item>(
            () => _encode_AddTpsToTpPoolInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToTpPoolInformation(value, elGetter);
}


/* eslint-enable */
