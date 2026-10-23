/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
// export { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary LTENTNTAIInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LTENTNTAIInformation ::= SEQUENCE
 * {
 *     pLMN            [1] PLMNID,
 *     tACListInLTENTN [2] TACList,
 *     uETAC           [3] TAC OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LTENTNTAIInformation {
    /**
     * @summary `pLMN`.
     * @description
     *
     * Indicates the serving PLMN for the UE.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.17.
     *
     * @public
     * @readonly
     */
    readonly pLMN: PLMNID;
    /**
     * @summary `tACListInLTENTN`.
     * @description
     *
     * Includes all TACs broadcast in the cell for the UE's serving PLMN.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.17.
     *
     * @public
     * @readonly
     */
    readonly tACListInLTENTN: TACList;
    /**
     * @summary `uETAC`.
     * @description
     *
     * Contains the TAC information derived from the TAC serving the UE's actual
     * location. Shall be present if known.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.17.
     *
     * @public
     * @readonly
     */
    readonly uETAC: OPTIONAL<TAC>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pLMN: PLMNID,
        tACListInLTENTN: TACList,
        uETAC?: OPTIONAL<TAC>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pLMN = pLMN;
        this.tACListInLTENTN = tACListInLTENTN;
        this.uETAC = uETAC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LTENTNTAIInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LTENTNTAIInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LTENTNTAIInformation`.
     * @returns {LTENTNTAIInformation}
     */
    public static _from_object (_o: { [_K in keyof (LTENTNTAIInformation)]: (LTENTNTAIInformation)[_K] }): LTENTNTAIInformation {
        return new LTENTNTAIInformation(_o.pLMN, _o.tACListInLTENTN, _o.uETAC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tACListInLTENTN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uETAC", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LTENTNTAIInformation: $.ASN1Decoder<LTENTNTAIInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LTENTNTAIInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LTENTNTAIInformation (el: _Element): LTENTNTAIInformation {
    if (!_cached_decoder_for_LTENTNTAIInformation) { _cached_decoder_for_LTENTNTAIInformation = function (el: _Element): LTENTNTAIInformation {
    let pLMN!: PLMNID;
    let tACListInLTENTN!: TACList;
    let uETAC: OPTIONAL<TAC>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pLMN": (_el: _Element): void => { pLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "tACListInLTENTN": (_el: _Element): void => { tACListInLTENTN = $._decode_implicit<TACList>(() => _decode_TACList)(_el); },
        "uETAC": (_el: _Element): void => { uETAC = $._decode_implicit<TAC>(() => _decode_TAC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LTENTNTAIInformation,
        _extension_additions_list_spec_for_LTENTNTAIInformation,
        _root_component_type_list_2_spec_for_LTENTNTAIInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LTENTNTAIInformation(
        pLMN,
        tACListInLTENTN,
        uETAC,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LTENTNTAIInformation(el);
}

let _cached_encoder_for_LTENTNTAIInformation: $.ASN1Encoder<LTENTNTAIInformation> | null = null;

/**
 * @summary Encodes a(n) LTENTNTAIInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LTENTNTAIInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LTENTNTAIInformation (value: LTENTNTAIInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LTENTNTAIInformation) { _cached_encoder_for_LTENTNTAIInformation = function (value: LTENTNTAIInformation, elGetter: $.ASN1Encoder<LTENTNTAIInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMN, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TACList, $.BER)(value.tACListInLTENTN, $.BER);
    if (value.uETAC !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TAC, $.BER)(value.uETAC, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LTENTNTAIInformation(value, elGetter);
}


/* eslint-enable */
