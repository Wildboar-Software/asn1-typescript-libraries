/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { RANNodeName, _decode_RANNodeName, _encode_RANNodeName } from "../TS33128Payloads/RANNodeName.ta.mjs";
// export { RANNodeName, _decode_RANNodeName, _encode_RANNodeName } from "../TS33128Payloads/RANNodeName.ta.mjs";
import { SupportedTAList, _decode_SupportedTAList, _encode_SupportedTAList } from "../TS33128Payloads/SupportedTAList.ta.mjs";
// export { SupportedTAList, _decode_SupportedTAList, _encode_SupportedTAList } from "../TS33128Payloads/SupportedTAList.ta.mjs";
import { PLMNSupportList, _decode_PLMNSupportList, _encode_PLMNSupportList } from "../TS33128Payloads/PLMNSupportList.ta.mjs";
// export { PLMNSupportList, _decode_PLMNSupportList, _encode_PLMNSupportList } from "../TS33128Payloads/PLMNSupportList.ta.mjs";


/**
 * @summary NGInformation
 * @description
 * 
 * Information pertaining to the setup of the NG Interface. See TS 38.413 [23]
 * clauses 9.2.6.1 and 9.2.6.2.
 *
 * 3GPP TS 33.128, clause 7.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGInformation ::= SEQUENCE
 * {
 *     globalRANNodeID        [1] GlobalRANNodeID,
 *     rANNodeName            [2] RANNodeName OPTIONAL,
 *     supportedTAList        [3] SupportedTAList OPTIONAL,
 *     extendedRANNodeName    [4] RANNodeName OPTIONAL,
 *     pLMNSupportList        [5] PLMNSupportList,
 *     iABSupported           [6] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NGInformation {
    /**
     * @summary `globalRANNodeID`.
     * @public
     * @readonly
     */
    readonly globalRANNodeID: GlobalRANNodeID;
    /**
     * @summary `rANNodeName`.
     * @public
     * @readonly
     */
    readonly rANNodeName: OPTIONAL<RANNodeName>;
    /**
     * @summary `supportedTAList`.
     * @public
     * @readonly
     */
    readonly supportedTAList: OPTIONAL<SupportedTAList>;
    /**
     * @summary `extendedRANNodeName`.
     * @public
     * @readonly
     */
    readonly extendedRANNodeName: OPTIONAL<RANNodeName>;
    /**
     * @summary `pLMNSupportList`.
     * @public
     * @readonly
     */
    readonly pLMNSupportList: PLMNSupportList;
    /**
     * @summary `iABSupported`.
     * @public
     * @readonly
     */
    readonly iABSupported: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        globalRANNodeID: GlobalRANNodeID,
        rANNodeName: OPTIONAL<RANNodeName>,
        supportedTAList: OPTIONAL<SupportedTAList>,
        extendedRANNodeName: OPTIONAL<RANNodeName>,
        pLMNSupportList: PLMNSupportList,
        iABSupported?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.globalRANNodeID = globalRANNodeID;
        this.rANNodeName = rANNodeName;
        this.supportedTAList = supportedTAList;
        this.extendedRANNodeName = extendedRANNodeName;
        this.pLMNSupportList = pLMNSupportList;
        this.iABSupported = iABSupported;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NGInformation
     * @description
     * 
     * This takes an `object` and converts it to a `NGInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NGInformation`.
     * @returns {NGInformation}
     */
    public static _from_object (_o: { [_K in keyof (NGInformation)]: (NGInformation)[_K] }): NGInformation {
        return new NGInformation(_o.globalRANNodeID, _o.rANNodeName, _o.supportedTAList, _o.extendedRANNodeName, _o.pLMNSupportList, _o.iABSupported, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NGInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("globalRANNodeID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANNodeName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supportedTAList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extendedRANNodeName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pLMNSupportList", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iABSupported", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of NGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NGInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NGInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NGInformation: $.ASN1Decoder<NGInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGInformation (el: _Element): NGInformation {
    if (!_cached_decoder_for_NGInformation) { _cached_decoder_for_NGInformation = function (el: _Element): NGInformation {
    let globalRANNodeID!: GlobalRANNodeID;
    let rANNodeName: OPTIONAL<RANNodeName>;
    let supportedTAList: OPTIONAL<SupportedTAList>;
    let extendedRANNodeName: OPTIONAL<RANNodeName>;
    let pLMNSupportList!: PLMNSupportList;
    let iABSupported: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "globalRANNodeID": (_el: _Element): void => { globalRANNodeID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "rANNodeName": (_el: _Element): void => { rANNodeName = $._decode_explicit<RANNodeName>(() => _decode_RANNodeName)(_el); },
        "supportedTAList": (_el: _Element): void => { supportedTAList = $._decode_implicit<SupportedTAList>(() => _decode_SupportedTAList)(_el); },
        "extendedRANNodeName": (_el: _Element): void => { extendedRANNodeName = $._decode_explicit<RANNodeName>(() => _decode_RANNodeName)(_el); },
        "pLMNSupportList": (_el: _Element): void => { pLMNSupportList = $._decode_implicit<PLMNSupportList>(() => _decode_PLMNSupportList)(_el); },
        "iABSupported": (_el: _Element): void => { iABSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NGInformation,
        _extension_additions_list_spec_for_NGInformation,
        _root_component_type_list_2_spec_for_NGInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NGInformation(
        globalRANNodeID,
        rANNodeName,
        supportedTAList,
        extendedRANNodeName,
        pLMNSupportList,
        iABSupported,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NGInformation(el);
}

let _cached_encoder_for_NGInformation: $.ASN1Encoder<NGInformation> | null = null;

/**
 * @summary Encodes a(n) NGInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NGInformation (value: NGInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGInformation) { _cached_encoder_for_NGInformation = function (value: NGInformation, elGetter: $.ASN1Encoder<NGInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GlobalRANNodeID, $.BER)(value.globalRANNodeID, $.BER);
    if (value.rANNodeName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_RANNodeName, $.BER)(value.rANNodeName, $.BER);
    }
    if (value.supportedTAList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SupportedTAList, $.BER)(value.supportedTAList, $.BER);
    }
    if (value.extendedRANNodeName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_RANNodeName, $.BER)(value.extendedRANNodeName, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PLMNSupportList, $.BER)(value.pLMNSupportList, $.BER);
    if (value.iABSupported !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.iABSupported, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NGInformation(value, elGetter);
}


/* eslint-enable */
