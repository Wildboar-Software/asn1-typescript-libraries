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
    ObjectName,
    _decode_ObjectName,
    _encode_ObjectName,
} from '../MTSAbstractService/ObjectName.ta.mjs';
import {
    MessagesWaiting,
    _decode_MessagesWaiting,
    _encode_MessagesWaiting,
} from '../MTSAbstractService/MessagesWaiting.ta.mjs';
import {
    ResponderCredentials,
    _decode_ResponderCredentials,
    _encode_ResponderCredentials,
} from '../MTSAbstractService/ResponderCredentials.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MTSBindResult */
/**
 * @summary MTSBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSBindResult ::= SET {
 *   responder-name         ObjectName,
 *   messages-waiting       [1] EXPLICIT MessagesWaiting OPTIONAL,
 *   responder-credentials  [2]  ResponderCredentials,
 *   ...,
 *   extensions
 *     [5]  SET OF ExtensionField{{MTSBindResultExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class MTSBindResult {
    constructor(
        /**
         * @summary `responder_name`.
         * @public
         * @readonly
         */
        readonly responder_name: ObjectName,
        /**
         * @summary `messages_waiting`.
         * @public
         * @readonly
         */
        readonly messages_waiting: OPTIONAL<MessagesWaiting>,
        /**
         * @summary `responder_credentials`.
         * @public
         * @readonly
         */
        readonly responder_credentials: ResponderCredentials,
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
     * @summary Restructures an object into a MTSBindResult
     * @description
     *
     * This takes an `object` and converts it to a `MTSBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTSBindResult`.
     * @returns {MTSBindResult}
     */
    public static _from_object(
        _o: { [_K in keyof MTSBindResult]: MTSBindResult[_K] }
    ): MTSBindResult {
        return new MTSBindResult(
            _o.responder_name,
            _o.messages_waiting,
            _o.responder_credentials,
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
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSBindResult */
/**
 * @summary The Leading Root Component Types of MTSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTSBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'responder-name',
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
        'responder-credentials',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSBindResult */
/**
 * @summary The Trailing Root Component Types of MTSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTSBindResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSBindResult */
/**
 * @summary The Extension Addition Component Types of MTSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTSBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindResult */
let _cached_decoder_for_MTSBindResult: $.ASN1Decoder<MTSBindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _decode_MTSBindResult */
/**
 * @summary Decodes an ASN.1 element into a(n) MTSBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSBindResult} The decoded data structure.
 */
export function _decode_MTSBindResult(el: _Element) {
    if (!_cached_decoder_for_MTSBindResult) {
        _cached_decoder_for_MTSBindResult = function (
            el: _Element
        ): MTSBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let responder_name!: ObjectName;
            let messages_waiting: OPTIONAL<MessagesWaiting>;
            let responder_credentials!: ResponderCredentials;
            let extensions: OPTIONAL<ExtensionField[]> =
                MTSBindResult._default_value_for_extensions;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'responder-name': (_el: _Element): void => {
                    responder_name = _decode_ObjectName(_el);
                },
                'messages-waiting': (_el: _Element): void => {
                    messages_waiting = $._decode_explicit<MessagesWaiting>(
                        () => _decode_MessagesWaiting
                    )(_el);
                },
                'responder-credentials': (_el: _Element): void => {
                    responder_credentials = $._decode_explicit<ResponderCredentials>(
                        () => _decode_ResponderCredentials
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
                _root_component_type_list_1_spec_for_MTSBindResult,
                _extension_additions_list_spec_for_MTSBindResult,
                _root_component_type_list_2_spec_for_MTSBindResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MTSBindResult /* SET_CONSTRUCTOR_CALL */(
                responder_name,
                messages_waiting,
                responder_credentials,
                extensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MTSBindResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindResult */
let _cached_encoder_for_MTSBindResult: $.ASN1Encoder<MTSBindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSBindResult */

/* START_OF_SYMBOL_DEFINITION _encode_MTSBindResult */
/**
 * @summary Encodes a(n) MTSBindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSBindResult, encoded as an ASN.1 Element.
 */
export function _encode_MTSBindResult(
    value: MTSBindResult,
    elGetter: $.ASN1Encoder<MTSBindResult>
) {
    if (!_cached_encoder_for_MTSBindResult) {
        _cached_encoder_for_MTSBindResult = function (
            value: MTSBindResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectName(
                                value.responder_name,
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
                                () => _encode_ResponderCredentials,
                                $.BER
                            )(value.responder_credentials, $.BER),
                        ],
                        [
                            /* IF_DEFAULT */ value.extensions === undefined ||
                            $.deepEq(
                                value.extensions,
                                MTSBindResult._default_value_for_extensions
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
    return _cached_encoder_for_MTSBindResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTSBindResult */

/* eslint-enable */
