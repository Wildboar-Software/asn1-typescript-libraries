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
    Pathname_Attribute,
    _decode_Pathname_Attribute,
    _encode_Pathname_Attribute,
} from '../IPMSFileTransferBodyPartType/Pathname-Attribute.ta.mjs';
import {
    Permitted_Actions_Attribute,
    _decode_Permitted_Actions_Attribute,
    _encode_Permitted_Actions_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Permitted-Actions-Attribute.ta.mjs';
import {
    Account_Attribute,
    _decode_Account_Attribute,
    _encode_Account_Attribute,
} from '../IPMSFileTransferBodyPartType/Account-Attribute.ta.mjs';
import {
    Date_and_Time_Attribute,
    _decode_Date_and_Time_Attribute,
    _encode_Date_and_Time_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Date-and-Time-Attribute.ta.mjs';
import {
    User_Identity_Attribute,
    _decode_User_Identity_Attribute,
    _encode_User_Identity_Attribute,
} from '../IPMSFileTransferBodyPartType/User-Identity-Attribute.ta.mjs';
import {
    Object_Availability_Attribute,
    _decode_Object_Availability_Attribute,
    _encode_Object_Availability_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Object-Availability-Attribute.ta.mjs';
import {
    Object_Size_Attribute,
    _decode_Object_Size_Attribute,
    _encode_Object_Size_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Object-Size-Attribute.ta.mjs';
import {
    Access_Control_Attribute,
    _decode_Access_Control_Attribute,
    _encode_Access_Control_Attribute,
} from '../IPMSFileTransferBodyPartType/Access-Control-Attribute.ta.mjs';
import {
    Legal_Qualification_Attribute,
    _decode_Legal_Qualification_Attribute,
    _encode_Legal_Qualification_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Legal-Qualification-Attribute.ta.mjs';
import {
    Private_Use_Attribute,
    _decode_Private_Use_Attribute,
    _encode_Private_Use_Attribute,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Private-Use-Attribute.ta.mjs';
import {
    Attribute_Extensions,
    _decode_Attribute_Extensions,
    _encode_Attribute_Extensions,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Attribute-Extensions.ta.mjs';
/**
 * @summary FileAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileAttributes ::= SEQUENCE {
 *   pathname                                      Pathname-Attribute OPTIONAL,
 *   permitted-actions
 *     [1]  Permitted-Actions-Attribute OPTIONAL,
 *   storage-account                               [3]  Account-Attribute OPTIONAL,
 *   date-and-time-of-creation
 *     [4]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-modification
 *     [5]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-read-access
 *     [6]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-attribute-modification
 *     [7]  Date-and-Time-Attribute OPTIONAL,
 *   identity-of-creator
 *     [8]  User-Identity-Attribute OPTIONAL,
 *   identity-of-last-modifier
 *     [9]  User-Identity-Attribute OPTIONAL,
 *   identity-of-last-reader
 *     [10]  User-Identity-Attribute OPTIONAL,
 *   identity-of-last-attribute-modifier
 *     [11]  User-Identity-Attribute OPTIONAL,
 *   object-availability
 *     [12]  Object-Availability-Attribute OPTIONAL,
 *   object-size
 *     [13]  Object-Size-Attribute OPTIONAL,
 *   future-object-size
 *     [14]  Object-Size-Attribute OPTIONAL,
 *   access-control
 *     [15]  Access-Control-Attribute OPTIONAL,
 *   legal-qualifications
 *     [16]  Legal-Qualification-Attribute OPTIONAL,
 *   private-use
 *     [17]  Private-Use-Attribute OPTIONAL,
 *   attribute-extensions
 *     [22]  Attribute-Extensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class FileAttributes {
    constructor(
        /**
         * @summary `pathname`.
         * @public
         * @readonly
         */
        readonly pathname: OPTIONAL<Pathname_Attribute>,
        /**
         * @summary `permitted_actions`.
         * @public
         * @readonly
         */
        readonly permitted_actions: OPTIONAL<Permitted_Actions_Attribute>,
        /**
         * @summary `storage_account`.
         * @public
         * @readonly
         */
        readonly storage_account: OPTIONAL<Account_Attribute>,
        /**
         * @summary `date_and_time_of_creation`.
         * @public
         * @readonly
         */
        readonly date_and_time_of_creation: OPTIONAL<Date_and_Time_Attribute>,
        /**
         * @summary `date_and_time_of_last_modification`.
         * @public
         * @readonly
         */
        readonly date_and_time_of_last_modification: OPTIONAL<Date_and_Time_Attribute>,
        /**
         * @summary `date_and_time_of_last_read_access`.
         * @public
         * @readonly
         */
        readonly date_and_time_of_last_read_access: OPTIONAL<Date_and_Time_Attribute>,
        /**
         * @summary `date_and_time_of_last_attribute_modification`.
         * @public
         * @readonly
         */
        readonly date_and_time_of_last_attribute_modification: OPTIONAL<Date_and_Time_Attribute>,
        /**
         * @summary `identity_of_creator`.
         * @public
         * @readonly
         */
        readonly identity_of_creator: OPTIONAL<User_Identity_Attribute>,
        /**
         * @summary `identity_of_last_modifier`.
         * @public
         * @readonly
         */
        readonly identity_of_last_modifier: OPTIONAL<User_Identity_Attribute>,
        /**
         * @summary `identity_of_last_reader`.
         * @public
         * @readonly
         */
        readonly identity_of_last_reader: OPTIONAL<User_Identity_Attribute>,
        /**
         * @summary `identity_of_last_attribute_modifier`.
         * @public
         * @readonly
         */
        readonly identity_of_last_attribute_modifier: OPTIONAL<User_Identity_Attribute>,
        /**
         * @summary `object_availability`.
         * @public
         * @readonly
         */
        readonly object_availability: OPTIONAL<Object_Availability_Attribute>,
        /**
         * @summary `object_size`.
         * @public
         * @readonly
         */
        readonly object_size: OPTIONAL<Object_Size_Attribute>,
        /**
         * @summary `future_object_size`.
         * @public
         * @readonly
         */
        readonly future_object_size: OPTIONAL<Object_Size_Attribute>,
        /**
         * @summary `access_control`.
         * @public
         * @readonly
         */
        readonly access_control: OPTIONAL<Access_Control_Attribute>,
        /**
         * @summary `legal_qualifications`.
         * @public
         * @readonly
         */
        readonly legal_qualifications: OPTIONAL<Legal_Qualification_Attribute>,
        /**
         * @summary `private_use`.
         * @public
         * @readonly
         */
        readonly private_use: OPTIONAL<Private_Use_Attribute>,
        /**
         * @summary `attribute_extensions`.
         * @public
         * @readonly
         */
        readonly attribute_extensions: OPTIONAL<Attribute_Extensions>
    ) {}

    /**
     * @summary Restructures an object into a FileAttributes
     * @description
     *
     * This takes an `object` and converts it to a `FileAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileAttributes`.
     * @returns {FileAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof FileAttributes]: FileAttributes[_K] }
    ): FileAttributes {
        return new FileAttributes(
            _o.pathname,
            _o.permitted_actions,
            _o.storage_account,
            _o.date_and_time_of_creation,
            _o.date_and_time_of_last_modification,
            _o.date_and_time_of_last_read_access,
            _o.date_and_time_of_last_attribute_modification,
            _o.identity_of_creator,
            _o.identity_of_last_modifier,
            _o.identity_of_last_reader,
            _o.identity_of_last_attribute_modifier,
            _o.object_availability,
            _o.object_size,
            _o.future_object_size,
            _o.access_control,
            _o.legal_qualifications,
            _o.private_use,
            _o.attribute_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of FileAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FileAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec('pathname', true, $.hasAnyTag),
    new $.ComponentSpec(
        'permitted-actions',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'storage-account',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'date-and-time-of-creation',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'date-and-time-of-last-modification',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'date-and-time-of-last-read-access',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'date-and-time-of-last-attribute-modification',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'identity-of-creator',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'identity-of-last-modifier',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'identity-of-last-reader',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'identity-of-last-attribute-modifier',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        'object-availability',
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'object-size',
        true,
        $.hasTag(_TagClass.context, 13)
    ),
    new $.ComponentSpec(
        'future-object-size',
        true,
        $.hasTag(_TagClass.context, 14)
    ),
    new $.ComponentSpec(
        'access-control',
        true,
        $.hasTag(_TagClass.context, 15)
    ),
    new $.ComponentSpec(
        'legal-qualifications',
        true,
        $.hasTag(_TagClass.context, 16)
    ),
    new $.ComponentSpec(
        'private-use',
        true,
        $.hasTag(_TagClass.context, 17)
    ),
    new $.ComponentSpec(
        'attribute-extensions',
        true,
        $.hasTag(_TagClass.context, 22)
    ),
];

/**
 * @summary The Trailing Root Component Types of FileAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FileAttributes: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FileAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FileAttributes: $.ComponentSpec[] = [];

let _cached_decoder_for_FileAttributes: $.ASN1Decoder<FileAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileAttributes} The decoded data structure.
 */
export function _decode_FileAttributes(el: _Element): FileAttributes {
    if (!_cached_decoder_for_FileAttributes) {
        _cached_decoder_for_FileAttributes = function (
            el: _Element
        ): FileAttributes {
            let pathname: OPTIONAL<Pathname_Attribute>;
            let permitted_actions: OPTIONAL<Permitted_Actions_Attribute>;
            let storage_account: OPTIONAL<Account_Attribute>;
            let date_and_time_of_creation: OPTIONAL<Date_and_Time_Attribute>;
            let date_and_time_of_last_modification: OPTIONAL<Date_and_Time_Attribute>;
            let date_and_time_of_last_read_access: OPTIONAL<Date_and_Time_Attribute>;
            let date_and_time_of_last_attribute_modification: OPTIONAL<Date_and_Time_Attribute>;
            let identity_of_creator: OPTIONAL<User_Identity_Attribute>;
            let identity_of_last_modifier: OPTIONAL<User_Identity_Attribute>;
            let identity_of_last_reader: OPTIONAL<User_Identity_Attribute>;
            let identity_of_last_attribute_modifier: OPTIONAL<User_Identity_Attribute>;
            let object_availability: OPTIONAL<Object_Availability_Attribute>;
            let object_size: OPTIONAL<Object_Size_Attribute>;
            let future_object_size: OPTIONAL<Object_Size_Attribute>;
            let access_control: OPTIONAL<Access_Control_Attribute>;
            let legal_qualifications: OPTIONAL<Legal_Qualification_Attribute>;
            let private_use: OPTIONAL<Private_Use_Attribute>;
            let attribute_extensions: OPTIONAL<Attribute_Extensions>;
            const callbacks: $.DecodingMap = {
                pathname: (_el: _Element): void => {
                    pathname = _decode_Pathname_Attribute(_el);
                },
                'permitted-actions': (_el: _Element): void => {
                    permitted_actions = $._decode_implicit<Permitted_Actions_Attribute>(
                        () => _decode_Permitted_Actions_Attribute
                    )(_el);
                },
                'storage-account': (_el: _Element): void => {
                    storage_account = $._decode_explicit<Account_Attribute>(
                        () => _decode_Account_Attribute
                    )(_el);
                },
                'date-and-time-of-creation': (_el: _Element): void => {
                    date_and_time_of_creation = $._decode_explicit<Date_and_Time_Attribute>(
                        () => _decode_Date_and_Time_Attribute
                    )(_el);
                },
                'date-and-time-of-last-modification': (_el: _Element): void => {
                    date_and_time_of_last_modification = $._decode_explicit<Date_and_Time_Attribute>(
                        () => _decode_Date_and_Time_Attribute
                    )(_el);
                },
                'date-and-time-of-last-read-access': (_el: _Element): void => {
                    date_and_time_of_last_read_access = $._decode_explicit<Date_and_Time_Attribute>(
                        () => _decode_Date_and_Time_Attribute
                    )(_el);
                },
                'date-and-time-of-last-attribute-modification': (
                    _el: _Element
                ): void => {
                    date_and_time_of_last_attribute_modification = $._decode_explicit<Date_and_Time_Attribute>(
                        () => _decode_Date_and_Time_Attribute
                    )(_el);
                },
                'identity-of-creator': (_el: _Element): void => {
                    identity_of_creator = $._decode_explicit<User_Identity_Attribute>(
                        () => _decode_User_Identity_Attribute
                    )(_el);
                },
                'identity-of-last-modifier': (_el: _Element): void => {
                    identity_of_last_modifier = $._decode_explicit<User_Identity_Attribute>(
                        () => _decode_User_Identity_Attribute
                    )(_el);
                },
                'identity-of-last-reader': (_el: _Element): void => {
                    identity_of_last_reader = $._decode_explicit<User_Identity_Attribute>(
                        () => _decode_User_Identity_Attribute
                    )(_el);
                },
                'identity-of-last-attribute-modifier': (
                    _el: _Element
                ): void => {
                    identity_of_last_attribute_modifier = $._decode_explicit<User_Identity_Attribute>(
                        () => _decode_User_Identity_Attribute
                    )(_el);
                },
                'object-availability': (_el: _Element): void => {
                    object_availability = $._decode_explicit<Object_Availability_Attribute>(
                        () => _decode_Object_Availability_Attribute
                    )(_el);
                },
                'object-size': (_el: _Element): void => {
                    object_size = $._decode_explicit<Object_Size_Attribute>(
                        () => _decode_Object_Size_Attribute
                    )(_el);
                },
                'future-object-size': (_el: _Element): void => {
                    future_object_size = $._decode_explicit<Object_Size_Attribute>(
                        () => _decode_Object_Size_Attribute
                    )(_el);
                },
                'access-control': (_el: _Element): void => {
                    access_control = $._decode_explicit<Access_Control_Attribute>(
                        () => _decode_Access_Control_Attribute
                    )(_el);
                },
                'legal-qualifications': (_el: _Element): void => {
                    legal_qualifications = $._decode_explicit<Legal_Qualification_Attribute>(
                        () => _decode_Legal_Qualification_Attribute
                    )(_el);
                },
                'private-use': (_el: _Element): void => {
                    private_use = $._decode_explicit<Private_Use_Attribute>(
                        () => _decode_Private_Use_Attribute
                    )(_el);
                },
                'attribute-extensions': (_el: _Element): void => {
                    attribute_extensions = $._decode_implicit<Attribute_Extensions>(
                        () => _decode_Attribute_Extensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FileAttributes,
                _extension_additions_list_spec_for_FileAttributes,
                _root_component_type_list_2_spec_for_FileAttributes,
                undefined
            );
            return new FileAttributes (
                pathname,
                permitted_actions,
                storage_account,
                date_and_time_of_creation,
                date_and_time_of_last_modification,
                date_and_time_of_last_read_access,
                date_and_time_of_last_attribute_modification,
                identity_of_creator,
                identity_of_last_modifier,
                identity_of_last_reader,
                identity_of_last_attribute_modifier,
                object_availability,
                object_size,
                future_object_size,
                access_control,
                legal_qualifications,
                private_use,
                attribute_extensions
            );
        };
    }
    return _cached_decoder_for_FileAttributes(el);
}

let _cached_encoder_for_FileAttributes: $.ASN1Encoder<FileAttributes> | null = null;

/**
 * @summary Encodes a(n) FileAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileAttributes, encoded as an ASN.1 Element.
 */
export function _encode_FileAttributes(
    value: FileAttributes,
    elGetter: $.ASN1Encoder<FileAttributes>
): _Element {
    if (!_cached_encoder_for_FileAttributes) {
        _cached_encoder_for_FileAttributes = function (
            value: FileAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.pathname === undefined
                            ? undefined
                            : _encode_Pathname_Attribute(value.pathname, $.BER),
                        /* IF_ABSENT  */ value.permitted_actions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Permitted_Actions_Attribute,
                                  $.BER
                              )(value.permitted_actions, $.BER),
                        /* IF_ABSENT  */ value.storage_account === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Account_Attribute,
                                  $.BER
                              )(value.storage_account, $.BER),
                        /* IF_ABSENT  */ value.date_and_time_of_creation ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_Date_and_Time_Attribute,
                                  $.BER
                              )(value.date_and_time_of_creation, $.BER),
                        /* IF_ABSENT  */ value.date_and_time_of_last_modification ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_Date_and_Time_Attribute,
                                  $.BER
                              )(
                                  value.date_and_time_of_last_modification,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.date_and_time_of_last_read_access ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_Date_and_Time_Attribute,
                                  $.BER
                              )(value.date_and_time_of_last_read_access, $.BER),
                        /* IF_ABSENT  */ value.date_and_time_of_last_attribute_modification ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_Date_and_Time_Attribute,
                                  $.BER
                              )(
                                  value.date_and_time_of_last_attribute_modification,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.identity_of_creator === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_User_Identity_Attribute,
                                  $.BER
                              )(value.identity_of_creator, $.BER),
                        /* IF_ABSENT  */ value.identity_of_last_modifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_User_Identity_Attribute,
                                  $.BER
                              )(value.identity_of_last_modifier, $.BER),
                        /* IF_ABSENT  */ value.identity_of_last_reader ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_User_Identity_Attribute,
                                  $.BER
                              )(value.identity_of_last_reader, $.BER),
                        /* IF_ABSENT  */ value.identity_of_last_attribute_modifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_User_Identity_Attribute,
                                  $.BER
                              )(
                                  value.identity_of_last_attribute_modifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.object_availability === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  12,
                                  () => _encode_Object_Availability_Attribute,
                                  $.BER
                              )(value.object_availability, $.BER),
                        /* IF_ABSENT  */ value.object_size === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  13,
                                  () => _encode_Object_Size_Attribute,
                                  $.BER
                              )(value.object_size, $.BER),
                        /* IF_ABSENT  */ value.future_object_size === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  14,
                                  () => _encode_Object_Size_Attribute,
                                  $.BER
                              )(value.future_object_size, $.BER),
                        /* IF_ABSENT  */ value.access_control === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  15,
                                  () => _encode_Access_Control_Attribute,
                                  $.BER
                              )(value.access_control, $.BER),
                        /* IF_ABSENT  */ value.legal_qualifications ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  16,
                                  () => _encode_Legal_Qualification_Attribute,
                                  $.BER
                              )(value.legal_qualifications, $.BER),
                        /* IF_ABSENT  */ value.private_use === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  17,
                                  () => _encode_Private_Use_Attribute,
                                  $.BER
                              )(value.private_use, $.BER),
                        /* IF_ABSENT  */ value.attribute_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  22,
                                  () => _encode_Attribute_Extensions,
                                  $.BER
                              )(value.attribute_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FileAttributes(value, elGetter);
}


/* eslint-enable */
