/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
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
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `metricsReport`.
         * @public
         * @readonly
         */
        readonly metricsReport: XMLType
    ) {}

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
        return new FiveGMSAFMetricsReporting(_o.gPSI, _o.metricsReport);
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER)(value.metricsReport, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFMetricsReporting(value, elGetter);
}


/* eslint-enable */
