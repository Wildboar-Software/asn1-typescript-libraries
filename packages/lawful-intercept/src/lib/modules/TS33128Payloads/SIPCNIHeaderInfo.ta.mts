/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
import { SIPCellularAccessInfo, _decode_SIPCellularAccessInfo, _encode_SIPCellularAccessInfo } from "../TS33128Payloads/SIPCellularAccessInfo.ta.mjs";
// export { SIPCellularAccessInfo, _decode_SIPCellularAccessInfo, _encode_SIPCellularAccessInfo } from "../TS33128Payloads/SIPCellularAccessInfo.ta.mjs";
import { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";
// export { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";


/**
 * @summary SIPCNIHeaderInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNIHeaderInfo ::= SEQUENCE
 * {
 *     cellularNetworkInformation [1] SIPCellularNetworkInformation,
 *     cellularAccessInfo         [2] SEQUENCE OF SIPCellularAccessInfo OPTIONAL,
 *     cNILocation                [3] SEQUENCE OF SIPLocationInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPCNIHeaderInfo {
    /**
     * @summary `cellularNetworkInformation`.
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: SIPCellularNetworkInformation;
    /**
     * @summary `cellularAccessInfo`.
     * @public
     * @readonly
     */
    readonly cellularAccessInfo: OPTIONAL<SIPCellularAccessInfo[]>;
    /**
     * @summary `cNILocation`.
     * @public
     * @readonly
     */
    readonly cNILocation: OPTIONAL<SIPLocationInfo[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cellularNetworkInformation: SIPCellularNetworkInformation,
        cellularAccessInfo: OPTIONAL<SIPCellularAccessInfo[]>,
        cNILocation: OPTIONAL<SIPLocationInfo[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.cellularAccessInfo = cellularAccessInfo;
        this.cNILocation = cNILocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SIPCNIHeaderInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SIPCNIHeaderInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPCNIHeaderInfo`.
     * @returns {SIPCNIHeaderInfo}
     */
    public static _from_object (_o: { [_K in keyof (SIPCNIHeaderInfo)]: (SIPCNIHeaderInfo)[_K] }): SIPCNIHeaderInfo {
        return new SIPCNIHeaderInfo(_o.cellularNetworkInformation, _o.cellularAccessInfo, _o.cNILocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cellularNetworkInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellularAccessInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cNILocation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPCNIHeaderInfo: $.ASN1Decoder<SIPCNIHeaderInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCNIHeaderInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPCNIHeaderInfo (el: _Element): SIPCNIHeaderInfo {
    if (!_cached_decoder_for_SIPCNIHeaderInfo) { _cached_decoder_for_SIPCNIHeaderInfo = function (el: _Element): SIPCNIHeaderInfo {
    let cellularNetworkInformation!: SIPCellularNetworkInformation;
    let cellularAccessInfo: OPTIONAL<SIPCellularAccessInfo[]>;
    let cNILocation: OPTIONAL<SIPLocationInfo[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation)(_el); },
        "cellularAccessInfo": (_el: _Element): void => { cellularAccessInfo = $._decode_implicit<SIPCellularAccessInfo[]>(() => $._decodeSequenceOf<SIPCellularAccessInfo>(() => _decode_SIPCellularAccessInfo))(_el); },
        "cNILocation": (_el: _Element): void => { cNILocation = $._decode_implicit<SIPLocationInfo[]>(() => $._decodeSequenceOf<SIPLocationInfo>(() => _decode_SIPLocationInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPCNIHeaderInfo,
        _extension_additions_list_spec_for_SIPCNIHeaderInfo,
        _root_component_type_list_2_spec_for_SIPCNIHeaderInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SIPCNIHeaderInfo(
        cellularNetworkInformation,
        cellularAccessInfo,
        cNILocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SIPCNIHeaderInfo(el);
}

let _cached_encoder_for_SIPCNIHeaderInfo: $.ASN1Encoder<SIPCNIHeaderInfo> | null = null;

/**
 * @summary Encodes a(n) SIPCNIHeaderInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCNIHeaderInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPCNIHeaderInfo (value: SIPCNIHeaderInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPCNIHeaderInfo) { _cached_encoder_for_SIPCNIHeaderInfo = function (value: SIPCNIHeaderInfo, elGetter: $.ASN1Encoder<SIPCNIHeaderInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPCellularNetworkInformation, $.BER)(value.cellularNetworkInformation, $.BER);
    if (value.cellularAccessInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SIPCellularAccessInfo>(() => _encode_SIPCellularAccessInfo, $.BER), $.BER)(value.cellularAccessInfo, $.BER);
    }
    if (value.cNILocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<SIPLocationInfo>(() => _encode_SIPLocationInfo, $.BER), $.BER)(value.cNILocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SIPCNIHeaderInfo(value, elGetter);
}


/* eslint-enable */
