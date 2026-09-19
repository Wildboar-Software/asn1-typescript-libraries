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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistributionIntegerReal, _decode_DistributionIntegerReal, _encode_DistributionIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerReal.ta.mjs";
// export { DistributionIntegerReal, _decode_DistributionIntegerReal, _encode_DistributionIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerReal.ta.mjs";
import { ExpressionHistogram, _decode_ExpressionHistogram, _encode_ExpressionHistogram } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionHistogram.ta.mjs";
// export { ExpressionHistogram, _decode_ExpressionHistogram, _encode_ExpressionHistogram } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionHistogram.ta.mjs";
import { InfoDETCurve, _decode_InfoDETCurve, _encode_InfoDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoDETCurve.ta.mjs";
// export { InfoDETCurve, _decode_InfoDETCurve, _encode_InfoDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoDETCurve.ta.mjs";
import { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";
// export { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";


/**
 * @summary ResultMatchOpenIdentify
 * @description
 *
 * Open-set identification result (Clause 6.4.4.3.4). FNIR/FPIR DET
 * pair of error types shall be `fnir-fpir`. CMC is the proportion of
 * searches with an enrolled mate found at rank ≤ R (Annex C.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultMatchOpenIdentify ::= SEQUENCE {
 *     cmcCurveOpen            DistributionIntegerReal,
 *     srchExecDistrEnroled    ExpressionHistogram,
 *     srchExecDistrNoEnroled  ExpressionHistogram,
 *     infoDETCurveFNIRFPIR    InfoDETCurve OPTIONAL,
 *     -- pair of error types shall be fnir-fpir
 *     durationOpenIdentify    StatisticInformationSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResultMatchOpenIdentify {
    constructor (
        /**
         * @summary `cmcCurveOpen`.
         * @description
         *
         * Open-set CMC curve (Clause 6.4.4.3.4).
         *
         * @public
         * @readonly
         */
        readonly cmcCurveOpen: DistributionIntegerReal,
        /**
         * @summary `srchExecDistrEnroled`.
         * @description
         *
         * Histogram of searches that had an enrolled mate
         * (Clause 6.4.4.3.4).
         *
         * @public
         * @readonly
         */
        readonly srchExecDistrEnroled: ExpressionHistogram,
        /**
         * @summary `srchExecDistrNoEnroled`.
         * @description
         *
         * Histogram of searches with no enrolled mate
         * (Clause 6.4.4.3.4).
         *
         * @public
         * @readonly
         */
        readonly srchExecDistrNoEnroled: ExpressionHistogram,
        /**
         * @summary `infoDETCurveFNIRFPIR`.
         * @description
         *
         * DET of FNIR vs FPIR. Pair of error types shall be
         * `fnir-fpir` (Clause 6.4.4.3.4).
         *
         * @public
         * @readonly
         */
        readonly infoDETCurveFNIRFPIR: OPTIONAL<InfoDETCurve>,
        /**
         * @summary `durationOpenIdentify`.
         * @description
         *
         * Open-set search duration; covers successful and failed
         * searches (Clause 6.4.4.3.4).
         *
         * @public
         * @readonly
         */
        readonly durationOpenIdentify: OPTIONAL<StatisticInformationSet>
    ) {}

    /**
     * @summary Restructures an object into a ResultMatchOpenIdentify
     * @description
     * 
     * This takes an `object` and converts it to a `ResultMatchOpenIdentify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultMatchOpenIdentify`.
     * @returns {ResultMatchOpenIdentify}
     */
    public static _from_object (_o: { [_K in keyof (ResultMatchOpenIdentify)]: (ResultMatchOpenIdentify)[_K] }): ResultMatchOpenIdentify {
        return new ResultMatchOpenIdentify(_o.cmcCurveOpen, _o.srchExecDistrEnroled, _o.srchExecDistrNoEnroled, _o.infoDETCurveFNIRFPIR, _o.durationOpenIdentify);
    }


}

/**
 * @summary The Leading Root Component Types of ResultMatchOpenIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultMatchOpenIdentify: $.ComponentSpec[] = [
    new $.ComponentSpec("cmcCurveOpen", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("srchExecDistrEnroled", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("srchExecDistrNoEnroled", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("infoDETCurveFNIRFPIR", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("durationOpenIdentify", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ResultMatchOpenIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultMatchOpenIdentify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultMatchOpenIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultMatchOpenIdentify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultMatchOpenIdentify: $.ASN1Decoder<ResultMatchOpenIdentify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultMatchOpenIdentify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultMatchOpenIdentify (el: _Element): ResultMatchOpenIdentify {
    if (!_cached_decoder_for_ResultMatchOpenIdentify) { _cached_decoder_for_ResultMatchOpenIdentify = function (el: _Element): ResultMatchOpenIdentify {
    let cmcCurveOpen!: DistributionIntegerReal;
    let srchExecDistrEnroled!: ExpressionHistogram;
    let srchExecDistrNoEnroled!: ExpressionHistogram;
    let infoDETCurveFNIRFPIR: OPTIONAL<InfoDETCurve>;
    let durationOpenIdentify: OPTIONAL<StatisticInformationSet>;
    const callbacks: $.DecodingMap = {
        "cmcCurveOpen": (_el: _Element): void => { cmcCurveOpen = _decode_DistributionIntegerReal(_el); },
        "srchExecDistrEnroled": (_el: _Element): void => { srchExecDistrEnroled = _decode_ExpressionHistogram(_el); },
        "srchExecDistrNoEnroled": (_el: _Element): void => { srchExecDistrNoEnroled = _decode_ExpressionHistogram(_el); },
        "infoDETCurveFNIRFPIR": (_el: _Element): void => { infoDETCurveFNIRFPIR = _decode_InfoDETCurve(_el); },
        "durationOpenIdentify": (_el: _Element): void => { durationOpenIdentify = _decode_StatisticInformationSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultMatchOpenIdentify,
        _extension_additions_list_spec_for_ResultMatchOpenIdentify,
        _root_component_type_list_2_spec_for_ResultMatchOpenIdentify,
        undefined,
    );
    return new ResultMatchOpenIdentify(
        cmcCurveOpen,
        srchExecDistrEnroled,
        srchExecDistrNoEnroled,
        infoDETCurveFNIRFPIR,
        durationOpenIdentify
    );
}; }
    return _cached_decoder_for_ResultMatchOpenIdentify(el);
}

let _cached_encoder_for_ResultMatchOpenIdentify: $.ASN1Encoder<ResultMatchOpenIdentify> | null = null;

/**
 * @summary Encodes a(n) ResultMatchOpenIdentify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultMatchOpenIdentify, encoded as an ASN.1 Element.
 */
export
function _encode_ResultMatchOpenIdentify (value: ResultMatchOpenIdentify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultMatchOpenIdentify) { _cached_encoder_for_ResultMatchOpenIdentify = function (value: ResultMatchOpenIdentify): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DistributionIntegerReal, $.BER)(value.cmcCurveOpen, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ExpressionHistogram, $.BER)(value.srchExecDistrEnroled, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ExpressionHistogram, $.BER)(value.srchExecDistrNoEnroled, $.BER),
            /* IF_ABSENT */ ((value.infoDETCurveFNIRFPIR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InfoDETCurve, $.BER)(value.infoDETCurveFNIRFPIR, $.BER)),
            /* IF_ABSENT */ ((value.durationOpenIdentify === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StatisticInformationSet, $.BER)(value.durationOpenIdentify, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResultMatchOpenIdentify(value, elGetter);
}


/* eslint-enable */
