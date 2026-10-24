/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { type SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
// export { SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
import { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";
// export { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";


/**
 * @summary PANIHeaderInfo
 * @description
 * 
 * The PANIHeaderInfo type is used to report information derived from the
 * P-Access-Network-Information header field of the SIP Message (see TS 24.229
 * [74] clauses 7.2A.4.2 and 7.2A.4.3).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.58.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PANIHeaderInfo ::= SEQUENCE
 * {
 *     accessNetworkInformation [1] SIPAccessNetworkInformation,
 *     accessInfo               [2] SEQUENCE OF SIPAccessInfo OPTIONAL,
 *     pANILocation             [3] SEQUENCE OF SIPLocationInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PANIHeaderInfo {
    /**
     * @summary `accessNetworkInformation`.
     * @description
     *
     * Provides non-location related access network information.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.58.
     *
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: SIPAccessNetworkInformation;
    /**
     * @summary `accessInfo`.
     * @description
     *
     * Contains the location related information from the access-info field
     * parameter of the PANI Header. One instance of SIPAccessInfo shall be used
     * for each access-info field parameter of the PANI header.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.58.
     *
     * @public
     * @readonly
     */
    readonly accessInfo: OPTIONAL<SIPAccessInfo[]>;
    /**
     * @summary `pANILocation`.
     * @description
     *
     * Contains the location information from the PANI header in the
     * LocationInfo structure. One instance of SIPLocationInfo shall be present
     * for each access-info field parameter of a type that can be mapped to the
     * LocationInfo structure.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.58.
     *
     * @public
     * @readonly
     */
    readonly pANILocation: OPTIONAL<SIPLocationInfo[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        accessNetworkInformation: SIPAccessNetworkInformation,
        accessInfo?: OPTIONAL<SIPAccessInfo[]>,
        pANILocation?: OPTIONAL<SIPLocationInfo[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.accessNetworkInformation = accessNetworkInformation;
        this.accessInfo = accessInfo;
        this.pANILocation = pANILocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PANIHeaderInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PANIHeaderInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PANIHeaderInfo`.
     * @returns {PANIHeaderInfo}
     */
    public static _from_object (_o: { [_K in keyof (PANIHeaderInfo)]: (PANIHeaderInfo)[_K] }): PANIHeaderInfo {
        return new PANIHeaderInfo(_o.accessNetworkInformation, _o.accessInfo, _o.pANILocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pANILocation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PANIHeaderInfo: $.ASN1Decoder<PANIHeaderInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PANIHeaderInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PANIHeaderInfo (el: _Element): PANIHeaderInfo {
    if (!_cached_decoder_for_PANIHeaderInfo) { _cached_decoder_for_PANIHeaderInfo = function (el: _Element): PANIHeaderInfo {
    let accessNetworkInformation!: SIPAccessNetworkInformation;
    let accessInfo: OPTIONAL<SIPAccessInfo[]>;
    let pANILocation: OPTIONAL<SIPLocationInfo[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<SIPAccessInfo[]>(() => $._decodeSequenceOf<SIPAccessInfo>(() => _decode_SIPAccessInfo))(_el); },
        "pANILocation": (_el: _Element): void => { pANILocation = $._decode_implicit<SIPLocationInfo[]>(() => $._decodeSequenceOf<SIPLocationInfo>(() => _decode_SIPLocationInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PANIHeaderInfo,
        _extension_additions_list_spec_for_PANIHeaderInfo,
        _root_component_type_list_2_spec_for_PANIHeaderInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PANIHeaderInfo(
        accessNetworkInformation,
        accessInfo,
        pANILocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PANIHeaderInfo(el);
}

let _cached_encoder_for_PANIHeaderInfo: $.ASN1Encoder<PANIHeaderInfo> | null = null;

/**
 * @summary Encodes a(n) PANIHeaderInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PANIHeaderInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PANIHeaderInfo (value: PANIHeaderInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PANIHeaderInfo) { _cached_encoder_for_PANIHeaderInfo = function (value: PANIHeaderInfo, elGetter: $.ASN1Encoder<PANIHeaderInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPAccessNetworkInformation, $.BER)(value.accessNetworkInformation, $.BER);
    if (value.accessInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SIPAccessInfo>(() => _encode_SIPAccessInfo, $.BER), $.BER)(value.accessInfo, $.BER);
    }
    if (value.pANILocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<SIPLocationInfo>(() => _encode_SIPLocationInfo, $.BER), $.BER)(value.pANILocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PANIHeaderInfo(value, elGetter);
}


/* eslint-enable */
