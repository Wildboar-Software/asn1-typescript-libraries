/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    EXTERNAL,
    TRUE_BIT,
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
    AARE_apdu_protocol_version,
    AARE_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AARE_apdu_protocol_version,
    _encode_AARE_apdu_protocol_version,
} from '../DialoguePDUs/AARE-apdu-protocol-version.ta.mjs';
import {
    Associate_result,
    _decode_Associate_result,
    _encode_Associate_result,
} from '../DialoguePDUs/Associate-result.ta.mjs';
import {
    Associate_source_diagnostic,
    _decode_Associate_source_diagnostic,
    _encode_Associate_source_diagnostic,
} from '../DialoguePDUs/Associate-source-diagnostic.ta.mjs';
/**
 * @summary AARE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   application-context-name  [1]  OBJECT IDENTIFIER,
 *   result                    [2]  Associate-result,
 *   result-source-diagnostic  [3]  Associate-source-diagnostic,
 *   user-information          [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AARE_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARE_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: OBJECT_IDENTIFIER,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Associate_result,
        /**
         * @summary `result_source_diagnostic`.
         * @public
         * @readonly
         */
        readonly result_source_diagnostic: Associate_source_diagnostic,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<EXTERNAL[]>
    ) {}

    /**
     * @summary Restructures an object into a AARE_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARE_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARE_apdu`.
     * @returns {AARE_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AARE_apdu]: AARE_apdu[_K] }
    ): AARE_apdu {
        return new AARE_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.result,
            _o.result_source_diagnostic,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[AARE_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARE_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'application-context-name',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'result',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'result-source-diagnostic',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-information',
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARE_apdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARE_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_AARE_apdu: $.ASN1Decoder<AARE_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu} The decoded data structure.
 */
export function _decode_AARE_apdu(el: _Element) {
    if (!_cached_decoder_for_AARE_apdu) {
        _cached_decoder_for_AARE_apdu = $._decode_implicit<AARE_apdu>(
            () =>
                function (el: _Element): AARE_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AARE_apdu_protocol_version> =
                        AARE_apdu._default_value_for_protocol_version;
                    let application_context_name!: OBJECT_IDENTIFIER;
                    let result!: Associate_result;
                    let result_source_diagnostic!: Associate_source_diagnostic;
                    let user_information: OPTIONAL<EXTERNAL[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        'protocol-version': (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AARE_apdu_protocol_version>(
                                () => _decode_AARE_apdu_protocol_version
                            )(_el);
                        },
                        'application-context-name': (_el: _Element): void => {
                            application_context_name = $._decode_explicit<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )(_el);
                        },
                        result: (_el: _Element): void => {
                            result = $._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        'result-source-diagnostic': (_el: _Element): void => {
                            result_source_diagnostic = $._decode_explicit<Associate_source_diagnostic>(
                                () => _decode_Associate_source_diagnostic
                            )(_el);
                        },
                        'user-information': (_el: _Element): void => {
                            user_information = $._decode_implicit<EXTERNAL[]>(
                                () =>
                                    $._decodeSequenceOf<EXTERNAL>(
                                        () => $._decodeExternal
                                    )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARE_apdu,
                        _extension_additions_list_spec_for_AARE_apdu,
                        _root_component_type_list_2_spec_for_AARE_apdu,
                        undefined
                    );
                    return new AARE_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
                        protocol_version,
                        application_context_name,
                        result,
                        result_source_diagnostic,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARE_apdu(el);
}

let _cached_encoder_for_AARE_apdu: $.ASN1Encoder<AARE_apdu> | null = null;

/**
 * @summary Encodes a(n) AARE_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu(
    value: AARE_apdu,
    elGetter: $.ASN1Encoder<AARE_apdu>
) {
    if (!_cached_encoder_for_AARE_apdu) {
        _cached_encoder_for_AARE_apdu = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: AARE_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARE_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARE_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => $._encodeObjectIdentifier,
                                    $.BER
                                )(value.application_context_name, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    $.BER
                                )(value.result, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    $.BER
                                )(value.result_source_diagnostic, $.BER),
                                /* IF_ABSENT  */ value.user_information ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          30,
                                          () =>
                                              $._encodeSequenceOf<EXTERNAL>(
                                                  () => $._encodeExternal,
                                                  $.BER
                                              ),
                                          $.BER
                                      )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AARE_apdu(value, elGetter);
}


/* eslint-enable */
