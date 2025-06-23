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
    NameType,
    _encode_NameType,
    _decode_NameType,
} from '../ASN1DefinedTypesModule/NameType.ta.mjs';


/**
 * @summary PortSignalRateAndMappingList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortSignalRateAndMappingList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PortSignalRateAndMappingList_Item {
    constructor(
        /**
         * @summary `portId`.
         * @public
         * @readonly
         */
        readonly portId: NameType,
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
        readonly mappingList: OPTIONAL<MappingList>
    ) {}

    /**
     * @summary Restructures an object into a PortSignalRateAndMappingList_Item
     * @description
     *
     * This takes an `object` and converts it to a `PortSignalRateAndMappingList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PortSignalRateAndMappingList_Item`.
     * @returns {PortSignalRateAndMappingList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof PortSignalRateAndMappingList_Item]: PortSignalRateAndMappingList_Item[_K];
        }
    ): PortSignalRateAndMappingList_Item {
        return new PortSignalRateAndMappingList_Item(
            _o.portId,
            _o.signalRate,
            _o.mappingList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PortSignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PortSignalRateAndMappingList_Item: $.ComponentSpec[] = [
    ,
    /* FIXME: portId COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
        'signalRate',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'mappingList',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PortSignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PortSignalRateAndMappingList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PortSignalRateAndMappingList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PortSignalRateAndMappingList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_PortSignalRateAndMappingList_Item: $.ASN1Decoder<PortSignalRateAndMappingList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PortSignalRateAndMappingList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortSignalRateAndMappingList_Item} The decoded data structure.
 */
export function _decode_PortSignalRateAndMappingList_Item(el: _Element) {
    if (!_cached_decoder_for_PortSignalRateAndMappingList_Item) {
        _cached_decoder_for_PortSignalRateAndMappingList_Item = function (
            el: _Element
        ): PortSignalRateAndMappingList_Item {
            let portId!: NameType;
            let signalRate!: SignalRate;
            let mappingList: OPTIONAL<MappingList>;
            const callbacks: $.DecodingMap = {
                portId: (_el: _Element): void => {
                    portId = _decode_NameType(_el);
                },
                signalRate: (_el: _Element): void => {
                    signalRate = _decode_SignalRate(_el);
                },
                mappingList: (_el: _Element): void => {
                    mappingList = _decode_MappingList(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PortSignalRateAndMappingList_Item,
                _extension_additions_list_spec_for_PortSignalRateAndMappingList_Item,
                _root_component_type_list_2_spec_for_PortSignalRateAndMappingList_Item,
                undefined
            );
            return new PortSignalRateAndMappingList_Item (
                portId,
                signalRate,
                mappingList
            );
        };
    }
    return _cached_decoder_for_PortSignalRateAndMappingList_Item(el);
}


let _cached_encoder_for_PortSignalRateAndMappingList_Item: $.ASN1Encoder<PortSignalRateAndMappingList_Item> | null = null;


/**
 * @summary Encodes a(n) PortSignalRateAndMappingList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortSignalRateAndMappingList_Item, encoded as an ASN.1 Element.
 */
export function _encode_PortSignalRateAndMappingList_Item(
    value: PortSignalRateAndMappingList_Item,
    elGetter: $.ASN1Encoder<PortSignalRateAndMappingList_Item>
) {
    if (!_cached_encoder_for_PortSignalRateAndMappingList_Item) {
        _cached_encoder_for_PortSignalRateAndMappingList_Item = function (
            value: PortSignalRateAndMappingList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_NameType(value.portId, $.BER),
                        /* REQUIRED   */ _encode_SignalRate(
                            value.signalRate,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.mappingList === undefined
                            ? undefined
                            : _encode_MappingList(value.mappingList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PortSignalRateAndMappingList_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
