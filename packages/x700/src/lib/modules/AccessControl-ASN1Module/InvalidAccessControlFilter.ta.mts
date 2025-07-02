/* eslint-disable */
import {
    OPTIONAL,
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
    InvalidAccessControlFilter_errorId,
    _enum_for_InvalidAccessControlFilter_errorId,
    _decode_InvalidAccessControlFilter_errorId,
    _encode_InvalidAccessControlFilter_errorId,
} from '../AccessControl-ASN1Module/InvalidAccessControlFilter-errorId.ta.mjs';
import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs';
/**
 * @summary InvalidAccessControlFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter ::= SEQUENCE {
 *   errorId  ENUMERATED {duplicateId(0), heterogeneousId(1), invalidId(2)},
 *   filter   CMISFilter OPTIONAL
 * }
 * ```
 *
 */
export class InvalidAccessControlFilter {
    constructor(
        /**
         * @summary `errorId`.
         * @public
         * @readonly
         */
        readonly errorId: InvalidAccessControlFilter_errorId,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<CMISFilter>
    ) {}

    /**
     * @summary Restructures an object into a InvalidAccessControlFilter
     * @description
     *
     * This takes an `object` and converts it to a `InvalidAccessControlFilter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvalidAccessControlFilter`.
     * @returns {InvalidAccessControlFilter}
     */
    public static _from_object(
        _o: {
            [_K in keyof InvalidAccessControlFilter]: InvalidAccessControlFilter[_K];
        }
    ): InvalidAccessControlFilter {
        return new InvalidAccessControlFilter(_o.errorId, _o.filter);
    }

    /**
     * @summary The enum used as the type of the component `errorId`
     * @public
     * @static
     */

    public static _enum_for_errorId = _enum_for_InvalidAccessControlFilter_errorId;
}

/**
 * @summary The Leading Root Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'errorId',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec('filter', true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [];

let _cached_decoder_for_InvalidAccessControlFilter: $.ASN1Decoder<InvalidAccessControlFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidAccessControlFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidAccessControlFilter} The decoded data structure.
 */
export function _decode_InvalidAccessControlFilter(el: _Element): InvalidAccessControlFilter {
    if (!_cached_decoder_for_InvalidAccessControlFilter) {
        _cached_decoder_for_InvalidAccessControlFilter = function (
            el: _Element
        ): InvalidAccessControlFilter {
            let errorId!: InvalidAccessControlFilter_errorId;
            let filter: OPTIONAL<CMISFilter>;
            const callbacks: $.DecodingMap = {
                errorId: (_el: _Element): void => {
                    errorId = _decode_InvalidAccessControlFilter_errorId(_el);
                },
                filter: (_el: _Element): void => {
                    filter = _decode_CMISFilter(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InvalidAccessControlFilter,
                _extension_additions_list_spec_for_InvalidAccessControlFilter,
                _root_component_type_list_2_spec_for_InvalidAccessControlFilter,
                undefined
            );
            return new InvalidAccessControlFilter (
                errorId,
                filter
            );
        };
    }
    return _cached_decoder_for_InvalidAccessControlFilter(el);
}

let _cached_encoder_for_InvalidAccessControlFilter: $.ASN1Encoder<InvalidAccessControlFilter> | null = null;

/**
 * @summary Encodes a(n) InvalidAccessControlFilter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidAccessControlFilter, encoded as an ASN.1 Element.
 */
export function _encode_InvalidAccessControlFilter(
    value: InvalidAccessControlFilter,
    elGetter: $.ASN1Encoder<InvalidAccessControlFilter>
): _Element {
    if (!_cached_encoder_for_InvalidAccessControlFilter) {
        _cached_encoder_for_InvalidAccessControlFilter = function (
            value: InvalidAccessControlFilter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_InvalidAccessControlFilter_errorId(
                            value.errorId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : _encode_CMISFilter(value.filter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InvalidAccessControlFilter(value, elGetter);
}


/* eslint-enable */
