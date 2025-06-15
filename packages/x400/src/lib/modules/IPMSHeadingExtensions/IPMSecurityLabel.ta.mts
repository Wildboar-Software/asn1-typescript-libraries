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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
import {
    BodyPartSecurityLabel,
    _decode_BodyPartSecurityLabel,
    _encode_BodyPartSecurityLabel,
} from '../IPMSHeadingExtensions/BodyPartSecurityLabel.ta.mjs';
/**
 * @summary IPMSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSecurityLabel ::= SEQUENCE {
 *   content-security-label     [0]  SecurityLabel,
 *   heading-security-label     [1]  SecurityLabel OPTIONAL,
 *   body-part-security-labels  [2]  SEQUENCE OF BodyPartSecurityLabel OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IPMSecurityLabel {
    constructor(
        /**
         * @summary `content_security_label`.
         * @public
         * @readonly
         */
        readonly content_security_label: SecurityLabel,
        /**
         * @summary `heading_security_label`.
         * @public
         * @readonly
         */
        readonly heading_security_label: OPTIONAL<SecurityLabel>,
        /**
         * @summary `body_part_security_labels`.
         * @public
         * @readonly
         */
        readonly body_part_security_labels: OPTIONAL<BodyPartSecurityLabel[]>
    ) {}

    /**
     * @summary Restructures an object into a IPMSecurityLabel
     * @description
     *
     * This takes an `object` and converts it to a `IPMSecurityLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMSecurityLabel`.
     * @returns {IPMSecurityLabel}
     */
    public static _from_object(
        _o: { [_K in keyof IPMSecurityLabel]: IPMSecurityLabel[_K] }
    ): IPMSecurityLabel {
        return new IPMSecurityLabel(
            _o.content_security_label,
            _o.heading_security_label,
            _o.body_part_security_labels
        );
    }
}

/**
 * @summary The Leading Root Component Types of IPMSecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMSecurityLabel: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-security-label',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'heading-security-label',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'body-part-security-labels',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of IPMSecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMSecurityLabel: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IPMSecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMSecurityLabel: $.ComponentSpec[] = [];

let _cached_decoder_for_IPMSecurityLabel: $.ASN1Decoder<IPMSecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMSecurityLabel} The decoded data structure.
 */
export function _decode_IPMSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_IPMSecurityLabel) {
        _cached_decoder_for_IPMSecurityLabel = function (
            el: _Element
        ): IPMSecurityLabel {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let content_security_label!: SecurityLabel;
            let heading_security_label: OPTIONAL<SecurityLabel>;
            let body_part_security_labels: OPTIONAL<BodyPartSecurityLabel[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-security-label': (_el: _Element): void => {
                    content_security_label = $._decode_implicit<SecurityLabel>(
                        () => _decode_SecurityLabel
                    )(_el);
                },
                'heading-security-label': (_el: _Element): void => {
                    heading_security_label = $._decode_implicit<SecurityLabel>(
                        () => _decode_SecurityLabel
                    )(_el);
                },
                'body-part-security-labels': (_el: _Element): void => {
                    body_part_security_labels = $._decode_implicit<
                        BodyPartSecurityLabel[]
                    >(() =>
                        $._decodeSequenceOf<BodyPartSecurityLabel>(
                            () => _decode_BodyPartSecurityLabel
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMSecurityLabel,
                _extension_additions_list_spec_for_IPMSecurityLabel,
                _root_component_type_list_2_spec_for_IPMSecurityLabel,
                undefined
            );
            return new IPMSecurityLabel /* SEQUENCE_CONSTRUCTOR_CALL */(
                content_security_label,
                heading_security_label,
                body_part_security_labels
            );
        };
    }
    return _cached_decoder_for_IPMSecurityLabel(el);
}

let _cached_encoder_for_IPMSecurityLabel: $.ASN1Encoder<IPMSecurityLabel> | null = null;

/**
 * @summary Encodes a(n) IPMSecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_IPMSecurityLabel(
    value: IPMSecurityLabel,
    elGetter: $.ASN1Encoder<IPMSecurityLabel>
) {
    if (!_cached_encoder_for_IPMSecurityLabel) {
        _cached_encoder_for_IPMSecurityLabel = function (
            value: IPMSecurityLabel        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_SecurityLabel,
                            $.BER
                        )(value.content_security_label, $.BER),
                        /* IF_ABSENT  */ value.heading_security_label ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SecurityLabel,
                                  $.BER
                              )(value.heading_security_label, $.BER),
                        /* IF_ABSENT  */ value.body_part_security_labels ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSequenceOf<BodyPartSecurityLabel>(
                                          () => _encode_BodyPartSecurityLabel,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.body_part_security_labels, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMSecurityLabel(value, elGetter);
}


/* eslint-enable */
