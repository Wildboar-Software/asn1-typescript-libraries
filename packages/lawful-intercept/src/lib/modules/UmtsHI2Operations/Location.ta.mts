/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GlobalCellID, _decode_GlobalCellID, _encode_GlobalCellID } from "../UmtsHI2Operations/GlobalCellID.ta.mjs";
// export { GlobalCellID, _decode_GlobalCellID, _encode_GlobalCellID } from "../UmtsHI2Operations/GlobalCellID.ta.mjs";
import { Rai, _decode_Rai, _encode_Rai } from "../UmtsHI2Operations/Rai.ta.mjs";
// export { Rai, _decode_Rai, _encode_Rai } from "../UmtsHI2Operations/Rai.ta.mjs";
import { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../UmtsHI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../UmtsHI2Operations/GSMLocation.ta.mjs";
import { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../UmtsHI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../UmtsHI2Operations/UMTSLocation.ta.mjs";
import { Sai, _decode_Sai, _encode_Sai } from "../UmtsHI2Operations/Sai.ta.mjs";
// export { Sai, _decode_Sai, _encode_Sai } from "../UmtsHI2Operations/Sai.ta.mjs";
import { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
import { Location_uELocationTimestamp, _decode_Location_uELocationTimestamp, _encode_Location_uELocationTimestamp } from "../UmtsHI2Operations/Location-uELocationTimestamp.ta.mjs";
// export { Location_uELocationTimestamp, _decode_Location_uELocationTimestamp, _encode_Location_uELocationTimestamp } from "../UmtsHI2Operations/Location-uELocationTimestamp.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 * {
 *     e164-Number         [1] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *         -- Coded in the same format as the ISUP location number (parameter
 *         -- field) of the ISUP (see EN 300 356 [30]).
 *     globalCellID        [2] GlobalCellID    OPTIONAL,
 *         --see MAP format (see [4])
 *     rAI                    [4] Rai        OPTIONAL,
 *         -- the Routeing Area Identifier in the current  SGSN is coded in accordance with the
 *         --  10.5.5.15 of document [9] without the Routing Area Identification IEI
 *         -- (only the last 6 octets are used)
 *     gsmLocation            [5] GSMLocation OPTIONAL,
 *      umtsLocation        [6] UMTSLocation OPTIONAL,
 *     sAI                    [7] Sai    OPTIONAL,
 *         -- format:    PLMN-ID    3 octets (no. 1 - 3)
 *         --            LAC        2 octets (no. 4 - 5)
 *         --            SAC        2 octets (no. 6 - 7)
 *         --            (according to 3GPP TS 25.413 [62])
 *     ...,
 *     oldRAI                [8] Rai        OPTIONAL,
 *         -- the Routeing Area Identifier in the old SGSN is coded in accordance with the
 *         --  10.5.5.15 of document [9] without the Routing Area Identification IEI
 *         -- (only the last 6 octets are used).
 *     tAI                    [9] OCTET STRING (SIZE (6))    OPTIONAL,
 *         -- The TAI is coded according to the TS 29.118 [64] without the TAI IEI.
 *         -- The tAI parameter is applicable only to the CS traffic cases where
 *         -- the available location information is the one received from the the MME.
 *     eCGI                [10] OCTET STRING (SIZE (8)) OPTIONAL,
 *         -- the ECGI is coded according to the TS 29.118 [64] without the ECGI IEI.
 *         -- The eCGI parameter is applicable only to the CS traffic cases where
 *         -- the available location information is the one received from the the MME.
 *     civicAddress        [11] CivicAddress OPTIONAL,
 *         -- Every elements that describe civicAddress are based on IETF RFC 4776 or IETF
 *         -- 5139, ISO.3166-1 and -2, ISO 639-1, UPU SB42-4 ([71]to [75]) Such element is to
 *         -- enrich IRI
 *         -- Messages to LEMF by civic elements on the location of a H(e)NodeB or a WLAN hotspot,
 *         -- instead of geographical location  of the target or any geo-coordinates. Please, look
 *         -- at the 5.11 location information of TS 33.106 and 4 functional architecture of TS
 *         -- 33.107 on how such element can be used.
 *     operatorSpecificInfo    [12]    OCTET STRING OPTIONAL,
 *         -- other CSP specific information.
 *     uELocationTimestamp        [13]    CHOICE
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
class Location {
    /**
     * @summary `e164_Number`.
     * @public
     * @readonly
     */
    readonly e164_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `globalCellID`.
     * @public
     * @readonly
     */
    readonly globalCellID: OPTIONAL<GlobalCellID>;
    /**
     * @summary `rAI`.
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<Rai>;
    /**
     * @summary `gsmLocation`.
     * @public
     * @readonly
     */
    readonly gsmLocation: OPTIONAL<GSMLocation>;
    /**
     * @summary `umtsLocation`.
     * @public
     * @readonly
     */
    readonly umtsLocation: OPTIONAL<UMTSLocation>;
    /**
     * @summary `sAI`.
     * @public
     * @readonly
     */
    readonly sAI: OPTIONAL<Sai>;
    /**
     * @summary `oldRAI`.
     * @public
     * @readonly
     */
    readonly oldRAI: OPTIONAL<Rai>;
    /**
     * @summary `tAI`.
     * @public
     * @readonly
     */
    readonly tAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eCGI`.
     * @public
     * @readonly
     */
    readonly eCGI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `civicAddress`.
     * @public
     * @readonly
     */
    readonly civicAddress: OPTIONAL<CivicAddress>;
    /**
     * @summary `operatorSpecificInfo`.
     * @public
     * @readonly
     */
    readonly operatorSpecificInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uELocationTimestamp`.
     * @public
     * @readonly
     */
    readonly uELocationTimestamp: OPTIONAL<Location_uELocationTimestamp>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        e164_Number: OPTIONAL<OCTET_STRING>,
        globalCellID: OPTIONAL<GlobalCellID>,
        rAI: OPTIONAL<Rai>,
        gsmLocation: OPTIONAL<GSMLocation>,
        umtsLocation: OPTIONAL<UMTSLocation>,
        sAI: OPTIONAL<Sai>,
        oldRAI: OPTIONAL<Rai>,
        tAI: OPTIONAL<OCTET_STRING>,
        eCGI: OPTIONAL<OCTET_STRING>,
        civicAddress: OPTIONAL<CivicAddress>,
        operatorSpecificInfo: OPTIONAL<OCTET_STRING>,
        uELocationTimestamp: OPTIONAL<Location_uELocationTimestamp>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.e164_Number = e164_Number;
        if (this.e164_Number !== undefined && (this.e164_Number.length < 1 || this.e164_Number.length > 25)) {
            throw new ASN1SizeError("e164_Number violates the SIZE constraint");
        }
        this.globalCellID = globalCellID;
        this.rAI = rAI;
        this.gsmLocation = gsmLocation;
        this.umtsLocation = umtsLocation;
        this.sAI = sAI;
        this.oldRAI = oldRAI;
        this.tAI = tAI;
        if (this.tAI !== undefined && (this.tAI.length < 6 || this.tAI.length > 6)) {
            throw new ASN1SizeError("tAI violates the SIZE constraint");
        }
        this.eCGI = eCGI;
        if (this.eCGI !== undefined && (this.eCGI.length < 8 || this.eCGI.length > 8)) {
            throw new ASN1SizeError("eCGI violates the SIZE constraint");
        }
        this.civicAddress = civicAddress;
        this.operatorSpecificInfo = operatorSpecificInfo;
        this.uELocationTimestamp = uELocationTimestamp;
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
        return new Location(_o.e164_Number, _o.globalCellID, _o.rAI, _o.gsmLocation, _o.umtsLocation, _o.sAI, _o.oldRAI, _o.tAI, _o.eCGI, _o.civicAddress, _o.operatorSpecificInfo, _o.uELocationTimestamp, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("e164-Number", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("globalCellID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 7))
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
    new $.ComponentSpec("oldRAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("tAI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("operatorSpecificInfo", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 13))
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
    let e164_Number: OPTIONAL<OCTET_STRING>;
    let globalCellID: OPTIONAL<GlobalCellID>;
    let rAI: OPTIONAL<Rai>;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let sAI: OPTIONAL<Sai>;
    let oldRAI: OPTIONAL<Rai>;
    let tAI: OPTIONAL<OCTET_STRING>;
    let eCGI: OPTIONAL<OCTET_STRING>;
    let civicAddress: OPTIONAL<CivicAddress>;
    let operatorSpecificInfo: OPTIONAL<OCTET_STRING>;
    let uELocationTimestamp: OPTIONAL<Location_uELocationTimestamp>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "e164-Number": (_el: _Element): void => { e164_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "globalCellID": (_el: _Element): void => { globalCellID = $._decode_implicit<GlobalCellID>(() => _decode_GlobalCellID)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<Rai>(() => _decode_Rai)(_el); },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<Sai>(() => _decode_Sai)(_el); },
        "oldRAI": (_el: _Element): void => { oldRAI = $._decode_implicit<Rai>(() => _decode_Rai)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_explicit<CivicAddress>(() => _decode_CivicAddress)(_el); },
        "operatorSpecificInfo": (_el: _Element): void => { operatorSpecificInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_explicit<Location_uELocationTimestamp>(() => _decode_Location_uELocationTimestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Location,
        _extension_additions_list_spec_for_Location,
        _root_component_type_list_2_spec_for_Location,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Location(
        e164_Number,
        globalCellID,
        rAI,
        gsmLocation,
        umtsLocation,
        sAI,
        oldRAI,
        tAI,
        eCGI,
        civicAddress,
        operatorSpecificInfo,
        uELocationTimestamp,
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
    if (!_cached_encoder_for_Location) { _cached_encoder_for_Location = function (value: Location, _elGetter: $.ASN1Encoder<Location>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.e164_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.e164_Number, $.BER);
    }
    if (value.globalCellID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GlobalCellID, $.BER)(value.globalCellID, $.BER);
    }
    if (value.rAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Rai, $.BER)(value.rAI, $.BER);
    }
    if (value.gsmLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER);
    }
    if (value.umtsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Sai, $.BER)(value.sAI, $.BER);
    }
    if (value.oldRAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Rai, $.BER)(value.oldRAI, $.BER);
    }
    if (value.tAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tAI, $.BER);
    }
    if (value.eCGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eCGI, $.BER);
    }
    if (value.civicAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER);
    }
    if (value.operatorSpecificInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.operatorSpecificInfo, $.BER);
    }
    if (value.uELocationTimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_Location_uELocationTimestamp, $.BER)(value.uELocationTimestamp, $.BER);
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
