/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";


/**
 * @summary MidCallInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallInfo ::= SEQUENCE {iNServiceControlCode  [0]  Digits,
 *                                  ...
 * }
 * ```
 * 
 * @class
 */
export
class MidCallInfo {
    /**
     * @summary `iNServiceControlCode`.
     * @public
     * @readonly
     */
    readonly iNServiceControlCode: Digits;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iNServiceControlCode: Digits,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iNServiceControlCode = iNServiceControlCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MidCallInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallInfo`.
     * @returns {MidCallInfo}
     */
    public static _from_object (_o: { [_K in keyof (MidCallInfo)]: (MidCallInfo)[_K] }): MidCallInfo {
        return new MidCallInfo(_o.iNServiceControlCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iNServiceControlCode", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallInfo: $.ASN1Decoder<MidCallInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallInfo (el: _Element): MidCallInfo {
    if (!_cached_decoder_for_MidCallInfo) { _cached_decoder_for_MidCallInfo = function (el: _Element): MidCallInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MidCallInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iNServiceControlCode";
    let iNServiceControlCode!: Digits;
    iNServiceControlCode = $._decode_implicit<Digits>(() => _decode_Digits)(sequence[0]);
    return new MidCallInfo(
        iNServiceControlCode,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_MidCallInfo(el);
}

let _cached_encoder_for_MidCallInfo: $.ASN1Encoder<MidCallInfo> | null = null;

/**
 * @summary Encodes a(n) MidCallInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallInfo (value: MidCallInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallInfo) { _cached_encoder_for_MidCallInfo = function (value: MidCallInfo, elGetter: $.ASN1Encoder<MidCallInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.iNServiceControlCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MidCallInfo(value, elGetter);
}


/* eslint-enable */
