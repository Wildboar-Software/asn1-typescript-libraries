/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
import {
    IdmBindError_aETitleError,
    _decode_IdmBindError_aETitleError,
    _encode_IdmBindError_aETitleError,
    _enum_for_IdmBindError_aETitleError,
} from "../IDMProtocolSpecification/IdmBindError-aETitleError.ta.mjs";
/**
 * @summary IdmBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 * --errcode                 IDM-PROTOCOL.&bind-operation.&Errors.&errorCode OPTIONAL
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   aETitleError            ENUMERATED {
 *     callingAETitleNotAccepted  (0),
 *     calledAETitleNotRecognized (1),
 *     ...} OPTIONAL,
 *   error              [1]  IDM-PROTOCOL.&bind-operation.&Errors.&ParameterType
 *                             ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 */
export class IdmBindError {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `respondingAETitle`.
         * @public
         * @readonly
         */
        readonly respondingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `aETitleError`.
         * @public
         * @readonly
         */
        readonly aETitleError: OPTIONAL<IdmBindError_aETitleError>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBindError
     * @description
     *
     * This takes an `object` and converts it to a `IdmBindError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBindError`.
     * @returns {IdmBindError}
     */
    public static _from_object(
        _o: { [_K in keyof IdmBindError]: IdmBindError[_K] }
    ): IdmBindError {
        return new IdmBindError(
            _o.protocolID,
            _o.respondingAETitle,
            _o.aETitleError,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `aETitleError`
     * @public
     * @static
     */

    public static _enum_for_aETitleError = _enum_for_IdmBindError_aETitleError;
}

/**
 * @summary The Leading Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBindError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "respondingAETitle",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "aETitleError",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "error",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBindError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBindError: $.ComponentSpec[] = [];

let _cached_decoder_for_IdmBindError: $.ASN1Decoder<IdmBindError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindError} The decoded data structure.
 */
export function _decode_IdmBindError(el: _Element): IdmBindError {
    if (!_cached_decoder_for_IdmBindError) {
        _cached_decoder_for_IdmBindError = function (
            el: _Element
        ): IdmBindError {
            let protocolID!: OBJECT_IDENTIFIER;
            let respondingAETitle: OPTIONAL<GeneralName>;
            let aETitleError: OPTIONAL<IdmBindError_aETitleError>;
            let error!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: _Element): void => {
                    respondingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                aETitleError: (_el: _Element): void => {
                    aETitleError = _decode_IdmBindError_aETitleError(_el);
                },
                error: (_el: _Element): void => {
                    error = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindError,
                _extension_additions_list_spec_for_IdmBindError,
                _root_component_type_list_2_spec_for_IdmBindError,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBindError(
                protocolID,
                respondingAETitle,
                aETitleError,
                error,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBindError(el);
}

let _cached_encoder_for_IdmBindError: $.ASN1Encoder<IdmBindError> | null = null;

/**
 * @summary Encodes a(n) IdmBindError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindError, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindError(
    value: IdmBindError,
    elGetter: $.ASN1Encoder<IdmBindError>
): _Element {
    if (!_cached_encoder_for_IdmBindError) {
        _cached_encoder_for_IdmBindError = function (
            value: IdmBindError        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.DER
                                  )(value.respondingAETitle, $.DER),
                            /* IF_ABSENT  */ value.aETitleError === undefined
                                ? undefined
                                : _encode_IdmBindError_aETitleError(
                                      value.aETitleError,
                                      $.DER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.DER
                            )(value.error, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_IdmBindError(value, elGetter);
}


/* eslint-enable */
