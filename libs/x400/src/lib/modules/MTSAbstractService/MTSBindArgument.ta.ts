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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectName,
    _decode_ObjectName,
    _encode_ObjectName,
} from '../MTSAbstractService/ObjectName.ta';
export {
    ObjectName,
    _decode_ObjectName,
    _encode_ObjectName,
} from '../MTSAbstractService/ObjectName.ta';
import {
    MessagesWaiting,
    _decode_MessagesWaiting,
    _encode_MessagesWaiting,
} from '../MTSAbstractService/MessagesWaiting.ta';
export {
    MessagesWaiting,
    _decode_MessagesWaiting,
    _encode_MessagesWaiting,
} from '../MTSAbstractService/MessagesWaiting.ta';
import {
    InitiatorCredentials,
    _decode_InitiatorCredentials,
    _encode_InitiatorCredentials,
} from '../MTSAbstractService/InitiatorCredentials.ta';
export {
    InitiatorCredentials,
    _decode_InitiatorCredentials,
    _encode_InitiatorCredentials,
} from '../MTSAbstractService/InitiatorCredentials.ta';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';
export {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';

/* START_OF_SYMBOL_DEFINITION MTSBindArgument */
/**
 * @summary MTSBindArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSBindArgument ::= SET {
 *   initiator-name         ObjectName,
 *   messages-waiting       [1] EXPLICIT MessagesWaiting OPTIONAL,
 *   initiator-credentials  [2]  InitiatorCredentials,
 *   security-context       [3]  SecurityContext OPTIONAL,
 *   ...,
 *   extensions
 *     [5]  SET OF ExtensionField{{MTSBindExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class MTSBindArgument {
    constructor(
        /**
         * @summary `initiator_name`.
         * @public
         * @readonly
         */
        readonly initiator_name: ObjectName,
        /**
         * @summary `messages_waiting`.
         * @public
         * @readonly
         */
        readonly messages_waiting: OPTIONAL<MessagesWaiting>,
        /**
         * @summary `initiator_credentials`.
         * @public
         * @readonly
         */
        readonly initiator_credentials: InitiatorCredentials,
        /**
         * @summary `security_context`.
         * @public
         * @readonly
         */
        readonly security_context: OPTIONAL<SecurityContext>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MTSBindArgument
     * @description
     *
     * This takes an `object` and converts it to a `MTSBindArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTSBindArgument`.
     * @returns {MTSBindArgument}
     */
    public static _from_object(
        _o: { [_K in keyof MTSBindArgument]: MTSBindArgument[_K] }
    ): MTSBindArgument {
        return new MTSBindArgument(
            _o.initiator_name,
            _o.messages_waiting,
            _o.initiator_credentials,
            _o.security_context,
            _o.extensions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSBindArgument */
/**
 * @summary The Leading Root Component Types of MTSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTSBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'initiator-name',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'messages-waiting',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'initiator-credentials',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-context',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSBindArgument */
/**
 * @summary The Trailing Root Component Types of MTSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTSBindArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSBindArgument */
/**
 * @summary The Extension Addition Component Types of MTSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTSBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindArgument */
let _cached_decoder_for_MTSBindArgument: $.ASN1Decoder<MTSBindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _decode_MTSBindArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) MTSBindArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSBindArgument} The decoded data structure.
 */
export function _decode_MTSBindArgument(el: _Element) {
    if (!_cached_decoder_for_MTSBindArgument) {
        _cached_decoder_for_MTSBindArgument = function (
            el: _Element
        ): MTSBindArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let initiator_name!: ObjectName;
            let messages_waiting: OPTIONAL<MessagesWaiting>;
            let initiator_credentials!: InitiatorCredentials;
            let security_context: OPTIONAL<SecurityContext>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MTSBindArgument._default_value_for_extensions;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'initiator-name': (_el: _Element): void => {
                    initiator_name = _decode_ObjectName(_el);
                },
                'messages-waiting': (_el: _Element): void => {
                    messages_waiting = $._decode_explicit<MessagesWaiting>(
                        () => _decode_MessagesWaiting
                    )(_el);
                },
                'initiator-credentials': (_el: _Element): void => {
                    initiator_credentials = $._decode_explicit<InitiatorCredentials>(
                        () => _decode_InitiatorCredentials
                    )(_el);
                },
                'security-context': (_el: _Element): void => {
                    security_context = $._decode_implicit<SecurityContext>(
                        () => _decode_SecurityContext
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MTSBindArgument,
                _extension_additions_list_spec_for_MTSBindArgument,
                _root_component_type_list_2_spec_for_MTSBindArgument,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MTSBindArgument /* SET_CONSTRUCTOR_CALL */(
                initiator_name,
                messages_waiting,
                initiator_credentials,
                security_context,
                extensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MTSBindArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindArgument */
let _cached_encoder_for_MTSBindArgument: $.ASN1Encoder<MTSBindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindArgument */

/* START_OF_SYMBOL_DEFINITION _encode_MTSBindArgument */
/**
 * @summary Encodes a(n) MTSBindArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSBindArgument, encoded as an ASN.1 Element.
 */
export function _encode_MTSBindArgument(
    value: MTSBindArgument,
    elGetter: $.ASN1Encoder<MTSBindArgument>
) {
    if (!_cached_encoder_for_MTSBindArgument) {
        _cached_encoder_for_MTSBindArgument = function (
            value: MTSBindArgument,
            elGetter: $.ASN1Encoder<MTSBindArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectName(
                                value.initiator_name,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.messages_waiting ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_MessagesWaiting,
                                      $.BER
                                  )(value.messages_waiting, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_InitiatorCredentials,
                                $.BER
                            )(value.initiator_credentials, $.BER),
                            /* IF_ABSENT  */ value.security_context ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_SecurityContext,
                                      $.BER
                                  )(value.security_context, $.BER),
                        ],
                        [
                            /* IF_DEFAULT */ value.extensions === undefined ||
                            $.deepEq(
                                value.extensions,
                                MTSBindArgument._default_value_for_extensions
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSetOf<ExtensionField>(
                                              () => _encode_ExtensionField,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.extensions, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MTSBindArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTSBindArgument */

/* eslint-enable */
