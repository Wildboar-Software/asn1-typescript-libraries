/* eslint-disable */
import {
    OPTIONAL,
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
    SignalRate,
    _decode_SignalRate,
    _encode_SignalRate,
} from '../M3100ASN1TypeModule2/SignalRate.ta.mjs';
import {
    MappingList,
    _decode_MappingList,
    _encode_MappingList,
} from '../M3100ASN1TypeModule2/MappingList.ta.mjs';
import {
    WaveLength,
    _decode_WaveLength,
    _encode_WaveLength,
} from '../ASN1DefinedTypesModule/WaveLength.ta.mjs';

/**
 * @summary SignalRateAndMappingList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalRateAndMappingList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SignalRateAndMappingList_Item {
    constructor(
        /**
         * @summary `signalRate`.
         * @public
         * @readonly
         */
        readonly signalRate: SignalRate,
        /**
         * @summary `mappingList`.
         * @public
         * @readonly
         */
        readonly mappingList: OPTIONAL<MappingList>,
        /**
         * @summary `wavelength`.
         * @public
         * @readonly
         */
        readonly wavelength: OPTIONAL<WaveLength>
    ) {}

    /**
     * @summary Restructures an object into a SignalRateAndMappingList_Item
     * @description
     *
     * This takes an `object` and converts it to a `SignalRateAndMappingList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignalRateAndMappingList_Item`.
     * @returns {SignalRateAndMappingList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof SignalRateAndMappingList_Item]: SignalRateAndMappingList_Item[_K];
        }
    ): SignalRateAndMappingList_Item {
        return new SignalRateAndMappingList_Item(
            _o.signalRate,
            _o.mappingList,
            _o.wavelength
        );
    }
}


/**
 * @summary The Leading Root Component Types of SignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignalRateAndMappingList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('signalRate', false, $.hasAnyTag),
    new $.ComponentSpec(
        'mappingList',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'wavelength',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of SignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignalRateAndMappingList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignalRateAndMappingList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_SignalRateAndMappingList_Item: $.ASN1Decoder<SignalRateAndMappingList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignalRateAndMappingList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalRateAndMappingList_Item} The decoded data structure.
 */
export function _decode_SignalRateAndMappingList_Item(el: _Element) {
    if (!_cached_decoder_for_SignalRateAndMappingList_Item) {
        _cached_decoder_for_SignalRateAndMappingList_Item = function (
            el: _Element
        ): SignalRateAndMappingList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signalRate!: SignalRate;
            let mappingList: OPTIONAL<MappingList>;
            let wavelength: OPTIONAL<WaveLength>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signalRate: (_el: _Element): void => {
                    signalRate = _decode_SignalRate(_el);
                },
                mappingList: (_el: _Element): void => {
                    mappingList = _decode_MappingList(_el);
                },
                wavelength: (_el: _Element): void => {
                    wavelength = _decode_WaveLength(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignalRateAndMappingList_Item,
                _extension_additions_list_spec_for_SignalRateAndMappingList_Item,
                _root_component_type_list_2_spec_for_SignalRateAndMappingList_Item,
                undefined
            );
            return new SignalRateAndMappingList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                signalRate,
                mappingList,
                wavelength
            );
        };
    }
    return _cached_decoder_for_SignalRateAndMappingList_Item(el);
}


let _cached_encoder_for_SignalRateAndMappingList_Item: $.ASN1Encoder<SignalRateAndMappingList_Item> | null = null;


/**
 * @summary Encodes a(n) SignalRateAndMappingList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalRateAndMappingList_Item, encoded as an ASN.1 Element.
 */
export function _encode_SignalRateAndMappingList_Item(
    value: SignalRateAndMappingList_Item,
    elGetter: $.ASN1Encoder<SignalRateAndMappingList_Item>
) {
    if (!_cached_encoder_for_SignalRateAndMappingList_Item) {
        _cached_encoder_for_SignalRateAndMappingList_Item = function (
            value: SignalRateAndMappingList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SignalRate(
                            value.signalRate,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.mappingList === undefined
                            ? undefined
                            : _encode_MappingList(value.mappingList, $.BER),
                        /* IF_ABSENT  */ value.wavelength === undefined
                            ? undefined
                            : _encode_WaveLength(value.wavelength, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignalRateAndMappingList_Item(value, elGetter);
}


/* eslint-enable */
