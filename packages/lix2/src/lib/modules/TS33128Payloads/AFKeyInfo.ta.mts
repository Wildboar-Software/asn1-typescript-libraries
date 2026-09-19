/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AKMAAFID, _decode_AKMAAFID, _encode_AKMAAFID } from "../TS33128Payloads/AKMAAFID.ta.mjs";
// export { AKMAAFID, _decode_AKMAAFID, _encode_AKMAAFID } from "../TS33128Payloads/AKMAAFID.ta.mjs";
import { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
// export { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
import { KAFExpiryTime, _decode_KAFExpiryTime, _encode_KAFExpiryTime } from "../TS33128Payloads/KAFExpiryTime.ta.mjs";
// export { KAFExpiryTime, _decode_KAFExpiryTime, _encode_KAFExpiryTime } from "../TS33128Payloads/KAFExpiryTime.ta.mjs";


/**
 * @summary AFKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyInfo ::= SEQUENCE
 * {
 *     aFID                 [1] AKMAAFID,
 *     kAF                  [2] KAF,
 *     kAFExpTime           [3] KAFExpiryTime
 * }
 * ```
 * 
 * @class
 */
export
class AFKeyInfo {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AKMAAFID,
        /**
         * @summary `kAF`.
         * @public
         * @readonly
         */
        readonly kAF: KAF,
        /**
         * @summary `kAFExpTime`.
         * @public
         * @readonly
         */
        readonly kAFExpTime: KAFExpiryTime
    ) {}

    /**
     * @summary Restructures an object into a AFKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AFKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFKeyInfo`.
     * @returns {AFKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (AFKeyInfo)]: (AFKeyInfo)[_K] }): AFKeyInfo {
        return new AFKeyInfo(_o.aFID, _o.kAF, _o.kAFExpTime);
    }


}

/**
 * @summary The Leading Root Component Types of AFKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kAF", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAFExpTime", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AFKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFKeyInfo: $.ASN1Decoder<AFKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFKeyInfo (el: _Element): AFKeyInfo {
    if (!_cached_decoder_for_AFKeyInfo) { _cached_decoder_for_AFKeyInfo = function (el: _Element): AFKeyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AFKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "kAF";
    sequence[2].name = "kAFExpTime";
    let aFID!: AKMAAFID;
    let kAF!: KAF;
    let kAFExpTime!: KAFExpiryTime;
    aFID = $._decode_implicit<AKMAAFID>(() => _decode_AKMAAFID)(sequence[0]);
    kAF = $._decode_implicit<KAF>(() => _decode_KAF)(sequence[1]);
    kAFExpTime = $._decode_implicit<KAFExpiryTime>(() => _decode_KAFExpiryTime)(sequence[2]);
    return new AFKeyInfo(
        aFID,
        kAF,
        kAFExpTime,

    );
}; }
    return _cached_decoder_for_AFKeyInfo(el);
}

let _cached_encoder_for_AFKeyInfo: $.ASN1Encoder<AFKeyInfo> | null = null;

/**
 * @summary Encodes a(n) AFKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AFKeyInfo (value: AFKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFKeyInfo) { _cached_encoder_for_AFKeyInfo = function (value: AFKeyInfo, elGetter: $.ASN1Encoder<AFKeyInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AKMAAFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_KAF, $.BER)(value.kAF, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAFExpiryTime, $.BER)(value.kAFExpTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFKeyInfo(value, elGetter);
}


/* eslint-enable */
