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
    BIT_STRING,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AUDT_apdu_protocol_version,
    AUDT_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AUDT_apdu_protocol_version,
    _encode_AUDT_apdu_protocol_version,
} from '../UnidialoguePDUs/AUDT-apdu-protocol-version.ta.mjs';
/**
 * @summary AUDT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUDT-apdu ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   application-context-name  [1]  OBJECT IDENTIFIER,
 *   user-information          [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
 * }
 * ```
 *
 */
export class AUDT_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AUDT_apdu_protocol_version>,
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
     * @summary Restructures an object into a AUDT_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AUDT_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AUDT_apdu`.
     * @returns {AUDT_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AUDT_apdu]: AUDT_apdu[_K] }
    ): AUDT_apdu {
        return new AUDT_apdu(
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
    public static get _default_value_for_protocol_version(): BIT_STRING {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[AUDT_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AUDT_apdu: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AUDT_apdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AUDT_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_AUDT_apdu: $.ASN1Decoder<AUDT_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AUDT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AUDT_apdu} The decoded data structure.
 */
export function _decode_AUDT_apdu(el: _Element): AUDT_apdu {
    if (!_cached_decoder_for_AUDT_apdu) {
        _cached_decoder_for_AUDT_apdu = $._decode_implicit<AUDT_apdu>(
            () =>
                function (el: _Element): AUDT_apdu {
                    let protocol_version: OPTIONAL<AUDT_apdu_protocol_version> =
                        AUDT_apdu._default_value_for_protocol_version;
                    let application_context_name!: OBJECT_IDENTIFIER;
                    let user_information: OPTIONAL<EXTERNAL[]>;
                    const callbacks: $.DecodingMap = {
                        'protocol-version': (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AUDT_apdu_protocol_version>(
                                () => _decode_AUDT_apdu_protocol_version
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
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AUDT_apdu,
                        _extension_additions_list_spec_for_AUDT_apdu,
                        _root_component_type_list_2_spec_for_AUDT_apdu,
                        undefined
                    );
                    return new AUDT_apdu (
                        protocol_version,
                        application_context_name,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AUDT_apdu(el);
}

let _cached_encoder_for_AUDT_apdu: $.ASN1Encoder<AUDT_apdu> | null = null;

/**
 * @summary Encodes a(n) AUDT_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AUDT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AUDT_apdu(
    value: AUDT_apdu,
    elGetter: $.ASN1Encoder<AUDT_apdu>
): _Element {
    if (!_cached_encoder_for_AUDT_apdu) {
        _cached_encoder_for_AUDT_apdu = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: AUDT_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AUDT_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AUDT_apdu_protocol_version,
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
    return _cached_encoder_for_AUDT_apdu(value, elGetter);
}


/* eslint-enable */
