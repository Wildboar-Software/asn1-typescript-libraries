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
    ToTPPools,
    _decode_ToTPPools,
    _encode_ToTPPools,
} from '../ASN1DefinedTypesModule/ToTPPools.ta.mjs';

/**
 * @summary PtoMPools
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PtoMPools ::= SEQUENCE {fromTp     ExplicitTP,
 *                         toTPPools  ToTPPools
 * }
 * ```
 *
 */
export class PtoMPools {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ExplicitTP,
        /**
         * @summary `toTPPools`.
         * @public
         * @readonly
         */
        readonly toTPPools: ToTPPools
    ) {}

    /**
     * @summary Restructures an object into a PtoMPools
     * @description
     *
     * This takes an `object` and converts it to a `PtoMPools`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PtoMPools`.
     * @returns {PtoMPools}
     */
    public static _from_object(
        _o: { [_K in keyof PtoMPools]: PtoMPools[_K] }
    ): PtoMPools {
        return new PtoMPools(_o.fromTp, _o.toTPPools);
    }
}


/**
 * @summary The Leading Root Component Types of PtoMPools
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PtoMPools: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag),
    new $.ComponentSpec(
        'toTPPools',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of PtoMPools
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PtoMPools: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PtoMPools
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PtoMPools: $.ComponentSpec[] = [];


let _cached_decoder_for_PtoMPools: $.ASN1Decoder<PtoMPools> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PtoMPools
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PtoMPools} The decoded data structure.
 */
export function _decode_PtoMPools(el: _Element): PtoMPools {
    if (!_cached_decoder_for_PtoMPools) {
        _cached_decoder_for_PtoMPools = function (el: _Element): PtoMPools {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PtoMPools contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTPPools';
            let fromTp!: ExplicitTP;
            let toTPPools!: ToTPPools;
            fromTp = _decode_ExplicitTP(sequence[0]);
            toTPPools = _decode_ToTPPools(sequence[1]);
            return new PtoMPools(fromTp, toTPPools);
        };
    }
    return _cached_decoder_for_PtoMPools(el);
}


let _cached_encoder_for_PtoMPools: $.ASN1Encoder<PtoMPools> | null = null;


/**
 * @summary Encodes a(n) PtoMPools into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PtoMPools, encoded as an ASN.1 Element.
 */
export function _encode_PtoMPools(
    value: PtoMPools,
    elGetter: $.ASN1Encoder<PtoMPools>
): _Element {
    if (!_cached_encoder_for_PtoMPools) {
        _cached_encoder_for_PtoMPools = function (
            value: PtoMPools        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExplicitTP(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ToTPPools(
                            value.toTPPools,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PtoMPools(value, elGetter);
}


/* eslint-enable */
