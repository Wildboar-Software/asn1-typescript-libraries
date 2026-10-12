/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSIType, _decode_TSIType, _encode_TSIType } from "../EN301040/TSIType.ta.mjs";
// export { TSIType, _decode_TSIType, _encode_TSIType } from "../EN301040/TSIType.ta.mjs";
import { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";
// export { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";


/**
 * @summary AddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressType ::= SEQUENCE {
 *     tSI                        TSIType,
 *     supplementaryAddress    SEQUENCE OF TETRAAddressType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AddressType {
    /**
     * @summary `tSI`.
     * @public
     * @readonly
     */
    readonly tSI: TSIType;
    /**
     * @summary `supplementaryAddress`.
     * @public
     * @readonly
     */
    readonly supplementaryAddress: OPTIONAL<TETRAAddressType[]>;

    constructor (
        tSI: TSIType,
        supplementaryAddress: OPTIONAL<TETRAAddressType[]>
    ) {
        this.tSI = tSI;
        this.supplementaryAddress = supplementaryAddress;
    }

    /**
     * @summary Restructures an object into a AddressType
     * @description
     * 
     * This takes an `object` and converts it to a `AddressType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressType`.
     * @returns {AddressType}
     */
    public static _from_object (_o: { [_K in keyof (AddressType)]: (AddressType)[_K] }): AddressType {
        return new AddressType(_o.tSI, _o.supplementaryAddress);
    }


}

/**
 * @summary The Leading Root Component Types of AddressType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddressType: $.ComponentSpec[] = [
    new $.ComponentSpec("tSI", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supplementaryAddress", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AddressType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddressType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddressType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddressType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddressType: $.ASN1Decoder<AddressType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressType (el: _Element): AddressType {
    if (!_cached_decoder_for_AddressType) { _cached_decoder_for_AddressType = function (el: _Element): AddressType {
    let tSI!: TSIType;
    let supplementaryAddress: OPTIONAL<TETRAAddressType[]>;
    const callbacks: $.DecodingMap = {
        "tSI": (_el: _Element): void => { tSI = _decode_TSIType(_el); },
        "supplementaryAddress": (_el: _Element): void => { supplementaryAddress = $._decodeSequenceOf<TETRAAddressType>(() => _decode_TETRAAddressType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddressType,
        _extension_additions_list_spec_for_AddressType,
        _root_component_type_list_2_spec_for_AddressType,
        undefined,
    );
    return new AddressType(
        tSI,
        supplementaryAddress
    );
}; }
    return _cached_decoder_for_AddressType(el);
}

let _cached_encoder_for_AddressType: $.ASN1Encoder<AddressType> | null = null;

/**
 * @summary Encodes a(n) AddressType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressType, encoded as an ASN.1 Element.
 */
export
function _encode_AddressType (value: AddressType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressType) { _cached_encoder_for_AddressType = function (value: AddressType, elGetter: $.ASN1Encoder<AddressType>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TSIType, $.BER)(value.tSI, $.BER);
    if (value.supplementaryAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TETRAAddressType>(() => _encode_TETRAAddressType, $.BER), $.BER)(value.supplementaryAddress, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AddressType(value, elGetter);
}


/* eslint-enable */
