/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PANIHeaderInfo, _decode_PANIHeaderInfo, _encode_PANIHeaderInfo } from "../TS33128Payloads/PANIHeaderInfo.ta.mjs";
// export { PANIHeaderInfo, _decode_PANIHeaderInfo, _encode_PANIHeaderInfo } from "../TS33128Payloads/PANIHeaderInfo.ta.mjs";
import { SIPGeolocationHeaderInfo, _decode_SIPGeolocationHeaderInfo, _encode_SIPGeolocationHeaderInfo } from "../TS33128Payloads/SIPGeolocationHeaderInfo.ta.mjs";
// export { SIPGeolocationHeaderInfo, _decode_SIPGeolocationHeaderInfo, _encode_SIPGeolocationHeaderInfo } from "../TS33128Payloads/SIPGeolocationHeaderInfo.ta.mjs";
import { SIPCNIHeaderInfo, _decode_SIPCNIHeaderInfo, _encode_SIPCNIHeaderInfo } from "../TS33128Payloads/SIPCNIHeaderInfo.ta.mjs";
// export { SIPCNIHeaderInfo, _decode_SIPCNIHeaderInfo, _encode_SIPCNIHeaderInfo } from "../TS33128Payloads/SIPCNIHeaderInfo.ta.mjs";


/**
 * @summary IMSLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSLocation ::= SEQUENCE
 * {
 *     pANIHeaderInfo        [1] SEQUENCE OF PANIHeaderInfo OPTIONAL,
 *     geolocationHeaderInfo [2] SEQUENCE OF SIPGeolocationHeaderInfo OPTIONAL,
 *     cNIHeaderInfo         [3] SEQUENCE OF SIPCNIHeaderInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSLocation {
    constructor (
        /**
         * @summary `pANIHeaderInfo`.
         * @public
         * @readonly
         */
        readonly pANIHeaderInfo: OPTIONAL<PANIHeaderInfo[]>,
        /**
         * @summary `geolocationHeaderInfo`.
         * @public
         * @readonly
         */
        readonly geolocationHeaderInfo: OPTIONAL<SIPGeolocationHeaderInfo[]>,
        /**
         * @summary `cNIHeaderInfo`.
         * @public
         * @readonly
         */
        readonly cNIHeaderInfo: OPTIONAL<SIPCNIHeaderInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a IMSLocation
     * @description
     * 
     * This takes an `object` and converts it to a `IMSLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSLocation`.
     * @returns {IMSLocation}
     */
    public static _from_object (_o: { [_K in keyof (IMSLocation)]: (IMSLocation)[_K] }): IMSLocation {
        return new IMSLocation(_o.pANIHeaderInfo, _o.geolocationHeaderInfo, _o.cNIHeaderInfo);
    }


}

/**
 * @summary The Leading Root Component Types of IMSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("pANIHeaderInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("geolocationHeaderInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cNIHeaderInfo", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IMSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSLocation: $.ASN1Decoder<IMSLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSLocation (el: _Element): IMSLocation {
    if (!_cached_decoder_for_IMSLocation) { _cached_decoder_for_IMSLocation = function (el: _Element): IMSLocation {
    let pANIHeaderInfo: OPTIONAL<PANIHeaderInfo[]>;
    let geolocationHeaderInfo: OPTIONAL<SIPGeolocationHeaderInfo[]>;
    let cNIHeaderInfo: OPTIONAL<SIPCNIHeaderInfo[]>;
    const callbacks: $.DecodingMap = {
        "pANIHeaderInfo": (_el: _Element): void => { pANIHeaderInfo = $._decode_implicit<PANIHeaderInfo[]>(() => $._decodeSequenceOf<PANIHeaderInfo>(() => _decode_PANIHeaderInfo))(_el); },
        "geolocationHeaderInfo": (_el: _Element): void => { geolocationHeaderInfo = $._decode_implicit<SIPGeolocationHeaderInfo[]>(() => $._decodeSequenceOf<SIPGeolocationHeaderInfo>(() => _decode_SIPGeolocationHeaderInfo))(_el); },
        "cNIHeaderInfo": (_el: _Element): void => { cNIHeaderInfo = $._decode_implicit<SIPCNIHeaderInfo[]>(() => $._decodeSequenceOf<SIPCNIHeaderInfo>(() => _decode_SIPCNIHeaderInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSLocation,
        _extension_additions_list_spec_for_IMSLocation,
        _root_component_type_list_2_spec_for_IMSLocation,
        undefined,
    );
    return new IMSLocation(
        pANIHeaderInfo,
        geolocationHeaderInfo,
        cNIHeaderInfo
    );
}; }
    return _cached_decoder_for_IMSLocation(el);
}

let _cached_encoder_for_IMSLocation: $.ASN1Encoder<IMSLocation> | null = null;

/**
 * @summary Encodes a(n) IMSLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSLocation, encoded as an ASN.1 Element.
 */
export
function _encode_IMSLocation (value: IMSLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSLocation) { _cached_encoder_for_IMSLocation = function (value: IMSLocation, elGetter: $.ASN1Encoder<IMSLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pANIHeaderInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PANIHeaderInfo>(() => _encode_PANIHeaderInfo, $.BER), $.BER)(value.pANIHeaderInfo, $.BER)),
            /* IF_ABSENT  */ ((value.geolocationHeaderInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SIPGeolocationHeaderInfo>(() => _encode_SIPGeolocationHeaderInfo, $.BER), $.BER)(value.geolocationHeaderInfo, $.BER)),
            /* IF_ABSENT  */ ((value.cNIHeaderInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<SIPCNIHeaderInfo>(() => _encode_SIPCNIHeaderInfo, $.BER), $.BER)(value.cNIHeaderInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSLocation(value, elGetter);
}


/* eslint-enable */
