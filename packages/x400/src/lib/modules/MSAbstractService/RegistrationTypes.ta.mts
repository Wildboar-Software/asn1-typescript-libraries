/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    RegistrationTypes_registrations,
    RegistrationTypes_registrations_auto_action_registrations /* IMPORTED_LONG_NAMED_BIT */,
    auto_action_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_list_attribute_defaults /* IMPORTED_LONG_NAMED_BIT */,
    list_attribute_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_fetch_attribute_defaults /* IMPORTED_LONG_NAMED_BIT */,
    fetch_attribute_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_ua_registrations /* IMPORTED_LONG_NAMED_BIT */,
    ua_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_submission_defaults /* IMPORTED_LONG_NAMED_BIT */,
    submission_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_message_group_registrations /* IMPORTED_LONG_NAMED_BIT */,
    message_group_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RegistrationTypes_registrations,
    _encode_RegistrationTypes_registrations,
} from '../MSAbstractService/RegistrationTypes-registrations.ta.mjs';
export {
    RegistrationTypes_registrations,
    RegistrationTypes_registrations_auto_action_registrations /* IMPORTED_LONG_NAMED_BIT */,
    auto_action_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_list_attribute_defaults /* IMPORTED_LONG_NAMED_BIT */,
    list_attribute_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_fetch_attribute_defaults /* IMPORTED_LONG_NAMED_BIT */,
    fetch_attribute_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_ua_registrations /* IMPORTED_LONG_NAMED_BIT */,
    ua_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_submission_defaults /* IMPORTED_LONG_NAMED_BIT */,
    submission_defaults /* IMPORTED_SHORT_NAMED_BIT */,
    RegistrationTypes_registrations_message_group_registrations /* IMPORTED_LONG_NAMED_BIT */,
    message_group_registrations /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RegistrationTypes_registrations,
    _encode_RegistrationTypes_registrations,
} from '../MSAbstractService/RegistrationTypes-registrations.ta.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
export { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
import {
    MessageGroupsRestriction,
    _decode_MessageGroupsRestriction,
    _encode_MessageGroupsRestriction,
} from '../MSAbstractService/MessageGroupsRestriction.ta.mjs';
export {
    MessageGroupsRestriction,
    _decode_MessageGroupsRestriction,
    _encode_MessageGroupsRestriction,
} from '../MSAbstractService/MessageGroupsRestriction.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RegistrationTypes */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationTypes */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extended-registrations',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'restrict-message-groups',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationTypes */
/**
 * @summary The Trailing Root Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationTypes */
/**
 * @summary The Extension Addition Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes */
let _cached_decoder_for_RegistrationTypes: $.ASN1Decoder<RegistrationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes} The decoded data structure.
 */
export function _decode_RegistrationTypes(el: _Element) {
    if (!_cached_decoder_for_RegistrationTypes) {
        _cached_decoder_for_RegistrationTypes = function (
            el: _Element
        ): RegistrationTypes {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let registrations: OPTIONAL<RegistrationTypes_registrations>;
            let extended_registrations: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let restrict_message_groups: OPTIONAL<MessageGroupsRestriction>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes */
let _cached_encoder_for_RegistrationTypes: $.ASN1Encoder<RegistrationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationTypes */
/**
 * @summary Encodes a(n) RegistrationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes(
    value: RegistrationTypes,
    elGetter: $.ASN1Encoder<RegistrationTypes>
) {
    if (!_cached_encoder_for_RegistrationTypes) {
        _cached_encoder_for_RegistrationTypes = function (
            value: RegistrationTypes,
            elGetter: $.ASN1Encoder<RegistrationTypes>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationTypes */

/* eslint-enable */
