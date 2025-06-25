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
    DeliverId,
    _decode_DeliverId,
    _encode_DeliverId,
} from '../SWMF/DeliverId.ta.mjs';
import {
    DistributedSoftware,
    _decode_DistributedSoftware,
    _encode_DistributedSoftware,
} from '../SWMF/DistributedSoftware.ta.mjs';
import {
    Destination,
    _decode_Destination,
    _encode_Destination,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Destination.ta.mjs';
import {
    TransferInfo,
    _decode_TransferInfo,
    _encode_TransferInfo,
} from '../SWMF/TransferInfo.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary DeliverInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverInfo ::= SEQUENCE {
 *   deliverId       [0]  DeliverId OPTIONAL,
 *   -- each delivery may have an id to correlate action and event
 *   targetSoftware  SET OF DistributedSoftware,
 *   targetSystem    [1]  Destination OPTIONAL,
 *   transferInfo    [2]  TransferInfo OPTIONAL,
 *   additionalInfo  [3]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliverInfo {
    constructor(
        /**
         * @summary `deliverId`.
         * @public
         * @readonly
         */
        readonly deliverId: OPTIONAL<DeliverId>,
        /**
         * @summary `targetSoftware`.
         * @public
         * @readonly
         */
        readonly targetSoftware: DistributedSoftware[],
        /**
         * @summary `targetSystem`.
         * @public
         * @readonly
         */
        readonly targetSystem: OPTIONAL<Destination>,
        /**
         * @summary `transferInfo`.
         * @public
         * @readonly
         */
        readonly transferInfo: OPTIONAL<TransferInfo>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a DeliverInfo
     * @description
     *
     * This takes an `object` and converts it to a `DeliverInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliverInfo`.
     * @returns {DeliverInfo}
     */
    public static _from_object(
        _o: { [_K in keyof DeliverInfo]: DeliverInfo[_K] }
    ): DeliverInfo {
        return new DeliverInfo(
            _o.deliverId,
            _o.targetSoftware,
            _o.targetSystem,
            _o.transferInfo,
            _o.additionalInfo
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeliverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliverInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deliverId',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'targetSoftware',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'targetSystem',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'transferInfo',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliverInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeliverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliverInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_DeliverInfo: $.ASN1Decoder<DeliverInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverInfo} The decoded data structure.
 */
export function _decode_DeliverInfo(el: _Element): DeliverInfo {
    if (!_cached_decoder_for_DeliverInfo) {
        _cached_decoder_for_DeliverInfo = function (el: _Element): DeliverInfo {
            let deliverId: OPTIONAL<DeliverId>;
            let targetSoftware!: DistributedSoftware[];
            let targetSystem: OPTIONAL<Destination>;
            let transferInfo: OPTIONAL<TransferInfo>;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                deliverId: (_el: _Element): void => {
                    deliverId = $._decode_explicit<DeliverId>(
                        () => _decode_DeliverId
                    )(_el);
                },
                targetSoftware: (_el: _Element): void => {
                    targetSoftware = $._decodeSetOf<DistributedSoftware>(
                        () => _decode_DistributedSoftware
                    )(_el);
                },
                targetSystem: (_el: _Element): void => {
                    targetSystem = $._decode_explicit<Destination>(
                        () => _decode_Destination
                    )(_el);
                },
                transferInfo: (_el: _Element): void => {
                    transferInfo = $._decode_implicit<TransferInfo>(
                        () => _decode_TransferInfo
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
                _root_component_type_list_1_spec_for_DeliverInfo,
                _extension_additions_list_spec_for_DeliverInfo,
                _root_component_type_list_2_spec_for_DeliverInfo,
                undefined
            );
            return new DeliverInfo (
                deliverId,
                targetSoftware,
                targetSystem,
                transferInfo,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_DeliverInfo(el);
}

let _cached_encoder_for_DeliverInfo: $.ASN1Encoder<DeliverInfo> | null = null;

/**
 * @summary Encodes a(n) DeliverInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeliverInfo(
    value: DeliverInfo,
    elGetter: $.ASN1Encoder<DeliverInfo>
): _Element {
    if (!_cached_encoder_for_DeliverInfo) {
        _cached_encoder_for_DeliverInfo = function (
            value: DeliverInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.deliverId === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_DeliverId,
                                  $.BER
                              )(value.deliverId, $.BER),
                        /* REQUIRED   */ $._encodeSetOf<DistributedSoftware>(
                            () => _encode_DistributedSoftware,
                            $.BER
                        )(value.targetSoftware, $.BER),
                        /* IF_ABSENT  */ value.targetSystem === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Destination,
                                  $.BER
                              )(value.targetSystem, $.BER),
                        /* IF_ABSENT  */ value.transferInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TransferInfo,
                                  $.BER
                              )(value.transferInfo, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
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
    return _cached_encoder_for_DeliverInfo(value, elGetter);
}


/* eslint-enable */
