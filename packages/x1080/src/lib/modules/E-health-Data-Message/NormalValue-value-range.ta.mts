/* eslint-disable */
import {
    REAL,
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

/* START_OF_SYMBOL_DEFINITION NormalValue_value_range */
/**
 * @summary NormalValue_value_range
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NormalValue-value-range ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class NormalValue_value_range {
    constructor(
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: REAL,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: REAL
    ) {}

    /**
     * @summary Restructures an object into a NormalValue_value_range
     * @description
     *
     * This takes an `object` and converts it to a `NormalValue_value_range`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NormalValue_value_range`.
     * @returns {NormalValue_value_range}
     */
    public static _from_object(
        _o: {
            [_K in keyof NormalValue_value_range]: NormalValue_value_range[_K];
        }
    ): NormalValue_value_range {
        return new NormalValue_value_range(_o.minimum, _o.maximum);
    }
}
/* END_OF_SYMBOL_DEFINITION NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NormalValue_value_range */
/**
 * @summary The Leading Root Component Types of NormalValue_value_range
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NormalValue_value_range: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'minimum',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximum',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NormalValue_value_range */
/**
 * @summary The Trailing Root Component Types of NormalValue_value_range
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NormalValue_value_range: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NormalValue_value_range */
/**
 * @summary The Extension Addition Component Types of NormalValue_value_range
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NormalValue_value_range: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalValue_value_range */
let _cached_decoder_for_NormalValue_value_range: $.ASN1Decoder<NormalValue_value_range> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _decode_NormalValue_value_range */
/**
 * @summary Decodes an ASN.1 element into a(n) NormalValue_value_range
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalValue_value_range} The decoded data structure.
 */
export function _decode_NormalValue_value_range(el: _Element) {
    if (!_cached_decoder_for_NormalValue_value_range) {
        _cached_decoder_for_NormalValue_value_range = function (
            el: _Element
        ): NormalValue_value_range {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'NormalValue-value-range contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'minimum';
            sequence[1].name = 'maximum';
            let minimum!: REAL;
            let maximum!: REAL;
            minimum = $._decodeReal(sequence[0]);
            maximum = $._decodeReal(sequence[1]);
            return new NormalValue_value_range(minimum, maximum);
        };
    }
    return _cached_decoder_for_NormalValue_value_range(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalValue_value_range */
let _cached_encoder_for_NormalValue_value_range: $.ASN1Encoder<NormalValue_value_range> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalValue_value_range */

/* START_OF_SYMBOL_DEFINITION _encode_NormalValue_value_range */
/**
 * @summary Encodes a(n) NormalValue_value_range into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalValue_value_range, encoded as an ASN.1 Element.
 */
export function _encode_NormalValue_value_range(
    value: NormalValue_value_range,
    elGetter: $.ASN1Encoder<NormalValue_value_range>
) {
    if (!_cached_encoder_for_NormalValue_value_range) {
        _cached_encoder_for_NormalValue_value_range = function (
            value: NormalValue_value_range        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeReal(value.minimum, $.BER),
                        /* REQUIRED   */ $._encodeReal(value.maximum, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NormalValue_value_range(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NormalValue_value_range */

/* eslint-enable */
