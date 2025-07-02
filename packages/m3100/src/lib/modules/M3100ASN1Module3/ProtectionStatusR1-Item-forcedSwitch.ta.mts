/* eslint-disable */
import {
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
    SwitchStatus,
    _enum_for_SwitchStatus,
    _decode_SwitchStatus,
    _encode_SwitchStatus,
} from '../SDHProtASN1/SwitchStatus.ta.mjs';
import {
    FromAndToProtectionUnit,
    _decode_FromAndToProtectionUnit,
    _encode_FromAndToProtectionUnit,
} from '../M3100ASN1Module3/FromAndToProtectionUnit.ta.mjs';

/**
 * @summary ProtectionStatusR1_Item_forcedSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1-Item-forcedSwitch ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ProtectionStatusR1_Item_forcedSwitch {
    constructor(
        /**
         * @summary `switchStatus`.
         * @public
         * @readonly
         */
        readonly switchStatus: SwitchStatus,
        /**
         * @summary `relatedUnit`.
         * @public
         * @readonly
         */
        readonly relatedUnit: FromAndToProtectionUnit
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatusR1_Item_forcedSwitch
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatusR1_Item_forcedSwitch`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatusR1_Item_forcedSwitch`.
     * @returns {ProtectionStatusR1_Item_forcedSwitch}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatusR1_Item_forcedSwitch]: ProtectionStatusR1_Item_forcedSwitch[_K];
        }
    ): ProtectionStatusR1_Item_forcedSwitch {
        return new ProtectionStatusR1_Item_forcedSwitch(
            _o.switchStatus,
            _o.relatedUnit
        );
    }

    /**
     * @summary The enum used as the type of the component `switchStatus`
     * @public
     * @static
     */

    public static _enum_for_switchStatus = _enum_for_SwitchStatus;
}


/**
 * @summary The Leading Root Component Types of ProtectionStatusR1_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_forcedSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'switchStatus',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'relatedUnit',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of ProtectionStatusR1_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_forcedSwitch: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtectionStatusR1_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatusR1_Item_forcedSwitch: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtectionStatusR1_Item_forcedSwitch: $.ASN1Decoder<ProtectionStatusR1_Item_forcedSwitch> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1_Item_forcedSwitch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1_Item_forcedSwitch} The decoded data structure.
 */
export function _decode_ProtectionStatusR1_Item_forcedSwitch(el: _Element): ProtectionStatusR1_Item_forcedSwitch {
    if (!_cached_decoder_for_ProtectionStatusR1_Item_forcedSwitch) {
        _cached_decoder_for_ProtectionStatusR1_Item_forcedSwitch = function (
            el: _Element
        ): ProtectionStatusR1_Item_forcedSwitch {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ProtectionStatusR1-Item-forcedSwitch contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'switchStatus';
            sequence[1].name = 'relatedUnit';
            let switchStatus!: SwitchStatus;
            let relatedUnit!: FromAndToProtectionUnit;
            switchStatus = $._decode_implicit<SwitchStatus>(
                () => _decode_SwitchStatus
            )(sequence[0]);
            relatedUnit = $._decode_explicit<FromAndToProtectionUnit>(
                () => _decode_FromAndToProtectionUnit
            )(sequence[1]);
            return new ProtectionStatusR1_Item_forcedSwitch(
                switchStatus,
                relatedUnit
            );
        };
    }
    return _cached_decoder_for_ProtectionStatusR1_Item_forcedSwitch(el);
}


let _cached_encoder_for_ProtectionStatusR1_Item_forcedSwitch: $.ASN1Encoder<ProtectionStatusR1_Item_forcedSwitch> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatusR1_Item_forcedSwitch into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1_Item_forcedSwitch, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1_Item_forcedSwitch(
    value: ProtectionStatusR1_Item_forcedSwitch,
    elGetter: $.ASN1Encoder<ProtectionStatusR1_Item_forcedSwitch>
): _Element {
    if (!_cached_encoder_for_ProtectionStatusR1_Item_forcedSwitch) {
        _cached_encoder_for_ProtectionStatusR1_Item_forcedSwitch = function (
            value: ProtectionStatusR1_Item_forcedSwitch        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_SwitchStatus,
                            $.BER
                        )(value.switchStatus, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_FromAndToProtectionUnit,
                            $.BER
                        )(value.relatedUnit, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatusR1_Item_forcedSwitch(
        value,
        elGetter
    );
}


/* eslint-enable */
