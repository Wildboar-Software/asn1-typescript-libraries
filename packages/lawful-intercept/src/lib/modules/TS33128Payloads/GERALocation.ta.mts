/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
// export { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
// export { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
// export { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";


/**
 * @summary GERALocation
 * @description
 * 
 * The GERALocation type is derived from the data present in the GeraLocation
 * type defined in TS 29.571 [17] clause 5.4.4.53.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERALocation ::= SEQUENCE
 * {
 *     locationNumber              [1] E164Number OPTIONAL,
 *     cGI                         [2] CGI OPTIONAL,
 *     rAI                         [3] RAI OPTIONAL,
 *     sAI                         [4] SAI OPTIONAL,
 *     lAI                         [5] LAI OPTIONAL,
 *     vLRNumber                   [6] UTF8String OPTIONAL,
 *     mSCNumber                   [7] UTF8String OPTIONAL,
 *     ageOfLocationInfo           [8] INTEGER OPTIONAL,
 *     uELocationTimestamp         [9] Timestamp OPTIONAL,
 *     geographicalInformation     [10] UTF8String OPTIONAL,
 *     geodeticInformation         [11] UTF8String OPTIONAL,
 *     cellSiteInformation         [12] CellSiteInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GERALocation {
    /**
     * @summary `locationNumber`.
     * @description
     *
     * The Location Number within the PLMN where the UE is currently located.
     * Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<E164Number>;
    /**
     * @summary `cGI`.
     * @description
     *
     * The Cell Global Identification for the GERA Cell the UE is currently
     * located in. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly cGI: OPTIONAL<CGI>;
    /**
     * @summary `rAI`.
     * @description
     *
     * Routing Area Identity of the target. Shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<RAI>;
    /**
     * @summary `sAI`.
     * @description
     *
     * Service Area Identity of the target. Shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly sAI: OPTIONAL<SAI>;
    /**
     * @summary `lAI`.
     * @description
     *
     * Location Area Identity of the target. Shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly lAI: OPTIONAL<LAI>;
    /**
     * @summary `vLRNumber`.
     * @description
     *
     * The VLR Number for the VLR where the UE is currently registered. Shall be
     * present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly vLRNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `mSCNumber`.
     * @description
     *
     * The MSC Number for the MSC currently serving the UE. Shall be present if
     * known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly mSCNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `ageOfLocationInfo`.
     * @description
     *
     * The value represents the elapsed time in minutes since the last network
     * contact of the mobile station. Value "0" indicates that the location
     * information was obtained after a successful paging procedure for Active
     * Location Retrieval when the UE is in idle mode or after a successful
     * GERAN location reporting procedure when the UE is in connected mode. Any
     * other value than "0" indicates that the location information is the last
     * known one. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly ageOfLocationInfo: OPTIONAL<INTEGER>;
    /**
     * @summary `uELocationTimestamp`.
     * @description
     *
     * The value represents the UTC time when the GERALocation information was
     * acquired. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly uELocationTimestamp: OPTIONAL<Timestamp>;
    /**
     * @summary `geographicalInformation`.
     * @description
     *
     * Shall be present if known at the NF where the POI is located. If present,
     * this parameter shall be populated with the Hexadecimal value of the
     * location encoded as described in TS 23.032 [104] clauses 6 and 7.3.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly geographicalInformation: OPTIONAL<UTF8String>;
    /**
     * @summary `geodeticInformation`.
     * @description
     *
     * Shall be present if known at the NF where the POI is located. If present,
     * this parameter shall be populated with the Hexadecimal value of the
     * location encoded as described in ITU-T Recommendation Q.763 (1999) [105]
     * clause 3.88.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly geodeticInformation: OPTIONAL<UTF8String>;
    /**
     * @summary `cellSiteInformation`.
     * @description
     *
     * Contains location information for the cell site being reported. Shall be
     * present if known at the NF where the POI is located or known at the MDF.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly cellSiteInformation: OPTIONAL<CellSiteInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        locationNumber?: OPTIONAL<E164Number>,
        cGI?: OPTIONAL<CGI>,
        rAI?: OPTIONAL<RAI>,
        sAI?: OPTIONAL<SAI>,
        lAI?: OPTIONAL<LAI>,
        vLRNumber?: OPTIONAL<UTF8String>,
        mSCNumber?: OPTIONAL<UTF8String>,
        ageOfLocationInfo?: OPTIONAL<INTEGER>,
        uELocationTimestamp?: OPTIONAL<Timestamp>,
        geographicalInformation?: OPTIONAL<UTF8String>,
        geodeticInformation?: OPTIONAL<UTF8String>,
        cellSiteInformation?: OPTIONAL<CellSiteInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.locationNumber = locationNumber;
        this.cGI = cGI;
        this.rAI = rAI;
        this.sAI = sAI;
        this.lAI = lAI;
        this.vLRNumber = vLRNumber;
        this.mSCNumber = mSCNumber;
        this.ageOfLocationInfo = ageOfLocationInfo;
        this.uELocationTimestamp = uELocationTimestamp;
        this.geographicalInformation = geographicalInformation;
        this.geodeticInformation = geodeticInformation;
        this.cellSiteInformation = cellSiteInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GERALocation
     * @description
     * 
     * This takes an `object` and converts it to a `GERALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GERALocation`.
     * @returns {GERALocation}
     */
    public static _from_object (_o: { [_K in keyof (GERALocation)]: (GERALocation)[_K] }): GERALocation {
        return new GERALocation(_o.locationNumber, _o.cGI, _o.rAI, _o.sAI, _o.lAI, _o.vLRNumber, _o.mSCNumber, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.cellSiteInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GERALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GERALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("vLRNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mSCNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of GERALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GERALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GERALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GERALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GERALocation: $.ASN1Decoder<GERALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GERALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GERALocation (el: _Element): GERALocation {
    if (!_cached_decoder_for_GERALocation) { _cached_decoder_for_GERALocation = function (el: _Element): GERALocation {
    let locationNumber: OPTIONAL<E164Number>;
    let cGI: OPTIONAL<CGI>;
    let rAI: OPTIONAL<RAI>;
    let sAI: OPTIONAL<SAI>;
    let lAI: OPTIONAL<LAI>;
    let vLRNumber: OPTIONAL<UTF8String>;
    let mSCNumber: OPTIONAL<UTF8String>;
    let ageOfLocationInfo: OPTIONAL<INTEGER>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<E164Number>(() => _decode_E164Number)(_el); },
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<RAI>(() => _decode_RAI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "lAI": (_el: _Element): void => { lAI = $._decode_implicit<LAI>(() => _decode_LAI)(_el); },
        "vLRNumber": (_el: _Element): void => { vLRNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mSCNumber": (_el: _Element): void => { mSCNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GERALocation,
        _extension_additions_list_spec_for_GERALocation,
        _root_component_type_list_2_spec_for_GERALocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GERALocation(
        locationNumber,
        cGI,
        rAI,
        sAI,
        lAI,
        vLRNumber,
        mSCNumber,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        cellSiteInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GERALocation(el);
}

let _cached_encoder_for_GERALocation: $.ASN1Encoder<GERALocation> | null = null;

/**
 * @summary Encodes a(n) GERALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERALocation, encoded as an ASN.1 Element.
 */
export
function _encode_GERALocation (value: GERALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GERALocation) { _cached_encoder_for_GERALocation = function (value: GERALocation, elGetter: $.ASN1Encoder<GERALocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_E164Number, $.BER)(value.locationNumber, $.BER);
    }
    if (value.cGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CGI, $.BER)(value.cGI, $.BER);
    }
    if (value.rAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_RAI, $.BER)(value.rAI, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SAI, $.BER)(value.sAI, $.BER);
    }
    if (value.lAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_LAI, $.BER)(value.lAI, $.BER);
    }
    if (value.vLRNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.vLRNumber, $.BER);
    }
    if (value.mSCNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.mSCNumber, $.BER);
    }
    if (value.ageOfLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.ageOfLocationInfo, $.BER);
    }
    if (value.uELocationTimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER);
    }
    if (value.geographicalInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER);
    }
    if (value.geodeticInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER);
    }
    if (value.cellSiteInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GERALocation(value, elGetter);
}


/* eslint-enable */
