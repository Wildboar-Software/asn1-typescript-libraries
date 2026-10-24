/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../TETRA-HI2Operations/TetraLocation.ta.mjs";
// export { TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../TETRA-HI2Operations/TetraLocation.ta.mjs";
import { type GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../TETRA-HI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../TETRA-HI2Operations/GSMLocation.ta.mjs";
import { type UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../TETRA-HI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../TETRA-HI2Operations/UMTSLocation.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * Location of the target, in whatever form signalling or the access network
 * supplied. Clause A.3.2.2 includes it when it is available. Annex A.9 uses it
 * for TETRA location and, on handover and location update, for the new
 * location. An extension marker precedes `oldRAI`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.9.2.1, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 * {
 *     e164-Number         [1] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *         -- Coded in the same format as the ISUP location number (parameter
 *         --field) of the ISUP (see EN 300 356 [5]).
 *     globalCellID         [2] OCTET STRING (SIZE (5..7)) OPTIONAL,
 *         -- See MAP format (see TS GSM 09.02 [32]).
 *     tetraLocation         [3] TetraLocation OPTIONAL,
 *         -- This optional parameter is not in use anymore, but is kept for backwards compatibility.
 *     rAI                 [4] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- The Routeing Area Identifier (RAI) in the current SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI (only the
 *         -- last 6 octets are used).
 *     gsmLocation         [5] GSMLocation OPTIONAL,
 *     umtsLocation         [6] UMTSLocation OPTIONAL,
 *     sAI                 [7] OCTET STRING (SIZE (7)) OPTIONAL,
 *         -- format: PLMN-ID 3 octets (no. 1-3),
 *         -- LAC 2 octets (no. 4-5),
 *         -- SAC 2 octets (no. 6-7)
 *         -- (according to 3GPP TS 25.431 [62])
 *     ...,
 *     oldRAI                 [8] OCTET STRING (SIZE (6)) OPTIONAL
 *         -- the "Routeing Area Identifier" in the old SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI
 *         -- (only the last 6 octets are used).
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61]
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
     * Location number coded as the ISUP location-number parameter field of EN
     * 300 356. The imported ISUP order applies.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.1, clause D.10.3.
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
     * Global cell identity in the MAP format of TS GSM 09.02. Clause B.5.3 uses
     * it as the cell of the GPRS target.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
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
     * TETRA location. The module comment says this optional parameter is not in
     * use any more, but is kept for backwards compatibility. Annex A.9.2.1.1.1
     * note 2 says the `tetraLocation` value defined in the present document may
     * alternatively be used for the TETRA location, and that note continues to
     * apply on later records. The `TetraLocation` type itself does not repeat
     * the comment that the parameter is no longer in use.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.1, clause D.10.3.
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
     * Routing area identifier of the current SGSN. Coded as in 3GPP TS 24.008
     * without the routing-area-identification information-element identifier.
     * Only the last 6 octets are used. Clause B.5.3 reports it for the GPRS
     * target.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
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
     * GSM geographic location: geodetic, UTM, UTM reference, or WGS 84
     * coordinates.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * UMTS geographic area: a point, a point with an uncertainty code, or a
     * polygon. The present document does not state when each shape is chosen.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Service area identity. Octets 1 to 3 are the PLMN identity, octets 4 to 5
     * are the LAC, and octets 6 to 7 are the SAC, according to 3GPP TS 25.431.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Routing area identifier of the old SGSN, coded as in 3GPP TS 24.008
     * without the routing-area-identification information-element identifier.
     * Only the last 6 octets are used. The parameter is duplicated from 3GPP TS
     * 33.108.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly oldRAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried after the extension marker that were not
     * mapped to a named component. The present document does not define their
     * content.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
        return new Location(_o.e164_Number, _o.globalCellID, _o.tetraLocation, _o.rAI, _o.gsmLocation, _o.umtsLocation, _o.sAI, _o.oldRAI, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("oldRAI", true, $.hasTag(_TagClass.context, 8))
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
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
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
