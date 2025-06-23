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
 * @summary AutoActionDeregistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionDeregistration ::= SEQUENCE {
 *   auto-action-type         AUTO-ACTION.&id({AutoActionTable}),
 *   registration-identifier  [0]  INTEGER(1..ub-per-auto-action) DEFAULT 1
 * }
 * ```
 *
 * @class
 */
export class AutoActionDeregistration {
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
        readonly registration_identifier: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a AutoActionDeregistration
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionDeregistration`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionDeregistration`.
     * @returns {AutoActionDeregistration}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoActionDeregistration]: AutoActionDeregistration[_K];
        }
    ): AutoActionDeregistration {
        return new AutoActionDeregistration(
            _o.auto_action_type,
            _o.registration_identifier
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
 * @summary The Leading Root Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [
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
];

/**
 * @summary The Trailing Root Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoActionDeregistration: $.ASN1Decoder<AutoActionDeregistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionDeregistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionDeregistration} The decoded data structure.
 */
export function _decode_AutoActionDeregistration(el: _Element) {
    if (!_cached_decoder_for_AutoActionDeregistration) {
        _cached_decoder_for_AutoActionDeregistration = function (
            el: _Element
        ): AutoActionDeregistration {
            let auto_action_type!: AutoActionType;
            let registration_identifier: OPTIONAL<INTEGER> =
                AutoActionDeregistration._default_value_for_registration_identifier;
            const callbacks: $.DecodingMap = {
                'auto-action-type': (_el: _Element): void => {
                    auto_action_type = _decode_AutoActionType(_el);
                },
                'registration-identifier': (_el: _Element): void => {
                    registration_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionDeregistration,
                _extension_additions_list_spec_for_AutoActionDeregistration,
                _root_component_type_list_2_spec_for_AutoActionDeregistration,
                undefined
            );
            return new AutoActionDeregistration (
                auto_action_type,
                registration_identifier
            );
        };
    }
    return _cached_decoder_for_AutoActionDeregistration(el);
}

let _cached_encoder_for_AutoActionDeregistration: $.ASN1Encoder<AutoActionDeregistration> | null = null;

/**
 * @summary Encodes a(n) AutoActionDeregistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionDeregistration, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionDeregistration(
    value: AutoActionDeregistration,
    elGetter: $.ASN1Encoder<AutoActionDeregistration>
) {
    if (!_cached_encoder_for_AutoActionDeregistration) {
        _cached_encoder_for_AutoActionDeregistration = function (
            value: AutoActionDeregistration        ): _Element {
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
                            AutoActionDeregistration._default_value_for_registration_identifier
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.registration_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoActionDeregistration(value, elGetter);
}


/* eslint-enable */
