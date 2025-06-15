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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary PointToMultipoint_toTps_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointToMultipoint-toTps-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PointToMultipoint_toTps_Item {
    constructor(
        /**
         * @summary `tp`.
         * @public
         * @readonly
         */
        readonly tp: ObjectInstance,
        /**
         * @summary `xConnection`.
         * @public
         * @readonly
         */
        readonly xConnection: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PointToMultipoint_toTps_Item
     * @description
     *
     * This takes an `object` and converts it to a `PointToMultipoint_toTps_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointToMultipoint_toTps_Item`.
     * @returns {PointToMultipoint_toTps_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof PointToMultipoint_toTps_Item]: PointToMultipoint_toTps_Item[_K];
        }
    ): PointToMultipoint_toTps_Item {
        return new PointToMultipoint_toTps_Item(_o.tp, _o.xConnection);
    }
}


/**
 * @summary The Leading Root Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('tp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'xConnection',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_PointToMultipoint_toTps_Item: $.ASN1Decoder<PointToMultipoint_toTps_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PointToMultipoint_toTps_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointToMultipoint_toTps_Item} The decoded data structure.
 */
export function _decode_PointToMultipoint_toTps_Item(el: _Element) {
    if (!_cached_decoder_for_PointToMultipoint_toTps_Item) {
        _cached_decoder_for_PointToMultipoint_toTps_Item = function (
            el: _Element
        ): PointToMultipoint_toTps_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PointToMultipoint-toTps-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tp';
            sequence[1].name = 'xConnection';
            let tp!: ObjectInstance;
            let xConnection!: ObjectInstance;
            tp = _decode_ObjectInstance(sequence[0]);
            xConnection = _decode_ObjectInstance(sequence[1]);
            return new PointToMultipoint_toTps_Item(tp, xConnection);
        };
    }
    return _cached_decoder_for_PointToMultipoint_toTps_Item(el);
}


let _cached_encoder_for_PointToMultipoint_toTps_Item: $.ASN1Encoder<PointToMultipoint_toTps_Item> | null = null;


/**
 * @summary Encodes a(n) PointToMultipoint_toTps_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointToMultipoint_toTps_Item, encoded as an ASN.1 Element.
 */
export function _encode_PointToMultipoint_toTps_Item(
    value: PointToMultipoint_toTps_Item,
    elGetter: $.ASN1Encoder<PointToMultipoint_toTps_Item>
) {
    if (!_cached_encoder_for_PointToMultipoint_toTps_Item) {
        _cached_encoder_for_PointToMultipoint_toTps_Item = function (
            value: PointToMultipoint_toTps_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.tp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xConnection,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PointToMultipoint_toTps_Item(value, elGetter);
}


/* eslint-enable */
