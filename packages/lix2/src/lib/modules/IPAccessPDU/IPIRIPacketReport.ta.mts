/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
    RELATIVE_OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketReport, _decode_PacketReport, _encode_PacketReport } from "../IPAccessPDU/PacketReport.ta.mjs";


/**
 * @summary IPIRIPacketReport
 * @description
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
    constructor (
        /**
         * @summary `iPIRIPacketReportObjId`.
         * @public
         * @readonly
         */
        readonly iPIRIPacketReportObjId: RELATIVE_OID,
        /**
         * @summary `report`.
         * @public
         * @readonly
         */
        readonly report: PacketReport,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IPIRIPacketReport contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPIRIPacketReportObjId";
    sequence[1].name = "report";
    let iPIRIPacketReportObjId!: RELATIVE_OID;
    let report!: PacketReport;
    iPIRIPacketReportObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    report = $._decode_explicit<PacketReport>(() => _decode_PacketReport)(sequence[1]);
    return new IPIRIPacketReport(
        iPIRIPacketReportObjId,
        report,
        sequence.slice(2)
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPIRIPacketReportObjId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PacketReport, $.BER)(value.report, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPIRIPacketReport(value, elGetter);
}


/* eslint-enable */
