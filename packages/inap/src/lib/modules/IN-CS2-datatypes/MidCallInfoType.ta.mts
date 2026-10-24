/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary MidCallInfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallInfoType ::= SEQUENCE {
 *   iNServiceControlCodeLow   [0]  Digits,
 *   iNServiceControlCodeHigh  [1]  Digits OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MidCallInfoType {
    /**
     * @summary `iNServiceControlCodeLow`.
     * @public
     * @readonly
     */
    readonly iNServiceControlCodeLow: Digits;
    /**
     * @summary `iNServiceControlCodeHigh`.
     * @public
     * @readonly
     */
    readonly iNServiceControlCodeHigh: OPTIONAL<Digits>;

    constructor (
        iNServiceControlCodeLow: Digits,
        iNServiceControlCodeHigh?: OPTIONAL<Digits>
    ) {
        this.iNServiceControlCodeLow = iNServiceControlCodeLow;
        this.iNServiceControlCodeHigh = iNServiceControlCodeHigh;
    }

    /**
     * @summary Restructures an object into a MidCallInfoType
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallInfoType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallInfoType`.
     * @returns {MidCallInfoType}
     */
    public static _from_object (_o: { [_K in keyof (MidCallInfoType)]: (MidCallInfoType)[_K] }): MidCallInfoType {
        return new MidCallInfoType(_o.iNServiceControlCodeLow, _o.iNServiceControlCodeHigh);
    }


}

/**
 * @summary The Leading Root Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    new $.ComponentSpec("iNServiceControlCodeLow", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iNServiceControlCodeHigh", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallInfoType: $.ASN1Decoder<MidCallInfoType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallInfoType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallInfoType (el: _Element): MidCallInfoType {
    if (!_cached_decoder_for_MidCallInfoType) { _cached_decoder_for_MidCallInfoType = function (el: _Element): MidCallInfoType {
    let iNServiceControlCodeLow!: Digits;
    let iNServiceControlCodeHigh: OPTIONAL<Digits>;
    const callbacks: $.DecodingMap = {
        "iNServiceControlCodeLow": (_el: _Element): void => { iNServiceControlCodeLow = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "iNServiceControlCodeHigh": (_el: _Element): void => { iNServiceControlCodeHigh = $._decode_implicit<Digits>(() => _decode_Digits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MidCallInfoType,
        _extension_additions_list_spec_for_MidCallInfoType,
        _root_component_type_list_2_spec_for_MidCallInfoType,
        undefined,
    );
    return new MidCallInfoType(
        iNServiceControlCodeLow,
        iNServiceControlCodeHigh
    );
}; }
    return _cached_decoder_for_MidCallInfoType(el);
}

let _cached_encoder_for_MidCallInfoType: $.ASN1Encoder<MidCallInfoType> | null = null;

/**
 * @summary Encodes a(n) MidCallInfoType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallInfoType, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallInfoType (value: MidCallInfoType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallInfoType) { _cached_encoder_for_MidCallInfoType = function (value: MidCallInfoType, elGetter: $.ASN1Encoder<MidCallInfoType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.iNServiceControlCodeLow, $.BER));
    if (value.iNServiceControlCodeHigh !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER)(value.iNServiceControlCodeHigh, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MidCallInfoType(value, elGetter);
}


/* eslint-enable */
