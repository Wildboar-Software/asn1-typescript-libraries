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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
import {
    AutoSwitchReason,
    _enum_for_AutoSwitchReason,
    _decode_AutoSwitchReason,
    _encode_AutoSwitchReason,
} from '../M3100ASN1Module3/AutoSwitchReason.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary ProtectionStatusR1_Item_autoSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1-Item-autoSwitch ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ProtectionStatusR1_Item_autoSwitch {
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
        readonly relatedUnit: FromAndToProtectionUnit,
        /**
         * @summary `autoSwitchReason`.
         * @public
         * @readonly
         */
        readonly autoSwitchReason: AutoSwitchReason
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatusR1_Item_autoSwitch
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatusR1_Item_autoSwitch`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatusR1_Item_autoSwitch`.
     * @returns {ProtectionStatusR1_Item_autoSwitch}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatusR1_Item_autoSwitch]: ProtectionStatusR1_Item_autoSwitch[_K];
        }
    ): ProtectionStatusR1_Item_autoSwitch {
        return new ProtectionStatusR1_Item_autoSwitch(
            _o.switchStatus,
            _o.relatedUnit,
            _o.autoSwitchReason
        );
    }

    /**
     * @summary The enum used as the type of the component `switchStatus`
     * @public
     * @static
     */

    public static _enum_for_switchStatus = _enum_for_SwitchStatus;
    /**
     * @summary The enum used as the type of the component `autoSwitchReason`
     * @public
     * @static
     */

    public static _enum_for_autoSwitchReason = _enum_for_AutoSwitchReason;
}
/* END_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary The Leading Root Component Types of ProtectionStatusR1_Item_autoSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_autoSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'switchStatus',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'relatedUnit',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'autoSwitchReason',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary The Trailing Root Component Types of ProtectionStatusR1_Item_autoSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_autoSwitch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary The Extension Addition Component Types of ProtectionStatusR1_Item_autoSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatusR1_Item_autoSwitch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item_autoSwitch */
let _cached_decoder_for_ProtectionStatusR1_Item_autoSwitch: $.ASN1Decoder<ProtectionStatusR1_Item_autoSwitch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1_Item_autoSwitch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1_Item_autoSwitch} The decoded data structure.
 */
export function _decode_ProtectionStatusR1_Item_autoSwitch(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatusR1_Item_autoSwitch) {
        _cached_decoder_for_ProtectionStatusR1_Item_autoSwitch = function (
            el: _Element
        ): ProtectionStatusR1_Item_autoSwitch {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'ProtectionStatusR1-Item-autoSwitch contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'switchStatus';
            sequence[1].name = 'relatedUnit';
            sequence[2].name = 'autoSwitchReason';
            let switchStatus!: SwitchStatus;
            let relatedUnit!: FromAndToProtectionUnit;
            let autoSwitchReason!: AutoSwitchReason;
            switchStatus = $._decode_implicit<SwitchStatus>(
                () => _decode_SwitchStatus
            )(sequence[0]);
            relatedUnit = $._decode_explicit<FromAndToProtectionUnit>(
                () => _decode_FromAndToProtectionUnit
            )(sequence[1]);
            autoSwitchReason = $._decode_implicit<AutoSwitchReason>(
                () => _decode_AutoSwitchReason
            )(sequence[2]);
            return new ProtectionStatusR1_Item_autoSwitch(
                switchStatus,
                relatedUnit,
                autoSwitchReason
            );
        };
    }
    return _cached_decoder_for_ProtectionStatusR1_Item_autoSwitch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item_autoSwitch */
let _cached_encoder_for_ProtectionStatusR1_Item_autoSwitch: $.ASN1Encoder<ProtectionStatusR1_Item_autoSwitch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item_autoSwitch */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item_autoSwitch */
/**
 * @summary Encodes a(n) ProtectionStatusR1_Item_autoSwitch into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1_Item_autoSwitch, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1_Item_autoSwitch(
    value: ProtectionStatusR1_Item_autoSwitch,
    elGetter: $.ASN1Encoder<ProtectionStatusR1_Item_autoSwitch>
) {
    if (!_cached_encoder_for_ProtectionStatusR1_Item_autoSwitch) {
        _cached_encoder_for_ProtectionStatusR1_Item_autoSwitch = function (
            value: ProtectionStatusR1_Item_autoSwitch        ): _Element {
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
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => _encode_AutoSwitchReason,
                            $.BER
                        )(value.autoSwitchReason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatusR1_Item_autoSwitch(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item_autoSwitch */

/* eslint-enable */
