/* eslint-disable */
import {
    BIT_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PROTECTED_dirSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PROTECTED-dirSign ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PROTECTED_dirSign<BaseType> {
    /**
     * @summary `baseType`.
     * @public
     * @readonly
     */
    readonly baseType: OPTIONAL<BaseType>;
    /**
     * @summary `algorithmId`.
     * @public
     * @readonly
     */
    readonly algorithmId: AlgorithmIdentifier;
    /**
     * @summary `encipheredHash`.
     * @public
     * @readonly
     */
    readonly encipheredHash: BIT_STRING;

    constructor (
        baseType: OPTIONAL<BaseType>,
        algorithmId: AlgorithmIdentifier,
        encipheredHash: BIT_STRING
    ) {
        this.baseType = baseType;
        this.algorithmId = algorithmId;
        this.encipheredHash = encipheredHash;
    }

    /**
     * @summary Restructures an object into a PROTECTED_dirSign
     * @description
     * 
     * This takes an `object` and converts it to a `PROTECTED_dirSign`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PROTECTED_dirSign`.
     * @returns {PROTECTED_dirSign}
     */
    public static _from_object (_o: { [_K in keyof (PROTECTED_dirSign<any>)]: (PROTECTED_dirSign<any>)[_K] }): PROTECTED_dirSign<any> {
        return new PROTECTED_dirSign(_o.baseType, _o.algorithmId, _o.encipheredHash);
    }


}

/**
 * @summary The Leading Root Component Types of PROTECTED_dirSign
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [
    new $.ComponentSpec("baseType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("algorithmId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encipheredHash", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PROTECTED_dirSign
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PROTECTED_dirSign
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PROTECTED_dirSign: $.ASN1Decoder<PROTECTED_dirSign<BaseType>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED_dirSign
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PROTECTED_dirSign<BaseType>(_decode_BaseType: $.ASN1Decoder<BaseType>): $.ASN1Decoder<PROTECTED_dirSign<BaseType>> {
    return function (el: _Element): PROTECTED_dirSign<BaseType> {
    let baseType: OPTIONAL<BaseType>;
    let algorithmId!: AlgorithmIdentifier;
    let encipheredHash!: BIT_STRING;
    const callbacks: $.DecodingMap = {
        "baseType": (_el: _Element): void => { baseType = _decode_BaseType(_el); },
        "algorithmId": (_el: _Element): void => { algorithmId = _decode_AlgorithmIdentifier(_el); },
        "encipheredHash": (_el: _Element): void => { encipheredHash = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED_dirSign,
        _extension_additions_list_spec_for_PROTECTED_dirSign,
        _root_component_type_list_2_spec_for_PROTECTED_dirSign,
        undefined,
    );
    return new PROTECTED_dirSign(
        baseType,
        algorithmId,
        encipheredHash
    );
};
}

let _cached_encoder_for_PROTECTED_dirSign: $.ASN1Encoder<PROTECTED_dirSign<BaseType>> | null = null;

/**
 * @summary Returns a function that will encode a(n) PROTECTED_dirSign into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED_dirSign as an ASN.1 element.
 */
export
function _get_encoder_for_PROTECTED_dirSign<BaseType>(_encode_BaseType: $.ASN1Encoder<BaseType>): $.ASN1Encoder<PROTECTED_dirSign<BaseType>> {
    return function (value: PROTECTED_dirSign<BaseType>, elGetter: $.ASN1Encoder<PROTECTED_dirSign<BaseType>>): _Element {
    const _components: _Element[] = [];
    if (value.baseType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_BaseType, $.BER)(value.baseType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlgorithmIdentifier, $.BER)(value.algorithmId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER)(value.encipheredHash, $.BER));
    return $._encodeSequence(_components, $.BER);
};
}

/* eslint-enable */
