/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";


/**
 * @summary FixedUserLocationInformation
 * @description
 *
 * This field contains the UE location in a fixed broadband access network.
 * The location of the subscriber may include Access line id (physical and
 * logical circuit ID) defined in ETSI TS 283 034 [314], SSID and BSSID of
 * the Access Point, defined in IEEE Std 802.11-2012 [408].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.15A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FixedUserLocationInformation ::= SEQUENCE {
 *    sSID                   [0] IMPLICIT OCTET STRING OPTIONAL,
 *    bSSID                  [1] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier   [2] IMPLICIT AccessLineIdentifier OPTIONAL}
 * ```
 * 
 * @class
 */
export
class FixedUserLocationInformation {
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
     * @summary `accessLineIdentifier`.
     * @description
     *
     * This field contains the Access line id (physical and logical circuit ID)
     * serving the 3GPP UE or fixed user (i.e. Fixed device or RG). This field
     * contains the Access line id (physical and logical circuit ID): serving the
     * 3GPP UE or fixed device, behind the RG when in bridge mode or in routed
     * mode without NAT, or of the RG when in routed mode with NAT; of the access
     * point to which the UE is attached, in trusted or untrusted WLAN.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.0A.
     *
     * @public
     * @readonly
     */
    readonly accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;

    constructor (
        sSID?: OPTIONAL<OCTET_STRING>,
        bSSID?: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier?: OPTIONAL<AccessLineIdentifier>
    ) {
        this.sSID = sSID;
        this.bSSID = bSSID;
        this.accessLineIdentifier = accessLineIdentifier;
    }

    /**
     * @summary Restructures an object into a FixedUserLocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `FixedUserLocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FixedUserLocationInformation`.
     * @returns {FixedUserLocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (FixedUserLocationInformation)]: (FixedUserLocationInformation)[_K] }): FixedUserLocationInformation {
        return new FixedUserLocationInformation(_o.sSID, _o.bSSID, _o.accessLineIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of FixedUserLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FixedUserLocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("sSID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bSSID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FixedUserLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FixedUserLocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FixedUserLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FixedUserLocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FixedUserLocationInformation: $.ASN1Decoder<FixedUserLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FixedUserLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FixedUserLocationInformation (el: _Element): FixedUserLocationInformation {
    if (!_cached_decoder_for_FixedUserLocationInformation) { _cached_decoder_for_FixedUserLocationInformation = function (el: _Element): FixedUserLocationInformation {
    let sSID: OPTIONAL<OCTET_STRING>;
    let bSSID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    const callbacks: $.DecodingMap = {
        "sSID": (_el: _Element): void => { sSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bSSID": (_el: _Element): void => { bSSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FixedUserLocationInformation,
        _extension_additions_list_spec_for_FixedUserLocationInformation,
        _root_component_type_list_2_spec_for_FixedUserLocationInformation,
        undefined,
    );
    return new FixedUserLocationInformation(
        sSID,
        bSSID,
        accessLineIdentifier
    );
}; }
    return _cached_decoder_for_FixedUserLocationInformation(el);
}

let _cached_encoder_for_FixedUserLocationInformation: $.ASN1Encoder<FixedUserLocationInformation> | null = null;

/**
 * @summary Encodes a(n) FixedUserLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FixedUserLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_FixedUserLocationInformation (value: FixedUserLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FixedUserLocationInformation) { _cached_encoder_for_FixedUserLocationInformation = function (value: FixedUserLocationInformation, _elGetter: $.ASN1Encoder<FixedUserLocationInformation>): _Element {
    const _components: _Element[] = [];
    if (value.sSID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sSID, $.BER));
    }
    if (value.bSSID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.bSSID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FixedUserLocationInformation(value, elGetter);
}


/* eslint-enable */
