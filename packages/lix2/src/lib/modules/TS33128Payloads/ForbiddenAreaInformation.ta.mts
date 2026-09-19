/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { ForbiddenTACs, _decode_ForbiddenTACs, _encode_ForbiddenTACs } from "../TS33128Payloads/ForbiddenTACs.ta.mjs";
// export { ForbiddenTACs, _decode_ForbiddenTACs, _encode_ForbiddenTACs } from "../TS33128Payloads/ForbiddenTACs.ta.mjs";


/**
 * @summary ForbiddenAreaInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForbiddenAreaInformation ::= SEQUENCE
 * {
 *     pLMNIdentity  [1] PLMNID,
 *     forbiddenTACs [2] ForbiddenTACs
 * }
 * ```
 * 
 * @class
 */
export
class ForbiddenAreaInformation {
    constructor (
        /**
         * @summary `pLMNIdentity`.
         * @public
         * @readonly
         */
        readonly pLMNIdentity: PLMNID,
        /**
         * @summary `forbiddenTACs`.
         * @public
         * @readonly
         */
        readonly forbiddenTACs: ForbiddenTACs
    ) {}

    /**
     * @summary Restructures an object into a ForbiddenAreaInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ForbiddenAreaInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForbiddenAreaInformation`.
     * @returns {ForbiddenAreaInformation}
     */
    public static _from_object (_o: { [_K in keyof (ForbiddenAreaInformation)]: (ForbiddenAreaInformation)[_K] }): ForbiddenAreaInformation {
        return new ForbiddenAreaInformation(_o.pLMNIdentity, _o.forbiddenTACs);
    }


}

/**
 * @summary The Leading Root Component Types of ForbiddenAreaInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForbiddenAreaInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("forbiddenTACs", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ForbiddenAreaInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForbiddenAreaInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForbiddenAreaInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForbiddenAreaInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForbiddenAreaInformation: $.ASN1Decoder<ForbiddenAreaInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForbiddenAreaInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForbiddenAreaInformation (el: _Element): ForbiddenAreaInformation {
    if (!_cached_decoder_for_ForbiddenAreaInformation) { _cached_decoder_for_ForbiddenAreaInformation = function (el: _Element): ForbiddenAreaInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ForbiddenAreaInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNIdentity";
    sequence[1].name = "forbiddenTACs";
    let pLMNIdentity!: PLMNID;
    let forbiddenTACs!: ForbiddenTACs;
    pLMNIdentity = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    forbiddenTACs = $._decode_implicit<ForbiddenTACs>(() => _decode_ForbiddenTACs)(sequence[1]);
    return new ForbiddenAreaInformation(
        pLMNIdentity,
        forbiddenTACs,

    );
}; }
    return _cached_decoder_for_ForbiddenAreaInformation(el);
}

let _cached_encoder_for_ForbiddenAreaInformation: $.ASN1Encoder<ForbiddenAreaInformation> | null = null;

/**
 * @summary Encodes a(n) ForbiddenAreaInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForbiddenAreaInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ForbiddenAreaInformation (value: ForbiddenAreaInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForbiddenAreaInformation) { _cached_encoder_for_ForbiddenAreaInformation = function (value: ForbiddenAreaInformation, elGetter: $.ASN1Encoder<ForbiddenAreaInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ForbiddenTACs, $.BER)(value.forbiddenTACs, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForbiddenAreaInformation(value, elGetter);
}


/* eslint-enable */
