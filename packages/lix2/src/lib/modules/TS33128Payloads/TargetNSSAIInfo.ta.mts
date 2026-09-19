/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";


/**
 * @summary TargetNSSAIInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetNSSAIInfo ::= SEQUENCE
 * {
 *     targetSNSSAIList              [1] NSSAI,
 *     rATFrequencySelectionPriority [2] RATFrequencySelectionPriority
 * }
 * ```
 * 
 * @class
 */
export
class TargetNSSAIInfo {
    constructor (
        /**
         * @summary `targetSNSSAIList`.
         * @public
         * @readonly
         */
        readonly targetSNSSAIList: NSSAI,
        /**
         * @summary `rATFrequencySelectionPriority`.
         * @public
         * @readonly
         */
        readonly rATFrequencySelectionPriority: RATFrequencySelectionPriority
    ) {}

    /**
     * @summary Restructures an object into a TargetNSSAIInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TargetNSSAIInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetNSSAIInfo`.
     * @returns {TargetNSSAIInfo}
     */
    public static _from_object (_o: { [_K in keyof (TargetNSSAIInfo)]: (TargetNSSAIInfo)[_K] }): TargetNSSAIInfo {
        return new TargetNSSAIInfo(_o.targetSNSSAIList, _o.rATFrequencySelectionPriority);
    }


}

/**
 * @summary The Leading Root Component Types of TargetNSSAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TargetNSSAIInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("targetSNSSAIList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rATFrequencySelectionPriority", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TargetNSSAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TargetNSSAIInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TargetNSSAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TargetNSSAIInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TargetNSSAIInfo: $.ASN1Decoder<TargetNSSAIInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetNSSAIInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetNSSAIInfo (el: _Element): TargetNSSAIInfo {
    if (!_cached_decoder_for_TargetNSSAIInfo) { _cached_decoder_for_TargetNSSAIInfo = function (el: _Element): TargetNSSAIInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TargetNSSAIInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "targetSNSSAIList";
    sequence[1].name = "rATFrequencySelectionPriority";
    let targetSNSSAIList!: NSSAI;
    let rATFrequencySelectionPriority!: RATFrequencySelectionPriority;
    targetSNSSAIList = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(sequence[0]);
    rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(sequence[1]);
    return new TargetNSSAIInfo(
        targetSNSSAIList,
        rATFrequencySelectionPriority,

    );
}; }
    return _cached_decoder_for_TargetNSSAIInfo(el);
}

let _cached_encoder_for_TargetNSSAIInfo: $.ASN1Encoder<TargetNSSAIInfo> | null = null;

/**
 * @summary Encodes a(n) TargetNSSAIInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetNSSAIInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TargetNSSAIInfo (value: TargetNSSAIInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetNSSAIInfo) { _cached_encoder_for_TargetNSSAIInfo = function (value: TargetNSSAIInfo, elGetter: $.ASN1Encoder<TargetNSSAIInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NSSAI, $.BER)(value.targetSNSSAIList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TargetNSSAIInfo(value, elGetter);
}


/* eslint-enable */
