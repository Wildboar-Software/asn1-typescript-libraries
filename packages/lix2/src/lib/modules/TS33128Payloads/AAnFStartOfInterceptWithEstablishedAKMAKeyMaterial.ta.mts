/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";
// export { KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";
import { AFKeyInfo, _decode_AFKeyInfo, _encode_AFKeyInfo } from "../TS33128Payloads/AFKeyInfo.ta.mjs";
// export { AFKeyInfo, _decode_AFKeyInfo, _encode_AFKeyInfo } from "../TS33128Payloads/AFKeyInfo.ta.mjs";


/**
 * @summary AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial ::= SEQUENCE
 * {
 *     aKID                  [1] NAI,
 *     kAKMA                 [2] KAKMA OPTIONAL,
 *     aFKeyList             [3] SEQUENCE OF AFKeyInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial {
    constructor (
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `kAKMA`.
         * @public
         * @readonly
         */
        readonly kAKMA: OPTIONAL<KAKMA>,
        /**
         * @summary `aFKeyList`.
         * @public
         * @readonly
         */
        readonly aFKeyList: OPTIONAL<AFKeyInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial`.
     * @returns {AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial}
     */
    public static _from_object (_o: { [_K in keyof (AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial)]: (AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial)[_K] }): AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial {
        return new AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial(_o.aKID, _o.kAKMA, _o.aFKeyList);
    }


}

/**
 * @summary The Leading Root Component Types of AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kAKMA", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aFKeyList", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: $.ASN1Decoder<AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial (el: _Element): AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial {
    if (!_cached_decoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial) { _cached_decoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial = function (el: _Element): AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial {
    let aKID!: NAI;
    let kAKMA: OPTIONAL<KAKMA>;
    let aFKeyList: OPTIONAL<AFKeyInfo[]>;
    const callbacks: $.DecodingMap = {
        "aKID": (_el: _Element): void => { aKID = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "kAKMA": (_el: _Element): void => { kAKMA = $._decode_implicit<KAKMA>(() => _decode_KAKMA)(_el); },
        "aFKeyList": (_el: _Element): void => { aFKeyList = $._decode_implicit<AFKeyInfo[]>(() => $._decodeSequenceOf<AFKeyInfo>(() => _decode_AFKeyInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial,
        _extension_additions_list_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial,
        _root_component_type_list_2_spec_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial,
        undefined,
    );
    return new AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial(
        aKID,
        kAKMA,
        aFKeyList
    );
}; }
    return _cached_decoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial(el);
}

let _cached_encoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: $.ASN1Encoder<AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial> | null = null;

/**
 * @summary Encodes a(n) AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial (value: AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial) { _cached_encoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial = function (value: AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, elGetter: $.ASN1Encoder<AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* IF_ABSENT  */ ((value.kAKMA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_KAKMA, $.BER)(value.kAKMA, $.BER)),
            /* IF_ABSENT  */ ((value.aFKeyList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AFKeyInfo>(() => _encode_AFKeyInfo, $.BER), $.BER)(value.aFKeyList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial(value, elGetter);
}


/* eslint-enable */
