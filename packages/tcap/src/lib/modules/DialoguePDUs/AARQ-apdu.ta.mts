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
    AARQ_apdu_protocol_version,
    AARQ_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AARQ_apdu_protocol_version,
    _encode_AARQ_apdu_protocol_version,
} from '../DialoguePDUs/AARQ-apdu-protocol-version.ta.mjs';
/**
 * @summary AARQ_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   application-context-name  [1]  OBJECT IDENTIFIER,
 *   user-information          [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AARQ_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARQ_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: OBJECT_IDENTIFIER,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<EXTERNAL[]>
    ) {}

    /**
     * @summary Restructures an object into a AARQ_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARQ_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARQ_apdu`.
     * @returns {AARQ_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AARQ_apdu]: AARQ_apdu[_K] }
    ): AARQ_apdu {
        return new AARQ_apdu(
            _o.protocol_version,
            _o.application_context_name,
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
            _ret[AARQ_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARQ_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'application-context-name',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'user-information',
        true,
        $.hasTag(_TagClass.context, 30)
    ),
];

/**
 * @summary The Trailing Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARQ_apdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARQ_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_AARQ_apdu: $.ASN1Decoder<AARQ_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AARQ_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARQ_apdu} The decoded data structure.
 */
export function _decode_AARQ_apdu(el: _Element) {
    if (!_cached_decoder_for_AARQ_apdu) {
        _cached_decoder_for_AARQ_apdu = $._decode_implicit<AARQ_apdu>(
            () =>
                function (el: _Element): AARQ_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AARQ_apdu_protocol_version> =
                        AARQ_apdu._default_value_for_protocol_version;
                    let application_context_name!: OBJECT_IDENTIFIER;
                    let user_information: OPTIONAL<EXTERNAL[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        'protocol-version': (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AARQ_apdu_protocol_version>(
                                () => _decode_AARQ_apdu_protocol_version
                            )(_el);
                        },
                        'application-context-name': (_el: _Element): void => {
                            application_context_name = $._decode_explicit<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
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
                        _root_component_type_list_1_spec_for_AARQ_apdu,
                        _extension_additions_list_spec_for_AARQ_apdu,
                        _root_component_type_list_2_spec_for_AARQ_apdu,
                        undefined
                    );
                    return new AARQ_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
                        protocol_version,
                        application_context_name,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARQ_apdu(el);
}

let _cached_encoder_for_AARQ_apdu: $.ASN1Encoder<AARQ_apdu> | null = null;

/**
 * @summary Encodes a(n) AARQ_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARQ_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARQ_apdu(
    value: AARQ_apdu,
    elGetter: $.ASN1Encoder<AARQ_apdu>
) {
    if (!_cached_encoder_for_AARQ_apdu) {
        _cached_encoder_for_AARQ_apdu = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: AARQ_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARQ_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARQ_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => $._encodeObjectIdentifier,
                                    $.BER
                                )(value.application_context_name, $.BER),
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
    return _cached_encoder_for_AARQ_apdu(value, elGetter);
}


/* eslint-enable */
