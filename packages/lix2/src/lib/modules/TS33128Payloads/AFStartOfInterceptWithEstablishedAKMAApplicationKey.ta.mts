/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { AFSecurityParams, _decode_AFSecurityParams, _encode_AFSecurityParams } from "../TS33128Payloads/AFSecurityParams.ta.mjs";
// export { AFSecurityParams, _decode_AFSecurityParams, _encode_AFSecurityParams } from "../TS33128Payloads/AFSecurityParams.ta.mjs";


/**
 * @summary AFStartOfInterceptWithEstablishedAKMAApplicationKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFStartOfInterceptWithEstablishedAKMAApplicationKey ::= SEQUENCE
 * {
 *     aFID                  [1] FQDN,
 *     aKID                  [2] NAI,
 *     kAFParamList          [3] SEQUENCE OF AFSecurityParams
 * }
 * ```
 * 
 * @class
 */
export
class AFStartOfInterceptWithEstablishedAKMAApplicationKey {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: FQDN,
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `kAFParamList`.
         * @public
         * @readonly
         */
        readonly kAFParamList: AFSecurityParams[]
    ) {}

    /**
     * @summary Restructures an object into a AFStartOfInterceptWithEstablishedAKMAApplicationKey
     * @description
     * 
     * This takes an `object` and converts it to a `AFStartOfInterceptWithEstablishedAKMAApplicationKey`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFStartOfInterceptWithEstablishedAKMAApplicationKey`.
     * @returns {AFStartOfInterceptWithEstablishedAKMAApplicationKey}
     */
    public static _from_object (_o: { [_K in keyof (AFStartOfInterceptWithEstablishedAKMAApplicationKey)]: (AFStartOfInterceptWithEstablishedAKMAApplicationKey)[_K] }): AFStartOfInterceptWithEstablishedAKMAApplicationKey {
        return new AFStartOfInterceptWithEstablishedAKMAApplicationKey(_o.aFID, _o.aKID, _o.kAFParamList);
    }


}

/**
 * @summary The Leading Root Component Types of AFStartOfInterceptWithEstablishedAKMAApplicationKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAFParamList", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AFStartOfInterceptWithEstablishedAKMAApplicationKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFStartOfInterceptWithEstablishedAKMAApplicationKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey: $.ASN1Decoder<AFStartOfInterceptWithEstablishedAKMAApplicationKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFStartOfInterceptWithEstablishedAKMAApplicationKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFStartOfInterceptWithEstablishedAKMAApplicationKey (el: _Element): AFStartOfInterceptWithEstablishedAKMAApplicationKey {
    if (!_cached_decoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey) { _cached_decoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey = function (el: _Element): AFStartOfInterceptWithEstablishedAKMAApplicationKey {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AFStartOfInterceptWithEstablishedAKMAApplicationKey contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "aKID";
    sequence[2].name = "kAFParamList";
    let aFID!: FQDN;
    let aKID!: NAI;
    let kAFParamList!: AFSecurityParams[];
    aFID = $._decode_implicit<FQDN>(() => _decode_FQDN)(sequence[0]);
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[1]);
    kAFParamList = $._decode_implicit<AFSecurityParams[]>(() => $._decodeSequenceOf<AFSecurityParams>(() => _decode_AFSecurityParams))(sequence[2]);
    return new AFStartOfInterceptWithEstablishedAKMAApplicationKey(
        aFID,
        aKID,
        kAFParamList,

    );
}; }
    return _cached_decoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey(el);
}

let _cached_encoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey: $.ASN1Encoder<AFStartOfInterceptWithEstablishedAKMAApplicationKey> | null = null;

/**
 * @summary Encodes a(n) AFStartOfInterceptWithEstablishedAKMAApplicationKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFStartOfInterceptWithEstablishedAKMAApplicationKey, encoded as an ASN.1 Element.
 */
export
function _encode_AFStartOfInterceptWithEstablishedAKMAApplicationKey (value: AFStartOfInterceptWithEstablishedAKMAApplicationKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey) { _cached_encoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey = function (value: AFStartOfInterceptWithEstablishedAKMAApplicationKey, elGetter: $.ASN1Encoder<AFStartOfInterceptWithEstablishedAKMAApplicationKey>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FQDN, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AFSecurityParams>(() => _encode_AFSecurityParams, $.BER), $.BER)(value.kAFParamList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFStartOfInterceptWithEstablishedAKMAApplicationKey(value, elGetter);
}


/* eslint-enable */
