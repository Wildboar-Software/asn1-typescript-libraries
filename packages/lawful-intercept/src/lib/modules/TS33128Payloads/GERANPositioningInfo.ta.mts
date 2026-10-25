/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GERANPositioningData, _decode_GERANPositioningData, _encode_GERANPositioningData } from "../TS33128Payloads/GERANPositioningData.ta.mjs";
// export { GERANPositioningData, _decode_GERANPositioningData, _encode_GERANPositioningData } from "../TS33128Payloads/GERANPositioningData.ta.mjs";
import { type GERANGANSSPositioningData, _decode_GERANGANSSPositioningData, _encode_GERANGANSSPositioningData } from "../TS33128Payloads/GERANGANSSPositioningData.ta.mjs";
// export { GERANGANSSPositioningData, _decode_GERANGANSSPositioningData, _encode_GERANGANSSPositioningData } from "../TS33128Payloads/GERANGANSSPositioningData.ta.mjs";


/**
 * @summary GERANPositioningInfo
 * @description
 * 
 * The GERANPositioningInfo type is used to indicate the usage of each
 * positioning method that was attempted to determine the location estimate,
 * either successfully or unsuccessfully. This Information Element is applicable
 * only when the UE is attached to GERAN access and when the message is sent by
 * the SGSN or combined MME/SGSN. Derived from the data found in TS 29.172 [53]
 * clause 7.4.29.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.75.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANPositioningInfo ::= SEQUENCE
 * {
 *     gERANPositioningData      [1] GERANPositioningData OPTIONAL,
 *     gERANGANSSPositioningData [2] GERANGANSSPositioningData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GERANPositioningInfo {
    /**
     * @summary `gERANPositioningData`.
     * @description
     *
     * Shall contain the encoded content of the "GERAN-Positioning-Data" in the
     * "GERAN-Positioning-Info" parameter. Defined in TS 29.172 [52] clause
     * 7.4.30.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.75.
     *
     * @public
     * @readonly
     */
    readonly gERANPositioningData: OPTIONAL<GERANPositioningData>;
    /**
     * @summary `gERANGANSSPositioningData`.
     * @description
     *
     * Shall contain the encoded content of the "GERAN-GANSS-Positioning-Data"
     * in the "GERAN-Positioning-Info" parameter. Defined in TS 29.172 [53]
     * clause 7.4.31.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.75.
     *
     * @public
     * @readonly
     */
    readonly gERANGANSSPositioningData: OPTIONAL<GERANGANSSPositioningData>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gERANPositioningData?: OPTIONAL<GERANPositioningData>,
        gERANGANSSPositioningData?: OPTIONAL<GERANGANSSPositioningData>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gERANPositioningData = gERANPositioningData;
        this.gERANGANSSPositioningData = gERANGANSSPositioningData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GERANPositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GERANPositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GERANPositioningInfo`.
     * @returns {GERANPositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (GERANPositioningInfo)]: (GERANPositioningInfo)[_K] }): GERANPositioningInfo {
        return new GERANPositioningInfo(_o.gERANPositioningData, _o.gERANGANSSPositioningData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("gERANPositioningData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gERANGANSSPositioningData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GERANPositioningInfo: $.ASN1Decoder<GERANPositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GERANPositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GERANPositioningInfo (el: _Element): GERANPositioningInfo {
    if (!_cached_decoder_for_GERANPositioningInfo) { _cached_decoder_for_GERANPositioningInfo = function (el: _Element): GERANPositioningInfo {
    let gERANPositioningData: OPTIONAL<GERANPositioningData>;
    let gERANGANSSPositioningData: OPTIONAL<GERANGANSSPositioningData>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gERANPositioningData": (_el: _Element): void => { gERANPositioningData = $._decode_implicit<GERANPositioningData>(() => _decode_GERANPositioningData)(_el); },
        "gERANGANSSPositioningData": (_el: _Element): void => { gERANGANSSPositioningData = $._decode_implicit<GERANGANSSPositioningData>(() => _decode_GERANGANSSPositioningData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GERANPositioningInfo,
        _extension_additions_list_spec_for_GERANPositioningInfo,
        _root_component_type_list_2_spec_for_GERANPositioningInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GERANPositioningInfo(
        gERANPositioningData,
        gERANGANSSPositioningData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GERANPositioningInfo(el);
}

let _cached_encoder_for_GERANPositioningInfo: $.ASN1Encoder<GERANPositioningInfo> | null = null;

/**
 * @summary Encodes a(n) GERANPositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANPositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GERANPositioningInfo (value: GERANPositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GERANPositioningInfo) { _cached_encoder_for_GERANPositioningInfo = function (value: GERANPositioningInfo, elGetter: $.ASN1Encoder<GERANPositioningInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.gERANPositioningData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_GERANPositioningData, $.BER)(value.gERANPositioningData, $.BER);
    }
    if (value.gERANGANSSPositioningData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GERANGANSSPositioningData, $.BER)(value.gERANGANSSPositioningData, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GERANPositioningInfo(value, elGetter);
}


/* eslint-enable */
