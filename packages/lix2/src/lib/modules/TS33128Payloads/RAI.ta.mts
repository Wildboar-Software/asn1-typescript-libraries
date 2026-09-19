/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
// export { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
import { RAC, _decode_RAC, _encode_RAC } from "../TS33128Payloads/RAC.ta.mjs";
// export { RAC, _decode_RAC, _encode_RAC } from "../TS33128Payloads/RAC.ta.mjs";


/**
 * @summary RAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAI ::= SEQUENCE
 * {
 *     pLMNID [1] PLMNID,
 *     lAC    [2] LAC,
 *     rAC    [3] RAC
 * }
 * ```
 * 
 * @class
 */
export
class RAI {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `lAC`.
         * @public
         * @readonly
         */
        readonly lAC: LAC,
        /**
         * @summary `rAC`.
         * @public
         * @readonly
         */
        readonly rAC: RAC
    ) {}

    /**
     * @summary Restructures an object into a RAI
     * @description
     * 
     * This takes an `object` and converts it to a `RAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RAI`.
     * @returns {RAI}
     */
    public static _from_object (_o: { [_K in keyof (RAI)]: (RAI)[_K] }): RAI {
        return new RAI(_o.pLMNID, _o.lAC, _o.rAC);
    }


}

/**
 * @summary The Leading Root Component Types of RAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RAI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rAC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RAI: $.ASN1Decoder<RAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RAI (el: _Element): RAI {
    if (!_cached_decoder_for_RAI) { _cached_decoder_for_RAI = function (el: _Element): RAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "lAC";
    sequence[2].name = "rAC";
    let pLMNID!: PLMNID;
    let lAC!: LAC;
    let rAC!: RAC;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    lAC = $._decode_implicit<LAC>(() => _decode_LAC)(sequence[1]);
    rAC = $._decode_implicit<RAC>(() => _decode_RAC)(sequence[2]);
    return new RAI(
        pLMNID,
        lAC,
        rAC,

    );
}; }
    return _cached_decoder_for_RAI(el);
}

let _cached_encoder_for_RAI: $.ASN1Encoder<RAI> | null = null;

/**
 * @summary Encodes a(n) RAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAI, encoded as an ASN.1 Element.
 */
export
function _encode_RAI (value: RAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RAI) { _cached_encoder_for_RAI = function (value: RAI, elGetter: $.ASN1Encoder<RAI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LAC, $.BER)(value.lAC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RAC, $.BER)(value.rAC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RAI(value, elGetter);
}


/* eslint-enable */
