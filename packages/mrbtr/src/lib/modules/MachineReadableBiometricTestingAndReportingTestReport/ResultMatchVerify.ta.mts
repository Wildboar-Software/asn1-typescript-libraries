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
import { InfoDETCurve, _decode_InfoDETCurve, _encode_InfoDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoDETCurve.ta.mjs";
// export { InfoDETCurve, _decode_InfoDETCurve, _encode_InfoDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoDETCurve.ta.mjs";
import { DistributionRealReal, _decode_DistributionRealReal, _encode_DistributionRealReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionRealReal.ta.mjs";
// export { DistributionRealReal, _decode_DistributionRealReal, _encode_DistributionRealReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionRealReal.ta.mjs";


/**
 * @summary ResultMatchVerify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultMatchVerify ::= SEQUENCE {
 *     infoDETFNMRFMR      InfoDETCurve OPTIONAL, -- pair of error types shall be fnmr-fmr
 *     infoDETFRRFAR       InfoDETCurve OPTIONAL, -- pair of error types shall be frr-far
 *     infoDETGFRRGFAR     InfoDETCurve OPTIONAL, -- pair of error types shall be gfrr-gfar
 *     cmpScrDistr         DistributionRealReal OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResultMatchVerify {
    constructor (
        /**
         * @summary `infoDETFNMRFMR`.
         * @public
         * @readonly
         */
        readonly infoDETFNMRFMR: OPTIONAL<InfoDETCurve>,
        /**
         * @summary `infoDETFRRFAR`.
         * @public
         * @readonly
         */
        readonly infoDETFRRFAR: OPTIONAL<InfoDETCurve>,
        /**
         * @summary `infoDETGFRRGFAR`.
         * @public
         * @readonly
         */
        readonly infoDETGFRRGFAR: OPTIONAL<InfoDETCurve>,
        /**
         * @summary `cmpScrDistr`.
         * @public
         * @readonly
         */
        readonly cmpScrDistr: OPTIONAL<DistributionRealReal>
    ) {}

    /**
     * @summary Restructures an object into a ResultMatchVerify
     * @description
     * 
     * This takes an `object` and converts it to a `ResultMatchVerify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultMatchVerify`.
     * @returns {ResultMatchVerify}
     */
    public static _from_object (_o: { [_K in keyof (ResultMatchVerify)]: (ResultMatchVerify)[_K] }): ResultMatchVerify {
        return new ResultMatchVerify(_o.infoDETFNMRFMR, _o.infoDETFRRFAR, _o.infoDETGFRRGFAR, _o.cmpScrDistr);
    }


}

/**
 * @summary The Leading Root Component Types of ResultMatchVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultMatchVerify: $.ComponentSpec[] = [
    new $.ComponentSpec("infoDETFNMRFMR", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("infoDETFRRFAR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("infoDETGFRRGFAR", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cmpScrDistr", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ResultMatchVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultMatchVerify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultMatchVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultMatchVerify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultMatchVerify: $.ASN1Decoder<ResultMatchVerify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultMatchVerify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultMatchVerify (el: _Element): ResultMatchVerify {
    if (!_cached_decoder_for_ResultMatchVerify) { _cached_decoder_for_ResultMatchVerify = function (el: _Element): ResultMatchVerify {
    let infoDETFNMRFMR: OPTIONAL<InfoDETCurve>;
    let infoDETFRRFAR: OPTIONAL<InfoDETCurve>;
    let infoDETGFRRGFAR: OPTIONAL<InfoDETCurve>;
    let cmpScrDistr: OPTIONAL<DistributionRealReal>;
    const callbacks: $.DecodingMap = {
        "infoDETFNMRFMR": (_el: _Element): void => { infoDETFNMRFMR = _decode_InfoDETCurve(_el); },
        "infoDETFRRFAR": (_el: _Element): void => { infoDETFRRFAR = _decode_InfoDETCurve(_el); },
        "infoDETGFRRGFAR": (_el: _Element): void => { infoDETGFRRGFAR = _decode_InfoDETCurve(_el); },
        "cmpScrDistr": (_el: _Element): void => { cmpScrDistr = _decode_DistributionRealReal(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultMatchVerify,
        _extension_additions_list_spec_for_ResultMatchVerify,
        _root_component_type_list_2_spec_for_ResultMatchVerify,
        undefined,
    );
    return new ResultMatchVerify(
        infoDETFNMRFMR,
        infoDETFRRFAR,
        infoDETGFRRGFAR,
        cmpScrDistr
    );
}; }
    return _cached_decoder_for_ResultMatchVerify(el);
}

let _cached_encoder_for_ResultMatchVerify: $.ASN1Encoder<ResultMatchVerify> | null = null;

/**
 * @summary Encodes a(n) ResultMatchVerify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultMatchVerify, encoded as an ASN.1 Element.
 */
export
function _encode_ResultMatchVerify (value: ResultMatchVerify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultMatchVerify) { _cached_encoder_for_ResultMatchVerify = function (value: ResultMatchVerify): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT */ ((value.infoDETFNMRFMR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InfoDETCurve, $.BER)(value.infoDETFNMRFMR, $.BER)),
            /* IF_ABSENT */ ((value.infoDETFRRFAR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InfoDETCurve, $.BER)(value.infoDETFRRFAR, $.BER)),
            /* IF_ABSENT */ ((value.infoDETGFRRGFAR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InfoDETCurve, $.BER)(value.infoDETGFRRGFAR, $.BER)),
            /* IF_ABSENT */ ((value.cmpScrDistr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DistributionRealReal, $.BER)(value.cmpScrDistr, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResultMatchVerify(value, elGetter);
}


/* eslint-enable */
