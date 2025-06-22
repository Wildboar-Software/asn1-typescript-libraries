/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    DescriptionString,
    _decode_DescriptionString,
    _encode_DescriptionString,
} from '../IPMSHeadingExtensions/DescriptionString.ta.mjs';
/**
 * @summary InformationCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationCategory ::= SEQUENCE {
 *   reference    [0]  OBJECT IDENTIFIER OPTIONAL,
 *   description  [1]  DescriptionString OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class InformationCategory {
    constructor(
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<DescriptionString>
    ) {}

    /**
     * @summary Restructures an object into a InformationCategory
     * @description
     *
     * This takes an `object` and converts it to a `InformationCategory`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationCategory`.
     * @returns {InformationCategory}
     */
    public static _from_object(
        _o: { [_K in keyof InformationCategory]: InformationCategory[_K] }
    ): InformationCategory {
        return new InformationCategory(_o.reference, _o.description);
    }
}

/**
 * @summary The Leading Root Component Types of InformationCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InformationCategory: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'reference',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'description',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of InformationCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InformationCategory: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InformationCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InformationCategory: $.ComponentSpec[] = [];

let _cached_decoder_for_InformationCategory: $.ASN1Decoder<InformationCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationCategory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationCategory} The decoded data structure.
 */
export function _decode_InformationCategory(el: _Element) {
    if (!_cached_decoder_for_InformationCategory) {
        _cached_decoder_for_InformationCategory = function (
            el: _Element
        ): InformationCategory {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reference: OPTIONAL<OBJECT_IDENTIFIER>;
            let description: OPTIONAL<DescriptionString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reference: (_el: _Element): void => {
                    reference = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = $._decode_implicit<DescriptionString>(
                        () => _decode_DescriptionString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InformationCategory,
                _extension_additions_list_spec_for_InformationCategory,
                _root_component_type_list_2_spec_for_InformationCategory,
                undefined
            );
            return new InformationCategory /* SEQUENCE_CONSTRUCTOR_CALL */(
                reference,
                description
            );
        };
    }
    return _cached_decoder_for_InformationCategory(el);
}

let _cached_encoder_for_InformationCategory: $.ASN1Encoder<InformationCategory> | null = null;

/**
 * @summary Encodes a(n) InformationCategory into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationCategory, encoded as an ASN.1 Element.
 */
export function _encode_InformationCategory(
    value: InformationCategory,
    elGetter: $.ASN1Encoder<InformationCategory>
) {
    if (!_cached_encoder_for_InformationCategory) {
        _cached_encoder_for_InformationCategory = function (
            value: InformationCategory        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.reference === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.reference, $.BER),
                        /* IF_ABSENT  */ value.description === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DescriptionString,
                                  $.BER
                              )(value.description, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InformationCategory(value, elGetter);
}


/* eslint-enable */
