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
    TriggerId,
    _decode_TriggerId,
    _encode_TriggerId,
} from '../CSModule/TriggerId.ta.mjs';
import {
    TriggerResultInfo_resultType,
    _decode_TriggerResultInfo_resultType,
    _encode_TriggerResultInfo_resultType,
} from '../CSModule/TriggerResultInfo-resultType.ta.mjs';
/**
 * @summary TriggerResultInfo
 * @description
 *
 * Information syntax of the `triggerResultInfo` notification
 * from a launch pad.
 *
 * Asynchronous launch pad: emit as soon as all threads for the
 * trigger have been spawned (do not wait for script results).
 * Synchronous launch pad: wait until those threads complete,
 * then emit with execution results or errors.
 *
 * `resultType` matches spawn shape: one thread, ordered
 * sequence, or parallel set. ITU-T Rec. X.753 (10/97)
 * [§3.6.6](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §3.6.7, §7.2, §8.1.7–§8.1.8, §8.2.1, A.3, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerResultInfo ::= SEQUENCE {
 *   triggerId   TriggerId,
 *   resultType
 *     CHOICE {singleTriggerResult      ResultInfoFromThread,
 *             sequentialTriggerResult  [1]  SEQUENCE OF ResultInfoFromThread,
 *             parallelTriggerResult    SET OF ResultInfoFromThread}
 * }
 * ```
 *
 */
export class TriggerResultInfo {
    constructor(
        /**
         * @summary `triggerId`.
         * @description
         *
         * Trigger this result answers. Mandatory in the trigger-
         * result service. ITU-T Rec. X.753 (10/97) §9.3.1 Table 7.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerId,
        /**
         * @summary `resultType`.
         * @description
         *
         * Per-thread results grouped as single, sequential, or
         * parallel, matching how the launch pad spawned. ITU-T Rec.
         * X.753 (10/97) §7.1–§7.2, A.8.
         * @public
         * @readonly
         */
        readonly resultType: TriggerResultInfo_resultType
    ) {}

    /**
     * @summary Restructures an object into a TriggerResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `TriggerResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerResultInfo`.
     * @returns {TriggerResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TriggerResultInfo]: TriggerResultInfo[_K] }
    ): TriggerResultInfo {
        return new TriggerResultInfo(_o.triggerId, _o.resultType);
    }
}

/**
 * @summary The Leading Root Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TriggerResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec('triggerId', false, $.hasAnyTag),
    new $.ComponentSpec('resultType', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TriggerResultInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TriggerResultInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_TriggerResultInfo: $.ASN1Decoder<TriggerResultInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerResultInfo} The decoded data structure.
 */
export function _decode_TriggerResultInfo(el: _Element): TriggerResultInfo {
    if (!_cached_decoder_for_TriggerResultInfo) {
        _cached_decoder_for_TriggerResultInfo = function (
            el: _Element
        ): TriggerResultInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TriggerResultInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'triggerId';
            sequence[1].name = 'resultType';
            let triggerId!: TriggerId;
            let resultType!: TriggerResultInfo_resultType;
            triggerId = _decode_TriggerId(sequence[0]);
            resultType = _decode_TriggerResultInfo_resultType(sequence[1]);
            return new TriggerResultInfo(triggerId, resultType);
        };
    }
    return _cached_decoder_for_TriggerResultInfo(el);
}

let _cached_encoder_for_TriggerResultInfo: $.ASN1Encoder<TriggerResultInfo> | null = null;

/**
 * @summary Encodes a(n) TriggerResultInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_TriggerResultInfo(
    value: TriggerResultInfo,
    elGetter: $.ASN1Encoder<TriggerResultInfo>
): _Element {
    if (!_cached_encoder_for_TriggerResultInfo) {
        _cached_encoder_for_TriggerResultInfo = function (
            value: TriggerResultInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TriggerId(
                            value.triggerId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TriggerResultInfo_resultType(
                            value.resultType,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TriggerResultInfo(value, elGetter);
}


/* eslint-enable */
