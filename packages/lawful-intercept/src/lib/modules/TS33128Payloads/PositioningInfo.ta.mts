/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
// export { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
import { RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";
// export { RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";


/**
 * @summary PositioningInfo
 * @description
 * 
 * The PositioningInfo type is derived from the data present in the
 * ProvidePosInfo type defined in TS 29.518 [22] clause 6.4.6.2.3.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.36.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningInfo ::= SEQUENCE
 * {
 *     positionInfo                [1] LocationData OPTIONAL,
 *     rawMLPResponse              [2] RawMLPResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PositioningInfo {
    /**
     * @summary `positionInfo`.
     * @description
     *
     * This parameter shall be used any time information from LCS operations
     * needs to be reported from the 5GC. This structure may also be used any
     * time information from the ProvidePosInfo structure needs to be reported.
     * This field is derived from the data present in the ProvidePosInfo type
     * defined in TS 29.518 [22] clause 6.4.6.2.3.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.36.
     *
     * @public
     * @readonly
     */
    readonly positionInfo: OPTIONAL<LocationData>;
    /**
     * @summary `rawMLPResponse`.
     * @description
     *
     * This field shall be used in the location field of the LALSReport record
     * see clause 7.3.1.4. This field contains a copy of the unparsed XML code
     * of the MLP Answer and Report messages. The contents of this field is
     * described in OMA-TS-MLP-V3_5-20181211-C [20] clause 5.2.3.2.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.36.
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
        positionInfo?: OPTIONAL<LocationData>,
        rawMLPResponse?: OPTIONAL<RawMLPResponse>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.positionInfo = positionInfo;
        this.rawMLPResponse = rawMLPResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PositioningInfo`.
     * @returns {PositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (PositioningInfo)]: (PositioningInfo)[_K] }): PositioningInfo {
        return new PositioningInfo(_o.positionInfo, _o.rawMLPResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("positionInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rawMLPResponse", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PositioningInfo: $.ASN1Decoder<PositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositioningInfo (el: _Element): PositioningInfo {
    if (!_cached_decoder_for_PositioningInfo) { _cached_decoder_for_PositioningInfo = function (el: _Element): PositioningInfo {
    let positionInfo: OPTIONAL<LocationData>;
    let rawMLPResponse: OPTIONAL<RawMLPResponse>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "positionInfo": (_el: _Element): void => { positionInfo = $._decode_implicit<LocationData>(() => _decode_LocationData)(_el); },
        "rawMLPResponse": (_el: _Element): void => { rawMLPResponse = $._decode_explicit<RawMLPResponse>(() => _decode_RawMLPResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PositioningInfo,
        _extension_additions_list_spec_for_PositioningInfo,
        _root_component_type_list_2_spec_for_PositioningInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PositioningInfo(
        positionInfo,
        rawMLPResponse,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PositioningInfo(el);
}

let _cached_encoder_for_PositioningInfo: $.ASN1Encoder<PositioningInfo> | null = null;

/**
 * @summary Encodes a(n) PositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PositioningInfo (value: PositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositioningInfo) { _cached_encoder_for_PositioningInfo = function (value: PositioningInfo, elGetter: $.ASN1Encoder<PositioningInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.positionInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationData, $.BER)(value.positionInfo, $.BER);
    }
    if (value.rawMLPResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_RawMLPResponse, $.BER)(value.rawMLPResponse, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PositioningInfo(value, elGetter);
}


/* eslint-enable */
