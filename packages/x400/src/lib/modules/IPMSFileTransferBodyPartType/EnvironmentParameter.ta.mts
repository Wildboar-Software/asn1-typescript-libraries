/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    GraphicString,
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
    GeneralIdentifier,
    _decode_GeneralIdentifier,
    _encode_GeneralIdentifier,
} from '../IPMSFileTransferBodyPartType/GeneralIdentifier.ta.mjs';
/**
 * @summary EnvironmentParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvironmentParameter ::= SEQUENCE {
 *   application-reference  [0]  GeneralIdentifier OPTIONAL,
 *   machine                [1]  GeneralIdentifier OPTIONAL,
 *   operating-system       [2]  OBJECT IDENTIFIER OPTIONAL,
 *   user-visible-string    [3]  SEQUENCE OF GraphicString OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EnvironmentParameter {
    constructor(
        /**
         * @summary `application_reference`.
         * @public
         * @readonly
         */
        readonly application_reference: OPTIONAL<GeneralIdentifier>,
        /**
         * @summary `machine`.
         * @public
         * @readonly
         */
        readonly machine: OPTIONAL<GeneralIdentifier>,
        /**
         * @summary `operating_system`.
         * @public
         * @readonly
         */
        readonly operating_system: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `user_visible_string`.
         * @public
         * @readonly
         */
        readonly user_visible_string: OPTIONAL<GraphicString[]>
    ) {}

    /**
     * @summary Restructures an object into a EnvironmentParameter
     * @description
     *
     * This takes an `object` and converts it to a `EnvironmentParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvironmentParameter`.
     * @returns {EnvironmentParameter}
     */
    public static _from_object(
        _o: { [_K in keyof EnvironmentParameter]: EnvironmentParameter[_K] }
    ): EnvironmentParameter {
        return new EnvironmentParameter(
            _o.application_reference,
            _o.machine,
            _o.operating_system,
            _o.user_visible_string
        );
    }
}

/**
 * @summary The Leading Root Component Types of EnvironmentParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnvironmentParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'application-reference',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'machine',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'operating-system',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'user-visible-string',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of EnvironmentParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnvironmentParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EnvironmentParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnvironmentParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_EnvironmentParameter: $.ASN1Decoder<EnvironmentParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnvironmentParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvironmentParameter} The decoded data structure.
 */
export function _decode_EnvironmentParameter(el: _Element) {
    if (!_cached_decoder_for_EnvironmentParameter) {
        _cached_decoder_for_EnvironmentParameter = function (
            el: _Element
        ): EnvironmentParameter {
            let application_reference: OPTIONAL<GeneralIdentifier>;
            let machine: OPTIONAL<GeneralIdentifier>;
            let operating_system: OPTIONAL<OBJECT_IDENTIFIER>;
            let user_visible_string: OPTIONAL<GraphicString[]>;
            const callbacks: $.DecodingMap = {
                'application-reference': (_el: _Element): void => {
                    application_reference = $._decode_explicit<GeneralIdentifier>(
                        () => _decode_GeneralIdentifier
                    )(_el);
                },
                machine: (_el: _Element): void => {
                    machine = $._decode_explicit<GeneralIdentifier>(
                        () => _decode_GeneralIdentifier
                    )(_el);
                },
                'operating-system': (_el: _Element): void => {
                    operating_system = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                'user-visible-string': (_el: _Element): void => {
                    user_visible_string = $._decode_implicit<GraphicString[]>(
                        () =>
                            $._decodeSequenceOf<GraphicString>(
                                () => $._decodeGraphicString
                            )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EnvironmentParameter,
                _extension_additions_list_spec_for_EnvironmentParameter,
                _root_component_type_list_2_spec_for_EnvironmentParameter,
                undefined
            );
            return new EnvironmentParameter (
                application_reference,
                machine,
                operating_system,
                user_visible_string
            );
        };
    }
    return _cached_decoder_for_EnvironmentParameter(el);
}

let _cached_encoder_for_EnvironmentParameter: $.ASN1Encoder<EnvironmentParameter> | null = null;

/**
 * @summary Encodes a(n) EnvironmentParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvironmentParameter, encoded as an ASN.1 Element.
 */
export function _encode_EnvironmentParameter(
    value: EnvironmentParameter,
    elGetter: $.ASN1Encoder<EnvironmentParameter>
) {
    if (!_cached_encoder_for_EnvironmentParameter) {
        _cached_encoder_for_EnvironmentParameter = function (
            value: EnvironmentParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.application_reference ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_GeneralIdentifier,
                                  $.BER
                              )(value.application_reference, $.BER),
                        /* IF_ABSENT  */ value.machine === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_GeneralIdentifier,
                                  $.BER
                              )(value.machine, $.BER),
                        /* IF_ABSENT  */ value.operating_system === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.operating_system, $.BER),
                        /* IF_ABSENT  */ value.user_visible_string === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSequenceOf<GraphicString>(
                                          () => $._encodeGraphicString,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.user_visible_string, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EnvironmentParameter(value, elGetter);
}


/* eslint-enable */
