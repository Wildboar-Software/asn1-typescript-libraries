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
    PrimaryOrRemoved,
    _decode_PrimaryOrRemoved,
    _encode_PrimaryOrRemoved,
} from '../EDIMSInformationObjects/PrimaryOrRemoved.ta.mjs';
import {
    AdditionalBodyParts,
    _decode_AdditionalBodyParts,
    _encode_AdditionalBodyParts,
} from '../EDIMSInformationObjects/AdditionalBodyParts.ta.mjs';
/**
 * @summary BodyOrRemoved
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyOrRemoved ::= SEQUENCE {
 *   primary-or-removed     PrimaryOrRemoved,
 *   additional-body-parts  AdditionalBodyParts OPTIONAL
 * }
 * ```
 *
 */
export class BodyOrRemoved {
    constructor(
        /**
         * @summary `primary_or_removed`.
         * @public
         * @readonly
         */
        readonly primary_or_removed: PrimaryOrRemoved,
        /**
         * @summary `additional_body_parts`.
         * @public
         * @readonly
         */
        readonly additional_body_parts: OPTIONAL<AdditionalBodyParts>
    ) {}

    /**
     * @summary Restructures an object into a BodyOrRemoved
     * @description
     *
     * This takes an `object` and converts it to a `BodyOrRemoved`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyOrRemoved`.
     * @returns {BodyOrRemoved}
     */
    public static _from_object(
        _o: { [_K in keyof BodyOrRemoved]: BodyOrRemoved[_K] }
    ): BodyOrRemoved {
        return new BodyOrRemoved(
            _o.primary_or_removed,
            _o.additional_body_parts
        );
    }
}

/**
 * @summary The Leading Root Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyOrRemoved: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary-or-removed',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'additional-body-parts',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyOrRemoved: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyOrRemoved: $.ComponentSpec[] = [];

let _cached_decoder_for_BodyOrRemoved: $.ASN1Decoder<BodyOrRemoved> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyOrRemoved
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyOrRemoved} The decoded data structure.
 */
export function _decode_BodyOrRemoved(el: _Element): BodyOrRemoved {
    if (!_cached_decoder_for_BodyOrRemoved) {
        _cached_decoder_for_BodyOrRemoved = function (
            el: _Element
        ): BodyOrRemoved {
            let primary_or_removed!: PrimaryOrRemoved;
            let additional_body_parts: OPTIONAL<AdditionalBodyParts>;
            const callbacks: $.DecodingMap = {
                'primary-or-removed': (_el: _Element): void => {
                    primary_or_removed = _decode_PrimaryOrRemoved(_el);
                },
                'additional-body-parts': (_el: _Element): void => {
                    additional_body_parts = _decode_AdditionalBodyParts(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BodyOrRemoved,
                _extension_additions_list_spec_for_BodyOrRemoved,
                _root_component_type_list_2_spec_for_BodyOrRemoved,
                undefined
            );
            return new BodyOrRemoved (
                primary_or_removed,
                additional_body_parts
            );
        };
    }
    return _cached_decoder_for_BodyOrRemoved(el);
}

let _cached_encoder_for_BodyOrRemoved: $.ASN1Encoder<BodyOrRemoved> | null = null;

/**
 * @summary Encodes a(n) BodyOrRemoved into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyOrRemoved, encoded as an ASN.1 Element.
 */
export function _encode_BodyOrRemoved(
    value: BodyOrRemoved,
    elGetter: $.ASN1Encoder<BodyOrRemoved>
): _Element {
    if (!_cached_encoder_for_BodyOrRemoved) {
        _cached_encoder_for_BodyOrRemoved = function (
            value: BodyOrRemoved        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PrimaryOrRemoved(
                            value.primary_or_removed,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additional_body_parts ===
                        undefined
                            ? undefined
                            : _encode_AdditionalBodyParts(
                                  value.additional_body_parts,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BodyOrRemoved(value, elGetter);
}


/* eslint-enable */
