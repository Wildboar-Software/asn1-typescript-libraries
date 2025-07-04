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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TerminateValidationInfo,
    _enum_for_TerminateValidationInfo,
    _decode_TerminateValidationInfo,
    _encode_TerminateValidationInfo,
} from '../SWMF/TerminateValidationInfo.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TerminateValidationArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationArgument ::= SEQUENCE {
 *   terminateValidationInfo  [0]  TerminateValidationInfo,
 *   additionalInfo           [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 */
export class TerminateValidationArgument {
    constructor(
        /**
         * @summary `terminateValidationInfo`.
         * @public
         * @readonly
         */
        readonly terminateValidationInfo: TerminateValidationInfo,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a TerminateValidationArgument
     * @description
     *
     * This takes an `object` and converts it to a `TerminateValidationArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateValidationArgument`.
     * @returns {TerminateValidationArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof TerminateValidationArgument]: TerminateValidationArgument[_K];
        }
    ): TerminateValidationArgument {
        return new TerminateValidationArgument(
            _o.terminateValidationInfo,
            _o.additionalInfo
        );
    }

    /**
     * @summary The enum used as the type of the component `terminateValidationInfo`
     * @public
     * @static
     */

    public static _enum_for_terminateValidationInfo = _enum_for_TerminateValidationInfo;
}

/**
 * @summary The Leading Root Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'terminateValidationInfo',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_TerminateValidationArgument: $.ASN1Decoder<TerminateValidationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateValidationArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateValidationArgument} The decoded data structure.
 */
export function _decode_TerminateValidationArgument(el: _Element): TerminateValidationArgument {
    if (!_cached_decoder_for_TerminateValidationArgument) {
        _cached_decoder_for_TerminateValidationArgument = function (
            el: _Element
        ): TerminateValidationArgument {
            let terminateValidationInfo!: TerminateValidationInfo;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                terminateValidationInfo: (_el: _Element): void => {
                    terminateValidationInfo = $._decode_implicit<TerminateValidationInfo>(
                        () => _decode_TerminateValidationInfo
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decode_implicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateValidationArgument,
                _extension_additions_list_spec_for_TerminateValidationArgument,
                _root_component_type_list_2_spec_for_TerminateValidationArgument,
                undefined
            );
            return new TerminateValidationArgument (
                terminateValidationInfo,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_TerminateValidationArgument(el);
}

let _cached_encoder_for_TerminateValidationArgument: $.ASN1Encoder<TerminateValidationArgument> | null = null;

/**
 * @summary Encodes a(n) TerminateValidationArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateValidationArgument, encoded as an ASN.1 Element.
 */
export function _encode_TerminateValidationArgument(
    value: TerminateValidationArgument,
    elGetter: $.ASN1Encoder<TerminateValidationArgument>
): _Element {
    if (!_cached_encoder_for_TerminateValidationArgument) {
        _cached_encoder_for_TerminateValidationArgument = function (
            value: TerminateValidationArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_TerminateValidationInfo,
                            $.BER
                        )(value.terminateValidationInfo, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TerminateValidationArgument(value, elGetter);
}


/* eslint-enable */
