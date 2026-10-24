/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../EpsHI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../EpsHI2Operations/GSMLocation.ta.mjs";
import { type UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../EpsHI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../EpsHI2Operations/UMTSLocation.ta.mjs";
import { type CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
import { type EPSLocation_uELocationTimestamp, _decode_EPSLocation_uELocationTimestamp, _encode_EPSLocation_uELocationTimestamp } from "../EpsHI2Operations/EPSLocation-uELocationTimestamp.ta.mjs";
// export { EPSLocation_uELocationTimestamp, _decode_EPSLocation_uELocationTimestamp, _encode_EPSLocation_uELocationTimestamp } from "../EpsHI2Operations/EPSLocation-uELocationTimestamp.ta.mjs";


/**
 * @summary EPSLocation
 * @description
 * 
 * Location of the target at an EPS node when the warrant authorizes it, or the
 * cell site (table 10.5.2, module comment). Used for EPS events, for 4G
 * cell-site supplemental information (clause 16.4), and for the ProSe
 * UE-to-network relay location (table 13.3.1-2). Mutually exclusive with the
 * other location parameter on the GTPv2 parameters. Time of Location is the
 * timestamp below. 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSLocation ::= SEQUENCE
 * {
 * 
 *     userLocationInfo    [1] OCTET STRING (SIZE (1..39)) OPTIONAL,
 *         -- see 3GPP TS 29.274 [46] parameters coding rules defined for EPS-GTPV2-SpecificParameters.
 *     gsmLocation            [2] GSMLocation OPTIONAL,
 *      umtsLocation        [3] UMTSLocation OPTIONAL,
 *     olduserLocationInfo    [4] OCTET STRING (SIZE (1..39))    type OPTIONAL,
 *         -- coded in the same way as userLocationInfo
 *     lastVisitedTAI        [5] OCTET STRING (SIZE (1..5))    type OPTIONAL,
 *         -- the Tracking Area Identity is coded in accordance with the TAI field in 3GPP TS 29.274
 *         -- [46].
 *     tAIlist                [6] OCTET STRING (SIZE (7..97))    type OPTIONAL,
 *        -- the TAI List is coded acording to 3GPP TS 24.301 [47], without the TAI list IEI
 *     ...,
 *     threeGPP2Bsid        [7] OCTET STRING (SIZE (1..12)) OPTIONAL,
 *         -- contains only the payload from the 3GPP2-BSID AVP described in the 3GPP TS 29.212 [56].
 *     civicAddress        [8] CivicAddress OPTIONAL,
 *     operatorSpecificInfo    [9]    OCTET STRING OPTIONAL,
 *         -- other CSP specific information.
 *     uELocationTimestamp        [10]    CHOICE
 *     {
 *         timestamp            [0]    TimeStamp,
 *         timestampUnknown    [1]    NULL,
 *         ...
 *     } OPTIONAL
 *         -- Date/time of the UE location
 * }
 * ```
 * 
 * @class
 */
export
class EPSLocation {
    /**
     * @summary `userLocationInfo`.
     * @description
     * 
     * User location from the EPS node. The module comment points at the 3GPP TS
     * 29.274 coding rules used for the GTPv2 parameters. Clause 16.4 puts the
     * 4G cell identity of a cell-site report here.
     * 
     * @public
     * @readonly
     */
    readonly userLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `gsmLocation`.
     * @description
     * 
     * GSM coordinates of the target or of the cell site. Table 16.1 puts 4G
     * cell-site latitude, longitude, and azimuth on this path.
     * 
     * @public
     * @readonly
     */
    readonly gsmLocation: OPTIONAL<GSMLocation>;
    /**
     * @summary `umtsLocation`.
     * @description
     * 
     * UMTS geographical-area shape (point, point with uncertainty, or polygon).
     * Clause 10 does not say when this shape is required inside an EPS
     * location.
     * 
     * @public
     * @readonly
     */
    readonly umtsLocation: OPTIONAL<UMTSLocation>;
    /**
     * @summary `olduserLocationInfo`.
     * @description
     * 
     * Earlier user location, coded the same way as the current user location
     * (module comment). Table 10.5.2 reports old location, before a
     * tracking-area update, in the EPS location parameter; it does not name
     * this component.
     * 
     * @public
     * @readonly
     */
    readonly olduserLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lastVisitedTAI`.
     * @description
     * 
     * Tracking-area identity, coded as the TAI field in 3GPP TS 29.274 (module
     * comment).
     * 
     * @public
     * @readonly
     */
    readonly lastVisitedTAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tAIlist`.
     * @description
     * 
     * TAI list coded according to 3GPP TS 24.301, without the TAI-list
     * information-element identifier (module comment).
     * 
     * @public
     * @readonly
     */
    readonly tAIlist: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `threeGPP2Bsid`.
     * @description
     * 
     * Payload of the 3GPP2-BSID AVP defined in 3GPP TS 29.212, and only that
     * payload (module comment). Clause 10 tables do not name this component.
     * 
     * @public
     * @readonly
     */
    readonly threeGPP2Bsid: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `civicAddress`.
     * @description
     * 
     * Civic address of the cell site, when known (table 16.1, the 4G path). The
     * EPS event tables do not otherwise define it.
     * 
     * @public
     * @readonly
     */
    readonly civicAddress: OPTIONAL<CivicAddress>;
    /**
     * @summary `operatorSpecificInfo`.
     * @description
     * 
     * Other CSP-specific information whose format is not standardized (module
     * comment, table 16.1).
     * 
     * @public
     * @readonly
     */
    readonly operatorSpecificInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uELocationTimestamp`.
     * @description
     * 
     * Date and time the location was obtained (module comment). Conditional
     * when target location is provided (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly uELocationTimestamp: OPTIONAL<EPSLocation_uELocationTimestamp>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userLocationInfo?: OPTIONAL<OCTET_STRING>,
        gsmLocation?: OPTIONAL<GSMLocation>,
        umtsLocation?: OPTIONAL<UMTSLocation>,
        olduserLocationInfo?: OPTIONAL<OCTET_STRING>,
        lastVisitedTAI?: OPTIONAL<OCTET_STRING>,
        tAIlist?: OPTIONAL<OCTET_STRING>,
        threeGPP2Bsid?: OPTIONAL<OCTET_STRING>,
        civicAddress?: OPTIONAL<CivicAddress>,
        operatorSpecificInfo?: OPTIONAL<OCTET_STRING>,
        uELocationTimestamp?: OPTIONAL<EPSLocation_uELocationTimestamp>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userLocationInfo = userLocationInfo;
        this.gsmLocation = gsmLocation;
        this.umtsLocation = umtsLocation;
        this.olduserLocationInfo = olduserLocationInfo;
        this.lastVisitedTAI = lastVisitedTAI;
        this.tAIlist = tAIlist;
        this.threeGPP2Bsid = threeGPP2Bsid;
        this.civicAddress = civicAddress;
        this.operatorSpecificInfo = operatorSpecificInfo;
        this.uELocationTimestamp = uELocationTimestamp;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSLocation
     * @description
     * 
     * This takes an `object` and converts it to a `EPSLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSLocation`.
     * @returns {EPSLocation}
     */
    public static _from_object (_o: { [_K in keyof (EPSLocation)]: (EPSLocation)[_K] }): EPSLocation {
        return new EPSLocation(_o.userLocationInfo, _o.gsmLocation, _o.umtsLocation, _o.olduserLocationInfo, _o.lastVisitedTAI, _o.tAIlist, _o.threeGPP2Bsid, _o.civicAddress, _o.operatorSpecificInfo, _o.uELocationTimestamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("olduserLocationInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lastVisitedTAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("tAIlist", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("threeGPP2Bsid", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("operatorSpecificInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_EPSLocation: $.ASN1Decoder<EPSLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSLocation (el: _Element): EPSLocation {
    if (!_cached_decoder_for_EPSLocation) { _cached_decoder_for_EPSLocation = function (el: _Element): EPSLocation {
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let olduserLocationInfo: OPTIONAL<OCTET_STRING>;
    let lastVisitedTAI: OPTIONAL<OCTET_STRING>;
    let tAIlist: OPTIONAL<OCTET_STRING>;
    let threeGPP2Bsid: OPTIONAL<OCTET_STRING>;
    let civicAddress: OPTIONAL<CivicAddress>;
    let operatorSpecificInfo: OPTIONAL<OCTET_STRING>;
    let uELocationTimestamp: OPTIONAL<EPSLocation_uELocationTimestamp>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userLocationInfo": (_el: _Element): void => {
            userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (userLocationInfo.length < 1 || userLocationInfo.length > 39) {
                throw new ASN1SizeError("EPSLocation.userLocationInfo violates SIZE constraint");
            }
        },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "olduserLocationInfo": (_el: _Element): void => {
            olduserLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (olduserLocationInfo.length < 1 || olduserLocationInfo.length > 39) {
                throw new ASN1SizeError("EPSLocation.olduserLocationInfo violates SIZE constraint");
            }
        },
        "lastVisitedTAI": (_el: _Element): void => {
            lastVisitedTAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (lastVisitedTAI.length < 1 || lastVisitedTAI.length > 5) {
                throw new ASN1SizeError("EPSLocation.lastVisitedTAI violates SIZE constraint");
            }
        },
        "tAIlist": (_el: _Element): void => {
            tAIlist = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (tAIlist.length < 7 || tAIlist.length > 97) {
                throw new ASN1SizeError("EPSLocation.tAIlist violates SIZE constraint");
            }
        },
        "threeGPP2Bsid": (_el: _Element): void => {
            threeGPP2Bsid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (threeGPP2Bsid.length < 1 || threeGPP2Bsid.length > 12) {
                throw new ASN1SizeError("EPSLocation.threeGPP2Bsid violates SIZE constraint");
            }
        },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_explicit<CivicAddress>(() => _decode_CivicAddress)(_el); },
        "operatorSpecificInfo": (_el: _Element): void => { operatorSpecificInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_explicit<EPSLocation_uELocationTimestamp>(() => _decode_EPSLocation_uELocationTimestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSLocation,
        _extension_additions_list_spec_for_EPSLocation,
        _root_component_type_list_2_spec_for_EPSLocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSLocation(
        userLocationInfo,
        gsmLocation,
        umtsLocation,
        olduserLocationInfo,
        lastVisitedTAI,
        tAIlist,
        threeGPP2Bsid,
        civicAddress,
        operatorSpecificInfo,
        uELocationTimestamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSLocation(el);
}

let _cached_encoder_for_EPSLocation: $.ASN1Encoder<EPSLocation> | null = null;

/**
 * @summary Encodes a(n) EPSLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSLocation, encoded as an ASN.1 Element.
 */
export
function _encode_EPSLocation (value: EPSLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSLocation) { _cached_encoder_for_EPSLocation = function (value: EPSLocation, elGetter: $.ASN1Encoder<EPSLocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER);
    }
    if (value.gsmLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER);
    }
    if (value.umtsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER);
    }
    if (value.olduserLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.olduserLocationInfo, $.BER);
    }
    if (value.lastVisitedTAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.lastVisitedTAI, $.BER);
    }
    if (value.tAIlist !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.tAIlist, $.BER);
    }
    if (value.threeGPP2Bsid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.threeGPP2Bsid, $.BER);
    }
    if (value.civicAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER);
    }
    if (value.operatorSpecificInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.operatorSpecificInfo, $.BER);
    }
    if (value.uELocationTimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_EPSLocation_uELocationTimestamp, $.BER)(value.uELocationTimestamp, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSLocation(value, elGetter);
}


/* eslint-enable */
