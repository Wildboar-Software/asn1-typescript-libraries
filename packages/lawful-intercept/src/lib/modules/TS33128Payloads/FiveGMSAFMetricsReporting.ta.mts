/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary FiveGMSAFMetricsReporting
 * @description
 * 
 * The IRI-POI in the 5GMS AF shall generate an xIRI containing an
 * 5GMSAFMetricsReporting record when the IRI-POI present in the 5GMS AF detects
 * that an 5GMS AF has received a metrics report from the target UE. The IRI-POI
 * present in the 5GMS AF shall generate the xIRI for the following event (as
 * specified in TS 26.512 [98] clause 11.4):
 *
 * - 5GMS AF returns submitMetricsReport Response (i.e. 204 No Content) in
 *   response to a submitMetricsReport Request (i.e. POST) from the Media
 *   Session Handler in the target UE which submits a metrics report.
 *
 * Table 7.15.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.15.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFMetricsReporting ::= SEQUENCE
 * {
 *     gPSI             [1] GPSI,
 *     metricsReport    [2] XMLType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFMetricsReporting {
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.15.2.5.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `metricsReport`.
     * @description
     *
     * Includes a metrics report according to 26.512 [98] clause 11.4.3. Encoded
     * according to TS 26.512 [98] clause C.4.3 and TS 26.247 [99]. The
     * XMLNamespace for this parameter shall be set to
     * 'urn:3gpp:metadata:2011:HSD:receptionreport'.
     *
     * 3GPP TS 33.128, clause 7.15.2.5.
     *
     * @public
     * @readonly
     */
    readonly metricsReport: XMLType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gPSI: GPSI,
        metricsReport: XMLType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gPSI = gPSI;
        this.metricsReport = metricsReport;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGMSAFMetricsReporting
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFMetricsReporting`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFMetricsReporting`.
     * @returns {FiveGMSAFMetricsReporting}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFMetricsReporting)]: (FiveGMSAFMetricsReporting)[_K] }): FiveGMSAFMetricsReporting {
        return new FiveGMSAFMetricsReporting(_o.gPSI, _o.metricsReport, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGMSAFMetricsReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFMetricsReporting: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("metricsReport", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFMetricsReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFMetricsReporting: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFMetricsReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFMetricsReporting: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFMetricsReporting: $.ASN1Decoder<FiveGMSAFMetricsReporting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFMetricsReporting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFMetricsReporting (el: _Element): FiveGMSAFMetricsReporting {
    if (!_cached_decoder_for_FiveGMSAFMetricsReporting) { _cached_decoder_for_FiveGMSAFMetricsReporting = function (el: _Element): FiveGMSAFMetricsReporting {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGMSAFMetricsReporting contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "metricsReport";
    let gPSI!: GPSI;
    let metricsReport!: XMLType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    metricsReport = $._decode_implicit<XMLType>(() => _decode_XMLType)(sequence[1]);
    return new FiveGMSAFMetricsReporting(
        gPSI,
        metricsReport,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_FiveGMSAFMetricsReporting(el);
}

let _cached_encoder_for_FiveGMSAFMetricsReporting: $.ASN1Encoder<FiveGMSAFMetricsReporting> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFMetricsReporting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFMetricsReporting, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFMetricsReporting (value: FiveGMSAFMetricsReporting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFMetricsReporting) { _cached_encoder_for_FiveGMSAFMetricsReporting = function (value: FiveGMSAFMetricsReporting, elGetter: $.ASN1Encoder<FiveGMSAFMetricsReporting>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER)(value.metricsReport, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFMetricsReporting(value, elGetter);
}


/* eslint-enable */
