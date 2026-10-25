/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
// export { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { ESMLCCellInfo, _decode_ESMLCCellInfo, _encode_ESMLCCellInfo } from "../TS33128Payloads/ESMLCCellInfo.ta.mjs";
// export { ESMLCCellInfo, _decode_ESMLCCellInfo, _encode_ESMLCCellInfo } from "../TS33128Payloads/ESMLCCellInfo.ta.mjs";
import { GERANPositioningInfo, _decode_GERANPositioningInfo, _encode_GERANPositioningInfo } from "../TS33128Payloads/GERANPositioningInfo.ta.mjs";
// export { GERANPositioningInfo, _decode_GERANPositioningInfo, _encode_GERANPositioningInfo } from "../TS33128Payloads/GERANPositioningInfo.ta.mjs";
import { UTRANPositioningInfo, _decode_UTRANPositioningInfo, _encode_UTRANPositioningInfo } from "../TS33128Payloads/UTRANPositioningInfo.ta.mjs";
// export { UTRANPositioningInfo, _decode_UTRANPositioningInfo, _encode_UTRANPositioningInfo } from "../TS33128Payloads/UTRANPositioningInfo.ta.mjs";
import { type RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";
// export { RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";


/**
 * @summary FourGPositioningInfo
 * @description
 * 
 * The FourGPositioningInfo type is used to report EPS Location, The
 * FourGPositioningInfo type is derived from the data present in the Provide
 * Subscriber Location Answer Table defined in TS 29.172 [53] table 6.2.2-2.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.70.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FourGPositioningInfo ::= SEQUENCE
 * {
 *     locationData              [1] LocationData,
 *     cGI                       [2] CGI OPTIONAL,
 *     sAI                       [3] SAI OPTIONAL,
 *     eSMLCCellInfo             [4] ESMLCCellInfo OPTIONAL,
 *     gERANPositioningInfo      [5] GERANPositioningInfo OPTIONAL,
 *     uTRANPositioningInfo      [6] UTRANPositioningInfo OPTIONAL,
 *     rawMLPResponse            [7] RawMLPResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FourGPositioningInfo {
    /**
     * @summary `locationData`.
     * @description
     *
     * This structure is used any time information from the Provide Subscriber
     * Location structure needs to be reported. This field is derived from the
     * data present in the Provide Subscriber Location Answer message defined in
     * TS 29.172 [53] table 6.2.2-2.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly locationData: LocationData;
    /**
     * @summary `cGI`.
     * @description
     *
     * This field shall contain the current cell location of the target UE when
     * known by the NF. Defined in TS 23.003 [19] clause 4.3.1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly cGI: OPTIONAL<CGI>;
    /**
     * @summary `sAI`.
     * @description
     *
     * This field shall contain the Service Area Identifier of the user where
     * the user is located when known by the NF. Defined in TS 23.003 [19]
     * clause 12.5.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly sAI: OPTIONAL<SAI>;
    /**
     * @summary `eSMLCCellInfo`.
     * @description
     *
     * This field shall contain the current cell information of the target UE as
     * known by E-SMLC when known by the NF. Defined in TS 29.172 [53] clause
     * 7.4.57.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly eSMLCCellInfo: OPTIONAL<ESMLCCellInfo>;
    /**
     * @summary `gERANPositioningInfo`.
     * @description
     *
     * This field shall indicate the usage of each positioning method that was
     * attempted to determine the location estimate, either successfully or
     * unsuccessfully. This field is applicable only when the UE is attached to
     * GERAN access and when the message is sent by the SGSN or the SGSN part of
     * the combined MME/SGSN. Defined in TS 29.172 [53] clause 7.4.29.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly gERANPositioningInfo: OPTIONAL<GERANPositioningInfo>;
    /**
     * @summary `uTRANPositioningInfo`.
     * @description
     *
     * This field shall indicate the usage of each positioning method that was
     * attempted to determine the location estimate, either successfully or
     * unsuccessfully. This field is applicable only when the UE is attached to
     * UTRAN access and when the message is sent by the SGSN or the SGSN part of
     * the combined MME/SGSN. Defined in TS 29.172 [53] clause 7.4.32.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly uTRANPositioningInfo: OPTIONAL<UTRANPositioningInfo>;
    /**
     * @summary `rawMLPResponse`.
     * @description
     *
     * This field shall be used in the location field of the LALSReport record
     * see clause 7.3.1.4. This field contains a copy of the unparsed XML code
     * of the MLP Answer and Report messages. The contents of this field is
     * described in OMA-TS-MLP-V3_5-20181211-C [20] clause 5.2.3.2.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.70.
     *
     * @public
     * @readonly
     */
    readonly rawMLPResponse: OPTIONAL<RawMLPResponse>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        locationData: LocationData,
        cGI?: OPTIONAL<CGI>,
        sAI?: OPTIONAL<SAI>,
        eSMLCCellInfo?: OPTIONAL<ESMLCCellInfo>,
        gERANPositioningInfo?: OPTIONAL<GERANPositioningInfo>,
        uTRANPositioningInfo?: OPTIONAL<UTRANPositioningInfo>,
        rawMLPResponse?: OPTIONAL<RawMLPResponse>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.locationData = locationData;
        this.cGI = cGI;
        this.sAI = sAI;
        this.eSMLCCellInfo = eSMLCCellInfo;
        this.gERANPositioningInfo = gERANPositioningInfo;
        this.uTRANPositioningInfo = uTRANPositioningInfo;
        this.rawMLPResponse = rawMLPResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FourGPositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FourGPositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FourGPositioningInfo`.
     * @returns {FourGPositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (FourGPositioningInfo)]: (FourGPositioningInfo)[_K] }): FourGPositioningInfo {
        return new FourGPositioningInfo(_o.locationData, _o.cGI, _o.sAI, _o.eSMLCCellInfo, _o.gERANPositioningInfo, _o.uTRANPositioningInfo, _o.rawMLPResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eSMLCCellInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gERANPositioningInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uTRANPositioningInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rawMLPResponse", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FourGPositioningInfo: $.ASN1Decoder<FourGPositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FourGPositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FourGPositioningInfo (el: _Element): FourGPositioningInfo {
    if (!_cached_decoder_for_FourGPositioningInfo) { _cached_decoder_for_FourGPositioningInfo = function (el: _Element): FourGPositioningInfo {
    let locationData!: LocationData;
    let cGI: OPTIONAL<CGI>;
    let sAI: OPTIONAL<SAI>;
    let eSMLCCellInfo: OPTIONAL<ESMLCCellInfo>;
    let gERANPositioningInfo: OPTIONAL<GERANPositioningInfo>;
    let uTRANPositioningInfo: OPTIONAL<UTRANPositioningInfo>;
    let rawMLPResponse: OPTIONAL<RawMLPResponse>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationData": (_el: _Element): void => { locationData = $._decode_implicit<LocationData>(() => _decode_LocationData)(_el); },
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "eSMLCCellInfo": (_el: _Element): void => { eSMLCCellInfo = $._decode_implicit<ESMLCCellInfo>(() => _decode_ESMLCCellInfo)(_el); },
        "gERANPositioningInfo": (_el: _Element): void => { gERANPositioningInfo = $._decode_implicit<GERANPositioningInfo>(() => _decode_GERANPositioningInfo)(_el); },
        "uTRANPositioningInfo": (_el: _Element): void => { uTRANPositioningInfo = $._decode_implicit<UTRANPositioningInfo>(() => _decode_UTRANPositioningInfo)(_el); },
        "rawMLPResponse": (_el: _Element): void => { rawMLPResponse = $._decode_explicit<RawMLPResponse>(() => _decode_RawMLPResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FourGPositioningInfo,
        _extension_additions_list_spec_for_FourGPositioningInfo,
        _root_component_type_list_2_spec_for_FourGPositioningInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FourGPositioningInfo(
        locationData,
        cGI,
        sAI,
        eSMLCCellInfo,
        gERANPositioningInfo,
        uTRANPositioningInfo,
        rawMLPResponse,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FourGPositioningInfo(el);
}

let _cached_encoder_for_FourGPositioningInfo: $.ASN1Encoder<FourGPositioningInfo> | null = null;

/**
 * @summary Encodes a(n) FourGPositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourGPositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FourGPositioningInfo (value: FourGPositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FourGPositioningInfo) { _cached_encoder_for_FourGPositioningInfo = function (value: FourGPositioningInfo, elGetter: $.ASN1Encoder<FourGPositioningInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationData, $.BER)(value.locationData, $.BER);
    if (value.cGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CGI, $.BER)(value.cGI, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SAI, $.BER)(value.sAI, $.BER);
    }
    if (value.eSMLCCellInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ESMLCCellInfo, $.BER)(value.eSMLCCellInfo, $.BER);
    }
    if (value.gERANPositioningInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_GERANPositioningInfo, $.BER)(value.gERANPositioningInfo, $.BER);
    }
    if (value.uTRANPositioningInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_UTRANPositioningInfo, $.BER)(value.uTRANPositioningInfo, $.BER);
    }
    if (value.rawMLPResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_RawMLPResponse, $.BER)(value.rawMLPResponse, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FourGPositioningInfo(value, elGetter);
}


/* eslint-enable */
