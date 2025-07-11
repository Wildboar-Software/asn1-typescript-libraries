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
/**
 * @summary IdmBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindResult{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   result             [1]  IDM-PROTOCOL.&bind-operation.&ResultType
 *                             ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 */
export class IdmBindResult {
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
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBindResult
     * @description
     *
     * This takes an `object` and converts it to a `IdmBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBindResult`.
     * @returns {IdmBindResult}
     */
    public static _from_object(
        _o: { [_K in keyof IdmBindResult]: IdmBindResult[_K] }
    ): IdmBindResult {
        return new IdmBindResult(
            _o.protocolID,
            _o.respondingAETitle,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBindResult: $.ComponentSpec[] = [
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
        "result",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBindResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBindResult: $.ComponentSpec[] = [];

let _cached_decoder_for_IdmBindResult: $.ASN1Decoder<IdmBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindResult} The decoded data structure.
 */
export function _decode_IdmBindResult(el: _Element): IdmBindResult {
    if (!_cached_decoder_for_IdmBindResult) {
        _cached_decoder_for_IdmBindResult = function (
            el: _Element
        ): IdmBindResult {
            let protocolID!: OBJECT_IDENTIFIER;
            let respondingAETitle: OPTIONAL<GeneralName>;
            let result!: _Element;
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
                result: (_el: _Element): void => {
                    result = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindResult,
                _extension_additions_list_spec_for_IdmBindResult,
                _root_component_type_list_2_spec_for_IdmBindResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBindResult(
                protocolID,
                respondingAETitle,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBindResult(el);
}

let _cached_encoder_for_IdmBindResult: $.ASN1Encoder<IdmBindResult> | null = null;

/**
 * @summary Encodes a(n) IdmBindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindResult, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindResult(
    value: IdmBindResult,
    elGetter: $.ASN1Encoder<IdmBindResult>
): _Element {
    if (!_cached_encoder_for_IdmBindResult) {
        _cached_encoder_for_IdmBindResult = function (
            value: IdmBindResult        ): _Element {
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
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.DER
                            )(value.result, $.DER),
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
    return _cached_encoder_for_IdmBindResult(value, elGetter);
}


/* eslint-enable */
