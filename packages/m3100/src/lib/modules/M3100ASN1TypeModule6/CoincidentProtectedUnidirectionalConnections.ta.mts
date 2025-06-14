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
    ProtectedXC,
    _decode_ProtectedXC,
    _encode_ProtectedXC,
} from '../M3100ASN1TypeModule6/ProtectedXC.ta.mjs';
import {
    MulticastXC,
    _decode_MulticastXC,
    _encode_MulticastXC,
} from '../M3100ASN1TypeModule6/MulticastXC.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CoincidentProtectedUnidirectionalConnections */
/**
 * @summary CoincidentProtectedUnidirectionalConnections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoincidentProtectedUnidirectionalConnections ::= SEQUENCE {
 *   protectedXC  ProtectedXC,
 *   multicastXC  MulticastXC
 * }
 * ```
 *
 * @class
 */
export class CoincidentProtectedUnidirectionalConnections {
    constructor(
        /**
         * @summary `protectedXC`.
         * @public
         * @readonly
         */
        readonly protectedXC: ProtectedXC,
        /**
         * @summary `multicastXC`.
         * @public
         * @readonly
         */
        readonly multicastXC: MulticastXC
    ) {}

    /**
     * @summary Restructures an object into a CoincidentProtectedUnidirectionalConnections
     * @description
     *
     * This takes an `object` and converts it to a `CoincidentProtectedUnidirectionalConnections`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoincidentProtectedUnidirectionalConnections`.
     * @returns {CoincidentProtectedUnidirectionalConnections}
     */
    public static _from_object(
        _o: {
            [_K in keyof CoincidentProtectedUnidirectionalConnections]: CoincidentProtectedUnidirectionalConnections[_K];
        }
    ): CoincidentProtectedUnidirectionalConnections {
        return new CoincidentProtectedUnidirectionalConnections(
            _o.protectedXC,
            _o.multicastXC
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoincidentProtectedUnidirectionalConnections */
/**
 * @summary The Leading Root Component Types of CoincidentProtectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoincidentProtectedUnidirectionalConnections: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protectedXC',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'multicastXC',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoincidentProtectedUnidirectionalConnections */
/**
 * @summary The Trailing Root Component Types of CoincidentProtectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoincidentProtectedUnidirectionalConnections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoincidentProtectedUnidirectionalConnections */
/**
 * @summary The Extension Addition Component Types of CoincidentProtectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoincidentProtectedUnidirectionalConnections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentProtectedUnidirectionalConnections */
let _cached_decoder_for_CoincidentProtectedUnidirectionalConnections: $.ASN1Decoder<CoincidentProtectedUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _decode_CoincidentProtectedUnidirectionalConnections */
/**
 * @summary Decodes an ASN.1 element into a(n) CoincidentProtectedUnidirectionalConnections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoincidentProtectedUnidirectionalConnections} The decoded data structure.
 */
export function _decode_CoincidentProtectedUnidirectionalConnections(
    el: _Element
) {
    if (!_cached_decoder_for_CoincidentProtectedUnidirectionalConnections) {
        _cached_decoder_for_CoincidentProtectedUnidirectionalConnections = function (
            el: _Element
        ): CoincidentProtectedUnidirectionalConnections {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CoincidentProtectedUnidirectionalConnections contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'protectedXC';
            sequence[1].name = 'multicastXC';
            let protectedXC!: ProtectedXC;
            let multicastXC!: MulticastXC;
            protectedXC = _decode_ProtectedXC(sequence[0]);
            multicastXC = _decode_MulticastXC(sequence[1]);
            return new CoincidentProtectedUnidirectionalConnections(
                protectedXC,
                multicastXC
            );
        };
    }
    return _cached_decoder_for_CoincidentProtectedUnidirectionalConnections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentProtectedUnidirectionalConnections */
let _cached_encoder_for_CoincidentProtectedUnidirectionalConnections: $.ASN1Encoder<CoincidentProtectedUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentProtectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _encode_CoincidentProtectedUnidirectionalConnections */
/**
 * @summary Encodes a(n) CoincidentProtectedUnidirectionalConnections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoincidentProtectedUnidirectionalConnections, encoded as an ASN.1 Element.
 */
export function _encode_CoincidentProtectedUnidirectionalConnections(
    value: CoincidentProtectedUnidirectionalConnections,
    elGetter: $.ASN1Encoder<CoincidentProtectedUnidirectionalConnections>
) {
    if (!_cached_encoder_for_CoincidentProtectedUnidirectionalConnections) {
        _cached_encoder_for_CoincidentProtectedUnidirectionalConnections = function (
            value: CoincidentProtectedUnidirectionalConnections        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProtectedXC(
                            value.protectedXC,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MulticastXC(
                            value.multicastXC,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CoincidentProtectedUnidirectionalConnections(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CoincidentProtectedUnidirectionalConnections */

/* eslint-enable */
