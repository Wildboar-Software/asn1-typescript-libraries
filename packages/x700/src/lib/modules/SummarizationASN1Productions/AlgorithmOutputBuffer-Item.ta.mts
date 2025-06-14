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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
import {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlgorithmOutputBuffer_Item */
/**
 * @summary AlgorithmOutputBuffer_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmOutputBuffer-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AlgorithmOutputBuffer_Item {
    constructor(
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttributeId,
        /**
         * @summary `algorithmOutput`.
         * @public
         * @readonly
         */
        readonly algorithmOutput: ObservedValue[]
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmOutputBuffer_Item
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmOutputBuffer_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmOutputBuffer_Item`.
     * @returns {AlgorithmOutputBuffer_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof AlgorithmOutputBuffer_Item]: AlgorithmOutputBuffer_Item[_K];
        }
    ): AlgorithmOutputBuffer_Item {
        return new AlgorithmOutputBuffer_Item(
            _o.attributeId,
            _o.algorithmOutput
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmOutputBuffer_Item */
/**
 * @summary The Leading Root Component Types of AlgorithmOutputBuffer_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmOutputBuffer_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'algorithmOutput',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmOutputBuffer_Item */
/**
 * @summary The Trailing Root Component Types of AlgorithmOutputBuffer_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmOutputBuffer_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmOutputBuffer_Item */
/**
 * @summary The Extension Addition Component Types of AlgorithmOutputBuffer_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmOutputBuffer_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmOutputBuffer_Item */
let _cached_decoder_for_AlgorithmOutputBuffer_Item: $.ASN1Decoder<AlgorithmOutputBuffer_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmOutputBuffer_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmOutputBuffer_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmOutputBuffer_Item} The decoded data structure.
 */
export function _decode_AlgorithmOutputBuffer_Item(el: _Element) {
    if (!_cached_decoder_for_AlgorithmOutputBuffer_Item) {
        _cached_decoder_for_AlgorithmOutputBuffer_Item = function (
            el: _Element
        ): AlgorithmOutputBuffer_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AlgorithmOutputBuffer-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attributeId';
            sequence[1].name = 'algorithmOutput';
            let attributeId!: AttributeId;
            let algorithmOutput!: ObservedValue[];
            attributeId = _decode_AttributeId(sequence[0]);
            algorithmOutput = $._decodeSequenceOf<ObservedValue>(
                () => _decode_ObservedValue
            )(sequence[1]);
            return new AlgorithmOutputBuffer_Item(attributeId, algorithmOutput);
        };
    }
    return _cached_decoder_for_AlgorithmOutputBuffer_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmOutputBuffer_Item */
let _cached_encoder_for_AlgorithmOutputBuffer_Item: $.ASN1Encoder<AlgorithmOutputBuffer_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmOutputBuffer_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmOutputBuffer_Item */
/**
 * @summary Encodes a(n) AlgorithmOutputBuffer_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmOutputBuffer_Item, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmOutputBuffer_Item(
    value: AlgorithmOutputBuffer_Item,
    elGetter: $.ASN1Encoder<AlgorithmOutputBuffer_Item>
) {
    if (!_cached_encoder_for_AlgorithmOutputBuffer_Item) {
        _cached_encoder_for_AlgorithmOutputBuffer_Item = function (
            value: AlgorithmOutputBuffer_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeId(
                            value.attributeId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<ObservedValue>(
                            () => _encode_ObservedValue,
                            $.BER
                        )(value.algorithmOutput, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmOutputBuffer_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmOutputBuffer_Item */

/* eslint-enable */
