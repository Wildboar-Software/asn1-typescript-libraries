/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../HI2Operations/TetraLocation.ta.mjs";
// export { TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../HI2Operations/TetraLocation.ta.mjs";
import { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
import { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * Location of the target subscriber. An additional network parameter, included
 * when it becomes available. GSM table A.8.2 maps cell id and location area
 * code here. GPRS table B.5.2 maps the cell global id to `globalCellID` and the
 * routing area identifier to `rAI`. Components that cite MAP or a 3GPP
 * specification carry only the coding rule stated in this module.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.8.4, clause
 * B.5.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 * {
 *     e164-Number            [1] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *         -- Coded in the same format as the ISUP location number (parameter field)
 *         -- of the ISUP (see EN 300 356 [5]).
 *     globalCellID        [2] OCTET STRING (SIZE (5..7)) OPTIONAL,
 *         -- See MAP format (see TS GSM 09.02 [32]).
 *     tetraLocation        [3] TetraLocation OPTIONAL,
 *         -- This optional parameter is not in use anymore, but is kept for backwards compatibility.
 *     rAI                    [4] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- The Routeing Area Identifier (RAI) in the current SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI (only the
 *         -- last 6 octets are used).
 *     gsmLocation            [5] GSMLocation OPTIONAL,
 *     umtsLocation        [6] UMTSLocation OPTIONAL,
 *     sAI                    [7] OCTET STRING (SIZE (7)) OPTIONAL,
 *         -- format:    PLMN-ID    3 octets (no. 1-3),
 *         --             LAC        2 octets (no. 4-5),
 *         --             SAC        2 octets (no. 6-7)
 *         --             (according to 3GPP 25.413 [82]).
 *     ...,
 *     oldRAI                [8] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- the "Routeing Area Identifier" in the old SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI
 *         -- (only the last 6 octets are used).
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     tAI                    [9] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- The "Tracking Area Identity" (TAI) is coded in accordance with 3GPP TS 29.118 [83] 
 *         -- without the TAI IEI.
 *         -- The tAI parameter is applicable only to the CS traffic cases where the available 
 *         -- location information is the one received from the Mobility Management Entity (MME).
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     eCGI                [10] OCTET STRING (SIZE (8)) OPTIONAL
 *         -- the "E-UTRAN Cell Global Identity" (E-CGI) is coded in accordance with 
 *         -- 3GPP TS 29.118 [83] without the E-CGI IEI.
 *         -- The eCGI parameter is applicable only to the CS traffic cases where 
 *         -- the available location information is the one received from the MME.
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 * }
 * ```
 * 
 * @class
 */
export
class Location {
    /**
     * @summary `e164_Number`.
     * @description
     *
     * Location number, coded as the ISUP location number parameter field (EN
     * 300 356). Size 1 to 25. Table A.3.2 lists the location number as ISUP or
     * MAP.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly e164_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `globalCellID`.
     * @description
     *
     * Cell global identity in MAP format (TS GSM 09.02). Size 5 to 7. GSM uses
     * it as the target's cell id. GPRS table B.5.2 maps the cell global id
     * here. This module states no further radio coding.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly globalCellID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tetraLocation`.
     * @description
     *
     * Not in use anymore. Kept so that old encodings can still be read. It is
     * not the current TETRA location mechanism. Clause A.9.1 defines TETRA
     * handover by reference to EN 301 040.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tetraLocation: OPTIONAL<TetraLocation>;
    /**
     * @summary `rAI`.
     * @description
     *
     * Routing area identifier in the current SGSN. Coded in accordance with
     * 3GPP TS 24.008 without the Routing Area Identification IEI. Only the last
     * 6 octets are used. GPRS table B.5.2 maps the target's routing area
     * identifier here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `gsmLocation`.
     * @description
     *
     * GSM location. In this module `GSMLocation` is geographic coordinates
     * (latitude `XDDMMSS.SS`, longitude `XDDDMMSS.SS`, datum default WGS 84,
     * optional azimuth as the bearing relative to true north), UTM coordinates,
     * a UTM reference string, or WGS 84 coordinates whose format is defined in
     * 3GPP TS 03.32. This document adds no radio semantics.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly gsmLocation: OPTIONAL<GSMLocation>;
    /**
     * @summary `umtsLocation`.
     * @description
     *
     * UMTS location: a point, a point with uncertainty, or a polygon, as
     * defined by `UMTSLocation` in this module. The `Location` comment cites no
     * 3GPP radio specification for this component.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly umtsLocation: OPTIONAL<UMTSLocation>;
    /**
     * @summary `sAI`.
     * @description
     *
     * Service area identifier, seven octets, according to 3GPP TS 25.413:
     * PLMN-Id octets 1 to 3, LAC octets 4 and 5, SAC octets 6 and 7. This
     * module states no further radio semantics.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `oldRAI`.
     * @description
     *
     * Routing area identifier in the old SGSN. Same coding as `rAI`: 3GPP TS
     * 24.008 without the Routing Area Identification IEI, only the last 6
     * octets. The parameter is duplicated from 3GPP TS 33.108. This document
     * adds no other coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly oldRAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tAI`.
     * @description
     *
     * Tracking area identity, six octets, coded in accordance with 3GPP TS
     * 29.118 without the TAI IEI. Applicable only to circuit-switched cases
     * where the location information available is the information received from
     * the MME. Duplicated from 3GPP TS 33.108. This module states no further
     * radio semantics.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eCGI`.
     * @description
     *
     * E-UTRAN cell global identity, eight octets, coded in accordance with 3GPP
     * TS 29.118 without the E-CGI IEI. Applicable only to circuit-switched
     * cases where the location information available is the information
     * received from the MME. Duplicated from 3GPP TS 33.108. This module states
     * no further radio semantics.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly eCGI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * BER extension additions that were not recognized. Clause C.1.2.4 refers
     * unrecognized fields and parameters to annex G. The LEMF ignores an
     * unrecognized parameter name and continues the record; that case does not
     * by itself require an error, because the network may be using a newer
     * specification. An unrecognized or disallowed value is also ignored, and
     * the LEMF may raise an alarm. An undecodable ROSE record is rejected. The
     * module allows an `OperationErrors` value when an operation or a parameter
     * is misunderstood. Annex G does not name those error codes.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.4, annex G, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        e164_Number?: OPTIONAL<OCTET_STRING>,
        globalCellID?: OPTIONAL<OCTET_STRING>,
        tetraLocation?: OPTIONAL<TetraLocation>,
        rAI?: OPTIONAL<OCTET_STRING>,
        gsmLocation?: OPTIONAL<GSMLocation>,
        umtsLocation?: OPTIONAL<UMTSLocation>,
        sAI?: OPTIONAL<OCTET_STRING>,
        oldRAI?: OPTIONAL<OCTET_STRING>,
        tAI?: OPTIONAL<OCTET_STRING>,
        eCGI?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.e164_Number = e164_Number;
        this.globalCellID = globalCellID;
        this.tetraLocation = tetraLocation;
        this.rAI = rAI;
        this.gsmLocation = gsmLocation;
        this.umtsLocation = umtsLocation;
        this.sAI = sAI;
        this.oldRAI = oldRAI;
        this.tAI = tAI;
        this.eCGI = eCGI;
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
        return new Location(_o.e164_Number, _o.globalCellID, _o.tetraLocation, _o.rAI, _o.gsmLocation, _o.umtsLocation, _o.sAI, _o.oldRAI, _o.tAI, _o.eCGI, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("tetraLocation", true, $.hasTag(_TagClass.context, 3)),
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
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 10))
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
    let globalCellID: OPTIONAL<OCTET_STRING>;
    let tetraLocation: OPTIONAL<TetraLocation>;
    let rAI: OPTIONAL<OCTET_STRING>;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let sAI: OPTIONAL<OCTET_STRING>;
    let oldRAI: OPTIONAL<OCTET_STRING>;
    let tAI: OPTIONAL<OCTET_STRING>;
    let eCGI: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "e164-Number": (_el: _Element): void => {
            e164_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (e164_Number.length < 1 || e164_Number.length > 25) {
                throw new ASN1SizeError("Location.e164_Number violates SIZE constraint");
            }
        },
        "globalCellID": (_el: _Element): void => {
            globalCellID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (globalCellID.length < 5 || globalCellID.length > 7) {
                throw new ASN1SizeError("Location.globalCellID violates SIZE constraint");
            }
        },
        "tetraLocation": (_el: _Element): void => { tetraLocation = $._decode_explicit<TetraLocation>(() => _decode_TetraLocation)(_el); },
        "rAI": (_el: _Element): void => {
            rAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (rAI.length < 6 || rAI.length > 6) {
                throw new ASN1SizeError("Location.rAI violates SIZE constraint");
            }
        },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "sAI": (_el: _Element): void => {
            sAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (sAI.length < 7 || sAI.length > 7) {
                throw new ASN1SizeError("Location.sAI violates SIZE constraint");
            }
        },
        "oldRAI": (_el: _Element): void => {
            oldRAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (oldRAI.length < 6 || oldRAI.length > 6) {
                throw new ASN1SizeError("Location.oldRAI violates SIZE constraint");
            }
        },
        "tAI": (_el: _Element): void => {
            tAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (tAI.length < 6 || tAI.length > 6) {
                throw new ASN1SizeError("Location.tAI violates SIZE constraint");
            }
        },
        "eCGI": (_el: _Element): void => {
            eCGI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (eCGI.length < 8 || eCGI.length > 8) {
                throw new ASN1SizeError("Location.eCGI violates SIZE constraint");
            }
        }
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
        tetraLocation,
        rAI,
        gsmLocation,
        umtsLocation,
        sAI,
        oldRAI,
        tAI,
        eCGI,
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
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.e164_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.e164_Number, $.BER);
    }
    if (value.globalCellID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.globalCellID, $.BER);
    }
    if (value.tetraLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_TetraLocation, $.BER)(value.tetraLocation, $.BER);
    }
    if (value.rAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.rAI, $.BER);
    }
    if (value.gsmLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER);
    }
    if (value.umtsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.sAI, $.BER);
    }
    if (value.oldRAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.oldRAI, $.BER);
    }
    if (value.tAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tAI, $.BER);
    }
    if (value.eCGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eCGI, $.BER);
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
