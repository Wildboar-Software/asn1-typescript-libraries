/* eslint-disable */
import {
    INTEGER,
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
 * @summary ToTPPools_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToTPPools-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ToTPPools_Item {
    constructor(
        /**
         * @summary `tpPoolId`.
         * @public
         * @readonly
         */
        readonly tpPoolId: ObjectInstance,
        /**
         * @summary `numberOfTPs`.
         * @public
         * @readonly
         */
        readonly numberOfTPs: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ToTPPools_Item
     * @description
     *
     * This takes an `object` and converts it to a `ToTPPools_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToTPPools_Item`.
     * @returns {ToTPPools_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ToTPPools_Item]: ToTPPools_Item[_K] }
    ): ToTPPools_Item {
        return new ToTPPools_Item(_o.tpPoolId, _o.numberOfTPs);
    }
}


/**
 * @summary The Leading Root Component Types of ToTPPools_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToTPPools_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('tpPoolId', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'numberOfTPs',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of ToTPPools_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToTPPools_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ToTPPools_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToTPPools_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_ToTPPools_Item: $.ASN1Decoder<ToTPPools_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ToTPPools_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToTPPools_Item} The decoded data structure.
 */
export function _decode_ToTPPools_Item(el: _Element) {
    if (!_cached_decoder_for_ToTPPools_Item) {
        _cached_decoder_for_ToTPPools_Item = function (
            el: _Element
        ): ToTPPools_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ToTPPools-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tpPoolId';
            sequence[1].name = 'numberOfTPs';
            let tpPoolId!: ObjectInstance;
            let numberOfTPs!: INTEGER;
            tpPoolId = _decode_ObjectInstance(sequence[0]);
            numberOfTPs = $._decodeInteger(sequence[1]);
            return new ToTPPools_Item(tpPoolId, numberOfTPs);
        };
    }
    return _cached_decoder_for_ToTPPools_Item(el);
}


let _cached_encoder_for_ToTPPools_Item: $.ASN1Encoder<ToTPPools_Item> | null = null;


/**
 * @summary Encodes a(n) ToTPPools_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToTPPools_Item, encoded as an ASN.1 Element.
 */
export function _encode_ToTPPools_Item(
    value: ToTPPools_Item,
    elGetter: $.ASN1Encoder<ToTPPools_Item>
) {
    if (!_cached_encoder_for_ToTPPools_Item) {
        _cached_encoder_for_ToTPPools_Item = function (
            value: ToTPPools_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.tpPoolId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.numberOfTPs,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ToTPPools_Item(value, elGetter);
}


/* eslint-enable */
