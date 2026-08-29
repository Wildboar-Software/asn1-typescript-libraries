/* eslint-disable */
import {
    OPTIONAL,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from "@wildboar/cmip";
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
import { ThresholdLevelInd, _decode_ThresholdLevelInd, _encode_ThresholdLevelInd } from "../Attribute-ASN1Module/ThresholdLevelInd.ta.mjs";
/**
 * @summary ThresholdInfo
 * @description
 *
 * Identifies which threshold triggered an alarm, the observed value, optional
 * high/low indication for multi-level thresholds, and optional arm-time.
 * Semantics: Threshold Info of ITU-T Rec. X.733 | ISO/IEC 10164-4.
 * `{smi2AttributeID 29}`. ITU-T Rec. X.721 (02/92) §10.7.1.24, §14.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThresholdInfo ::= SEQUENCE {
 *   triggeredThreshold  AttributeId,
 *   observedValue       ObservedValue,
 *   thresholdLevel      [1]  ThresholdLevelInd OPTIONAL,
 *   -- Indication needed for multilevel thresholds
 *   armTime             [2]  GeneralizedTime OPTIONAL
 * }
 * ```
 *
 */
export
class ThresholdInfo {
    constructor (
        /**
         * @summary `triggeredThreshold`.
         * @description
         *
         * Attribute ID of the threshold that fired. ITU-T Rec. X.721 (02/92)
         * §14.2; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.7.
         *
         * @public
         * @readonly
         */
        readonly triggeredThreshold: AttributeId,
        /**
         * @summary `observedValue`.
         * @description
         *
         * Gauge or counter value at the crossing. ITU-T Rec. X.721 (02/92)
         * §14.2; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.7.
         *
         * @public
         * @readonly
         */
        readonly observedValue: ObservedValue,
        /**
         * @summary `thresholdLevel`.
         * @description
         *
         * Present for multi-level thresholds: the high/low pair that was
         * crossed. `up` is the only permitted choice for a counter. ITU-T Rec.
         * X.721 (02/92) §14.2.
         *
         * @public
         * @readonly
         */
        readonly thresholdLevel?: OPTIONAL<ThresholdLevelInd>,
        /**
         * @summary `armTime`.
         * @description
         *
         * When the threshold was last armed (offset applied, or hysteresis
         * re-enabled, or count initialized). ITU-T Rec. X.721 (02/92)
         * §9.3.1–§9.3.2, §14.2.
         *
         * @public
         * @readonly
         */
        readonly armTime?: OPTIONAL<GeneralizedTime>
    ) {}

    /**
     * @summary Restructures an object into a ThresholdInfo
     * @description
     *
     * This takes an `object` and converts it to a `ThresholdInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ThresholdInfo`.
     * @returns {ThresholdInfo}
     */
    public static _from_object (_o: { [_K in keyof (ThresholdInfo)]: (ThresholdInfo)[_K] }): ThresholdInfo {
        return new ThresholdInfo(_o.triggeredThreshold, _o.observedValue, _o.thresholdLevel, _o.armTime);
    }


}

/**
 * @summary The Leading Root Component Types of ThresholdInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ThresholdInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("triggeredThreshold", false, $.hasAnyTag),
    new $.ComponentSpec("observedValue", false, $.hasAnyTag),
    new $.ComponentSpec("thresholdLevel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("armTime", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ThresholdInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ThresholdInfo: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ThresholdInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ThresholdInfo: $.ComponentSpec[] = [

];

let _cached_decoder_for_ThresholdInfo: $.ASN1Decoder<ThresholdInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThresholdInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThresholdInfo} The decoded data structure.
 */
export
function _decode_ThresholdInfo (el: _Element): ThresholdInfo {
    if (!_cached_decoder_for_ThresholdInfo) { _cached_decoder_for_ThresholdInfo = function (el: _Element): ThresholdInfo {
    let triggeredThreshold!: AttributeId;
    let observedValue!: ObservedValue;
    let thresholdLevel: OPTIONAL<ThresholdLevelInd>;
    let armTime: OPTIONAL<GeneralizedTime>;
    const callbacks: $.DecodingMap = {
        "triggeredThreshold": (_el: _Element): void => { triggeredThreshold = _decode_AttributeId(_el); },
        "observedValue": (_el: _Element): void => { observedValue = _decode_ObservedValue(_el); },
        "thresholdLevel": (_el: _Element): void => { thresholdLevel = $._decode_explicit<ThresholdLevelInd>(() => _decode_ThresholdLevelInd)(_el); },
        "armTime": (_el: _Element): void => { armTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ThresholdInfo,
        _extension_additions_list_spec_for_ThresholdInfo,
        _root_component_type_list_2_spec_for_ThresholdInfo,
        undefined,
    );
    return new ThresholdInfo(
        triggeredThreshold,
        observedValue,
        thresholdLevel,
        armTime
    );
}; }
    return _cached_decoder_for_ThresholdInfo(el);
}

let _cached_encoder_for_ThresholdInfo: $.ASN1Encoder<ThresholdInfo> | null = null;

/**
 * @summary Encodes a(n) ThresholdInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThresholdInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ThresholdInfo (value: ThresholdInfo, elGetter: $.ASN1Encoder<ThresholdInfo>): _Element {
    if (!_cached_encoder_for_ThresholdInfo) { _cached_encoder_for_ThresholdInfo = function (value: ThresholdInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeId(value.triggeredThreshold, $.BER),
            /* REQUIRED   */ _encode_ObservedValue(value.observedValue, $.BER),
            /* IF_ABSENT  */ ((value.thresholdLevel === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ThresholdLevelInd, $.BER)(value.thresholdLevel, $.BER)),
            /* IF_ABSENT  */ ((value.armTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.armTime, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ThresholdInfo(value, elGetter);
}


/* eslint-enable */
