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
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary PtoTPPool
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PtoTPPool ::= SEQUENCE {fromTp    ExplicitTP,
 *                         toTpPool  ObjectInstance
 * }
 * ```
 *
 */
export class PtoTPPool {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ExplicitTP,
        /**
         * @summary `toTpPool`.
         * @public
         * @readonly
         */
        readonly toTpPool: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PtoTPPool
     * @description
     *
     * This takes an `object` and converts it to a `PtoTPPool`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PtoTPPool`.
     * @returns {PtoTPPool}
     */
    public static _from_object(
        _o: { [_K in keyof PtoTPPool]: PtoTPPool[_K] }
    ): PtoTPPool {
        return new PtoTPPool(_o.fromTp, _o.toTpPool);
    }
}


/**
 * @summary The Leading Root Component Types of PtoTPPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PtoTPPool: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag),
    new $.ComponentSpec('toTpPool', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PtoTPPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PtoTPPool: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PtoTPPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PtoTPPool: $.ComponentSpec[] = [];


let _cached_decoder_for_PtoTPPool: $.ASN1Decoder<PtoTPPool> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PtoTPPool
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PtoTPPool} The decoded data structure.
 */
export function _decode_PtoTPPool(el: _Element): PtoTPPool {
    if (!_cached_decoder_for_PtoTPPool) {
        _cached_decoder_for_PtoTPPool = function (el: _Element): PtoTPPool {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PtoTPPool contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTpPool';
            let fromTp!: ExplicitTP;
            let toTpPool!: ObjectInstance;
            fromTp = _decode_ExplicitTP(sequence[0]);
            toTpPool = _decode_ObjectInstance(sequence[1]);
            return new PtoTPPool(fromTp, toTpPool);
        };
    }
    return _cached_decoder_for_PtoTPPool(el);
}


let _cached_encoder_for_PtoTPPool: $.ASN1Encoder<PtoTPPool> | null = null;


/**
 * @summary Encodes a(n) PtoTPPool into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PtoTPPool, encoded as an ASN.1 Element.
 */
export function _encode_PtoTPPool(
    value: PtoTPPool,
    elGetter: $.ASN1Encoder<PtoTPPool>
): _Element {
    if (!_cached_encoder_for_PtoTPPool) {
        _cached_encoder_for_PtoTPPool = function (
            value: PtoTPPool        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExplicitTP(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.toTpPool,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PtoTPPool(value, elGetter);
}


/* eslint-enable */
