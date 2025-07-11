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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RegistrationTypes_registrations,
    _decode_RegistrationTypes_registrations,
    _encode_RegistrationTypes_registrations,
} from '../MSAbstractService/RegistrationTypes-registrations.ta.mjs';
import {
    MessageGroupsRestriction,
    _decode_MessageGroupsRestriction,
    _encode_MessageGroupsRestriction,
} from '../MSAbstractService/MessageGroupsRestriction.ta.mjs';
/**
 * @summary RegistrationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationTypes ::= SET {
 *   registrations
 *     [0]  BIT STRING {auto-action-registrations(0), list-attribute-defaults(1),
 *                      fetch-attribute-defaults(2), ua-registrations(3),
 *                      submission-defaults(4), message-group-registrations(5)}
 *       OPTIONAL,
 *   extended-registrations   [1]  SET OF MS-EXTENSION.&id OPTIONAL,
 *   restrict-message-groups  [2]  MessageGroupsRestriction OPTIONAL
 * }
 * ```
 *
 */
export class RegistrationTypes {
    constructor(
        /**
         * @summary `registrations`.
         * @public
         * @readonly
         */
        readonly registrations: OPTIONAL<RegistrationTypes_registrations>,
        /**
         * @summary `extended_registrations`.
         * @public
         * @readonly
         */
        readonly extended_registrations: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `restrict_message_groups`.
         * @public
         * @readonly
         */
        readonly restrict_message_groups: OPTIONAL<MessageGroupsRestriction>
    ) {}

    /**
     * @summary Restructures an object into a RegistrationTypes
     * @description
     *
     * This takes an `object` and converts it to a `RegistrationTypes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistrationTypes`.
     * @returns {RegistrationTypes}
     */
    public static _from_object(
        _o: { [_K in keyof RegistrationTypes]: RegistrationTypes[_K] }
    ): RegistrationTypes {
        return new RegistrationTypes(
            _o.registrations,
            _o.extended_registrations,
            _o.restrict_message_groups
        );
    }
}

/**
 * @summary The Leading Root Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegistrationTypes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'registrations',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'extended-registrations',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'restrict-message-groups',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationTypes: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationTypes: $.ComponentSpec[] = [];

let _cached_decoder_for_RegistrationTypes: $.ASN1Decoder<RegistrationTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes} The decoded data structure.
 */
export function _decode_RegistrationTypes(el: _Element): RegistrationTypes {
    if (!_cached_decoder_for_RegistrationTypes) {
        _cached_decoder_for_RegistrationTypes = function (
            el: _Element
        ): RegistrationTypes {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let registrations: OPTIONAL<RegistrationTypes_registrations>;
            let extended_registrations: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let restrict_message_groups: OPTIONAL<MessageGroupsRestriction>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                registrations: (_el: _Element): void => {
                    registrations = $._decode_explicit<RegistrationTypes_registrations>(
                        () => _decode_RegistrationTypes_registrations
                    )(_el);
                },
                'extended-registrations': (_el: _Element): void => {
                    extended_registrations = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'restrict-message-groups': (_el: _Element): void => {
                    restrict_message_groups = $._decode_explicit<MessageGroupsRestriction>(
                        () => _decode_MessageGroupsRestriction
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RegistrationTypes,
                _extension_additions_list_spec_for_RegistrationTypes,
                _root_component_type_list_2_spec_for_RegistrationTypes,
                undefined
            );
            return new RegistrationTypes /* SET_CONSTRUCTOR_CALL */(
                registrations,
                extended_registrations,
                restrict_message_groups
            );
        };
    }
    return _cached_decoder_for_RegistrationTypes(el);
}

let _cached_encoder_for_RegistrationTypes: $.ASN1Encoder<RegistrationTypes> | null = null;

/**
 * @summary Encodes a(n) RegistrationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes(
    value: RegistrationTypes,
    elGetter: $.ASN1Encoder<RegistrationTypes>
): _Element {
    if (!_cached_encoder_for_RegistrationTypes) {
        _cached_encoder_for_RegistrationTypes = function (
            value: RegistrationTypes        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.registrations === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RegistrationTypes_registrations,
                                  $.BER
                              )(value.registrations, $.BER),
                        /* IF_ABSENT  */ value.extended_registrations ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extended_registrations, $.BER),
                        /* IF_ABSENT  */ value.restrict_message_groups ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_MessageGroupsRestriction,
                                  $.BER
                              )(value.restrict_message_groups, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RegistrationTypes(value, elGetter);
}


/* eslint-enable */
