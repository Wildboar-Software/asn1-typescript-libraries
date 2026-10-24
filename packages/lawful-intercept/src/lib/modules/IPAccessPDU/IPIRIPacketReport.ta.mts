/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketReport, _decode_PacketReport, _encode_PacketReport } from "../IPAccessPDU/PacketReport.ta.mjs";


/**
 * @summary IPIRIPacketReport
 * @description
 *
 * Not defined in ETSI TS 102 232-3 V3.9.1. Clause 8 of that edition
 * (module version14) stops at packet-header and packet-summary IRI in
 * `IPIRIOnly`. This version20 type has no specification text in the
 * provided edition.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIPacketReport ::= SEQUENCE
 * {
 *     iPIRIPacketReportObjId [0] RELATIVE-OID,
 *     report                 [1] PacketReport,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IPIRIPacketReport {
    /**
     * @summary `iPIRIPacketReportObjId`.
     * @description
     *
     * Not described in V3.9.1 clause 8. See `iPIRIPacketReportObjId`.
     *
     * @public
     * @readonly
     */
    readonly iPIRIPacketReportObjId: RELATIVE_OID;
    /**
     * @summary `report`.
     * @description
     *
     * Not described in V3.9.1 clause 8.
     *
     * @public
     * @readonly
     */
    readonly report: PacketReport;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPIRIPacketReportObjId: RELATIVE_OID,
        report: PacketReport,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPIRIPacketReportObjId = iPIRIPacketReportObjId;
        this.report = report;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPIRIPacketReport
     * @description
     * 
     * This takes an `object` and converts it to a `IPIRIPacketReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPIRIPacketReport`.
     * @returns {IPIRIPacketReport}
     */
    public static _from_object (_o: { [_K in keyof (IPIRIPacketReport)]: (IPIRIPacketReport)[_K] }): IPIRIPacketReport {
        return new IPIRIPacketReport(_o.iPIRIPacketReportObjId, _o.report, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPIRIPacketReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPIRIPacketReport: $.ComponentSpec[] = [
    new $.ComponentSpec("iPIRIPacketReportObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("report", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPIRIPacketReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPIRIPacketReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPIRIPacketReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPIRIPacketReport: $.ComponentSpec[] = [

];

let _cached_decoder_for_IPIRIPacketReport: $.ASN1Decoder<IPIRIPacketReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIPacketReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIPacketReport (el: _Element): IPIRIPacketReport {
    if (!_cached_decoder_for_IPIRIPacketReport) { _cached_decoder_for_IPIRIPacketReport = function (el: _Element): IPIRIPacketReport {
    let iPIRIPacketReportObjId!: RELATIVE_OID;
    let report!: PacketReport;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPIRIPacketReportObjId": (_el: _Element): void => { iPIRIPacketReportObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "report": (_el: _Element): void => { report = $._decode_explicit<PacketReport>(() => _decode_PacketReport)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPIRIPacketReport,
        _extension_additions_list_spec_for_IPIRIPacketReport,
        _root_component_type_list_2_spec_for_IPIRIPacketReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPIRIPacketReport(
        iPIRIPacketReportObjId,
        report,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPIRIPacketReport(el);
}

let _cached_encoder_for_IPIRIPacketReport: $.ASN1Encoder<IPIRIPacketReport> | null = null;

/**
 * @summary Encodes a(n) IPIRIPacketReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIPacketReport, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIPacketReport (value: IPIRIPacketReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIPacketReport) { _cached_encoder_for_IPIRIPacketReport = function (value: IPIRIPacketReport, elGetter: $.ASN1Encoder<IPIRIPacketReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPIRIPacketReportObjId, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_explicit(_TagClass.context, 1, () => _encode_PacketReport, $.BER)(value.report, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPIRIPacketReport(value, elGetter);
}


/* eslint-enable */
