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
    Password,
    _decode_Password,
    _encode_Password,
} from '../IPMSFileTransferBodyPartType/Password.ta.js';
export {
    Password,
    _decode_Password,
    _encode_Password,
} from '../IPMSFileTransferBodyPartType/Password.ta.js';
import {
    Pass_Passwords,
    _decode_Pass_Passwords,
    _encode_Pass_Passwords,
} from '../IPMSFileTransferBodyPartType/Pass-Passwords.ta.js';
export {
    Pass_Passwords,
    _decode_Pass_Passwords,
    _encode_Pass_Passwords,
} from '../IPMSFileTransferBodyPartType/Pass-Passwords.ta.js';

/* START_OF_SYMBOL_DEFINITION Access_Passwords */
/**
 * @summary Access_Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Passwords ::= SEQUENCE {
 *   read-password              [0]  Password,
 *   insert-password            [1]  Password,
 *   replace-password           [2]  Password,
 *   extend-password            [3]  Password,
 *   erase-password             [4]  Password,
 *   read-attribute-password    [5]  Password,
 *   change-attribute-password  [6]  Password,
 *   delete-password            [7]  Password,
 *   pass-passwords             [8]  Pass-Passwords,
 *   link-password              [9]  Password
 * }
 * ```
 *
 * @class
 */
export class Access_Passwords {
    constructor(
        /**
         * @summary `read_password`.
         * @public
         * @readonly
         */
        readonly read_password: Password,
        /**
         * @summary `insert_password`.
         * @public
         * @readonly
         */
        readonly insert_password: Password,
        /**
         * @summary `replace_password`.
         * @public
         * @readonly
         */
        readonly replace_password: Password,
        /**
         * @summary `extend_password`.
         * @public
         * @readonly
         */
        readonly extend_password: Password,
        /**
         * @summary `erase_password`.
         * @public
         * @readonly
         */
        readonly erase_password: Password,
        /**
         * @summary `read_attribute_password`.
         * @public
         * @readonly
         */
        readonly read_attribute_password: Password,
        /**
         * @summary `change_attribute_password`.
         * @public
         * @readonly
         */
        readonly change_attribute_password: Password,
        /**
         * @summary `delete_password`.
         * @public
         * @readonly
         */
        readonly delete_password: Password,
        /**
         * @summary `pass_passwords`.
         * @public
         * @readonly
         */
        readonly pass_passwords: Pass_Passwords,
        /**
         * @summary `link_password`.
         * @public
         * @readonly
         */
        readonly link_password: Password
    ) {}

    /**
     * @summary Restructures an object into a Access_Passwords
     * @description
     *
     * This takes an `object` and converts it to a `Access_Passwords`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Access_Passwords`.
     * @returns {Access_Passwords}
     */
    public static _from_object(
        _o: { [_K in keyof Access_Passwords]: Access_Passwords[_K] }
    ): Access_Passwords {
        return new Access_Passwords(
            _o.read_password,
            _o.insert_password,
            _o.replace_password,
            _o.extend_password,
            _o.erase_password,
            _o.read_attribute_password,
            _o.change_attribute_password,
            _o.delete_password,
            _o.pass_passwords,
            _o.link_password
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Passwords */
/**
 * @summary The Leading Root Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Passwords: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'read-password',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'insert-password',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'replace-password',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extend-password',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'erase-password',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'read-attribute-password',
        false,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'change-attribute-password',
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'delete-password',
        false,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'pass-passwords',
        false,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'link-password',
        false,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Passwords */
/**
 * @summary The Trailing Root Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Passwords: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Passwords */
/**
 * @summary The Extension Addition Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Passwords: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Passwords */
let _cached_decoder_for_Access_Passwords: $.ASN1Decoder<Access_Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Passwords */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Passwords} The decoded data structure.
 */
export function _decode_Access_Passwords(el: _Element) {
    if (!_cached_decoder_for_Access_Passwords) {
        _cached_decoder_for_Access_Passwords = function (
            el: _Element
        ): Access_Passwords {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 10) {
                throw new _ConstructionError(
                    'Access-Passwords contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'read-password';
            sequence[1].name = 'insert-password';
            sequence[2].name = 'replace-password';
            sequence[3].name = 'extend-password';
            sequence[4].name = 'erase-password';
            sequence[5].name = 'read-attribute-password';
            sequence[6].name = 'change-attribute-password';
            sequence[7].name = 'delete-password';
            sequence[8].name = 'pass-passwords';
            sequence[9].name = 'link-password';
            let read_password!: Password;
            let insert_password!: Password;
            let replace_password!: Password;
            let extend_password!: Password;
            let erase_password!: Password;
            let read_attribute_password!: Password;
            let change_attribute_password!: Password;
            let delete_password!: Password;
            let pass_passwords!: Pass_Passwords;
            let link_password!: Password;
            read_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[0]);
            insert_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[1]);
            replace_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[2]);
            extend_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[3]);
            erase_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[4]);
            read_attribute_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[5]);
            change_attribute_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[6]);
            delete_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[7]);
            pass_passwords = $._decode_implicit<Pass_Passwords>(
                () => _decode_Pass_Passwords
            )(sequence[8]);
            link_password = $._decode_explicit<Password>(
                () => _decode_Password
            )(sequence[9]);
            return new Access_Passwords(
                read_password,
                insert_password,
                replace_password,
                extend_password,
                erase_password,
                read_attribute_password,
                change_attribute_password,
                delete_password,
                pass_passwords,
                link_password
            );
        };
    }
    return _cached_decoder_for_Access_Passwords(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Passwords */
let _cached_encoder_for_Access_Passwords: $.ASN1Encoder<Access_Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Passwords */
/**
 * @summary Encodes a(n) Access_Passwords into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Access_Passwords(
    value: Access_Passwords,
    elGetter: $.ASN1Encoder<Access_Passwords>
) {
    if (!_cached_encoder_for_Access_Passwords) {
        _cached_encoder_for_Access_Passwords = function (
            value: Access_Passwords,
            elGetter: $.ASN1Encoder<Access_Passwords>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Password,
                            $.BER
                        )(value.read_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Password,
                            $.BER
                        )(value.insert_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_Password,
                            $.BER
                        )(value.replace_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_Password,
                            $.BER
                        )(value.extend_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            4,
                            () => _encode_Password,
                            $.BER
                        )(value.erase_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            5,
                            () => _encode_Password,
                            $.BER
                        )(value.read_attribute_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            6,
                            () => _encode_Password,
                            $.BER
                        )(value.change_attribute_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            7,
                            () => _encode_Password,
                            $.BER
                        )(value.delete_password, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            8,
                            () => _encode_Pass_Passwords,
                            $.BER
                        )(value.pass_passwords, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            9,
                            () => _encode_Password,
                            $.BER
                        )(value.link_password, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Access_Passwords(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Passwords */

/* eslint-enable */
