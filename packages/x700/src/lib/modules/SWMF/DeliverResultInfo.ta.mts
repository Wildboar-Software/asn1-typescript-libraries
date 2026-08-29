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
    DeliverResult,
    _decode_DeliverResult,
    _encode_DeliverResult,
} from '../SWMF/DeliverResult.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';
/**
 * @summary DeliverResultInfo
 * @description
 *
 * Event information of `deliverResultNotification`, emitted by
 * softwareDistributor when distribution completes. Also the
 * positive deliver-action reply (`Deliver result info` in Table 7).
 * `{… notification(10) deliverResultNotification(3)}`. ITU-T Rec.
 * X.744 (10/96)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * §9.3 Table 7, §9.12 Table 16, A.6.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverResultInfo ::= SEQUENCE {
 *   deliverId       [0]  DeliverId OPTIONAL,
 *   deliverResult   [1]  DeliverResult,
 *   additionalInfo  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 */
export class DeliverResultInfo {
    constructor(
        /**
         * @summary `deliverId`.
         * @description
         *
         * Same id as the originating `deliver` action, when one was
         * supplied. User in Tables 7 and 16. ITU-T Rec. X.744
         * (10/96) §9.3, §9.12.
         * @public
         * @readonly
         */
        readonly deliverId: OPTIONAL<DeliverId>,
        /**
         * @summary `deliverResult`.
         * @description
         *
         * Delivery outcome (pass / specific failure / unknown).
         * Conditional in the action reply; mandatory in the
         * notification. ITU-T Rec. X.744 (10/96) §8.4.3, §9.12.
         * @public
         * @readonly
         */
        readonly deliverResult: DeliverResult,
        /**
         * @summary `additionalInfo`.
         * @description
         *
         * Management extensions. User in Tables 7 and 16. ITU-T Rec.
         * X.744 (10/96) §9.3, §9.12.
         * @public
         * @readonly
         */
        readonly additionalInfo?: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a DeliverResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `DeliverResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliverResultInfo`.
     * @returns {DeliverResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof DeliverResultInfo]: DeliverResultInfo[_K] }
    ): DeliverResultInfo {
        return new DeliverResultInfo(
            _o.deliverId,
            _o.deliverResult,
            _o.additionalInfo
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliverResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deliverId',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'deliverResult',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliverResultInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliverResultInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_DeliverResultInfo: $.ASN1Decoder<DeliverResultInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverResultInfo} The decoded data structure.
 */
export function _decode_DeliverResultInfo(el: _Element): DeliverResultInfo {
    if (!_cached_decoder_for_DeliverResultInfo) {
        _cached_decoder_for_DeliverResultInfo = function (
            el: _Element
        ): DeliverResultInfo {
            let deliverId: OPTIONAL<DeliverId>;
            let deliverResult!: DeliverResult;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                deliverId: (_el: _Element): void => {
                    deliverId = $._decode_explicit<DeliverId>(
                        () => _decode_DeliverId
                    )(_el);
                },
                deliverResult: (_el: _Element): void => {
                    deliverResult = $._decode_implicit<DeliverResult>(
                        () => _decode_DeliverResult
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliverResultInfo,
                _extension_additions_list_spec_for_DeliverResultInfo,
                _root_component_type_list_2_spec_for_DeliverResultInfo,
                undefined
            );
            return new DeliverResultInfo (
                deliverId,
                deliverResult,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_DeliverResultInfo(el);
}

let _cached_encoder_for_DeliverResultInfo: $.ASN1Encoder<DeliverResultInfo> | null = null;

/**
 * @summary Encodes a(n) DeliverResultInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeliverResultInfo(
    value: DeliverResultInfo,
    elGetter: $.ASN1Encoder<DeliverResultInfo>
): _Element {
    if (!_cached_encoder_for_DeliverResultInfo) {
        _cached_encoder_for_DeliverResultInfo = function (
            value: DeliverResultInfo        ): _Element {
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
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_DeliverResult,
                            $.BER
                        )(value.deliverResult, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliverResultInfo(value, elGetter);
}


/* eslint-enable */
