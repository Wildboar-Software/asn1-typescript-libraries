/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RejectedSliceCauseValue, _decode_RejectedSliceCauseValue, _encode_RejectedSliceCauseValue } from "../TS33128Payloads/RejectedSliceCauseValue.ta.mjs";
// export { RejectedSliceCauseValue, _decode_RejectedSliceCauseValue, _encode_RejectedSliceCauseValue } from "../TS33128Payloads/RejectedSliceCauseValue.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";


/**
 * @summary RejectedSNSSAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedSNSSAI ::= SEQUENCE
 * {
 *     causeValue  [1] RejectedSliceCauseValue,
 *     sNSSAI      [2] SNSSAI
 * }
 * ```
 * 
 * @class
 */
export
class RejectedSNSSAI {
    constructor (
        /**
         * @summary `causeValue`.
         * @public
         * @readonly
         */
        readonly causeValue: RejectedSliceCauseValue,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: SNSSAI
    ) {}

    /**
     * @summary Restructures an object into a RejectedSNSSAI
     * @description
     * 
     * This takes an `object` and converts it to a `RejectedSNSSAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectedSNSSAI`.
     * @returns {RejectedSNSSAI}
     */
    public static _from_object (_o: { [_K in keyof (RejectedSNSSAI)]: (RejectedSNSSAI)[_K] }): RejectedSNSSAI {
        return new RejectedSNSSAI(_o.causeValue, _o.sNSSAI);
    }


}

/**
 * @summary The Leading Root Component Types of RejectedSNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RejectedSNSSAI: $.ComponentSpec[] = [
    new $.ComponentSpec("causeValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sNSSAI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RejectedSNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RejectedSNSSAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RejectedSNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RejectedSNSSAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RejectedSNSSAI: $.ASN1Decoder<RejectedSNSSAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectedSNSSAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectedSNSSAI (el: _Element): RejectedSNSSAI {
    if (!_cached_decoder_for_RejectedSNSSAI) { _cached_decoder_for_RejectedSNSSAI = function (el: _Element): RejectedSNSSAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RejectedSNSSAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "causeValue";
    sequence[1].name = "sNSSAI";
    let causeValue!: RejectedSliceCauseValue;
    let sNSSAI!: SNSSAI;
    causeValue = $._decode_implicit<RejectedSliceCauseValue>(() => _decode_RejectedSliceCauseValue)(sequence[0]);
    sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[1]);
    return new RejectedSNSSAI(
        causeValue,
        sNSSAI,

    );
}; }
    return _cached_decoder_for_RejectedSNSSAI(el);
}

let _cached_encoder_for_RejectedSNSSAI: $.ASN1Encoder<RejectedSNSSAI> | null = null;

/**
 * @summary Encodes a(n) RejectedSNSSAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectedSNSSAI, encoded as an ASN.1 Element.
 */
export
function _encode_RejectedSNSSAI (value: RejectedSNSSAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectedSNSSAI) { _cached_encoder_for_RejectedSNSSAI = function (value: RejectedSNSSAI, elGetter: $.ASN1Encoder<RejectedSNSSAI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RejectedSliceCauseValue, $.BER)(value.causeValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RejectedSNSSAI(value, elGetter);
}


/* eslint-enable */
