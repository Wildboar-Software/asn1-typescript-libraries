/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QosFlowsUsageReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QosFlowsUsageReport ::= SEQUENCE {
 *    qosFlowId            [0] IMPLICIT INTEGER OPTIONAL,
 *    startTime            [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    endTime              [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    dataVolumeDownlink   [3] IMPLICIT INTEGER,
 *    dataVolumeUplink     [4] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class QosFlowsUsageReport {
    /**
     * @summary `qosFlowId`.
     * @public
     * @readonly
     */
    readonly qosFlowId: OPTIONAL<INTEGER>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OCTET_STRING;
    /**
     * @summary `endTime`.
     * @public
     * @readonly
     */
    readonly endTime: OCTET_STRING;
    /**
     * @summary `dataVolumeDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeDownlink: INTEGER;
    /**
     * @summary `dataVolumeUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeUplink: INTEGER;

    constructor (
        qosFlowId: OPTIONAL<INTEGER>,
        startTime: OCTET_STRING,
        endTime: OCTET_STRING,
        dataVolumeDownlink: INTEGER,
        dataVolumeUplink: INTEGER
    ) {
        this.qosFlowId = qosFlowId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.dataVolumeDownlink = dataVolumeDownlink;
        this.dataVolumeUplink = dataVolumeUplink;
    
        if ((this.startTime.length !== 9)) {
            throw new ASN1SizeError("QosFlowsUsageReport.startTime violates SIZE constraint");
        }
        if ((this.endTime.length !== 9)) {
            throw new ASN1SizeError("QosFlowsUsageReport.endTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a QosFlowsUsageReport
     * @description
     * 
     * This takes an `object` and converts it to a `QosFlowsUsageReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QosFlowsUsageReport`.
     * @returns {QosFlowsUsageReport}
     */
    public static _from_object (_o: { [_K in keyof (QosFlowsUsageReport)]: (QosFlowsUsageReport)[_K] }): QosFlowsUsageReport {
        return new QosFlowsUsageReport(_o.qosFlowId, _o.startTime, _o.endTime, _o.dataVolumeDownlink, _o.dataVolumeUplink);
    }


}

/**
 * @summary The Leading Root Component Types of QosFlowsUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QosFlowsUsageReport: $.ComponentSpec[] = [
    new $.ComponentSpec("qosFlowId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("startTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeDownlink", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeUplink", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of QosFlowsUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QosFlowsUsageReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QosFlowsUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QosFlowsUsageReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QosFlowsUsageReport: $.ASN1Decoder<QosFlowsUsageReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QosFlowsUsageReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QosFlowsUsageReport (el: _Element): QosFlowsUsageReport {
    if (!_cached_decoder_for_QosFlowsUsageReport) { _cached_decoder_for_QosFlowsUsageReport = function (el: _Element): QosFlowsUsageReport {
    let qosFlowId: OPTIONAL<INTEGER>;
    let startTime!: OCTET_STRING;
    let endTime!: OCTET_STRING;
    let dataVolumeDownlink!: INTEGER;
    let dataVolumeUplink!: INTEGER;
    const callbacks: $.DecodingMap = {
        "qosFlowId": (_el: _Element): void => { qosFlowId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "endTime": (_el: _Element): void => { endTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeDownlink": (_el: _Element): void => { dataVolumeDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeUplink": (_el: _Element): void => { dataVolumeUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QosFlowsUsageReport,
        _extension_additions_list_spec_for_QosFlowsUsageReport,
        _root_component_type_list_2_spec_for_QosFlowsUsageReport,
        undefined,
    );
    return new QosFlowsUsageReport(
        qosFlowId,
        startTime,
        endTime,
        dataVolumeDownlink,
        dataVolumeUplink
    );
}; }
    return _cached_decoder_for_QosFlowsUsageReport(el);
}

let _cached_encoder_for_QosFlowsUsageReport: $.ASN1Encoder<QosFlowsUsageReport> | null = null;

/**
 * @summary Encodes a(n) QosFlowsUsageReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QosFlowsUsageReport, encoded as an ASN.1 Element.
 */
export
function _encode_QosFlowsUsageReport (value: QosFlowsUsageReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QosFlowsUsageReport) { _cached_encoder_for_QosFlowsUsageReport = function (value: QosFlowsUsageReport, _elGetter: $.ASN1Encoder<QosFlowsUsageReport>): _Element {
    const _components: _Element[] = [];
    if (value.qosFlowId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.qosFlowId, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.endTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeDownlink, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataVolumeUplink, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_QosFlowsUsageReport(value, elGetter);
}


/* eslint-enable */
