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
    LinkEndCharacteristics,
    _decode_LinkEndCharacteristics,
    _encode_LinkEndCharacteristics,
} from '../M3108Part2ASN1Module/LinkEndCharacteristics.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SlcEnds */
/**
 * @summary SlcEnds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SlcEnds ::= SEQUENCE {
 *   endA  [0]  LinkEndCharacteristics,
 *   endB  [1]  LinkEndCharacteristics
 * }
 * ```
 *
 * @class
 */
export class SlcEnds {
    constructor(
        /**
         * @summary `endA`.
         * @public
         * @readonly
         */
        readonly endA: LinkEndCharacteristics,
        /**
         * @summary `endB`.
         * @public
         * @readonly
         */
        readonly endB: LinkEndCharacteristics
    ) {}

    /**
     * @summary Restructures an object into a SlcEnds
     * @description
     *
     * This takes an `object` and converts it to a `SlcEnds`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SlcEnds`.
     * @returns {SlcEnds}
     */
    public static _from_object(
        _o: { [_K in keyof SlcEnds]: SlcEnds[_K] }
    ): SlcEnds {
        return new SlcEnds(_o.endA, _o.endB);
    }
}
/* END_OF_SYMBOL_DEFINITION SlcEnds */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SlcEnds */
/**
 * @summary The Leading Root Component Types of SlcEnds
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SlcEnds: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'endA',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'endB',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SlcEnds */
/**
 * @summary The Trailing Root Component Types of SlcEnds
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SlcEnds: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SlcEnds */
/**
 * @summary The Extension Addition Component Types of SlcEnds
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SlcEnds: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SlcEnds */
let _cached_decoder_for_SlcEnds: $.ASN1Decoder<SlcEnds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _decode_SlcEnds */
/**
 * @summary Decodes an ASN.1 element into a(n) SlcEnds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SlcEnds} The decoded data structure.
 */
export function _decode_SlcEnds(el: _Element) {
    if (!_cached_decoder_for_SlcEnds) {
        _cached_decoder_for_SlcEnds = function (el: _Element): SlcEnds {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SlcEnds contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'endA';
            sequence[1].name = 'endB';
            let endA!: LinkEndCharacteristics;
            let endB!: LinkEndCharacteristics;
            endA = $._decode_implicit<LinkEndCharacteristics>(
                () => _decode_LinkEndCharacteristics
            )(sequence[0]);
            endB = $._decode_implicit<LinkEndCharacteristics>(
                () => _decode_LinkEndCharacteristics
            )(sequence[1]);
            return new SlcEnds(endA, endB);
        };
    }
    return _cached_decoder_for_SlcEnds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SlcEnds */
let _cached_encoder_for_SlcEnds: $.ASN1Encoder<SlcEnds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SlcEnds */

/* START_OF_SYMBOL_DEFINITION _encode_SlcEnds */
/**
 * @summary Encodes a(n) SlcEnds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SlcEnds, encoded as an ASN.1 Element.
 */
export function _encode_SlcEnds(
    value: SlcEnds,
    elGetter: $.ASN1Encoder<SlcEnds>
) {
    if (!_cached_encoder_for_SlcEnds) {
        _cached_encoder_for_SlcEnds = function (
            value: SlcEnds        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_LinkEndCharacteristics,
                            $.BER
                        )(value.endA, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_LinkEndCharacteristics,
                            $.BER
                        )(value.endB, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SlcEnds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SlcEnds */

/* eslint-enable */
