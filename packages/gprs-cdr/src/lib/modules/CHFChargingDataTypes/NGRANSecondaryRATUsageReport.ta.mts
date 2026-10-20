/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QosFlowsUsageReport, _decode_QosFlowsUsageReport, _encode_QosFlowsUsageReport } from "../CHFChargingDataTypes/QosFlowsUsageReport.ta.mjs";
// export { QosFlowsUsageReport, _decode_QosFlowsUsageReport, _encode_QosFlowsUsageReport } from "../CHFChargingDataTypes/QosFlowsUsageReport.ta.mjs";


/**
 * @summary NGRANSecondaryRATUsageReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGRANSecondaryRATUsageReport ::= SEQUENCE {
 *    nGRANSecondaryRATType   [0] IMPLICIT OCTET STRING OPTIONAL,
 *    qosFlowsUsageReports    [1] IMPLICIT SEQUENCE  OF
 *       QosFlowsUsageReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NGRANSecondaryRATUsageReport {
    /**
     * @summary `nGRANSecondaryRATType`.
     * @public
     * @readonly
     */
    readonly nGRANSecondaryRATType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qosFlowsUsageReports`.
     * @public
     * @readonly
     */
    readonly qosFlowsUsageReports: OPTIONAL<QosFlowsUsageReport[]>;

    constructor (
        nGRANSecondaryRATType: OPTIONAL<OCTET_STRING>,
        qosFlowsUsageReports: OPTIONAL<QosFlowsUsageReport[]>
    ) {
        this.nGRANSecondaryRATType = nGRANSecondaryRATType;
        this.qosFlowsUsageReports = qosFlowsUsageReports;
    }

    /**
     * @summary Restructures an object into a NGRANSecondaryRATUsageReport
     * @description
     * 
     * This takes an `object` and converts it to a `NGRANSecondaryRATUsageReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NGRANSecondaryRATUsageReport`.
     * @returns {NGRANSecondaryRATUsageReport}
     */
    public static _from_object (_o: { [_K in keyof (NGRANSecondaryRATUsageReport)]: (NGRANSecondaryRATUsageReport)[_K] }): NGRANSecondaryRATUsageReport {
        return new NGRANSecondaryRATUsageReport(_o.nGRANSecondaryRATType, _o.qosFlowsUsageReports);
    }


}

/**
 * @summary The Leading Root Component Types of NGRANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NGRANSecondaryRATUsageReport: $.ComponentSpec[] = [
    new $.ComponentSpec("nGRANSecondaryRATType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("qosFlowsUsageReports", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NGRANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NGRANSecondaryRATUsageReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NGRANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NGRANSecondaryRATUsageReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NGRANSecondaryRATUsageReport: $.ASN1Decoder<NGRANSecondaryRATUsageReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGRANSecondaryRATUsageReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGRANSecondaryRATUsageReport (el: _Element): NGRANSecondaryRATUsageReport {
    if (!_cached_decoder_for_NGRANSecondaryRATUsageReport) { _cached_decoder_for_NGRANSecondaryRATUsageReport = function (el: _Element): NGRANSecondaryRATUsageReport {
    let nGRANSecondaryRATType: OPTIONAL<OCTET_STRING>;
    let qosFlowsUsageReports: OPTIONAL<QosFlowsUsageReport[]>;
    const callbacks: $.DecodingMap = {
        "nGRANSecondaryRATType": (_el: _Element): void => { nGRANSecondaryRATType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qosFlowsUsageReports": (_el: _Element): void => { qosFlowsUsageReports = $._decode_implicit<QosFlowsUsageReport[]>(() => $._decodeSequenceOf<QosFlowsUsageReport>(() => _decode_QosFlowsUsageReport))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NGRANSecondaryRATUsageReport,
        _extension_additions_list_spec_for_NGRANSecondaryRATUsageReport,
        _root_component_type_list_2_spec_for_NGRANSecondaryRATUsageReport,
        undefined,
    );
    return new NGRANSecondaryRATUsageReport(
        nGRANSecondaryRATType,
        qosFlowsUsageReports
    );
}; }
    return _cached_decoder_for_NGRANSecondaryRATUsageReport(el);
}

let _cached_encoder_for_NGRANSecondaryRATUsageReport: $.ASN1Encoder<NGRANSecondaryRATUsageReport> | null = null;

/**
 * @summary Encodes a(n) NGRANSecondaryRATUsageReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGRANSecondaryRATUsageReport, encoded as an ASN.1 Element.
 */
export
function _encode_NGRANSecondaryRATUsageReport (value: NGRANSecondaryRATUsageReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGRANSecondaryRATUsageReport) { _cached_encoder_for_NGRANSecondaryRATUsageReport = function (value: NGRANSecondaryRATUsageReport, _elGetter: $.ASN1Encoder<NGRANSecondaryRATUsageReport>): _Element {
    const _components: _Element[] = [];
    if (value.nGRANSecondaryRATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.nGRANSecondaryRATType, $.BER));
    }
    if (value.qosFlowsUsageReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<QosFlowsUsageReport>(() => _encode_QosFlowsUsageReport, $.BER), $.BER)(value.qosFlowsUsageReports, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NGRANSecondaryRATUsageReport(value, elGetter);
}


/* eslint-enable */
