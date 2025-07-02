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
    CommonFields,
    _decode_CommonFields,
    _encode_CommonFields,
} from '../EDIMSInformationObjects/CommonFields.ta.mjs';
import {
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import {
    PNExtensionsField,
    _decode_PNExtensionsField,
    _encode_PNExtensionsField,
} from '../EDIMSInformationObjects/PNExtensionsField.ta.mjs';
/**
 * @summary PositiveNotificationFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PositiveNotificationFields ::= SEQUENCE {
 *   pn-common-fields              [0]  CommonFields,
 *   pn-supplementary-information  [1]  EDISupplementaryInformation OPTIONAL,
 *   pn-extensions                 [2]  PNExtensionsField OPTIONAL
 * }
 * ```
 *
 */
export class PositiveNotificationFields {
    constructor(
        /**
         * @summary `pn_common_fields`.
         * @public
         * @readonly
         */
        readonly pn_common_fields: CommonFields,
        /**
         * @summary `pn_supplementary_information`.
         * @public
         * @readonly
         */
        readonly pn_supplementary_information: OPTIONAL<EDISupplementaryInformation>,
        /**
         * @summary `pn_extensions`.
         * @public
         * @readonly
         */
        readonly pn_extensions: OPTIONAL<PNExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a PositiveNotificationFields
     * @description
     *
     * This takes an `object` and converts it to a `PositiveNotificationFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PositiveNotificationFields`.
     * @returns {PositiveNotificationFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PositiveNotificationFields]: PositiveNotificationFields[_K];
        }
    ): PositiveNotificationFields {
        return new PositiveNotificationFields(
            _o.pn_common_fields,
            _o.pn_supplementary_information,
            _o.pn_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of PositiveNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PositiveNotificationFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pn-common-fields',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'pn-supplementary-information',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'pn-extensions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of PositiveNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PositiveNotificationFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PositiveNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PositiveNotificationFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PositiveNotificationFields: $.ASN1Decoder<PositiveNotificationFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositiveNotificationFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PositiveNotificationFields} The decoded data structure.
 */
export function _decode_PositiveNotificationFields(el: _Element): PositiveNotificationFields {
    if (!_cached_decoder_for_PositiveNotificationFields) {
        _cached_decoder_for_PositiveNotificationFields = function (
            el: _Element
        ): PositiveNotificationFields {
            let pn_common_fields!: CommonFields;
            let pn_supplementary_information: OPTIONAL<EDISupplementaryInformation>;
            let pn_extensions: OPTIONAL<PNExtensionsField>;
            const callbacks: $.DecodingMap = {
                'pn-common-fields': (_el: _Element): void => {
                    pn_common_fields = $._decode_implicit<CommonFields>(
                        () => _decode_CommonFields
                    )(_el);
                },
                'pn-supplementary-information': (_el: _Element): void => {
                    pn_supplementary_information = $._decode_implicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
                    )(_el);
                },
                'pn-extensions': (_el: _Element): void => {
                    pn_extensions = $._decode_implicit<PNExtensionsField>(
                        () => _decode_PNExtensionsField
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PositiveNotificationFields,
                _extension_additions_list_spec_for_PositiveNotificationFields,
                _root_component_type_list_2_spec_for_PositiveNotificationFields,
                undefined
            );
            return new PositiveNotificationFields (
                pn_common_fields,
                pn_supplementary_information,
                pn_extensions
            );
        };
    }
    return _cached_decoder_for_PositiveNotificationFields(el);
}

let _cached_encoder_for_PositiveNotificationFields: $.ASN1Encoder<PositiveNotificationFields> | null = null;

/**
 * @summary Encodes a(n) PositiveNotificationFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositiveNotificationFields, encoded as an ASN.1 Element.
 */
export function _encode_PositiveNotificationFields(
    value: PositiveNotificationFields,
    elGetter: $.ASN1Encoder<PositiveNotificationFields>
): _Element {
    if (!_cached_encoder_for_PositiveNotificationFields) {
        _cached_encoder_for_PositiveNotificationFields = function (
            value: PositiveNotificationFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_CommonFields,
                            $.BER
                        )(value.pn_common_fields, $.BER),
                        /* IF_ABSENT  */ value.pn_supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EDISupplementaryInformation,
                                  $.BER
                              )(value.pn_supplementary_information, $.BER),
                        /* IF_ABSENT  */ value.pn_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PNExtensionsField,
                                  $.BER
                              )(value.pn_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PositiveNotificationFields(value, elGetter);
}


/* eslint-enable */
