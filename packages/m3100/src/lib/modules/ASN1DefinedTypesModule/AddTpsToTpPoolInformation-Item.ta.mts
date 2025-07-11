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
    TerminationPointInformation,
    _decode_TerminationPointInformation,
    _encode_TerminationPointInformation,
} from '../ASN1DefinedTypesModule/TerminationPointInformation.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary AddTpsToTpPoolInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class AddTpsToTpPoolInformation_Item {
    constructor(
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: TerminationPointInformation[],
        /**
         * @summary `toTpPool`.
         * @public
         * @readonly
         */
        readonly toTpPool: OPTIONAL<ObjectInstance>
    ) {}

    /**
     * @summary Restructures an object into a AddTpsToTpPoolInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `AddTpsToTpPoolInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddTpsToTpPoolInformation_Item`.
     * @returns {AddTpsToTpPoolInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddTpsToTpPoolInformation_Item]: AddTpsToTpPoolInformation_Item[_K];
        }
    ): AddTpsToTpPoolInformation_Item {
        return new AddTpsToTpPoolInformation_Item(_o.tps, _o.toTpPool);
    }
}


/**
 * @summary The Leading Root Component Types of AddTpsToTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddTpsToTpPoolInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec('toTpPool', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AddTpsToTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddTpsToTpPoolInformation_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddTpsToTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddTpsToTpPoolInformation_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_AddTpsToTpPoolInformation_Item: $.ASN1Decoder<AddTpsToTpPoolInformation_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolInformation_Item} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolInformation_Item(el: _Element): AddTpsToTpPoolInformation_Item {
    if (!_cached_decoder_for_AddTpsToTpPoolInformation_Item) {
        _cached_decoder_for_AddTpsToTpPoolInformation_Item = function (
            el: _Element
        ): AddTpsToTpPoolInformation_Item {
            let tps!: TerminationPointInformation[];
            let toTpPool: OPTIONAL<ObjectInstance>;
            const callbacks: $.DecodingMap = {
                tps: (_el: _Element): void => {
                    tps = $._decodeSetOf<TerminationPointInformation>(
                        () => _decode_TerminationPointInformation
                    )(_el);
                },
                toTpPool: (_el: _Element): void => {
                    toTpPool = _decode_ObjectInstance(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddTpsToTpPoolInformation_Item,
                _extension_additions_list_spec_for_AddTpsToTpPoolInformation_Item,
                _root_component_type_list_2_spec_for_AddTpsToTpPoolInformation_Item,
                undefined
            );
            return new AddTpsToTpPoolInformation_Item (
                tps,
                toTpPool
            );
        };
    }
    return _cached_decoder_for_AddTpsToTpPoolInformation_Item(el);
}


let _cached_encoder_for_AddTpsToTpPoolInformation_Item: $.ASN1Encoder<AddTpsToTpPoolInformation_Item> | null = null;


/**
 * @summary Encodes a(n) AddTpsToTpPoolInformation_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolInformation_Item(
    value: AddTpsToTpPoolInformation_Item,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolInformation_Item>
): _Element {
    if (!_cached_encoder_for_AddTpsToTpPoolInformation_Item) {
        _cached_encoder_for_AddTpsToTpPoolInformation_Item = function (
            value: AddTpsToTpPoolInformation_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<TerminationPointInformation>(
                            () => _encode_TerminationPointInformation,
                            $.BER
                        )(value.tps, $.BER),
                        /* IF_ABSENT  */ value.toTpPool === undefined
                            ? undefined
                            : _encode_ObjectInstance(value.toTpPool, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddTpsToTpPoolInformation_Item(value, elGetter);
}


/* eslint-enable */
