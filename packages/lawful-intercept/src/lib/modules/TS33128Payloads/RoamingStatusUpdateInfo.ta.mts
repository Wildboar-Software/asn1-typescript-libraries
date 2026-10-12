/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary RoamingStatusUpdateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingStatusUpdateInfo ::= SEQUENCE
 * {
 *     iMSI           [1] IMSI OPTIONAL,
 *     pLMNID         [2] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RoamingStatusUpdateInfo {
    /**
     * @summary `iMSI`.
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `pLMNID`.
     * @public
     * @readonly
     */
    readonly pLMNID: OPTIONAL<PLMNID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: OPTIONAL<IMSI>,
        pLMNID: OPTIONAL<PLMNID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.pLMNID = pLMNID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RoamingStatusUpdateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingStatusUpdateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingStatusUpdateInfo`.
     * @returns {RoamingStatusUpdateInfo}
     */
    public static _from_object (_o: { [_K in keyof (RoamingStatusUpdateInfo)]: (RoamingStatusUpdateInfo)[_K] }): RoamingStatusUpdateInfo {
        return new RoamingStatusUpdateInfo(_o.iMSI, _o.pLMNID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pLMNID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingStatusUpdateInfo: $.ASN1Decoder<RoamingStatusUpdateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingStatusUpdateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingStatusUpdateInfo (el: _Element): RoamingStatusUpdateInfo {
    if (!_cached_decoder_for_RoamingStatusUpdateInfo) { _cached_decoder_for_RoamingStatusUpdateInfo = function (el: _Element): RoamingStatusUpdateInfo {
    let iMSI: OPTIONAL<IMSI>;
    let pLMNID: OPTIONAL<PLMNID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingStatusUpdateInfo,
        _extension_additions_list_spec_for_RoamingStatusUpdateInfo,
        _root_component_type_list_2_spec_for_RoamingStatusUpdateInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoamingStatusUpdateInfo(
        iMSI,
        pLMNID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoamingStatusUpdateInfo(el);
}

let _cached_encoder_for_RoamingStatusUpdateInfo: $.ASN1Encoder<RoamingStatusUpdateInfo> | null = null;

/**
 * @summary Encodes a(n) RoamingStatusUpdateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingStatusUpdateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingStatusUpdateInfo (value: RoamingStatusUpdateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingStatusUpdateInfo) { _cached_encoder_for_RoamingStatusUpdateInfo = function (value: RoamingStatusUpdateInfo, elGetter: $.ASN1Encoder<RoamingStatusUpdateInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.pLMNID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RoamingStatusUpdateInfo(value, elGetter);
}


/* eslint-enable */
