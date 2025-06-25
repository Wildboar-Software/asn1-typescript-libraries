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
    RequestSource,
    _enum_for_RequestSource,
    _decode_RequestSource,
    _encode_RequestSource,
} from '../SDHProtASN1/RequestSource.ta.mjs';
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
} from '../SDHProtASN1/FromAndToProtectionUnit.ta.mjs';

/**
 * @summary ProtectionStatus_Item_forcedSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatus-Item-forcedSwitch ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ProtectionStatus_Item_forcedSwitch {
    constructor(
        /**
         * @summary `requestSource`.
         * @public
         * @readonly
         */
        readonly requestSource: OPTIONAL<RequestSource>,
        /**
         * @summary `switchStatus`.
         * @public
         * @readonly
         */
        readonly switchStatus: SwitchStatus,
        /**
         * @summary `relatedChannel`.
         * @public
         * @readonly
         */
        readonly relatedChannel: FromAndToProtectionUnit
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatus_Item_forcedSwitch
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatus_Item_forcedSwitch`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatus_Item_forcedSwitch`.
     * @returns {ProtectionStatus_Item_forcedSwitch}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatus_Item_forcedSwitch]: ProtectionStatus_Item_forcedSwitch[_K];
        }
    ): ProtectionStatus_Item_forcedSwitch {
        return new ProtectionStatus_Item_forcedSwitch(
            _o.requestSource,
            _o.switchStatus,
            _o.relatedChannel
        );
    }

    /**
     * @summary The enum used as the type of the component `requestSource`
     * @public
     * @static
     */

    public static _enum_for_requestSource = _enum_for_RequestSource;
    /**
     * @summary The enum used as the type of the component `switchStatus`
     * @public
     * @static
     */

    public static _enum_for_switchStatus = _enum_for_SwitchStatus;
}


/**
 * @summary The Leading Root Component Types of ProtectionStatus_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatus_Item_forcedSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'requestSource',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'switchStatus',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'relatedChannel',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of ProtectionStatus_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatus_Item_forcedSwitch: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtectionStatus_Item_forcedSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatus_Item_forcedSwitch: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtectionStatus_Item_forcedSwitch: $.ASN1Decoder<ProtectionStatus_Item_forcedSwitch> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatus_Item_forcedSwitch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatus_Item_forcedSwitch} The decoded data structure.
 */
export function _decode_ProtectionStatus_Item_forcedSwitch(el: _Element): ProtectionStatus_Item_forcedSwitch {
    if (!_cached_decoder_for_ProtectionStatus_Item_forcedSwitch) {
        _cached_decoder_for_ProtectionStatus_Item_forcedSwitch = function (
            el: _Element
        ): ProtectionStatus_Item_forcedSwitch {
            let requestSource: OPTIONAL<RequestSource>;
            let switchStatus!: SwitchStatus;
            let relatedChannel!: FromAndToProtectionUnit;
            const callbacks: $.DecodingMap = {
                requestSource: (_el: _Element): void => {
                    requestSource = $._decode_implicit<RequestSource>(
                        () => _decode_RequestSource
                    )(_el);
                },
                switchStatus: (_el: _Element): void => {
                    switchStatus = $._decode_implicit<SwitchStatus>(
                        () => _decode_SwitchStatus
                    )(_el);
                },
                relatedChannel: (_el: _Element): void => {
                    relatedChannel = $._decode_explicit<FromAndToProtectionUnit>(
                        () => _decode_FromAndToProtectionUnit
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectionStatus_Item_forcedSwitch,
                _extension_additions_list_spec_for_ProtectionStatus_Item_forcedSwitch,
                _root_component_type_list_2_spec_for_ProtectionStatus_Item_forcedSwitch,
                undefined
            );
            return new ProtectionStatus_Item_forcedSwitch (
                requestSource,
                switchStatus,
                relatedChannel
            );
        };
    }
    return _cached_decoder_for_ProtectionStatus_Item_forcedSwitch(el);
}


let _cached_encoder_for_ProtectionStatus_Item_forcedSwitch: $.ASN1Encoder<ProtectionStatus_Item_forcedSwitch> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatus_Item_forcedSwitch into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatus_Item_forcedSwitch, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatus_Item_forcedSwitch(
    value: ProtectionStatus_Item_forcedSwitch,
    elGetter: $.ASN1Encoder<ProtectionStatus_Item_forcedSwitch>
): _Element {
    if (!_cached_encoder_for_ProtectionStatus_Item_forcedSwitch) {
        _cached_encoder_for_ProtectionStatus_Item_forcedSwitch = function (
            value: ProtectionStatus_Item_forcedSwitch        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.requestSource === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RequestSource,
                                  $.BER
                              )(value.requestSource, $.BER),
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
                        )(value.relatedChannel, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatus_Item_forcedSwitch(
        value,
        elGetter
    );
}


/* eslint-enable */
