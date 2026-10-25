/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
// export { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
import { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
// export { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
import { type Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";


/**
 * @summary UTRALocation
 * @description
 * 
 * The UTRALocation type is derived from the data present in the EutraLocation
 * type defined in TS 29.571 [17] clause 5.4.4.52.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRALocation ::= SEQUENCE
 * {
 *     cGI                         [1] CGI OPTIONAL,
 *     sAI                         [2] SAI OPTIONAL,
 *     lAI                         [3] LAI OPTIONAL,
 *     rAI                         [4] RAI OPTIONAL,
 *     ageOfLocationInfo           [5] INTEGER OPTIONAL,
 *     uELocationTimestamp         [6] Timestamp OPTIONAL,
 *     geographicalInformation     [7] UTF8String OPTIONAL,
 *     geodeticInformation         [8] UTF8String OPTIONAL,
 *     cellSiteInformation         [9] CellSiteInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UTRALocation {
    /**
     * @summary `cGI`.
     * @description
     *
     * The Cell Global Identification for the UTRA Cell the UE is currently
     * located in. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.8.
     *
     * @public
     * @readonly
     */
    readonly cGI: OPTIONAL<CGI>;
    /**
     * @summary `sAI`.
     * @description
     *
     * Service Area Identity of the target. Shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.8.
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
     * 3GPP TS 33.128, clause 7.3.3.2.8.
     *
     * @public
     * @readonly
     */
    readonly lAI: OPTIONAL<LAI>;
    /**
     * @summary `rAI`.
     * @description
     *
     * Routing Area Identity of the target. Shall be present if known at the NF
     * where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.8.
     *
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<RAI>;
    /**
     * @summary `ageOfLocationInfo`.
     * @description
     *
     * The value represents the elapsed time in minutes since the last network
     * contact of the mobile station. Value "0" indicates that the location
     * information was obtained after a successful paging procedure for Active
     * Location Retrieval when the UE is in idle mode or after a successful
     * UTRAN location reporting procedure when the UE is in connected mode. Any
     * other value than "0" indicates that the location information is the last
     * known one. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.8.
     *
     * @public
     * @readonly
     */
    readonly ageOfLocationInfo: OPTIONAL<INTEGER>;
    /**
     * @summary `uELocationTimestamp`.
     * @description
     *
     * The value represents the UTC time when the UTRALocation information was
     * acquired. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.8.
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
     * 3GPP TS 33.128, clause 7.3.3.2.8.
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
     * 3GPP TS 33.128, clause 7.3.3.2.8.
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
     * 3GPP TS 33.128, clause 7.3.3.2.8.
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
        cGI?: OPTIONAL<CGI>,
        sAI?: OPTIONAL<SAI>,
        lAI?: OPTIONAL<LAI>,
        rAI?: OPTIONAL<RAI>,
        ageOfLocationInfo?: OPTIONAL<INTEGER>,
        uELocationTimestamp?: OPTIONAL<Timestamp>,
        geographicalInformation?: OPTIONAL<UTF8String>,
        geodeticInformation?: OPTIONAL<UTF8String>,
        cellSiteInformation?: OPTIONAL<CellSiteInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cGI = cGI;
        this.sAI = sAI;
        this.lAI = lAI;
        this.rAI = rAI;
        this.ageOfLocationInfo = ageOfLocationInfo;
        this.uELocationTimestamp = uELocationTimestamp;
        this.geographicalInformation = geographicalInformation;
        this.geodeticInformation = geodeticInformation;
        this.cellSiteInformation = cellSiteInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UTRALocation
     * @description
     * 
     * This takes an `object` and converts it to a `UTRALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UTRALocation`.
     * @returns {UTRALocation}
     */
    public static _from_object (_o: { [_K in keyof (UTRALocation)]: (UTRALocation)[_K] }): UTRALocation {
        return new UTRALocation(_o.cGI, _o.sAI, _o.lAI, _o.rAI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.cellSiteInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UTRALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UTRALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UTRALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UTRALocation: $.ASN1Decoder<UTRALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRALocation (el: _Element): UTRALocation {
    if (!_cached_decoder_for_UTRALocation) { _cached_decoder_for_UTRALocation = function (el: _Element): UTRALocation {
    let cGI: OPTIONAL<CGI>;
    let sAI: OPTIONAL<SAI>;
    let lAI: OPTIONAL<LAI>;
    let rAI: OPTIONAL<RAI>;
    let ageOfLocationInfo: OPTIONAL<INTEGER>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "lAI": (_el: _Element): void => { lAI = $._decode_implicit<LAI>(() => _decode_LAI)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<RAI>(() => _decode_RAI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UTRALocation,
        _extension_additions_list_spec_for_UTRALocation,
        _root_component_type_list_2_spec_for_UTRALocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UTRALocation(
        cGI,
        sAI,
        lAI,
        rAI,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        cellSiteInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UTRALocation(el);
}

let _cached_encoder_for_UTRALocation: $.ASN1Encoder<UTRALocation> | null = null;

/**
 * @summary Encodes a(n) UTRALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRALocation, encoded as an ASN.1 Element.
 */
export
function _encode_UTRALocation (value: UTRALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRALocation) { _cached_encoder_for_UTRALocation = function (value: UTRALocation, elGetter: $.ASN1Encoder<UTRALocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CGI, $.BER)(value.cGI, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SAI, $.BER)(value.sAI, $.BER);
    }
    if (value.lAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LAI, $.BER)(value.lAI, $.BER);
    }
    if (value.rAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RAI, $.BER)(value.rAI, $.BER);
    }
    if (value.ageOfLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.ageOfLocationInfo, $.BER);
    }
    if (value.uELocationTimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER);
    }
    if (value.geographicalInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER);
    }
    if (value.geodeticInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER);
    }
    if (value.cellSiteInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UTRALocation(value, elGetter);
}


/* eslint-enable */
