/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGMSAFUnsuccessfulOperation, _decode_FiveGMSAFUnsuccessfulOperation, _encode_FiveGMSAFUnsuccessfulOperation, _enum_for_FiveGMSAFUnsuccessfulOperation } from "../TS33128Payloads/FiveGMSAFUnsuccessfulOperation.ta.mjs";
// export { FiveGMSAFUnsuccessfulOperation, _enum_for_FiveGMSAFUnsuccessfulOperation, FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveServiceAccessInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_submitConsumptionReport /* IMPORTED_LONG_ENUMERATION_ITEM */, submitConsumptionReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_submitMetricsReport /* IMPORTED_LONG_ENUMERATION_ITEM */, submitMetricsReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_createDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, createDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, updateDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, patchDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, createNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, updateNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, patchNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation /* IMPORTED_LONG_ENUMERATION_ITEM */, requestBitRateRecommendation /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost /* IMPORTED_LONG_ENUMERATION_ITEM */, requestDeliveryBoost /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGMSAFUnsuccessfulOperation, _encode_FiveGMSAFUnsuccessfulOperation } from "../TS33128Payloads/FiveGMSAFUnsuccessfulOperation.ta.mjs";
import { FiveGMSAFErrorCode, _decode_FiveGMSAFErrorCode, _encode_FiveGMSAFErrorCode, _enum_for_FiveGMSAFErrorCode } from "../TS33128Payloads/FiveGMSAFErrorCode.ta.mjs";
// export { FiveGMSAFErrorCode, _enum_for_FiveGMSAFErrorCode, FiveGMSAFErrorCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFErrorCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFErrorCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMSAFErrorCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGMSAFErrorCode, _encode_FiveGMSAFErrorCode } from "../TS33128Payloads/FiveGMSAFErrorCode.ta.mjs";


/**
 * @summary FiveGMSAFUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     gPSI                              [1] GPSI,
 *     fiveGMSAFUnsuccessfulOperation    [2] FiveGMSAFUnsuccessfulOperation,
 *     fiveGMSAFErrorCode                [3] FiveGMSAFErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `fiveGMSAFUnsuccessfulOperation`.
         * @public
         * @readonly
         */
        readonly fiveGMSAFUnsuccessfulOperation: FiveGMSAFUnsuccessfulOperation,
        /**
         * @summary `fiveGMSAFErrorCode`.
         * @public
         * @readonly
         */
        readonly fiveGMSAFErrorCode: FiveGMSAFErrorCode
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFUnsuccessfulProcedure`.
     * @returns {FiveGMSAFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFUnsuccessfulProcedure)]: (FiveGMSAFUnsuccessfulProcedure)[_K] }): FiveGMSAFUnsuccessfulProcedure {
        return new FiveGMSAFUnsuccessfulProcedure(_o.gPSI, _o.fiveGMSAFUnsuccessfulOperation, _o.fiveGMSAFErrorCode);
    }

        /**
         * @summary The enum used as the type of the component `fiveGMSAFUnsuccessfulOperation`
         * @public
         * @static
         */

    public static _enum_for_fiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;        /**
         * @summary The enum used as the type of the component `fiveGMSAFErrorCode`
         * @public
         * @static
         */

    public static _enum_for_fiveGMSAFErrorCode = _enum_for_FiveGMSAFErrorCode;
}

/**
 * @summary The Leading Root Component Types of FiveGMSAFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGMSAFUnsuccessfulOperation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGMSAFErrorCode", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFUnsuccessfulProcedure: $.ASN1Decoder<FiveGMSAFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFUnsuccessfulProcedure (el: _Element): FiveGMSAFUnsuccessfulProcedure {
    if (!_cached_decoder_for_FiveGMSAFUnsuccessfulProcedure) { _cached_decoder_for_FiveGMSAFUnsuccessfulProcedure = function (el: _Element): FiveGMSAFUnsuccessfulProcedure {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGMSAFUnsuccessfulProcedure contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "fiveGMSAFUnsuccessfulOperation";
    sequence[2].name = "fiveGMSAFErrorCode";
    let gPSI!: GPSI;
    let fiveGMSAFUnsuccessfulOperation!: FiveGMSAFUnsuccessfulOperation;
    let fiveGMSAFErrorCode!: FiveGMSAFErrorCode;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    fiveGMSAFUnsuccessfulOperation = $._decode_implicit<FiveGMSAFUnsuccessfulOperation>(() => _decode_FiveGMSAFUnsuccessfulOperation)(sequence[1]);
    fiveGMSAFErrorCode = $._decode_implicit<FiveGMSAFErrorCode>(() => _decode_FiveGMSAFErrorCode)(sequence[2]);
    return new FiveGMSAFUnsuccessfulProcedure(
        gPSI,
        fiveGMSAFUnsuccessfulOperation,
        fiveGMSAFErrorCode,

    );
}; }
    return _cached_decoder_for_FiveGMSAFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_FiveGMSAFUnsuccessfulProcedure: $.ASN1Encoder<FiveGMSAFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFUnsuccessfulProcedure (value: FiveGMSAFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFUnsuccessfulProcedure) { _cached_encoder_for_FiveGMSAFUnsuccessfulProcedure = function (value: FiveGMSAFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<FiveGMSAFUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGMSAFUnsuccessfulOperation, $.BER)(value.fiveGMSAFUnsuccessfulOperation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGMSAFErrorCode, $.BER)(value.fiveGMSAFErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
