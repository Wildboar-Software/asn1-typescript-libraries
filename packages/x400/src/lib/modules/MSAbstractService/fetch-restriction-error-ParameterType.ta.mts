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
    fetch_restriction_error_ParameterType_problems_Item,
    _decode_fetch_restriction_error_ParameterType_problems_Item,
    _encode_fetch_restriction_error_ParameterType_problems_Item,
} from '../MSAbstractService/fetch-restriction-error-ParameterType-problems-Item.ta.mjs';
/**
 * @summary fetch_restriction_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fetch-restriction-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class fetch_restriction_error_ParameterType {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: fetch_restriction_error_ParameterType_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a fetch_restriction_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `fetch_restriction_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `fetch_restriction_error_ParameterType`.
     * @returns {fetch_restriction_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof fetch_restriction_error_ParameterType]: fetch_restriction_error_ParameterType[_K];
        }
    ): fetch_restriction_error_ParameterType {
        return new fetch_restriction_error_ParameterType(_o.problems);
    }
}

/**
 * @summary The Leading Root Component Types of fetch_restriction_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of fetch_restriction_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of fetch_restriction_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_fetch_restriction_error_ParameterType: $.ComponentSpec[] = [];

let _cached_decoder_for_fetch_restriction_error_ParameterType: $.ASN1Decoder<fetch_restriction_error_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) fetch_restriction_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {fetch_restriction_error_ParameterType} The decoded data structure.
 */
export function _decode_fetch_restriction_error_ParameterType(el: _Element): fetch_restriction_error_ParameterType {
    if (!_cached_decoder_for_fetch_restriction_error_ParameterType) {
        _cached_decoder_for_fetch_restriction_error_ParameterType = function (
            el: _Element
        ): fetch_restriction_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: fetch_restriction_error_ParameterType_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_explicit<
                        fetch_restriction_error_ParameterType_problems_Item[]
                    >(() =>
                        $._decodeSetOf<fetch_restriction_error_ParameterType_problems_Item>(
                            () =>
                                _decode_fetch_restriction_error_ParameterType_problems_Item
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType,
                _extension_additions_list_spec_for_fetch_restriction_error_ParameterType,
                _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType,
                undefined
            );
            return new fetch_restriction_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problems
            );
        };
    }
    return _cached_decoder_for_fetch_restriction_error_ParameterType(el);
}

let _cached_encoder_for_fetch_restriction_error_ParameterType: $.ASN1Encoder<fetch_restriction_error_ParameterType> | null = null;

/**
 * @summary Encodes a(n) fetch_restriction_error_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The fetch_restriction_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_fetch_restriction_error_ParameterType(
    value: fetch_restriction_error_ParameterType,
    elGetter: $.ASN1Encoder<fetch_restriction_error_ParameterType>
): _Element {
    if (!_cached_encoder_for_fetch_restriction_error_ParameterType) {
        _cached_encoder_for_fetch_restriction_error_ParameterType = function (
            value: fetch_restriction_error_ParameterType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<fetch_restriction_error_ParameterType_problems_Item>(
                                    () =>
                                        _encode_fetch_restriction_error_ParameterType_problems_Item,
                                    $.BER
                                ),
                            $.BER
                        )(value.problems, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_fetch_restriction_error_ParameterType(
        value,
        elGetter
    );
}


/* eslint-enable */
