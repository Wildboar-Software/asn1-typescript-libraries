/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary FiveGMSAFConsumptionReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFConsumptionReporting ::= SEQUENCE
 * {
 *     gPSI                 [1] GPSI,
 *     consumptionReport    [2] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFConsumptionReporting {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `consumptionReport`.
         * @public
         * @readonly
         */
        readonly consumptionReport: SBIType
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFConsumptionReporting
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFConsumptionReporting`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFConsumptionReporting`.
     * @returns {FiveGMSAFConsumptionReporting}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFConsumptionReporting)]: (FiveGMSAFConsumptionReporting)[_K] }): FiveGMSAFConsumptionReporting {
        return new FiveGMSAFConsumptionReporting(_o.gPSI, _o.consumptionReport);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGMSAFConsumptionReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFConsumptionReporting: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("consumptionReport", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFConsumptionReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFConsumptionReporting: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFConsumptionReporting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFConsumptionReporting: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFConsumptionReporting: $.ASN1Decoder<FiveGMSAFConsumptionReporting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFConsumptionReporting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFConsumptionReporting (el: _Element): FiveGMSAFConsumptionReporting {
    if (!_cached_decoder_for_FiveGMSAFConsumptionReporting) { _cached_decoder_for_FiveGMSAFConsumptionReporting = function (el: _Element): FiveGMSAFConsumptionReporting {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGMSAFConsumptionReporting contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "consumptionReport";
    let gPSI!: GPSI;
    let consumptionReport!: SBIType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    consumptionReport = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    return new FiveGMSAFConsumptionReporting(
        gPSI,
        consumptionReport,

    );
}; }
    return _cached_decoder_for_FiveGMSAFConsumptionReporting(el);
}

let _cached_encoder_for_FiveGMSAFConsumptionReporting: $.ASN1Encoder<FiveGMSAFConsumptionReporting> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFConsumptionReporting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFConsumptionReporting, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFConsumptionReporting (value: FiveGMSAFConsumptionReporting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFConsumptionReporting) { _cached_encoder_for_FiveGMSAFConsumptionReporting = function (value: FiveGMSAFConsumptionReporting, elGetter: $.ASN1Encoder<FiveGMSAFConsumptionReporting>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.consumptionReport, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFConsumptionReporting(value, elGetter);
}


/* eslint-enable */
