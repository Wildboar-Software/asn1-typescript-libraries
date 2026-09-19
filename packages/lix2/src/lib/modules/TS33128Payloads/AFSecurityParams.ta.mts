/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
// export { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
import { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";
// export { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";


/**
 * @summary AFSecurityParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFSecurityParams ::= SEQUENCE
 * {
 *     aFID                  [1] AFID,
 *     aKID                  [2] NAI,
 *     kAF                   [3] KAF,
 *     uaStarParams          [4] UAStarParams
 * }
 * ```
 * 
 * @class
 */
export
class AFSecurityParams {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `kAF`.
         * @public
         * @readonly
         */
        readonly kAF: KAF,
        /**
         * @summary `uaStarParams`.
         * @public
         * @readonly
         */
        readonly uaStarParams: UAStarParams
    ) {}

    /**
     * @summary Restructures an object into a AFSecurityParams
     * @description
     * 
     * This takes an `object` and converts it to a `AFSecurityParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFSecurityParams`.
     * @returns {AFSecurityParams}
     */
    public static _from_object (_o: { [_K in keyof (AFSecurityParams)]: (AFSecurityParams)[_K] }): AFSecurityParams {
        return new AFSecurityParams(_o.aFID, _o.aKID, _o.kAF, _o.uaStarParams);
    }


}

/**
 * @summary The Leading Root Component Types of AFSecurityParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFSecurityParams: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAF", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uaStarParams", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AFSecurityParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFSecurityParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFSecurityParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFSecurityParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFSecurityParams: $.ASN1Decoder<AFSecurityParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFSecurityParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFSecurityParams (el: _Element): AFSecurityParams {
    if (!_cached_decoder_for_AFSecurityParams) { _cached_decoder_for_AFSecurityParams = function (el: _Element): AFSecurityParams {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("AFSecurityParams contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "aKID";
    sequence[2].name = "kAF";
    sequence[3].name = "uaStarParams";
    let aFID!: AFID;
    let aKID!: NAI;
    let kAF!: KAF;
    let uaStarParams!: UAStarParams;
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[0]);
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[1]);
    kAF = $._decode_implicit<KAF>(() => _decode_KAF)(sequence[2]);
    uaStarParams = $._decode_explicit<UAStarParams>(() => _decode_UAStarParams)(sequence[3]);
    return new AFSecurityParams(
        aFID,
        aKID,
        kAF,
        uaStarParams,

    );
}; }
    return _cached_decoder_for_AFSecurityParams(el);
}

let _cached_encoder_for_AFSecurityParams: $.ASN1Encoder<AFSecurityParams> | null = null;

/**
 * @summary Encodes a(n) AFSecurityParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFSecurityParams, encoded as an ASN.1 Element.
 */
export
function _encode_AFSecurityParams (value: AFSecurityParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFSecurityParams) { _cached_encoder_for_AFSecurityParams = function (value: AFSecurityParams, elGetter: $.ASN1Encoder<AFSecurityParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAF, $.BER)(value.kAF, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_UAStarParams, $.BER)(value.uaStarParams, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFSecurityParams(value, elGetter);
}


/* eslint-enable */
