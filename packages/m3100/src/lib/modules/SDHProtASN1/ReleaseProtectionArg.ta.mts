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
    SwitchType,
    _enum_for_SwitchType,
    _decode_SwitchType,
    _encode_SwitchType,
} from '../SDHProtASN1/SwitchType.ta.mjs';
import {
    ProtectionEntity,
    _decode_ProtectionEntity,
    _encode_ProtectionEntity,
} from '../SDHProtASN1/ProtectionEntity.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/**
 * @summary ReleaseProtectionArg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionArg ::= SEQUENCE {
 *   switchType        SwitchType,
 *   protectionEntity  ProtectionEntity,
 *   otherInfo         SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ReleaseProtectionArg {
    constructor(
        /**
         * @summary `switchType`.
         * @public
         * @readonly
         */
        readonly switchType: SwitchType,
        /**
         * @summary `protectionEntity`.
         * @public
         * @readonly
         */
        readonly protectionEntity: ProtectionEntity,
        /**
         * @summary `otherInfo`.
         * @public
         * @readonly
         */
        readonly otherInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a ReleaseProtectionArg
     * @description
     *
     * This takes an `object` and converts it to a `ReleaseProtectionArg`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseProtectionArg`.
     * @returns {ReleaseProtectionArg}
     */
    public static _from_object(
        _o: { [_K in keyof ReleaseProtectionArg]: ReleaseProtectionArg[_K] }
    ): ReleaseProtectionArg {
        return new ReleaseProtectionArg(
            _o.switchType,
            _o.protectionEntity,
            _o.otherInfo
        );
    }

    /**
     * @summary The enum used as the type of the component `switchType`
     * @public
     * @static
     */

    public static _enum_for_switchType = _enum_for_SwitchType;
}


/**
 * @summary The Leading Root Component Types of ReleaseProtectionArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReleaseProtectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'switchType',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'protectionEntity',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'otherInfo',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of ReleaseProtectionArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReleaseProtectionArg: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReleaseProtectionArg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReleaseProtectionArg: $.ComponentSpec[] = [];


let _cached_decoder_for_ReleaseProtectionArg: $.ASN1Decoder<ReleaseProtectionArg> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseProtectionArg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseProtectionArg} The decoded data structure.
 */
export function _decode_ReleaseProtectionArg(el: _Element) {
    if (!_cached_decoder_for_ReleaseProtectionArg) {
        _cached_decoder_for_ReleaseProtectionArg = function (
            el: _Element
        ): ReleaseProtectionArg {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let switchType!: SwitchType;
            let protectionEntity!: ProtectionEntity;
            let otherInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                switchType: (_el: _Element): void => {
                    switchType = _decode_SwitchType(_el);
                },
                protectionEntity: (_el: _Element): void => {
                    protectionEntity = _decode_ProtectionEntity(_el);
                },
                otherInfo: (_el: _Element): void => {
                    otherInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReleaseProtectionArg,
                _extension_additions_list_spec_for_ReleaseProtectionArg,
                _root_component_type_list_2_spec_for_ReleaseProtectionArg,
                undefined
            );
            return new ReleaseProtectionArg /* SEQUENCE_CONSTRUCTOR_CALL */(
                switchType,
                protectionEntity,
                otherInfo
            );
        };
    }
    return _cached_decoder_for_ReleaseProtectionArg(el);
}


let _cached_encoder_for_ReleaseProtectionArg: $.ASN1Encoder<ReleaseProtectionArg> | null = null;


/**
 * @summary Encodes a(n) ReleaseProtectionArg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseProtectionArg, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseProtectionArg(
    value: ReleaseProtectionArg,
    elGetter: $.ASN1Encoder<ReleaseProtectionArg>
) {
    if (!_cached_encoder_for_ReleaseProtectionArg) {
        _cached_encoder_for_ReleaseProtectionArg = function (
            value: ReleaseProtectionArg        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SwitchType(
                            value.switchType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ProtectionEntity(
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
    return _cached_encoder_for_ReleaseProtectionArg(value, elGetter);
}


/* eslint-enable */
