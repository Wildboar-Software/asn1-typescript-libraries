/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
// export { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { EPSRANNASCause, _decode_EPSRANNASCause, _encode_EPSRANNASCause } from "../TS33128Payloads/EPSRANNASCause.ta.mjs";
// export { EPSRANNASCause, _decode_EPSRANNASCause, _encode_EPSRANNASCause } from "../TS33128Payloads/EPSRANNASCause.ta.mjs";
import { PDNConnectionType, _decode_PDNConnectionType, _encode_PDNConnectionType, _enum_for_PDNConnectionType } from "../TS33128Payloads/PDNConnectionType.ta.mjs";
// export { PDNConnectionType, _enum_for_PDNConnectionType, PDNConnectionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_nonIP /* IMPORTED_LONG_ENUMERATION_ITEM */, nonIP /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDNConnectionType, _encode_PDNConnectionType } from "../TS33128Payloads/PDNConnectionType.ta.mjs";
import { PDNConnectionIndicationFlags, _decode_PDNConnectionIndicationFlags, _encode_PDNConnectionIndicationFlags } from "../TS33128Payloads/PDNConnectionIndicationFlags.ta.mjs";
// export { PDNConnectionIndicationFlags, _decode_PDNConnectionIndicationFlags, _encode_PDNConnectionIndicationFlags } from "../TS33128Payloads/PDNConnectionIndicationFlags.ta.mjs";
import { EPSPDNConnectionReleaseScopeIndication, _decode_EPSPDNConnectionReleaseScopeIndication, _encode_EPSPDNConnectionReleaseScopeIndication } from "../TS33128Payloads/EPSPDNConnectionReleaseScopeIndication.ta.mjs";
// export { EPSPDNConnectionReleaseScopeIndication, _decode_EPSPDNConnectionReleaseScopeIndication, _encode_EPSPDNConnectionReleaseScopeIndication } from "../TS33128Payloads/EPSPDNConnectionReleaseScopeIndication.ta.mjs";
import { EPSBearersDeleted, _decode_EPSBearersDeleted, _encode_EPSBearersDeleted } from "../TS33128Payloads/EPSBearersDeleted.ta.mjs";
// export { EPSBearersDeleted, _decode_EPSBearersDeleted, _encode_EPSBearersDeleted } from "../TS33128Payloads/EPSBearersDeleted.ta.mjs";


/**
 * @summary EPSPDNConnectionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionRelease ::= SEQUENCE
 * {
 *     ePSSubscriberIDs    [1] EPSSubscriberIDs,
 *     iMSIUnauthenticated [2] IMSIUnauthenticatedIndication OPTIONAL,
 *     defaultBearerID     [3] EPSBearerID,
 *     location            [4] Location OPTIONAL,
 *     gTPTunnelInfo       [5] GTPTunnelInfo OPTIONAL,
 *     rANNASCause         [6] EPSRANNASCause OPTIONAL,
 *     pDNConnectionType   [7] PDNConnectionType,
 *     indicationFlags     [8] PDNConnectionIndicationFlags OPTIONAL,
 *     scopeIndication     [9] EPSPDNConnectionReleaseScopeIndication OPTIONAL,
 *     bearersDeleted      [10] SEQUENCE OF EPSBearersDeleted OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSPDNConnectionRelease {
    /**
     * @summary `ePSSubscriberIDs`.
     * @public
     * @readonly
     */
    readonly ePSSubscriberIDs: EPSSubscriberIDs;
    /**
     * @summary `iMSIUnauthenticated`.
     * @public
     * @readonly
     */
    readonly iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    /**
     * @summary `defaultBearerID`.
     * @public
     * @readonly
     */
    readonly defaultBearerID: EPSBearerID;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `gTPTunnelInfo`.
     * @public
     * @readonly
     */
    readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    /**
     * @summary `rANNASCause`.
     * @public
     * @readonly
     */
    readonly rANNASCause: OPTIONAL<EPSRANNASCause>;
    /**
     * @summary `pDNConnectionType`.
     * @public
     * @readonly
     */
    readonly pDNConnectionType: PDNConnectionType;
    /**
     * @summary `indicationFlags`.
     * @public
     * @readonly
     */
    readonly indicationFlags: OPTIONAL<PDNConnectionIndicationFlags>;
    /**
     * @summary `scopeIndication`.
     * @public
     * @readonly
     */
    readonly scopeIndication: OPTIONAL<EPSPDNConnectionReleaseScopeIndication>;
    /**
     * @summary `bearersDeleted`.
     * @public
     * @readonly
     */
    readonly bearersDeleted: OPTIONAL<EPSBearersDeleted[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ePSSubscriberIDs: EPSSubscriberIDs,
        iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>,
        defaultBearerID: EPSBearerID,
        location: OPTIONAL<Location>,
        gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        rANNASCause: OPTIONAL<EPSRANNASCause>,
        pDNConnectionType: PDNConnectionType,
        indicationFlags: OPTIONAL<PDNConnectionIndicationFlags>,
        scopeIndication: OPTIONAL<EPSPDNConnectionReleaseScopeIndication>,
        bearersDeleted: OPTIONAL<EPSBearersDeleted[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ePSSubscriberIDs = ePSSubscriberIDs;
        this.iMSIUnauthenticated = iMSIUnauthenticated;
        this.defaultBearerID = defaultBearerID;
        this.location = location;
        this.gTPTunnelInfo = gTPTunnelInfo;
        this.rANNASCause = rANNASCause;
        this.pDNConnectionType = pDNConnectionType;
        this.indicationFlags = indicationFlags;
        this.scopeIndication = scopeIndication;
        this.bearersDeleted = bearersDeleted;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSPDNConnectionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `EPSPDNConnectionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSPDNConnectionRelease`.
     * @returns {EPSPDNConnectionRelease}
     */
    public static _from_object (_o: { [_K in keyof (EPSPDNConnectionRelease)]: (EPSPDNConnectionRelease)[_K] }): EPSPDNConnectionRelease {
        return new EPSPDNConnectionRelease(_o.ePSSubscriberIDs, _o.iMSIUnauthenticated, _o.defaultBearerID, _o.location, _o.gTPTunnelInfo, _o.rANNASCause, _o.pDNConnectionType, _o.indicationFlags, _o.scopeIndication, _o.bearersDeleted, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pDNConnectionType`
         * @public
         * @static
         */

    public static _enum_for_pDNConnectionType = _enum_for_PDNConnectionType;
}

/**
 * @summary The Leading Root Component Types of EPSPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSPDNConnectionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSSubscriberIDs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultBearerID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rANNASCause", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pDNConnectionType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("indicationFlags", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("scopeIndication", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bearersDeleted", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EPSPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSPDNConnectionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSPDNConnectionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSPDNConnectionRelease: $.ASN1Decoder<EPSPDNConnectionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNConnectionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNConnectionRelease (el: _Element): EPSPDNConnectionRelease {
    if (!_cached_decoder_for_EPSPDNConnectionRelease) { _cached_decoder_for_EPSPDNConnectionRelease = function (el: _Element): EPSPDNConnectionRelease {
    let ePSSubscriberIDs!: EPSSubscriberIDs;
    let iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    let defaultBearerID!: EPSBearerID;
    let location: OPTIONAL<Location>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let rANNASCause: OPTIONAL<EPSRANNASCause>;
    let pDNConnectionType!: PDNConnectionType;
    let indicationFlags: OPTIONAL<PDNConnectionIndicationFlags>;
    let scopeIndication: OPTIONAL<EPSPDNConnectionReleaseScopeIndication>;
    let bearersDeleted: OPTIONAL<EPSBearersDeleted[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "iMSIUnauthenticated": (_el: _Element): void => { iMSIUnauthenticated = $._decode_implicit<IMSIUnauthenticatedIndication>(() => _decode_IMSIUnauthenticatedIndication)(_el); },
        "defaultBearerID": (_el: _Element): void => { defaultBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "rANNASCause": (_el: _Element): void => { rANNASCause = $._decode_implicit<EPSRANNASCause>(() => _decode_EPSRANNASCause)(_el); },
        "pDNConnectionType": (_el: _Element): void => { pDNConnectionType = $._decode_implicit<PDNConnectionType>(() => _decode_PDNConnectionType)(_el); },
        "indicationFlags": (_el: _Element): void => { indicationFlags = $._decode_implicit<PDNConnectionIndicationFlags>(() => _decode_PDNConnectionIndicationFlags)(_el); },
        "scopeIndication": (_el: _Element): void => { scopeIndication = $._decode_implicit<EPSPDNConnectionReleaseScopeIndication>(() => _decode_EPSPDNConnectionReleaseScopeIndication)(_el); },
        "bearersDeleted": (_el: _Element): void => { bearersDeleted = $._decode_implicit<EPSBearersDeleted[]>(() => $._decodeSequenceOf<EPSBearersDeleted>(() => _decode_EPSBearersDeleted))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSPDNConnectionRelease,
        _extension_additions_list_spec_for_EPSPDNConnectionRelease,
        _root_component_type_list_2_spec_for_EPSPDNConnectionRelease,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSPDNConnectionRelease(
        ePSSubscriberIDs,
        iMSIUnauthenticated,
        defaultBearerID,
        location,
        gTPTunnelInfo,
        rANNASCause,
        pDNConnectionType,
        indicationFlags,
        scopeIndication,
        bearersDeleted,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSPDNConnectionRelease(el);
}

let _cached_encoder_for_EPSPDNConnectionRelease: $.ASN1Encoder<EPSPDNConnectionRelease> | null = null;

/**
 * @summary Encodes a(n) EPSPDNConnectionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNConnectionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNConnectionRelease (value: EPSPDNConnectionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNConnectionRelease) { _cached_encoder_for_EPSPDNConnectionRelease = function (value: EPSPDNConnectionRelease, elGetter: $.ASN1Encoder<EPSPDNConnectionRelease>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER);
    if (value.iMSIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMSIUnauthenticatedIndication, $.BER)(value.iMSIUnauthenticated, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerID, $.BER)(value.defaultBearerID, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.gTPTunnelInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER);
    }
    if (value.rANNASCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_EPSRANNASCause, $.BER)(value.rANNASCause, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_PDNConnectionType, $.BER)(value.pDNConnectionType, $.BER);
    if (value.indicationFlags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PDNConnectionIndicationFlags, $.BER)(value.indicationFlags, $.BER);
    }
    if (value.scopeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_EPSPDNConnectionReleaseScopeIndication, $.BER)(value.scopeIndication, $.BER);
    }
    if (value.bearersDeleted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<EPSBearersDeleted>(() => _encode_EPSBearersDeleted, $.BER), $.BER)(value.bearersDeleted, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSPDNConnectionRelease(value, elGetter);
}


/* eslint-enable */
