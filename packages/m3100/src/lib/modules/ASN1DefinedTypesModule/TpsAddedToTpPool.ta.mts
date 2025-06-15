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
 * @summary TpsAddedToTpPool
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TpsAddedToTpPool ::= SEQUENCE {
 *   tpPool  ObjectInstance,
 *   tps     SET OF ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class TpsAddedToTpPool {
    constructor(
        /**
         * @summary `tpPool`.
         * @public
         * @readonly
         */
        readonly tpPool: ObjectInstance,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a TpsAddedToTpPool
     * @description
     *
     * This takes an `object` and converts it to a `TpsAddedToTpPool`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TpsAddedToTpPool`.
     * @returns {TpsAddedToTpPool}
     */
    public static _from_object(
        _o: { [_K in keyof TpsAddedToTpPool]: TpsAddedToTpPool[_K] }
    ): TpsAddedToTpPool {
        return new TpsAddedToTpPool(_o.tpPool, _o.tps);
    }
}


/**
 * @summary The Leading Root Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [
    new $.ComponentSpec('tpPool', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [];


let _cached_decoder_for_TpsAddedToTpPool: $.ASN1Decoder<TpsAddedToTpPool> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TpsAddedToTpPool
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TpsAddedToTpPool} The decoded data structure.
 */
export function _decode_TpsAddedToTpPool(el: _Element) {
    if (!_cached_decoder_for_TpsAddedToTpPool) {
        _cached_decoder_for_TpsAddedToTpPool = function (
            el: _Element
        ): TpsAddedToTpPool {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TpsAddedToTpPool contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tpPool';
            sequence[1].name = 'tps';
            let tpPool!: ObjectInstance;
            let tps!: ObjectInstance[];
            tpPool = _decode_ObjectInstance(sequence[0]);
            tps = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance)(
                sequence[1]
            );
            return new TpsAddedToTpPool(tpPool, tps);
        };
    }
    return _cached_decoder_for_TpsAddedToTpPool(el);
}


let _cached_encoder_for_TpsAddedToTpPool: $.ASN1Encoder<TpsAddedToTpPool> | null = null;


/**
 * @summary Encodes a(n) TpsAddedToTpPool into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TpsAddedToTpPool, encoded as an ASN.1 Element.
 */
export function _encode_TpsAddedToTpPool(
    value: TpsAddedToTpPool,
    elGetter: $.ASN1Encoder<TpsAddedToTpPool>
) {
    if (!_cached_encoder_for_TpsAddedToTpPool) {
        _cached_encoder_for_TpsAddedToTpPool = function (
            value: TpsAddedToTpPool        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.tpPool,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tps, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TpsAddedToTpPool(value, elGetter);
}


/* eslint-enable */
