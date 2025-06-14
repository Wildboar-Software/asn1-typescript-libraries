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
    ORAddressFilter,
    _decode_ORAddressFilter,
    _encode_ORAddressFilter,
} from '../MHSRoutingORAddressSubtree/ORAddressFilter.ta.mjs';
import {
    RoutingAdvice,
    _decode_RoutingAdvice,
    _encode_RoutingAdvice,
} from '../MHSRoutingORAddressSubtree/RoutingAdvice.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ExpressionMatch */
/**
 * @summary ExpressionMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpressionMatch ::= SEQUENCE {
 *   filter-set      SET OF ORAddressFilter,
 *   routing-advice  RoutingAdvice
 * }
 * ```
 *
 * @class
 */
export class ExpressionMatch {
    constructor(
        /**
         * @summary `filter_set`.
         * @public
         * @readonly
         */
        readonly filter_set: ORAddressFilter[],
        /**
         * @summary `routing_advice`.
         * @public
         * @readonly
         */
        readonly routing_advice: RoutingAdvice
    ) {}

    /**
     * @summary Restructures an object into a ExpressionMatch
     * @description
     *
     * This takes an `object` and converts it to a `ExpressionMatch`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExpressionMatch`.
     * @returns {ExpressionMatch}
     */
    public static _from_object(
        _o: { [_K in keyof ExpressionMatch]: ExpressionMatch[_K] }
    ): ExpressionMatch {
        return new ExpressionMatch(_o.filter_set, _o.routing_advice);
    }
}
/* END_OF_SYMBOL_DEFINITION ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExpressionMatch */
/**
 * @summary The Leading Root Component Types of ExpressionMatch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExpressionMatch: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter-set',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'routing-advice',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExpressionMatch */
/**
 * @summary The Trailing Root Component Types of ExpressionMatch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExpressionMatch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExpressionMatch */
/**
 * @summary The Extension Addition Component Types of ExpressionMatch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExpressionMatch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpressionMatch */
let _cached_decoder_for_ExpressionMatch: $.ASN1Decoder<ExpressionMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _decode_ExpressionMatch */
/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionMatch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpressionMatch} The decoded data structure.
 */
export function _decode_ExpressionMatch(el: _Element) {
    if (!_cached_decoder_for_ExpressionMatch) {
        _cached_decoder_for_ExpressionMatch = function (
            el: _Element
        ): ExpressionMatch {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ExpressionMatch contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'filter-set';
            sequence[1].name = 'routing-advice';
            let filter_set!: ORAddressFilter[];
            let routing_advice!: RoutingAdvice;
            filter_set = $._decodeSetOf<ORAddressFilter>(
                () => _decode_ORAddressFilter
            )(sequence[0]);
            routing_advice = _decode_RoutingAdvice(sequence[1]);
            return new ExpressionMatch(filter_set, routing_advice);
        };
    }
    return _cached_decoder_for_ExpressionMatch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpressionMatch */
let _cached_encoder_for_ExpressionMatch: $.ASN1Encoder<ExpressionMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpressionMatch */

/* START_OF_SYMBOL_DEFINITION _encode_ExpressionMatch */
/**
 * @summary Encodes a(n) ExpressionMatch into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionMatch, encoded as an ASN.1 Element.
 */
export function _encode_ExpressionMatch(
    value: ExpressionMatch,
    elGetter: $.ASN1Encoder<ExpressionMatch>
) {
    if (!_cached_encoder_for_ExpressionMatch) {
        _cached_encoder_for_ExpressionMatch = function (
            value: ExpressionMatch        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<ORAddressFilter>(
                            () => _encode_ORAddressFilter,
                            $.BER
                        )(value.filter_set, $.BER),
                        /* REQUIRED   */ _encode_RoutingAdvice(
                            value.routing_advice,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExpressionMatch(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExpressionMatch */

/* eslint-enable */
