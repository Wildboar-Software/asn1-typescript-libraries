/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
import { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
// export { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";


/**
 * @summary EUTRALocation
 * @description
 * 
 * The EUTRALocation type is derived from the data present in the EutraLocation
 * type defined in TS 29.571 [17] clause 5.4.4.8.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRALocation ::= SEQUENCE
 * {
 *     tAI                         [1] TAI,
 *     eCGI                        [2] ECGI,
 *     ageOfLocationInfo           [3] AgeOfLocation OPTIONAL,
 *     uELocationTimestamp         [4] Timestamp OPTIONAL,
 *     geographicalInformation     [5] UTF8String OPTIONAL,
 *     geodeticInformation         [6] UTF8String OPTIONAL,
 *     globalNGENbID               [7] GlobalRANNodeID OPTIONAL,
 *     cellSiteInformation         [8] CellSiteInformation OPTIONAL,
 *     globalENbID                 [9] GlobalRANNodeID OPTIONAL,
 *     ignoreTAI                   [10] BOOLEAN OPTIONAL,
 *     ignoreECGI                  [11] BOOLEAN OPTIONAL,
 *     cellRadioRelatedInformation [12] SEQUENCE OF CellRadioRelatedInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EUTRALocation {
    /**
     * @summary `tAI`.
     * @description
     *
     * Tracking Area Identity of the target. If the TAI information is not
     * available, the TAC of the TAI shall be set to one reserved value (e.g.
     * 0x0000, see TS 23.003 [19] clause 19.4.2.3) and the value of the
     * ignoreTAI parameter shall be set to TRUE.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly tAI: TAI;
    /**
     * @summary `eCGI`.
     * @description
     *
     * E-UTRA Cell Identity for the cell where the target is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly eCGI: ECGI;
    /**
     * @summary `ageOfLocationInfo`.
     * @description
     *
     * The value represents the elapsed time in minutes since the last network
     * contact of the mobile station. Shall be present if known at the NF where
     * the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly ageOfLocationInfo: OPTIONAL<AgeOfLocation>;
    /**
     * @summary `uELocationTimestamp`.
     * @description
     *
     * The value represents the UTC time when the EUTRALocation information was
     * acquired. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
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
     * 3GPP TS 33.128, clause 7.3.3.2.5.
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
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly geodeticInformation: OPTIONAL<UTF8String>;
    /**
     * @summary `globalNGENbID`.
     * @description
     *
     * Indicates the global identity of the ng-eNodeB in which the UE is
     * currently located. Shall be present if known at the NF where the POI is
     * located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly globalNGENbID: OPTIONAL<GlobalRANNodeID>;
    /**
     * @summary `cellSiteInformation`.
     * @description
     *
     * Contains location information for the cell site being reported. Shall be
     * present if known at the NF where the POI is located or known at the MDF.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly cellSiteInformation: OPTIONAL<CellSiteInformation>;
    /**
     * @summary `globalENbID`.
     * @description
     *
     * Indicates the global identity of the eNodeB in which the UE is currently
     * located. Shall be present if known at the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly globalENbID: OPTIONAL<GlobalRANNodeID>;
    /**
     * @summary `ignoreTAI`.
     * @description
     *
     * This flag, when present, shall indicate if the tAI shall be ignored. When
     * present, it shall be set as follows:
     *
     * - TRUE: tAI shall be ignored.
     *
     * - FALSE: tAI shall not be ignored.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly ignoreTAI: OPTIONAL<BOOLEAN>;
    /**
     * @summary `ignoreECGI`.
     * @description
     *
     * This flag, when present, shall indicate if the eCGI shall be ignored.
     * When present, it shall be set as follows:
     *
     * - TRUE: eCGI shall be ignored.
     *
     * - FALSE: eCGI shall not be ignored.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly ignoreECGI: OPTIONAL<BOOLEAN>;
    /**
     * @summary `cellRadioRelatedInformation`.
     * @description
     *
     * Radio Information of reported cell.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tAI: TAI,
        eCGI: ECGI,
        ageOfLocationInfo?: OPTIONAL<AgeOfLocation>,
        uELocationTimestamp?: OPTIONAL<Timestamp>,
        geographicalInformation?: OPTIONAL<UTF8String>,
        geodeticInformation?: OPTIONAL<UTF8String>,
        globalNGENbID?: OPTIONAL<GlobalRANNodeID>,
        cellSiteInformation?: OPTIONAL<CellSiteInformation>,
        globalENbID?: OPTIONAL<GlobalRANNodeID>,
        ignoreTAI?: OPTIONAL<BOOLEAN>,
        ignoreECGI?: OPTIONAL<BOOLEAN>,
        cellRadioRelatedInformation?: OPTIONAL<CellRadioRelatedInformation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tAI = tAI;
        this.eCGI = eCGI;
        this.ageOfLocationInfo = ageOfLocationInfo;
        this.uELocationTimestamp = uELocationTimestamp;
        this.geographicalInformation = geographicalInformation;
        this.geodeticInformation = geodeticInformation;
        this.globalNGENbID = globalNGENbID;
        this.cellSiteInformation = cellSiteInformation;
        this.globalENbID = globalENbID;
        this.ignoreTAI = ignoreTAI;
        this.ignoreECGI = ignoreECGI;
        this.cellRadioRelatedInformation = cellRadioRelatedInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EUTRALocation
     * @description
     * 
     * This takes an `object` and converts it to a `EUTRALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUTRALocation`.
     * @returns {EUTRALocation}
     */
    public static _from_object (_o: { [_K in keyof (EUTRALocation)]: (EUTRALocation)[_K] }): EUTRALocation {
        return new EUTRALocation(_o.tAI, _o.eCGI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.globalNGENbID, _o.cellSiteInformation, _o.globalENbID, _o.ignoreTAI, _o.ignoreECGI, _o.cellRadioRelatedInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUTRALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("tAI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eCGI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("globalNGENbID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("globalENbID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ignoreTAI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ignoreECGI", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cellRadioRelatedInformation", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUTRALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUTRALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUTRALocation: $.ASN1Decoder<EUTRALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUTRALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUTRALocation (el: _Element): EUTRALocation {
    if (!_cached_decoder_for_EUTRALocation) { _cached_decoder_for_EUTRALocation = function (el: _Element): EUTRALocation {
    let tAI!: TAI;
    let eCGI!: ECGI;
    let ageOfLocationInfo: OPTIONAL<AgeOfLocation>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let globalNGENbID: OPTIONAL<GlobalRANNodeID>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    let globalENbID: OPTIONAL<GlobalRANNodeID>;
    let ignoreTAI: OPTIONAL<BOOLEAN>;
    let ignoreECGI: OPTIONAL<BOOLEAN>;
    let cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "globalNGENbID": (_el: _Element): void => { globalNGENbID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); },
        "globalENbID": (_el: _Element): void => { globalENbID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "ignoreTAI": (_el: _Element): void => { ignoreTAI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ignoreECGI": (_el: _Element): void => { ignoreECGI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "cellRadioRelatedInformation": (_el: _Element): void => { cellRadioRelatedInformation = $._decode_implicit<CellRadioRelatedInformation[]>(() => $._decodeSequenceOf<CellRadioRelatedInformation>(() => _decode_CellRadioRelatedInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EUTRALocation,
        _extension_additions_list_spec_for_EUTRALocation,
        _root_component_type_list_2_spec_for_EUTRALocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EUTRALocation(
        tAI,
        eCGI,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        globalNGENbID,
        cellSiteInformation,
        globalENbID,
        ignoreTAI,
        ignoreECGI,
        cellRadioRelatedInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EUTRALocation(el);
}

let _cached_encoder_for_EUTRALocation: $.ASN1Encoder<EUTRALocation> | null = null;

/**
 * @summary Encodes a(n) EUTRALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUTRALocation, encoded as an ASN.1 Element.
 */
export
function _encode_EUTRALocation (value: EUTRALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUTRALocation) { _cached_encoder_for_EUTRALocation = function (value: EUTRALocation, elGetter: $.ASN1Encoder<EUTRALocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TAI, $.BER)(value.tAI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ECGI, $.BER)(value.eCGI, $.BER);
    if (value.ageOfLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationInfo, $.BER);
    }
    if (value.uELocationTimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER);
    }
    if (value.geographicalInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER);
    }
    if (value.geodeticInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER);
    }
    if (value.globalNGENbID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_GlobalRANNodeID, $.BER)(value.globalNGENbID, $.BER);
    }
    if (value.cellSiteInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER);
    }
    if (value.globalENbID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_GlobalRANNodeID, $.BER)(value.globalENbID, $.BER);
    }
    if (value.ignoreTAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.ignoreTAI, $.BER);
    }
    if (value.ignoreECGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.ignoreECGI, $.BER);
    }
    if (value.cellRadioRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<CellRadioRelatedInformation>(() => _encode_CellRadioRelatedInformation, $.BER), $.BER)(value.cellRadioRelatedInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EUTRALocation(value, elGetter);
}


/* eslint-enable */
