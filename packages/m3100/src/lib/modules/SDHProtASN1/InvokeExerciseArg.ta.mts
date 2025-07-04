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
    ProtectionEntity,
    _decode_ProtectionEntity,
    _encode_ProtectionEntity,
} from '../SDHProtASN1/ProtectionEntity.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';

/**
 * @summary InvokeExerciseArg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeExerciseArg ::= SEQUENCE {
 *   protectionEntity  ProtectionEntity OPTIONAL, -- if absent, all PUs
 *   otherInfo         SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 */
export class InvokeExerciseArg {
    constructor(
        /**
         * @summary `protectionEntity`.
         * @public
         * @readonly
         */
        readonly protectionEntity: OPTIONAL<ProtectionEntity>,
        /**
         * @summary `otherInfo`.
         * @public
         * @readonly
         */
        readonly otherInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a InvokeExerciseArg
     * @description
     *
     * This takes an `object` and converts it to a `InvokeExerciseArg`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvokeExerciseArg`.
     * @returns {InvokeExerciseArg}
     */
    public static _from_object(
        _o: { [_K in keyof InvokeExerciseArg]: InvokeExerciseArg[_K] }
    ): InvokeExerciseArg {
        return new InvokeExerciseArg(_o.protectionEntity, _o.otherInfo);
    }
}


/**
 * @summary The Leading Root Component Types of InvokeExerciseArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvokeExerciseArg: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protectionEntity',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'otherInfo',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of InvokeExerciseArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvokeExerciseArg: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of InvokeExerciseArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvokeExerciseArg: $.ComponentSpec[] = [];


let _cached_decoder_for_InvokeExerciseArg: $.ASN1Decoder<InvokeExerciseArg> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvokeExerciseArg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeExerciseArg} The decoded data structure.
 */
export function _decode_InvokeExerciseArg(el: _Element): InvokeExerciseArg {
    if (!_cached_decoder_for_InvokeExerciseArg) {
        _cached_decoder_for_InvokeExerciseArg = function (
            el: _Element
        ): InvokeExerciseArg {
            let protectionEntity: OPTIONAL<ProtectionEntity>;
            let otherInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                protectionEntity: (_el: _Element): void => {
                    protectionEntity = _decode_ProtectionEntity(_el);
                },
                otherInfo: (_el: _Element): void => {
                    otherInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InvokeExerciseArg,
                _extension_additions_list_spec_for_InvokeExerciseArg,
                _root_component_type_list_2_spec_for_InvokeExerciseArg,
                undefined
            );
            return new InvokeExerciseArg (
                protectionEntity,
                otherInfo
            );
        };
    }
    return _cached_decoder_for_InvokeExerciseArg(el);
}


let _cached_encoder_for_InvokeExerciseArg: $.ASN1Encoder<InvokeExerciseArg> | null = null;


/**
 * @summary Encodes a(n) InvokeExerciseArg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeExerciseArg, encoded as an ASN.1 Element.
 */
export function _encode_InvokeExerciseArg(
    value: InvokeExerciseArg,
    elGetter: $.ASN1Encoder<InvokeExerciseArg>
): _Element {
    if (!_cached_encoder_for_InvokeExerciseArg) {
        _cached_encoder_for_InvokeExerciseArg = function (
            value: InvokeExerciseArg        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.protectionEntity === undefined
                            ? undefined
                            : _encode_ProtectionEntity(
                                  value.protectionEntity,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.otherInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.otherInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InvokeExerciseArg(value, elGetter);
}


/* eslint-enable */
