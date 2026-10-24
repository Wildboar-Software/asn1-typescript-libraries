/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { WLANOperatorId, _decode_WLANOperatorId, _encode_WLANOperatorId } from "../GPRSChargingDataTypes/WLANOperatorId.ta.mjs";


/**
 * @summary UWANUserLocationInfo
 * @description
 *
 * This field contains the UE location in an Untrusted Wireless Access
 * Network (UWAN) which includes the UE local IP address and optionally
 * either UDP source port number (if NAT is detected) or TCP source port
 * number. It may also include WLAN location information the ePDG may have
 * received from the 3GPP AAA server about the UE, as TWAN Identifier defined
 * in TS 29.274 [223].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.77.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UWANUserLocationInfo ::= SEQUENCE {
 *    uELocalIPAddress          [0] GSNAddress,
 *    uDPSourcePort             [1] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    sSID                      [2] IMPLICIT OCTET STRING OPTIONAL,
 *    bSSID                     [3] IMPLICIT OCTET STRING OPTIONAL,
 *    tCPSourcePort             [4] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    civicAddressInformation   [5] IMPLICIT OCTET STRING OPTIONAL,
 *    wLANOperatorId            [6] IMPLICIT WLANOperatorId OPTIONAL,
 *    logicalAccessID           [7] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UWANUserLocationInfo {
    /**
     * @summary `uELocalIPAddress`.
     * @public
     * @readonly
     */
    readonly uELocalIPAddress: GSNAddress;
    /**
     * @summary `uDPSourcePort`.
     * @public
     * @readonly
     */
    readonly uDPSourcePort: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sSID`.
     * @public
     * @readonly
     */
    readonly sSID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `bSSID`.
     * @public
     * @readonly
     */
    readonly bSSID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tCPSourcePort`.
     * @public
     * @readonly
     */
    readonly tCPSourcePort: OPTIONAL<OCTET_STRING>;
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
        uELocalIPAddress: GSNAddress,
        uDPSourcePort?: OPTIONAL<OCTET_STRING>,
        sSID?: OPTIONAL<OCTET_STRING>,
        bSSID?: OPTIONAL<OCTET_STRING>,
        tCPSourcePort?: OPTIONAL<OCTET_STRING>,
        civicAddressInformation?: OPTIONAL<OCTET_STRING>,
        wLANOperatorId?: OPTIONAL<WLANOperatorId>,
        logicalAccessID?: OPTIONAL<OCTET_STRING>
    ) {
        this.uELocalIPAddress = uELocalIPAddress;
        this.uDPSourcePort = uDPSourcePort;
        this.sSID = sSID;
        this.bSSID = bSSID;
        this.tCPSourcePort = tCPSourcePort;
        this.civicAddressInformation = civicAddressInformation;
        this.wLANOperatorId = wLANOperatorId;
        this.logicalAccessID = logicalAccessID;
    
        if (this.uDPSourcePort !== undefined && (this.uDPSourcePort.length !== 2)) {
            throw new ASN1SizeError("UWANUserLocationInfo.uDPSourcePort violates SIZE constraint");
        }
        if (this.tCPSourcePort !== undefined && (this.tCPSourcePort.length !== 2)) {
            throw new ASN1SizeError("UWANUserLocationInfo.tCPSourcePort violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a UWANUserLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UWANUserLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UWANUserLocationInfo`.
     * @returns {UWANUserLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (UWANUserLocationInfo)]: (UWANUserLocationInfo)[_K] }): UWANUserLocationInfo {
        return new UWANUserLocationInfo(_o.uELocalIPAddress, _o.uDPSourcePort, _o.sSID, _o.bSSID, _o.tCPSourcePort, _o.civicAddressInformation, _o.wLANOperatorId, _o.logicalAccessID);
    }


}

/**
 * @summary The Leading Root Component Types of UWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UWANUserLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("uELocalIPAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uDPSourcePort", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sSID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bSSID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tCPSourcePort", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("civicAddressInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("wLANOperatorId", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("logicalAccessID", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of UWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UWANUserLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UWANUserLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UWANUserLocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UWANUserLocationInfo: $.ASN1Decoder<UWANUserLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UWANUserLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UWANUserLocationInfo (el: _Element): UWANUserLocationInfo {
    if (!_cached_decoder_for_UWANUserLocationInfo) { _cached_decoder_for_UWANUserLocationInfo = function (el: _Element): UWANUserLocationInfo {
    let uELocalIPAddress!: GSNAddress;
    let uDPSourcePort: OPTIONAL<OCTET_STRING>;
    let sSID: OPTIONAL<OCTET_STRING>;
    let bSSID: OPTIONAL<OCTET_STRING>;
    let tCPSourcePort: OPTIONAL<OCTET_STRING>;
    let civicAddressInformation: OPTIONAL<OCTET_STRING>;
    let wLANOperatorId: OPTIONAL<WLANOperatorId>;
    let logicalAccessID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "uELocalIPAddress": (_el: _Element): void => { uELocalIPAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "uDPSourcePort": (_el: _Element): void => { uDPSourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sSID": (_el: _Element): void => { sSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bSSID": (_el: _Element): void => { bSSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tCPSourcePort": (_el: _Element): void => { tCPSourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "civicAddressInformation": (_el: _Element): void => { civicAddressInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "wLANOperatorId": (_el: _Element): void => { wLANOperatorId = $._decode_implicit<WLANOperatorId>(() => _decode_WLANOperatorId)(_el); },
        "logicalAccessID": (_el: _Element): void => { logicalAccessID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UWANUserLocationInfo,
        _extension_additions_list_spec_for_UWANUserLocationInfo,
        _root_component_type_list_2_spec_for_UWANUserLocationInfo,
        undefined,
    );
    return new UWANUserLocationInfo(
        uELocalIPAddress,
        uDPSourcePort,
        sSID,
        bSSID,
        tCPSourcePort,
        civicAddressInformation,
        wLANOperatorId,
        logicalAccessID
    );
}; }
    return _cached_decoder_for_UWANUserLocationInfo(el);
}

let _cached_encoder_for_UWANUserLocationInfo: $.ASN1Encoder<UWANUserLocationInfo> | null = null;

/**
 * @summary Encodes a(n) UWANUserLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UWANUserLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UWANUserLocationInfo (value: UWANUserLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UWANUserLocationInfo) { _cached_encoder_for_UWANUserLocationInfo = function (value: UWANUserLocationInfo, _elGetter: $.ASN1Encoder<UWANUserLocationInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_GSNAddress, $.BER)(value.uELocalIPAddress, $.BER));
    if (value.uDPSourcePort !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.uDPSourcePort, $.BER));
    }
    if (value.sSID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sSID, $.BER));
    }
    if (value.bSSID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.bSSID, $.BER));
    }
    if (value.tCPSourcePort !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.tCPSourcePort, $.BER));
    }
    if (value.civicAddressInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.civicAddressInformation, $.BER));
    }
    if (value.wLANOperatorId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_WLANOperatorId, $.BER)(value.wLANOperatorId, $.BER));
    }
    if (value.logicalAccessID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.logicalAccessID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UWANUserLocationInfo(value, elGetter);
}


/* eslint-enable */
