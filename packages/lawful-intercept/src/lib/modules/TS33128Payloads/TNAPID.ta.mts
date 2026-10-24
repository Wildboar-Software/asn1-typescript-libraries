/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SSID, _decode_SSID, _encode_SSID } from "../TS33128Payloads/SSID.ta.mjs";
// export { SSID, _decode_SSID, _encode_SSID } from "../TS33128Payloads/SSID.ta.mjs";
import { type BSSID, _decode_BSSID, _encode_BSSID } from "../TS33128Payloads/BSSID.ta.mjs";
// export { BSSID, _decode_BSSID, _encode_BSSID } from "../TS33128Payloads/BSSID.ta.mjs";
import { type CivicAddressBytes, _decode_CivicAddressBytes, _encode_CivicAddressBytes } from "../TS33128Payloads/CivicAddressBytes.ta.mjs";
// export { CivicAddressBytes, _decode_CivicAddressBytes, _encode_CivicAddressBytes } from "../TS33128Payloads/CivicAddressBytes.ta.mjs";


/**
 * @summary TNAPID
 * @description
 * 
 * The TNAPID type is used to report the TNAP Identity. The TNAPID type is
 * derived from the data present in the TnapId type defined in TS 29.571 [17]
 * clause 5.4.4.62.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.30.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNAPID ::= SEQUENCE
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
class TNAPID {
    /**
     * @summary `sSID`.
     * @description
     *
     * The SSID of the access point to which the UE is attached. This parameter
     * shall be present when the UE is accessing the 5GC via a trusted WLAN or
     * if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.30.
     *
     * @public
     * @readonly
     */
    readonly sSID: OPTIONAL<SSID>;
    /**
     * @summary `bSSID`.
     * @description
     *
     * The SSID of the access point to which the UE is attached. This parameter
     * shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.30.
     *
     * @public
     * @readonly
     */
    readonly bSSID: OPTIONAL<BSSID>;
    /**
     * @summary `civicAddress`.
     * @description
     *
     * The civic address of the TNAP to which the UE is attached including the
     * associated Location-Information and Location-Data (see TS 29.571 [17]
     * table 5.4.4.62-1. This parameter shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.30.
     *
     * @public
     * @readonly
     */
    readonly civicAddress: OPTIONAL<CivicAddressBytes>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sSID?: OPTIONAL<SSID>,
        bSSID?: OPTIONAL<BSSID>,
        civicAddress?: OPTIONAL<CivicAddressBytes>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sSID = sSID;
        this.bSSID = bSSID;
        this.civicAddress = civicAddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TNAPID
     * @description
     * 
     * This takes an `object` and converts it to a `TNAPID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TNAPID`.
     * @returns {TNAPID}
     */
    public static _from_object (_o: { [_K in keyof (TNAPID)]: (TNAPID)[_K] }): TNAPID {
        return new TNAPID(_o.sSID, _o.bSSID, _o.civicAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TNAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TNAPID: $.ComponentSpec[] = [
    new $.ComponentSpec("sSID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bSSID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TNAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TNAPID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TNAPID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TNAPID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TNAPID: $.ASN1Decoder<TNAPID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TNAPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TNAPID (el: _Element): TNAPID {
    if (!_cached_decoder_for_TNAPID) { _cached_decoder_for_TNAPID = function (el: _Element): TNAPID {
    let sSID: OPTIONAL<SSID>;
    let bSSID: OPTIONAL<BSSID>;
    let civicAddress: OPTIONAL<CivicAddressBytes>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sSID": (_el: _Element): void => { sSID = $._decode_implicit<SSID>(() => _decode_SSID)(_el); },
        "bSSID": (_el: _Element): void => { bSSID = $._decode_implicit<BSSID>(() => _decode_BSSID)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_implicit<CivicAddressBytes>(() => _decode_CivicAddressBytes)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TNAPID,
        _extension_additions_list_spec_for_TNAPID,
        _root_component_type_list_2_spec_for_TNAPID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TNAPID(
        sSID,
        bSSID,
        civicAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TNAPID(el);
}

let _cached_encoder_for_TNAPID: $.ASN1Encoder<TNAPID> | null = null;

/**
 * @summary Encodes a(n) TNAPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TNAPID, encoded as an ASN.1 Element.
 */
export
function _encode_TNAPID (value: TNAPID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TNAPID) { _cached_encoder_for_TNAPID = function (value: TNAPID, elGetter: $.ASN1Encoder<TNAPID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sSID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SSID, $.BER)(value.sSID, $.BER);
    }
    if (value.bSSID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_BSSID, $.BER)(value.bSSID, $.BER);
    }
    if (value.civicAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CivicAddressBytes, $.BER)(value.civicAddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TNAPID(value, elGetter);
}


/* eslint-enable */
