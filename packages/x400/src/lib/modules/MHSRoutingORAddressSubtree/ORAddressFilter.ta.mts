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
    ORAddressFilter_attribute_type,
    _decode_ORAddressFilter_attribute_type,
    _encode_ORAddressFilter_attribute_type,
} from '../MHSRoutingORAddressSubtree/ORAddressFilter-attribute-type.ta.mjs';
import {
    ExtendedRegularExpression,
    _decode_ExtendedRegularExpression,
    _encode_ExtendedRegularExpression,
} from '../MHSRoutingORAddressSubtree/ExtendedRegularExpression.ta.mjs';
/**
 * @summary ORAddressFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressFilter ::= SEQUENCE {
 *   attribute-type
 *     CHOICE {standard-attribute        INTEGER,
 *             domain-defined-attribute
 *               UniversalOrBMPString{ub-domain-defined-attribute-type-length}
 *   },
 *   pattern         ExtendedRegularExpression
 * }
 * ```
 *
 */
export class ORAddressFilter {
    constructor(
        /**
         * @summary `attribute_type`.
         * @public
         * @readonly
         */
        readonly attribute_type: ORAddressFilter_attribute_type,
        /**
         * @summary `pattern`.
         * @public
         * @readonly
         */
        readonly pattern: ExtendedRegularExpression
    ) {}

    /**
     * @summary Restructures an object into a ORAddressFilter
     * @description
     *
     * This takes an `object` and converts it to a `ORAddressFilter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORAddressFilter`.
     * @returns {ORAddressFilter}
     */
    public static _from_object(
        _o: { [_K in keyof ORAddressFilter]: ORAddressFilter[_K] }
    ): ORAddressFilter {
        return new ORAddressFilter(_o.attribute_type, _o.pattern);
    }
}

/**
 * @summary The Leading Root Component Types of ORAddressFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORAddressFilter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attribute-type',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'pattern',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of ORAddressFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORAddressFilter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ORAddressFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORAddressFilter: $.ComponentSpec[] = [];

let _cached_decoder_for_ORAddressFilter: $.ASN1Decoder<ORAddressFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressFilter} The decoded data structure.
 */
export function _decode_ORAddressFilter(el: _Element): ORAddressFilter {
    if (!_cached_decoder_for_ORAddressFilter) {
        _cached_decoder_for_ORAddressFilter = function (
            el: _Element
        ): ORAddressFilter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ORAddressFilter contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attribute-type';
            sequence[1].name = 'pattern';
            let attribute_type!: ORAddressFilter_attribute_type;
            let pattern!: ExtendedRegularExpression;
            attribute_type = _decode_ORAddressFilter_attribute_type(
                sequence[0]
            );
            pattern = _decode_ExtendedRegularExpression(sequence[1]);
            return new ORAddressFilter(attribute_type, pattern);
        };
    }
    return _cached_decoder_for_ORAddressFilter(el);
}

let _cached_encoder_for_ORAddressFilter: $.ASN1Encoder<ORAddressFilter> | null = null;

/**
 * @summary Encodes a(n) ORAddressFilter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressFilter, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressFilter(
    value: ORAddressFilter,
    elGetter: $.ASN1Encoder<ORAddressFilter>
): _Element {
    if (!_cached_encoder_for_ORAddressFilter) {
        _cached_encoder_for_ORAddressFilter = function (
            value: ORAddressFilter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressFilter_attribute_type(
                            value.attribute_type,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ExtendedRegularExpression(
                            value.pattern,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ORAddressFilter(value, elGetter);
}


/* eslint-enable */
