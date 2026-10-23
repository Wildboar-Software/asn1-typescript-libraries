/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
import { WlanLocationAttributes, _decode_WlanLocationAttributes, _encode_WlanLocationAttributes } from "../LI-PS-PDU/WlanLocationAttributes.ta.mjs";
import * as EpsHI2Operations from "../EpsHI2Operations/index.mjs";
import * as HI2Operations from "../HI2Operations/index.mjs";
import * as TS33128Payloads from "../TS33128Payloads/index.mjs";
import * as UmtsHI2Operations from "../UmtsHI2Operations/index.mjs";
// export { WlanLocationAttributes, _decode_WlanLocationAttributes, _encode_WlanLocationAttributes } from "../LI-PS-PDU/WlanLocationAttributes.ta.mjs";
// export { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * Common location parameter. Service-specific standards otherwise repeat the
 * same location structures, so this module defines them once. Each
 * service-specific standard decides whether the parameter is allowed and how it
 * is used. The specification does not say that the alternatives are mutually
 * exclusive.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 *     -- This is a common parameter, the use of this parameter is described in clause 4.5
 * {
 *     umtsHI2Location             [0] UmtsHI2Operations.Location OPTIONAL,
 *     epsLocation                 [1] EpsHI2Operations.EPSLocation OPTIONAL,
 *     ...,
 *     wlanLocationAttributes      [2] WlanLocationAttributes OPTIONAL,
 *     eTSI671HI2Location          [3] HI2Operations.Location OPTIONAL,
 *     threeGPP33128UserLocation   [4] TS33128Payloads.UserLocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Location {
    /**
     * @summary `umtsHI2Location`.
     * @description
     *
     * Location from the 3GPP TS 33.108 UMTS HI2 module.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly umtsHI2Location: OPTIONAL<UmtsHI2Operations.Location>;
    /**
     * @summary `epsLocation`.
     * @description
     *
     * EPS location from the 3GPP TS 33.108 EPS HI2 module.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly epsLocation: OPTIONAL<EpsHI2Operations.EPSLocation>;
    /**
     * @summary `wlanLocationAttributes`.
     * @description
     *
     * WLAN access-point attributes. In this module that is the access-point MAC
     * address derived from the BSSID.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly wlanLocationAttributes: OPTIONAL<WlanLocationAttributes>;
    /**
     * @summary `eTSI671HI2Location`.
     * @description
     *
     * Location from ETSI TS 101 671 HI2.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly eTSI671HI2Location: OPTIONAL<HI2Operations.Location>;
    /**
     * @summary `threeGPP33128UserLocation`.
     * @description
     *
     * User location from 3GPP TS 33.128.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5, clause 4.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly threeGPP33128UserLocation: OPTIONAL<TS33128Payloads.UserLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        umtsHI2Location?: OPTIONAL<UmtsHI2Operations.Location>,
        epsLocation?: OPTIONAL<EpsHI2Operations.EPSLocation>,
        wlanLocationAttributes?: OPTIONAL<WlanLocationAttributes>,
        eTSI671HI2Location?: OPTIONAL<HI2Operations.Location>,
        threeGPP33128UserLocation?: OPTIONAL<TS33128Payloads.UserLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.umtsHI2Location = umtsHI2Location;
        this.epsLocation = epsLocation;
        this.wlanLocationAttributes = wlanLocationAttributes;
        this.eTSI671HI2Location = eTSI671HI2Location;
        this.threeGPP33128UserLocation = threeGPP33128UserLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Location
     * @description
     * 
     * This takes an `object` and converts it to a `Location`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Location`.
     * @returns {Location}
     */
    public static _from_object (_o: { [_K in keyof (Location)]: (Location)[_K] }): Location {
        return new Location(_o.umtsHI2Location, _o.epsLocation, _o.wlanLocationAttributes, _o.eTSI671HI2Location, _o.threeGPP33128UserLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("umtsHI2Location", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("epsLocation", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Location: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("wlanLocationAttributes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eTSI671HI2Location", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("threeGPP33128UserLocation", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_Location: $.ASN1Decoder<Location> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Location
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Location (el: _Element): Location {
    if (!_cached_decoder_for_Location) { _cached_decoder_for_Location = function (el: _Element): Location {
    let umtsHI2Location: OPTIONAL<UmtsHI2Operations.Location>;
    let epsLocation: OPTIONAL<EpsHI2Operations.EPSLocation>;
    let wlanLocationAttributes: OPTIONAL<WlanLocationAttributes>;
    let eTSI671HI2Location: OPTIONAL<HI2Operations.Location>;
    let threeGPP33128UserLocation: OPTIONAL<TS33128Payloads.UserLocation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "umtsHI2Location": (_el: _Element): void => { umtsHI2Location = $._decode_implicit<UmtsHI2Operations.Location>(() => UmtsHI2Operations._decode_Location)(_el); },
        "epsLocation": (_el: _Element): void => { epsLocation = $._decode_implicit<EpsHI2Operations.EPSLocation>(() => EpsHI2Operations._decode_EPSLocation)(_el); },
        "wlanLocationAttributes": (_el: _Element): void => { wlanLocationAttributes = $._decode_implicit<WlanLocationAttributes>(() => _decode_WlanLocationAttributes)(_el); },
        "eTSI671HI2Location": (_el: _Element): void => { eTSI671HI2Location = $._decode_implicit<HI2Operations.Location>(() => HI2Operations._decode_Location)(_el); },
        "threeGPP33128UserLocation": (_el: _Element): void => { threeGPP33128UserLocation = $._decode_implicit<TS33128Payloads.UserLocation>(() => TS33128Payloads._decode_UserLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Location,
        _extension_additions_list_spec_for_Location,
        _root_component_type_list_2_spec_for_Location,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Location(
        umtsHI2Location,
        epsLocation,
        wlanLocationAttributes,
        eTSI671HI2Location,
        threeGPP33128UserLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Location(el);
}

let _cached_encoder_for_Location: $.ASN1Encoder<Location> | null = null;

/**
 * @summary Encodes a(n) Location into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Location, encoded as an ASN.1 Element.
 */
export
function _encode_Location (value: Location, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Location) { _cached_encoder_for_Location = function (value: Location, elGetter: $.ASN1Encoder<Location>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.umtsHI2Location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => UmtsHI2Operations._encode_Location, $.BER)(value.umtsHI2Location, $.BER);
    }
    if (value.epsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => EpsHI2Operations._encode_EPSLocation, $.BER)(value.epsLocation, $.BER);
    }
    if (value.wlanLocationAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_WlanLocationAttributes, $.BER)(value.wlanLocationAttributes, $.BER);
    }
    if (value.eTSI671HI2Location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => HI2Operations._encode_Location, $.BER)(value.eTSI671HI2Location, $.BER);
    }
    if (value.threeGPP33128UserLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => TS33128Payloads._encode_UserLocation, $.BER)(value.threeGPP33128UserLocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Location(value, elGetter);
}


/* eslint-enable */
