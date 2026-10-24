/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WLANOperatorId, _decode_WLANOperatorId, _encode_WLANOperatorId } from "../GPRSChargingDataTypes/WLANOperatorId.ta.mjs";


/**
 * @summary TWANUserLocationInfo
 * @description
 *
 * This field holds the UE location in a Trusted WLAN Access Network (defined
 * as TWAN Identifier in TS 29.274 [223]).
 *
 * Where a CDR content table includes this field, it is the UE location in
 * a Trusted WLAN Access Network if available: the TWAN identifier for S2a
 * GTP (TS 29.274), or the Access Network Identifier Option IE for S2a PMIP
 * (TS 29.275).
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.73A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TWANUserLocationInfo ::= SEQUENCE {
 *    sSID                      [0] IMPLICIT OCTET STRING,
 *    bSSID                     [1] IMPLICIT OCTET STRING OPTIONAL,
 *    civicAddressInformation   [2] IMPLICIT OCTET STRING OPTIONAL,
 *    wLANOperatorId            [3] IMPLICIT WLANOperatorId OPTIONAL,
 *    logicalAccessID           [4] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TWANUserLocationInfo {
    /**
     * @summary `sSID`.
     * @public
     * @readonly
     */
    readonly sSID: OCTET_STRING;
    /**
     * @summary `bSSID`.
     * @public
     * @readonly
     */
    readonly bSSID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `civicAddressInformation`.
     * @public
     * @readonly
     */
    readonly civicAddressInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `wLANOperatorId`.
     * @public
     * @readonly
     */
    readonly wLANOperatorId: OPTIONAL<WLANOperatorId>;
    /**
     * @summary `logicalAccessID`.
     * @public
     * @readonly
     */
    readonly logicalAccessID: OPTIONAL<OCTET_STRING>;

    constructor (
        sSID: OCTET_STRING,
        bSSID?: OPTIONAL<OCTET_STRING>,
        civicAddressInformation?: OPTIONAL<OCTET_STRING>,
        wLANOperatorId?: OPTIONAL<WLANOperatorId>,
        logicalAccessID?: OPTIONAL<OCTET_STRING>
    ) {
        this.sSID = sSID;
        this.bSSID = bSSID;
        this.civicAddressInformation = civicAddressInformation;
        this.wLANOperatorId = wLANOperatorId;
        this.logicalAccessID = logicalAccessID;
    }

    /**
     * @summary Restructures an object into a TWANUserLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TWANUserLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TWANUserLocationInfo`.
     * @returns {TWANUserLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (TWANUserLocationInfo)]: (TWANUserLocationInfo)[_K] }): TWANUserLocationInfo {
        return new TWANUserLocationInfo(_o.sSID, _o.bSSID, _o.civicAddressInformation, _o.wLANOperatorId, _o.logicalAccessID);
    }


}

/**
 * @summary The Leading Root Component Types of TWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TWANUserLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sSID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bSSID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("civicAddressInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("wLANOperatorId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("logicalAccessID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TWANUserLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TWANUserLocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TWANUserLocationInfo: $.ASN1Decoder<TWANUserLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TWANUserLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TWANUserLocationInfo (el: _Element): TWANUserLocationInfo {
    if (!_cached_decoder_for_TWANUserLocationInfo) { _cached_decoder_for_TWANUserLocationInfo = function (el: _Element): TWANUserLocationInfo {
    let sSID!: OCTET_STRING;
    let bSSID: OPTIONAL<OCTET_STRING>;
    let civicAddressInformation: OPTIONAL<OCTET_STRING>;
    let wLANOperatorId: OPTIONAL<WLANOperatorId>;
    let logicalAccessID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sSID": (_el: _Element): void => { sSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bSSID": (_el: _Element): void => { bSSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "civicAddressInformation": (_el: _Element): void => { civicAddressInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "wLANOperatorId": (_el: _Element): void => { wLANOperatorId = $._decode_implicit<WLANOperatorId>(() => _decode_WLANOperatorId)(_el); },
        "logicalAccessID": (_el: _Element): void => { logicalAccessID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TWANUserLocationInfo,
        _extension_additions_list_spec_for_TWANUserLocationInfo,
        _root_component_type_list_2_spec_for_TWANUserLocationInfo,
        undefined,
    );
    return new TWANUserLocationInfo(
        sSID,
        bSSID,
        civicAddressInformation,
        wLANOperatorId,
        logicalAccessID
    );
}; }
    return _cached_decoder_for_TWANUserLocationInfo(el);
}

let _cached_encoder_for_TWANUserLocationInfo: $.ASN1Encoder<TWANUserLocationInfo> | null = null;

/**
 * @summary Encodes a(n) TWANUserLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TWANUserLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TWANUserLocationInfo (value: TWANUserLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TWANUserLocationInfo) { _cached_encoder_for_TWANUserLocationInfo = function (value: TWANUserLocationInfo, _elGetter: $.ASN1Encoder<TWANUserLocationInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sSID, $.BER));
    if (value.bSSID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.bSSID, $.BER));
    }
    if (value.civicAddressInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.civicAddressInformation, $.BER));
    }
    if (value.wLANOperatorId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_WLANOperatorId, $.BER)(value.wLANOperatorId, $.BER));
    }
    if (value.logicalAccessID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.logicalAccessID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TWANUserLocationInfo(value, elGetter);
}


/* eslint-enable */
