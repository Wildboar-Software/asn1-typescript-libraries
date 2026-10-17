/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceState, _decode_PresenceState, _encode_PresenceState, _enum_for_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";
// export { PresenceState, _enum_for_PresenceState, PresenceState_inArea /* IMPORTED_LONG_ENUMERATION_ITEM */, inArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_outOfArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceState, _encode_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";


/**
 * @summary PresenceInfo
 * @description
 * 
 * The PresenceInfo type is derived from the data present in the PresenceInfo
 * type defined in TS 29.571 [17] clause 5.4.4.27.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.62.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceInfo ::= SEQUENCE
 * {
 *     presenceState               [1] PresenceState OPTIONAL,
 *     trackingAreaList            [2] SET OF TAI OPTIONAL,
 *     eCGIList                    [3] SET OF ECGI OPTIONAL,
 *     nCGIList                    [4] SET OF NCGI OPTIONAL,
 *     globalRANNodeIDList         [5] SET OF GlobalRANNodeID OPTIONAL,
 *     globalENbIDList             [6] SET OF GlobalRANNodeID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PresenceInfo {
    /**
     * @summary `presenceState`.
     * @description
     *
     * Indicates whether the UE is inside or outside of the area of interest or
     * if the presence reporting area is inactive in the serving node. Shall be
     * present when known at the NF.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly presenceState: OPTIONAL<PresenceState>;
    /**
     * @summary `trackingAreaList`.
     * @description
     *
     * Represents the list of tracking areas that constitutes the area. This
     * field contains the list of tracking areas when tracking areas are part of
     * the area of interest.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly trackingAreaList: OPTIONAL<TAI[]>;
    /**
     * @summary `eCGIList`.
     * @description
     *
     * Represents the list of EUTRAN cell IDs that constitutes the area. This
     * field contains the list of ECGIs when ECGIs are part of the area of
     * interest.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly eCGIList: OPTIONAL<ECGI[]>;
    /**
     * @summary `nCGIList`.
     * @description
     *
     * Represents the list of NR cell Ids that constitutes the area. This field
     * contains the list of NCGIs when NCGIs are part of the area of interest.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly nCGIList: OPTIONAL<NCGI[]>;
    /**
     * @summary `globalRANNodeIDList`.
     * @description
     *
     * Represents the list of NG RAN node identifiers that constitutes the area.
     * This field contains the list of GlobalRANNodeIDs when NG RAN Nodes are
     * part of the area of interest.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly globalRANNodeIDList: OPTIONAL<GlobalRANNodeID[]>;
    /**
     * @summary `globalENbIDList`.
     * @description
     *
     * Represents the list of eNodeB identifiers that constitutes the area. This
     * field contains the list of GlobalRANNodeIDs when eNbIDs are part of the
     * area of interest.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.62.
     *
     * @public
     * @readonly
     */
    readonly globalENbIDList: OPTIONAL<GlobalRANNodeID[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        presenceState: OPTIONAL<PresenceState>,
        trackingAreaList: OPTIONAL<TAI[]>,
        eCGIList: OPTIONAL<ECGI[]>,
        nCGIList: OPTIONAL<NCGI[]>,
        globalRANNodeIDList: OPTIONAL<GlobalRANNodeID[]>,
        globalENbIDList: OPTIONAL<GlobalRANNodeID[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.presenceState = presenceState;
        this.trackingAreaList = trackingAreaList;
        this.eCGIList = eCGIList;
        this.nCGIList = nCGIList;
        this.globalRANNodeIDList = globalRANNodeIDList;
        this.globalENbIDList = globalENbIDList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PresenceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceInfo`.
     * @returns {PresenceInfo}
     */
    public static _from_object (_o: { [_K in keyof (PresenceInfo)]: (PresenceInfo)[_K] }): PresenceInfo {
        return new PresenceInfo(_o.presenceState, _o.trackingAreaList, _o.eCGIList, _o.nCGIList, _o.globalRANNodeIDList, _o.globalENbIDList, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `presenceState`
         * @public
         * @static
         */

    public static _enum_for_presenceState = _enum_for_PresenceState;
}

/**
 * @summary The Leading Root Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceState", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("trackingAreaList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eCGIList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nCGIList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("globalRANNodeIDList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("globalENbIDList", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceInfo: $.ASN1Decoder<PresenceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceInfo (el: _Element): PresenceInfo {
    if (!_cached_decoder_for_PresenceInfo) { _cached_decoder_for_PresenceInfo = function (el: _Element): PresenceInfo {
    let presenceState: OPTIONAL<PresenceState>;
    let trackingAreaList: OPTIONAL<TAI[]>;
    let eCGIList: OPTIONAL<ECGI[]>;
    let nCGIList: OPTIONAL<NCGI[]>;
    let globalRANNodeIDList: OPTIONAL<GlobalRANNodeID[]>;
    let globalENbIDList: OPTIONAL<GlobalRANNodeID[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "presenceState": (_el: _Element): void => { presenceState = $._decode_implicit<PresenceState>(() => _decode_PresenceState)(_el); },
        "trackingAreaList": (_el: _Element): void => { trackingAreaList = $._decode_implicit<TAI[]>(() => $._decodeSetOf<TAI>(() => _decode_TAI))(_el); },
        "eCGIList": (_el: _Element): void => { eCGIList = $._decode_implicit<ECGI[]>(() => $._decodeSetOf<ECGI>(() => _decode_ECGI))(_el); },
        "nCGIList": (_el: _Element): void => { nCGIList = $._decode_implicit<NCGI[]>(() => $._decodeSetOf<NCGI>(() => _decode_NCGI))(_el); },
        "globalRANNodeIDList": (_el: _Element): void => { globalRANNodeIDList = $._decode_implicit<GlobalRANNodeID[]>(() => $._decodeSetOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID))(_el); },
        "globalENbIDList": (_el: _Element): void => { globalENbIDList = $._decode_implicit<GlobalRANNodeID[]>(() => $._decodeSetOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresenceInfo,
        _extension_additions_list_spec_for_PresenceInfo,
        _root_component_type_list_2_spec_for_PresenceInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PresenceInfo(
        presenceState,
        trackingAreaList,
        eCGIList,
        nCGIList,
        globalRANNodeIDList,
        globalENbIDList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PresenceInfo(el);
}

let _cached_encoder_for_PresenceInfo: $.ASN1Encoder<PresenceInfo> | null = null;

/**
 * @summary Encodes a(n) PresenceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceInfo (value: PresenceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceInfo) { _cached_encoder_for_PresenceInfo = function (value: PresenceInfo, elGetter: $.ASN1Encoder<PresenceInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.presenceState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceState, $.BER)(value.presenceState, $.BER);
    }
    if (value.trackingAreaList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<TAI>(() => _encode_TAI, $.BER), $.BER)(value.trackingAreaList, $.BER);
    }
    if (value.eCGIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<ECGI>(() => _encode_ECGI, $.BER), $.BER)(value.eCGIList, $.BER);
    }
    if (value.nCGIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<NCGI>(() => _encode_NCGI, $.BER), $.BER)(value.nCGIList, $.BER);
    }
    if (value.globalRANNodeIDList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER), $.BER)(value.globalRANNodeIDList, $.BER);
    }
    if (value.globalENbIDList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER), $.BER)(value.globalENbIDList, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PresenceInfo(value, elGetter);
}


/* eslint-enable */
