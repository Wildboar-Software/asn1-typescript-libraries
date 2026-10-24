/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EDNConnectionInfo, _decode_EDNConnectionInfo, _encode_EDNConnectionInfo } from "../TS33128Payloads/EDNConnectionInfo.ta.mjs";
// export { EDNConnectionInfo, _decode_EDNConnectionInfo, _encode_EDNConnectionInfo } from "../TS33128Payloads/EDNConnectionInfo.ta.mjs";
import { type EESsInfo, _decode_EESsInfo, _encode_EESsInfo } from "../TS33128Payloads/EESsInfo.ta.mjs";
// export { EESsInfo, _decode_EESsInfo, _encode_EESsInfo } from "../TS33128Payloads/EESsInfo.ta.mjs";


/**
 * @summary EDNConfigurationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDNConfigurationInfo ::= SEQUENCE
 * {
 *     eDNConnectionInfo    [1] EDNConnectionInfo,
 *     eESsInfo             [2] EESsInfo,
 *     lifetime             [3] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EDNConfigurationInfo {
    /**
     * @summary `eDNConnectionInfo`.
     * @public
     * @readonly
     */
    readonly eDNConnectionInfo: EDNConnectionInfo;
    /**
     * @summary `eESsInfo`.
     * @public
     * @readonly
     */
    readonly eESsInfo: EESsInfo;
    /**
     * @summary `lifetime`.
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eDNConnectionInfo: EDNConnectionInfo,
        eESsInfo: EESsInfo,
        lifetime?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eDNConnectionInfo = eDNConnectionInfo;
        this.eESsInfo = eESsInfo;
        this.lifetime = lifetime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EDNConfigurationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EDNConfigurationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDNConfigurationInfo`.
     * @returns {EDNConfigurationInfo}
     */
    public static _from_object (_o: { [_K in keyof (EDNConfigurationInfo)]: (EDNConfigurationInfo)[_K] }): EDNConfigurationInfo {
        return new EDNConfigurationInfo(_o.eDNConnectionInfo, _o.eESsInfo, _o.lifetime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eDNConnectionInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eESsInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EDNConfigurationInfo: $.ASN1Decoder<EDNConfigurationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDNConfigurationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDNConfigurationInfo (el: _Element): EDNConfigurationInfo {
    if (!_cached_decoder_for_EDNConfigurationInfo) { _cached_decoder_for_EDNConfigurationInfo = function (el: _Element): EDNConfigurationInfo {
    let eDNConnectionInfo!: EDNConnectionInfo;
    let eESsInfo!: EESsInfo;
    let lifetime: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eDNConnectionInfo": (_el: _Element): void => { eDNConnectionInfo = $._decode_implicit<EDNConnectionInfo>(() => _decode_EDNConnectionInfo)(_el); },
        "eESsInfo": (_el: _Element): void => { eESsInfo = $._decode_implicit<EESsInfo>(() => _decode_EESsInfo)(_el); },
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EDNConfigurationInfo,
        _extension_additions_list_spec_for_EDNConfigurationInfo,
        _root_component_type_list_2_spec_for_EDNConfigurationInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EDNConfigurationInfo(
        eDNConnectionInfo,
        eESsInfo,
        lifetime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EDNConfigurationInfo(el);
}

let _cached_encoder_for_EDNConfigurationInfo: $.ASN1Encoder<EDNConfigurationInfo> | null = null;

/**
 * @summary Encodes a(n) EDNConfigurationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDNConfigurationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EDNConfigurationInfo (value: EDNConfigurationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDNConfigurationInfo) { _cached_encoder_for_EDNConfigurationInfo = function (value: EDNConfigurationInfo, elGetter: $.ASN1Encoder<EDNConfigurationInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EDNConnectionInfo, $.BER)(value.eDNConnectionInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EESsInfo, $.BER)(value.eESsInfo, $.BER);
    if (value.lifetime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.lifetime, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EDNConfigurationInfo(value, elGetter);
}


/* eslint-enable */
