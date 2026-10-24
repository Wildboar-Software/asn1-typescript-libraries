/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary NRNTNTAIInfo
 * @description
 * 
 * Contains NR NTN TAI Information. When present the TAI is set to the reserved
 * value and shall be ignored by the receiver. See TS 29.571 [17] clause 5.4.4.9
 * and TS 38.413 [23] clause 9.3.3.53.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRNTNTAIInfo ::= SEQUENCE
 * {
 *     servingPLMN                   [1] PLMNID,
 *     tACListNRNTN                  [2] SEQUENCE (SIZE(1..MAX)) OF TAC,
 *     uELocationDerivedNTNTAC       [3] TAC OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NRNTNTAIInfo {
    /**
     * @summary `servingPLMN`.
     * @public
     * @readonly
     */
    readonly servingPLMN: PLMNID;
    /**
     * @summary `tACListNRNTN`.
     * @public
     * @readonly
     */
    readonly tACListNRNTN: TAC[];
    /**
     * @summary `uELocationDerivedNTNTAC`.
     * @public
     * @readonly
     */
    readonly uELocationDerivedNTNTAC: OPTIONAL<TAC>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        servingPLMN: PLMNID,
        tACListNRNTN: TAC[],
        uELocationDerivedNTNTAC?: OPTIONAL<TAC>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.servingPLMN = servingPLMN;
        this.tACListNRNTN = tACListNRNTN;
        this.uELocationDerivedNTNTAC = uELocationDerivedNTNTAC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NRNTNTAIInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NRNTNTAIInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NRNTNTAIInfo`.
     * @returns {NRNTNTAIInfo}
     */
    public static _from_object (_o: { [_K in keyof (NRNTNTAIInfo)]: (NRNTNTAIInfo)[_K] }): NRNTNTAIInfo {
        return new NRNTNTAIInfo(_o.servingPLMN, _o.tACListNRNTN, _o.uELocationDerivedNTNTAC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("servingPLMN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tACListNRNTN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uELocationDerivedNTNTAC", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NRNTNTAIInfo: $.ASN1Decoder<NRNTNTAIInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRNTNTAIInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NRNTNTAIInfo (el: _Element): NRNTNTAIInfo {
    if (!_cached_decoder_for_NRNTNTAIInfo) { _cached_decoder_for_NRNTNTAIInfo = function (el: _Element): NRNTNTAIInfo {
    let servingPLMN!: PLMNID;
    let tACListNRNTN!: TAC[];
    let uELocationDerivedNTNTAC: OPTIONAL<TAC>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "tACListNRNTN": (_el: _Element): void => {
            tACListNRNTN = $._decode_implicit<TAC[]>(() => $._decodeSequenceOf<TAC>(() => _decode_TAC))(_el);
            if (tACListNRNTN.length < 1) {
                throw new ASN1SizeError("NRNTNTAIInfo.tACListNRNTN violates SIZE constraint");
            }
        },
        "uELocationDerivedNTNTAC": (_el: _Element): void => { uELocationDerivedNTNTAC = $._decode_implicit<TAC>(() => _decode_TAC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NRNTNTAIInfo,
        _extension_additions_list_spec_for_NRNTNTAIInfo,
        _root_component_type_list_2_spec_for_NRNTNTAIInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NRNTNTAIInfo(
        servingPLMN,
        tACListNRNTN,
        uELocationDerivedNTNTAC,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NRNTNTAIInfo(el);
}

let _cached_encoder_for_NRNTNTAIInfo: $.ASN1Encoder<NRNTNTAIInfo> | null = null;

/**
 * @summary Encodes a(n) NRNTNTAIInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRNTNTAIInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NRNTNTAIInfo (value: NRNTNTAIInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NRNTNTAIInfo) { _cached_encoder_for_NRNTNTAIInfo = function (value: NRNTNTAIInfo, elGetter: $.ASN1Encoder<NRNTNTAIInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER), $.BER)(value.tACListNRNTN, $.BER);
    if (value.uELocationDerivedNTNTAC !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TAC, $.BER)(value.uELocationDerivedNTNTAC, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NRNTNTAIInfo(value, elGetter);
}


/* eslint-enable */
