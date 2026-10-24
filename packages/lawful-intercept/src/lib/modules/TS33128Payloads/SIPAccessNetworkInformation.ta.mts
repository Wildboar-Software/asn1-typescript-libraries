/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary SIPAccessNetworkInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessNetworkInformation ::= SEQUENCE
 * {
 *     accessNetworkInfo [1] UTF8String,
 *     servingPLMN       [2] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPAccessNetworkInformation {
    /**
     * @summary `accessNetworkInfo`.
     * @description
     *
     * Contains the contents of the P-Access-Network-Info Header not including
     * the text from any access-info parameter fields. This field shall include
     * any extension-access-info parameter fields (see TS 24.229 [74] clause
     * 7.2A.4).
     *
     * 3GPP TS 33.128, clause 7.12.4.3.5.
     *
     * @public
     * @readonly
     */
    readonly accessNetworkInfo: UTF8String;
    /**
     * @summary `servingPLMN`.
     * @description
     *
     * Indicates the PLMN of the serving network. Shall be included if this
     * information is present in the access-info field of the PANI header.
     *
     * 3GPP TS 33.128, clause 7.12.4.3.5.
     *
     * @public
     * @readonly
     */
    readonly servingPLMN: OPTIONAL<PLMNID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        accessNetworkInfo: UTF8String,
        servingPLMN?: OPTIONAL<PLMNID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.accessNetworkInfo = accessNetworkInfo;
        this.servingPLMN = servingPLMN;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SIPAccessNetworkInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SIPAccessNetworkInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPAccessNetworkInformation`.
     * @returns {SIPAccessNetworkInformation}
     */
    public static _from_object (_o: { [_K in keyof (SIPAccessNetworkInformation)]: (SIPAccessNetworkInformation)[_K] }): SIPAccessNetworkInformation {
        return new SIPAccessNetworkInformation(_o.accessNetworkInfo, _o.servingPLMN, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servingPLMN", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPAccessNetworkInformation: $.ASN1Decoder<SIPAccessNetworkInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPAccessNetworkInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPAccessNetworkInformation (el: _Element): SIPAccessNetworkInformation {
    if (!_cached_decoder_for_SIPAccessNetworkInformation) { _cached_decoder_for_SIPAccessNetworkInformation = function (el: _Element): SIPAccessNetworkInformation {
    let accessNetworkInfo!: UTF8String;
    let servingPLMN: OPTIONAL<PLMNID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessNetworkInfo": (_el: _Element): void => { accessNetworkInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPAccessNetworkInformation,
        _extension_additions_list_spec_for_SIPAccessNetworkInformation,
        _root_component_type_list_2_spec_for_SIPAccessNetworkInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SIPAccessNetworkInformation(
        accessNetworkInfo,
        servingPLMN,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SIPAccessNetworkInformation(el);
}

let _cached_encoder_for_SIPAccessNetworkInformation: $.ASN1Encoder<SIPAccessNetworkInformation> | null = null;

/**
 * @summary Encodes a(n) SIPAccessNetworkInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPAccessNetworkInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SIPAccessNetworkInformation (value: SIPAccessNetworkInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPAccessNetworkInformation) { _cached_encoder_for_SIPAccessNetworkInformation = function (value: SIPAccessNetworkInformation, elGetter: $.ASN1Encoder<SIPAccessNetworkInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.accessNetworkInfo, $.BER);
    if (value.servingPLMN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SIPAccessNetworkInformation(value, elGetter);
}


/* eslint-enable */
