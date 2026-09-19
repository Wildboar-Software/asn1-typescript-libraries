/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SSID, _decode_SSID, _encode_SSID } from "../TS33128Payloads/SSID.ta.mjs";
// export { SSID, _decode_SSID, _encode_SSID } from "../TS33128Payloads/SSID.ta.mjs";
import { BSSID, _decode_BSSID, _encode_BSSID } from "../TS33128Payloads/BSSID.ta.mjs";
// export { BSSID, _decode_BSSID, _encode_BSSID } from "../TS33128Payloads/BSSID.ta.mjs";
import { CivicAddressBytes, _decode_CivicAddressBytes, _encode_CivicAddressBytes } from "../TS33128Payloads/CivicAddressBytes.ta.mjs";
// export { CivicAddressBytes, _decode_CivicAddressBytes, _encode_CivicAddressBytes } from "../TS33128Payloads/CivicAddressBytes.ta.mjs";


/**
 * @summary TWAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TWAPID ::= SEQUENCE
 * {
 *     sSID         [1] SSID OPTIONAL,
 *     bSSID        [2] BSSID OPTIONAL,
 *     civicAddress [3] CivicAddressBytes OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TWAPID {
    constructor (
        /**
         * @summary `sSID`.
         * @public
         * @readonly
         */
        readonly sSID: OPTIONAL<SSID>,
        /**
         * @summary `bSSID`.
         * @public
         * @readonly
         */
        readonly bSSID: OPTIONAL<BSSID>,
        /**
         * @summary `civicAddress`.
         * @public
         * @readonly
         */
        readonly civicAddress: OPTIONAL<CivicAddressBytes>
    ) {}

    /**
     * @summary Restructures an object into a TWAPID
     * @description
     * 
     * This takes an `object` and converts it to a `TWAPID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TWAPID`.
     * @returns {TWAPID}
     */
    public static _from_object (_o: { [_K in keyof (TWAPID)]: (TWAPID)[_K] }): TWAPID {
        return new TWAPID(_o.sSID, _o.bSSID, _o.civicAddress);
    }


}

/**
 * @summary The Leading Root Component Types of TWAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TWAPID: $.ComponentSpec[] = [
    new $.ComponentSpec("sSID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bSSID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TWAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TWAPID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TWAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TWAPID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TWAPID: $.ASN1Decoder<TWAPID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TWAPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TWAPID (el: _Element): TWAPID {
    if (!_cached_decoder_for_TWAPID) { _cached_decoder_for_TWAPID = function (el: _Element): TWAPID {
    let sSID: OPTIONAL<SSID>;
    let bSSID: OPTIONAL<BSSID>;
    let civicAddress: OPTIONAL<CivicAddressBytes>;
    const callbacks: $.DecodingMap = {
        "sSID": (_el: _Element): void => { sSID = $._decode_implicit<SSID>(() => _decode_SSID)(_el); },
        "bSSID": (_el: _Element): void => { bSSID = $._decode_implicit<BSSID>(() => _decode_BSSID)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_implicit<CivicAddressBytes>(() => _decode_CivicAddressBytes)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TWAPID,
        _extension_additions_list_spec_for_TWAPID,
        _root_component_type_list_2_spec_for_TWAPID,
        undefined,
    );
    return new TWAPID(
        sSID,
        bSSID,
        civicAddress
    );
}; }
    return _cached_decoder_for_TWAPID(el);
}

let _cached_encoder_for_TWAPID: $.ASN1Encoder<TWAPID> | null = null;

/**
 * @summary Encodes a(n) TWAPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TWAPID, encoded as an ASN.1 Element.
 */
export
function _encode_TWAPID (value: TWAPID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TWAPID) { _cached_encoder_for_TWAPID = function (value: TWAPID, elGetter: $.ASN1Encoder<TWAPID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sSID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SSID, $.BER)(value.sSID, $.BER)),
            /* IF_ABSENT  */ ((value.bSSID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BSSID, $.BER)(value.bSSID, $.BER)),
            /* IF_ABSENT  */ ((value.civicAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CivicAddressBytes, $.BER)(value.civicAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TWAPID(value, elGetter);
}


/* eslint-enable */
