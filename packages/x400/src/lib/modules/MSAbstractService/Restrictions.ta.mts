/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OBJECT_IDENTIFIER,
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
    MS_EITs,
    _decode_MS_EITs,
    _encode_MS_EITs,
} from '../MSAbstractService/MS-EITs.ta.mjs';
/**
 * @summary Restrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restrictions ::= SET {
 *   allowed-content-types
 *     [0]  SET SIZE (1..ub-content-types) OF OBJECT IDENTIFIER OPTIONAL--default is no restriction--,
 *   allowed-EITs              [1]  MS-EITs OPTIONAL --default is no restriction--,
 *   maximum-attribute-length  [2]  INTEGER OPTIONAL --default is no restriction--
 * }
 * ```
 *
 */
export class Restrictions {
    constructor(
        /**
         * @summary `allowed_content_types`.
         * @public
         * @readonly
         */
        readonly allowed_content_types: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `allowed_EITs`.
         * @public
         * @readonly
         */
        readonly allowed_EITs: OPTIONAL<MS_EITs>,
        /**
         * @summary `maximum_attribute_length`.
         * @public
         * @readonly
         */
        readonly maximum_attribute_length: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Restrictions
     * @description
     *
     * This takes an `object` and converts it to a `Restrictions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Restrictions`.
     * @returns {Restrictions}
     */
    public static _from_object(
        _o: { [_K in keyof Restrictions]: Restrictions[_K] }
    ): Restrictions {
        return new Restrictions(
            _o.allowed_content_types,
            _o.allowed_EITs,
            _o.maximum_attribute_length
        );
    }
}

/**
 * @summary The Leading Root Component Types of Restrictions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Restrictions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'allowed-content-types',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'allowed-EITs',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'maximum-attribute-length',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of Restrictions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Restrictions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Restrictions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Restrictions: $.ComponentSpec[] = [];

let _cached_decoder_for_Restrictions: $.ASN1Decoder<Restrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Restrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Restrictions} The decoded data structure.
 */
export function _decode_Restrictions(el: _Element): Restrictions {
    if (!_cached_decoder_for_Restrictions) {
        _cached_decoder_for_Restrictions = function (
            el: _Element
        ): Restrictions {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let allowed_content_types: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let allowed_EITs: OPTIONAL<MS_EITs>;
            let maximum_attribute_length: OPTIONAL<INTEGER>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'allowed-content-types': (_el: _Element): void => {
                    allowed_content_types = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'allowed-EITs': (_el: _Element): void => {
                    allowed_EITs = $._decode_explicit<MS_EITs>(
                        () => _decode_MS_EITs
                    )(_el);
                },
                'maximum-attribute-length': (_el: _Element): void => {
                    maximum_attribute_length = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Restrictions,
                _extension_additions_list_spec_for_Restrictions,
                _root_component_type_list_2_spec_for_Restrictions,
                undefined
            );
            return new Restrictions /* SET_CONSTRUCTOR_CALL */(
                allowed_content_types,
                allowed_EITs,
                maximum_attribute_length
            );
        };
    }
    return _cached_decoder_for_Restrictions(el);
}

let _cached_encoder_for_Restrictions: $.ASN1Encoder<Restrictions> | null = null;

/**
 * @summary Encodes a(n) Restrictions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restrictions, encoded as an ASN.1 Element.
 */
export function _encode_Restrictions(
    value: Restrictions,
    elGetter: $.ASN1Encoder<Restrictions>
): _Element {
    if (!_cached_encoder_for_Restrictions) {
        _cached_encoder_for_Restrictions = function (
            value: Restrictions        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.allowed_content_types ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.allowed_content_types, $.BER),
                        /* IF_ABSENT  */ value.allowed_EITs === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MS_EITs,
                                  $.BER
                              )(value.allowed_EITs, $.BER),
                        /* IF_ABSENT  */ value.maximum_attribute_length ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.maximum_attribute_length, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Restrictions(value, elGetter);
}


/* eslint-enable */
