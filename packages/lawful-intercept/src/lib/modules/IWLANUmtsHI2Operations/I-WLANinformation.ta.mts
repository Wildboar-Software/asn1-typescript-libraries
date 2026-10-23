/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { SessionAliveTime, _decode_SessionAliveTime, _encode_SessionAliveTime } from "../IWLANUmtsHI2Operations/SessionAliveTime.ta.mjs";
// export { SessionAliveTime, _decode_SessionAliveTime, _encode_SessionAliveTime } from "../IWLANUmtsHI2Operations/SessionAliveTime.ta.mjs";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../UmtsHI2Operations/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../UmtsHI2Operations/GeographicalCoordinates.ta.mjs";
import { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";


/**
 * @summary I_WLANinformation
 * @description
 * 
 * Operator, location, NAS address, MAC address, and session timer for the WLAN
 * serving the target. Annex B.7 says these parameters are defined in TS 29.234,
 * and adds geographical coordinates and a civic address that the clause 8
 * tables do not name.
 * 
 * 3GPP TS 33.108, table 8.2 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANinformation ::= SEQUENCE
 * {
 *     wLANOperatorName                     [1] OCTET STRING         OPTIONAL,
 *     wLANLocationData                    [2] OCTET STRING        OPTIONAL,
 *     wLANLocationInformation             [3] OCTET STRING        OPTIONAL,
 *     nASIPIPv6Address                    [4]    IPAddress            OPTIONAL,
 *     wLANMACAddress                        [5]    OCTET STRING        OPTIONAL,
 *     sessionAliveTimer                    [6]    SessionAliveTime    OPTIONAL,
 *     ...,
 * --These parameters are defined in 3GPP TS 29.234.
 *       geographicalCoordinates             [7] GeographicalCoordinates OPTIONAL,
 *        civicAddress                        [8] CivicAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class I_WLANinformation {
    /**
     * @summary `wLANOperatorName`.
     * @description
     * 
     * WLAN operator serving the target.
     * 
     * Conditional when available on access initiation, access termination, the
     * AAA start-of-intercept REPORT, and the AAA start-of-intercept Begin.
     * 
     * 3GPP TS 33.108, table 8.2.
     * @public
     * @readonly
     */
    readonly wLANOperatorName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `wLANLocationData`.
     * @description
     * 
     * Location of the WLAN serving the target.
     * 
     * Conditional when available on access initiation, access termination, the
     * AAA start-of-intercept REPORT, and the AAA start-of-intercept Begin.
     * 
     * 3GPP TS 33.108, table 8.2. Clause 8 does not define the encoding.
     * @public
     * @readonly
     */
    readonly wLANLocationData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `wLANLocationInformation`.
     * @description
     * 
     * Detailed location of the WLAN serving the target.
     * 
     * Conditional when available on access initiation, the AAA
     * start-of-intercept REPORT, and the AAA start-of-intercept Begin. On
     * access termination, include it when authorized (table 8.4), rather than
     * merely when available.
     * 
     * 3GPP TS 33.108, table 8.2. Clause 8 does not define the encoding.
     * @public
     * @readonly
     */
    readonly wLANLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nASIPIPv6Address`.
     * @description
     * 
     * IP address of the serving Network Access Server. Table 8.2 names this
     * nasIPIPv6Address.
     * 
     * Conditional when available on access initiation, access termination, the
     * AAA start-of-intercept REPORT, and the AAA start-of-intercept Begin.
     * 
     * 3GPP TS 33.108, table 8.2.
     * @public
     * @readonly
     */
    readonly nASIPIPv6Address: OPTIONAL<IPAddress>;
    /**
     * @summary `wLANMACAddress`.
     * @description
     * 
     * MAC address of the WLAN UE on the WLAN serving the target.
     * 
     * Conditional when available on access initiation, access termination, the
     * AAA start-of-intercept REPORT, and the AAA start-of-intercept Begin.
     * 
     * 3GPP TS 33.108, table 8.2. Clause 8 does not define the encoding.
     * @public
     * @readonly
     */
    readonly wLANMACAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sessionAliveTimer`.
     * @description
     * 
     * Expected maximum duration of the I-WLAN access being initiated.
     * 
     * Conditional when available on access initiation (table 8.3), the AAA
     * start-of-intercept REPORT (table 8.7), and the AAA start-of-intercept
     * Begin (table 8.11).
     * 
     * 3GPP TS 33.108, table 8.2. Annex B.7 says to carry SessionAliveTime as
     * defined in TS 29.234 and does not define the encoding.
     * @public
     * @readonly
     */
    readonly sessionAliveTimer: OPTIONAL<SessionAliveTime>;
    /**
     * @summary `geographicalCoordinates`.
     * @description
     * 
     * Annex B.7 says this parameter is defined in TS 29.234. Clause 8 tables do
     * not name it. TS 33.108 does not further define it in this module.
     * @public
     * @readonly
     */
    readonly geographicalCoordinates: OPTIONAL<GeographicalCoordinates>;
    /**
     * @summary `civicAddress`.
     * @description
     * 
     * Annex B.7 says this parameter is defined in TS 29.234. Clause 8 tables do
     * not name it. TS 33.108 does not further define it in this module.
     * @public
     * @readonly
     */
    readonly civicAddress: OPTIONAL<CivicAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        wLANOperatorName?: OPTIONAL<OCTET_STRING>,
        wLANLocationData?: OPTIONAL<OCTET_STRING>,
        wLANLocationInformation?: OPTIONAL<OCTET_STRING>,
        nASIPIPv6Address?: OPTIONAL<IPAddress>,
        wLANMACAddress?: OPTIONAL<OCTET_STRING>,
        sessionAliveTimer?: OPTIONAL<SessionAliveTime>,
        geographicalCoordinates?: OPTIONAL<GeographicalCoordinates>,
        civicAddress?: OPTIONAL<CivicAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.wLANOperatorName = wLANOperatorName;
        this.wLANLocationData = wLANLocationData;
        this.wLANLocationInformation = wLANLocationInformation;
        this.nASIPIPv6Address = nASIPIPv6Address;
        this.wLANMACAddress = wLANMACAddress;
        this.sessionAliveTimer = sessionAliveTimer;
        this.geographicalCoordinates = geographicalCoordinates;
        this.civicAddress = civicAddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a I_WLANinformation
     * @description
     * 
     * This takes an `object` and converts it to a `I_WLANinformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `I_WLANinformation`.
     * @returns {I_WLANinformation}
     */
    public static _from_object (_o: { [_K in keyof (I_WLANinformation)]: (I_WLANinformation)[_K] }): I_WLANinformation {
        return new I_WLANinformation(_o.wLANOperatorName, _o.wLANLocationData, _o.wLANLocationInformation, _o.nASIPIPv6Address, _o.wLANMACAddress, _o.sessionAliveTimer, _o.geographicalCoordinates, _o.civicAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of I_WLANinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_I_WLANinformation: $.ComponentSpec[] = [
    new $.ComponentSpec("wLANOperatorName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("wLANLocationData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("wLANLocationInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nASIPIPv6Address", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("wLANMACAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sessionAliveTimer", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of I_WLANinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_I_WLANinformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of I_WLANinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_I_WLANinformation: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 8))
];

let _cached_decoder_for_I_WLANinformation: $.ASN1Decoder<I_WLANinformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) I_WLANinformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_I_WLANinformation (el: _Element): I_WLANinformation {
    if (!_cached_decoder_for_I_WLANinformation) { _cached_decoder_for_I_WLANinformation = function (el: _Element): I_WLANinformation {
    let wLANOperatorName: OPTIONAL<OCTET_STRING>;
    let wLANLocationData: OPTIONAL<OCTET_STRING>;
    let wLANLocationInformation: OPTIONAL<OCTET_STRING>;
    let nASIPIPv6Address: OPTIONAL<IPAddress>;
    let wLANMACAddress: OPTIONAL<OCTET_STRING>;
    let sessionAliveTimer: OPTIONAL<SessionAliveTime>;
    let geographicalCoordinates: OPTIONAL<GeographicalCoordinates>;
    let civicAddress: OPTIONAL<CivicAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "wLANOperatorName": (_el: _Element): void => { wLANOperatorName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "wLANLocationData": (_el: _Element): void => { wLANLocationData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "wLANLocationInformation": (_el: _Element): void => { wLANLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nASIPIPv6Address": (_el: _Element): void => { nASIPIPv6Address = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "wLANMACAddress": (_el: _Element): void => { wLANMACAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sessionAliveTimer": (_el: _Element): void => { sessionAliveTimer = $._decode_implicit<SessionAliveTime>(() => _decode_SessionAliveTime)(_el); },
        "geographicalCoordinates": (_el: _Element): void => { geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_explicit<CivicAddress>(() => _decode_CivicAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_I_WLANinformation,
        _extension_additions_list_spec_for_I_WLANinformation,
        _root_component_type_list_2_spec_for_I_WLANinformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new I_WLANinformation(
        wLANOperatorName,
        wLANLocationData,
        wLANLocationInformation,
        nASIPIPv6Address,
        wLANMACAddress,
        sessionAliveTimer,
        geographicalCoordinates,
        civicAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_I_WLANinformation(el);
}

let _cached_encoder_for_I_WLANinformation: $.ASN1Encoder<I_WLANinformation> | null = null;

/**
 * @summary Encodes a(n) I_WLANinformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The I_WLANinformation, encoded as an ASN.1 Element.
 */
export
function _encode_I_WLANinformation (value: I_WLANinformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_I_WLANinformation) { _cached_encoder_for_I_WLANinformation = function (value: I_WLANinformation, elGetter: $.ASN1Encoder<I_WLANinformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.wLANOperatorName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.wLANOperatorName, $.BER);
    }
    if (value.wLANLocationData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.wLANLocationData, $.BER);
    }
    if (value.wLANLocationInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.wLANLocationInformation, $.BER);
    }
    if (value.nASIPIPv6Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.nASIPIPv6Address, $.BER);
    }
    if (value.wLANMACAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.wLANMACAddress, $.BER);
    }
    if (value.sessionAliveTimer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SessionAliveTime, $.BER)(value.sessionAliveTimer, $.BER);
    }
    if (value.geographicalCoordinates !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER);
    }
    if (value.civicAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_I_WLANinformation(value, elGetter);
}


/* eslint-enable */
