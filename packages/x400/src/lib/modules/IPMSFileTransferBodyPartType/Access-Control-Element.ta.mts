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
    Access_Request,
    Access_Request_read /* IMPORTED_LONG_NAMED_BIT */,
    read /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_insert /* IMPORTED_LONG_NAMED_BIT */,
    insert /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_replace /* IMPORTED_LONG_NAMED_BIT */,
    replace /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_extend /* IMPORTED_LONG_NAMED_BIT */,
    extend /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_erase /* IMPORTED_LONG_NAMED_BIT */,
    erase /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_read_attribute /* IMPORTED_LONG_NAMED_BIT */,
    read_attribute /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_change_attribute /* IMPORTED_LONG_NAMED_BIT */,
    change_attribute /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_delete_object /* IMPORTED_LONG_NAMED_BIT */,
    delete_object /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Access_Request,
    _encode_Access_Request,
} from '../IPMSFileTransferBodyPartType/Access-Request.ta.mjs';
export {
    Access_Request,
    Access_Request_read /* IMPORTED_LONG_NAMED_BIT */,
    read /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_insert /* IMPORTED_LONG_NAMED_BIT */,
    insert /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_replace /* IMPORTED_LONG_NAMED_BIT */,
    replace /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_extend /* IMPORTED_LONG_NAMED_BIT */,
    extend /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_erase /* IMPORTED_LONG_NAMED_BIT */,
    erase /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_read_attribute /* IMPORTED_LONG_NAMED_BIT */,
    read_attribute /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_change_attribute /* IMPORTED_LONG_NAMED_BIT */,
    change_attribute /* IMPORTED_SHORT_NAMED_BIT */,
    Access_Request_delete_object /* IMPORTED_LONG_NAMED_BIT */,
    delete_object /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Access_Request,
    _encode_Access_Request,
} from '../IPMSFileTransferBodyPartType/Access-Request.ta.mjs';
import {
    Concurrency_Access,
    _decode_Concurrency_Access,
    _encode_Concurrency_Access,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Concurrency-Access.ta.mjs';
export {
    Concurrency_Access,
    _decode_Concurrency_Access,
    _encode_Concurrency_Access,
} from '@wildboar/ftam/src/lib/modules/ISO8571-FTAM/Concurrency-Access.ta.mjs';
import {
    User_Identity,
    _decode_User_Identity,
    _encode_User_Identity,
} from '../IPMSFileTransferBodyPartType/User-Identity.ta.mjs';
export {
    User_Identity,
    _decode_User_Identity,
    _encode_User_Identity,
} from '../IPMSFileTransferBodyPartType/User-Identity.ta.mjs';
import {
    Access_Passwords,
    _decode_Access_Passwords,
    _encode_Access_Passwords,
} from '../IPMSFileTransferBodyPartType/Access-Passwords.ta.mjs';
export {
    Access_Passwords,
    _decode_Access_Passwords,
    _encode_Access_Passwords,
} from '../IPMSFileTransferBodyPartType/Access-Passwords.ta.mjs';
import {
    Application_Entity_Title,
    _decode_Application_Entity_Title,
    _encode_Application_Entity_Title,
} from '../IPMSFileTransferBodyPartType/Application-Entity-Title.ta.mjs';
export {
    Application_Entity_Title,
    _decode_Application_Entity_Title,
    _encode_Application_Entity_Title,
} from '../IPMSFileTransferBodyPartType/Application-Entity-Title.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Access_Control_Element */
/**
 * @summary Access_Control_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Control-Element ::= SEQUENCE {
 *   action-list         [0]  Access-Request,
 *   concurrency-access  [1]  Concurrency-Access OPTIONAL,
 *   identity            [2]  User-Identity OPTIONAL,
 *   passwords           [3]  Access-Passwords OPTIONAL,
 *   location            [4]  Application-Entity-Title OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Access_Control_Element {
    constructor(
        /**
         * @summary `action_list`.
         * @public
         * @readonly
         */
        readonly action_list: Access_Request,
        /**
         * @summary `concurrency_access`.
         * @public
         * @readonly
         */
        readonly concurrency_access: OPTIONAL<Concurrency_Access>,
        /**
         * @summary `identity`.
         * @public
         * @readonly
         */
        readonly identity: OPTIONAL<User_Identity>,
        /**
         * @summary `passwords`.
         * @public
         * @readonly
         */
        readonly passwords: OPTIONAL<Access_Passwords>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Application_Entity_Title>
    ) {}

    /**
     * @summary Restructures an object into a Access_Control_Element
     * @description
     *
     * This takes an `object` and converts it to a `Access_Control_Element`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Access_Control_Element`.
     * @returns {Access_Control_Element}
     */
    public static _from_object(
        _o: { [_K in keyof Access_Control_Element]: Access_Control_Element[_K] }
    ): Access_Control_Element {
        return new Access_Control_Element(
            _o.action_list,
            _o.concurrency_access,
            _o.identity,
            _o.passwords,
            _o.location
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Control_Element */
/**
 * @summary The Leading Root Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Control_Element: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'action-list',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'concurrency-access',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'identity',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'passwords',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'location',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Control_Element */
/**
 * @summary The Trailing Root Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Control_Element: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Control_Element */
/**
 * @summary The Extension Addition Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Control_Element: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Control_Element */
let _cached_decoder_for_Access_Control_Element: $.ASN1Decoder<Access_Control_Element> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Control_Element */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_Element
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Control_Element} The decoded data structure.
 */
export function _decode_Access_Control_Element(el: _Element) {
    if (!_cached_decoder_for_Access_Control_Element) {
        _cached_decoder_for_Access_Control_Element = function (
            el: _Element
        ): Access_Control_Element {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let action_list!: Access_Request;
            let concurrency_access: OPTIONAL<Concurrency_Access>;
            let identity: OPTIONAL<User_Identity>;
            let passwords: OPTIONAL<Access_Passwords>;
            let location: OPTIONAL<Application_Entity_Title>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'action-list': (_el: _Element): void => {
                    action_list = $._decode_implicit<Access_Request>(
                        () => _decode_Access_Request
                    )(_el);
                },
                'concurrency-access': (_el: _Element): void => {
                    concurrency_access = $._decode_implicit<Concurrency_Access>(
                        () => _decode_Concurrency_Access
                    )(_el);
                },
                identity: (_el: _Element): void => {
                    identity = $._decode_implicit<User_Identity>(
                        () => _decode_User_Identity
                    )(_el);
                },
                passwords: (_el: _Element): void => {
                    passwords = $._decode_implicit<Access_Passwords>(
                        () => _decode_Access_Passwords
                    )(_el);
                },
                location: (_el: _Element): void => {
                    location = $._decode_implicit<Application_Entity_Title>(
                        () => _decode_Application_Entity_Title
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Access_Control_Element,
                _extension_additions_list_spec_for_Access_Control_Element,
                _root_component_type_list_2_spec_for_Access_Control_Element,
                undefined
            );
            return new Access_Control_Element /* SEQUENCE_CONSTRUCTOR_CALL */(
                action_list,
                concurrency_access,
                identity,
                passwords,
                location
            );
        };
    }
    return _cached_decoder_for_Access_Control_Element(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Control_Element */
let _cached_encoder_for_Access_Control_Element: $.ASN1Encoder<Access_Control_Element> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Control_Element */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Control_Element */
/**
 * @summary Encodes a(n) Access_Control_Element into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_Element, encoded as an ASN.1 Element.
 */
export function _encode_Access_Control_Element(
    value: Access_Control_Element,
    elGetter: $.ASN1Encoder<Access_Control_Element>
) {
    if (!_cached_encoder_for_Access_Control_Element) {
        _cached_encoder_for_Access_Control_Element = function (
            value: Access_Control_Element,
            elGetter: $.ASN1Encoder<Access_Control_Element>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Access_Request,
                            $.BER
                        )(value.action_list, $.BER),
                        /* IF_ABSENT  */ value.concurrency_access === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Concurrency_Access,
                                  $.BER
                              )(value.concurrency_access, $.BER),
                        /* IF_ABSENT  */ value.identity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_User_Identity,
                                  $.BER
                              )(value.identity, $.BER),
                        /* IF_ABSENT  */ value.passwords === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Access_Passwords,
                                  $.BER
                              )(value.passwords, $.BER),
                        /* IF_ABSENT  */ value.location === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_Application_Entity_Title,
                                  $.BER
                              )(value.location, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Access_Control_Element(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Control_Element */

/* eslint-enable */
