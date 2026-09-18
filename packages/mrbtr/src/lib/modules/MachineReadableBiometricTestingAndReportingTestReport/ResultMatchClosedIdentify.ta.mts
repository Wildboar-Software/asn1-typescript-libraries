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
import { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";
// export { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";


/**
 * @summary ResultMatchClosedIdentify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultMatchClosedIdentify ::= SEQUENCE {
 *     cmcCurveClosed          DistributionIntegerReal,
 *     srchExecDistr           ExpressionHistogram,
 *     durationClosedIdentify  StatisticInformationSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResultMatchClosedIdentify {
    constructor (
        /**
         * @summary `cmcCurveClosed`.
         * @public
         * @readonly
         */
        readonly cmcCurveClosed: DistributionIntegerReal,
        /**
         * @summary `srchExecDistr`.
         * @public
         * @readonly
         */
        readonly srchExecDistr: ExpressionHistogram,
        /**
         * @summary `durationClosedIdentify`.
         * @public
         * @readonly
         */
        readonly durationClosedIdentify: OPTIONAL<StatisticInformationSet>
    ) {}

    /**
     * @summary Restructures an object into a ResultMatchClosedIdentify
     * @description
     * 
     * This takes an `object` and converts it to a `ResultMatchClosedIdentify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultMatchClosedIdentify`.
     * @returns {ResultMatchClosedIdentify}
     */
    public static _from_object (_o: { [_K in keyof (ResultMatchClosedIdentify)]: (ResultMatchClosedIdentify)[_K] }): ResultMatchClosedIdentify {
        return new ResultMatchClosedIdentify(_o.cmcCurveClosed, _o.srchExecDistr, _o.durationClosedIdentify);
    }


}

/**
 * @summary The Leading Root Component Types of ResultMatchClosedIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultMatchClosedIdentify: $.ComponentSpec[] = [
    new $.ComponentSpec("cmcCurveClosed", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("srchExecDistr", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("durationClosedIdentify", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ResultMatchClosedIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultMatchClosedIdentify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultMatchClosedIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultMatchClosedIdentify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultMatchClosedIdentify: $.ASN1Decoder<ResultMatchClosedIdentify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultMatchClosedIdentify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultMatchClosedIdentify (el: _Element): ResultMatchClosedIdentify {
    if (!_cached_decoder_for_ResultMatchClosedIdentify) { _cached_decoder_for_ResultMatchClosedIdentify = function (el: _Element): ResultMatchClosedIdentify {
    let cmcCurveClosed!: DistributionIntegerReal;
    let srchExecDistr!: ExpressionHistogram;
    let durationClosedIdentify: OPTIONAL<StatisticInformationSet>;
    const callbacks: $.DecodingMap = {
        "cmcCurveClosed": (_el: _Element): void => { cmcCurveClosed = _decode_DistributionIntegerReal(_el); },
        "srchExecDistr": (_el: _Element): void => { srchExecDistr = _decode_ExpressionHistogram(_el); },
        "durationClosedIdentify": (_el: _Element): void => { durationClosedIdentify = _decode_StatisticInformationSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultMatchClosedIdentify,
        _extension_additions_list_spec_for_ResultMatchClosedIdentify,
        _root_component_type_list_2_spec_for_ResultMatchClosedIdentify,
        undefined,
    );
    return new ResultMatchClosedIdentify(
        cmcCurveClosed,
        srchExecDistr,
        durationClosedIdentify
    );
}; }
    return _cached_decoder_for_ResultMatchClosedIdentify(el);
}

let _cached_encoder_for_ResultMatchClosedIdentify: $.ASN1Encoder<ResultMatchClosedIdentify> | null = null;

/**
 * @summary Encodes a(n) ResultMatchClosedIdentify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultMatchClosedIdentify, encoded as an ASN.1 Element.
 */
export
function _encode_ResultMatchClosedIdentify (value: ResultMatchClosedIdentify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultMatchClosedIdentify) { _cached_encoder_for_ResultMatchClosedIdentify = function (value: ResultMatchClosedIdentify): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DistributionIntegerReal, $.BER)(value.cmcCurveClosed, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ExpressionHistogram, $.BER)(value.srchExecDistr, $.BER),
            /* IF_ABSENT */ ((value.durationClosedIdentify === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_StatisticInformationSet, $.BER)(value.durationClosedIdentify, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResultMatchClosedIdentify(value, elGetter);
}


/* eslint-enable */
