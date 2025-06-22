/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from "./AutoActionType.ta.mjs";

/**
 * @summary AutoActionRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionRegistration ::= SEQUENCE {
 *   auto-action-type         AUTO-ACTION.&id({AutoActionTable}),
 *   registration-identifier  [0]  INTEGER(1..ub-per-auto-action) DEFAULT 1,
 *   registration-parameter
 *     [1]  AUTO-ACTION.&RegistrationParameter
 *            ({AutoActionTable}{@auto-action-type}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AutoActionRegistration {
    constructor(
        /**
         * @summary `auto_action_type`.
         * @public
         * @readonly
         */
        readonly auto_action_type: AutoActionType,
        /**
         * @summary `registration_identifier`.
         * @public
         * @readonly
         */
        readonly registration_identifier: OPTIONAL<INTEGER>,
        /**
         * @summary `registration_parameter`.
         * @public
         * @readonly
         */
        readonly registration_parameter: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a AutoActionRegistration
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionRegistration`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionRegistration`.
     * @returns {AutoActionRegistration}
     */
    public static _from_object(
        _o: { [_K in keyof AutoActionRegistration]: AutoActionRegistration[_K] }
    ): AutoActionRegistration {
        return new AutoActionRegistration(
            _o.auto_action_type,
            _o.registration_identifier,
            _o.registration_parameter
        );
    }

    /**
     * @summary Getter that returns the default value for `registration_identifier`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_registration_identifier() {
        return 1;
    }
}

/**
 * @summary The Leading Root Component Types of AutoActionRegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-action-type',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'registration-identifier',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'registration-parameter',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoActionRegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionRegistration: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoActionRegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionRegistration: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoActionRegistration: $.ASN1Decoder<AutoActionRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionRegistration} The decoded data structure.
 */
export function _decode_AutoActionRegistration(el: _Element) {
    if (!_cached_decoder_for_AutoActionRegistration) {
        _cached_decoder_for_AutoActionRegistration = function (
            el: _Element
        ): AutoActionRegistration {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let auto_action_type!: AutoActionType;
            let registration_identifier: OPTIONAL<INTEGER> =
                AutoActionRegistration._default_value_for_registration_identifier;
            let registration_parameter: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-action-type': (_el: _Element): void => {
                    auto_action_type = _decode_AutoActionType(_el);
                },
                'registration-identifier': (_el: _Element): void => {
                    registration_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'registration-parameter': (_el: _Element): void => {
                    registration_parameter = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionRegistration,
                _extension_additions_list_spec_for_AutoActionRegistration,
                _root_component_type_list_2_spec_for_AutoActionRegistration,
                undefined
            );
            return new AutoActionRegistration /* SEQUENCE_CONSTRUCTOR_CALL */(
                auto_action_type,
                registration_identifier,
                registration_parameter
            );
        };
    }
    return _cached_decoder_for_AutoActionRegistration(el);
}

let _cached_encoder_for_AutoActionRegistration: $.ASN1Encoder<AutoActionRegistration> | null = null;

/**
 * @summary Encodes a(n) AutoActionRegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionRegistration, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionRegistration(
    value: AutoActionRegistration,
    elGetter: $.ASN1Encoder<AutoActionRegistration>
) {
    if (!_cached_encoder_for_AutoActionRegistration) {
        _cached_encoder_for_AutoActionRegistration = function (
            value: AutoActionRegistration        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AutoActionType(
                            value.auto_action_type,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.registration_identifier ===
                            undefined ||
                        $.deepEq(
                            value.registration_identifier,
                            AutoActionRegistration._default_value_for_registration_identifier
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.registration_identifier, $.BER),
                        /* IF_ABSENT  */ value.registration_parameter ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.registration_parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoActionRegistration(value, elGetter);
}


/* eslint-enable */
