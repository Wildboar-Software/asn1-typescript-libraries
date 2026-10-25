/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary IdValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdValue ::= SEQUENCE {
 *    id         CMIP-AVA.&id ({AvaSet}) ,
 *    value      CMIP-AVA.&Value ({AvaSet}{@.id}) }
 * ```
 * 
 * @class
 */
export
class IdValue {
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: OBJECT_IDENTIFIER;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element;

    constructor (
        id: OBJECT_IDENTIFIER,
        value: _Element
    ) {
        this.id = id;
        this.value = value;
    }

    /**
     * @summary Restructures an object into a IdValue
     * @description
     *
     * This takes an `object` and converts it to a `IdValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdValue`.
     * @returns {IdValue}
     */
    public static _from_object (_o: { [_K in keyof (IdValue)]: (IdValue)[_K] }): IdValue {
        return new IdValue(_o.id, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of IdValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IdValue: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of IdValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IdValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IdValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_IdValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IdValue: $.ASN1Decoder<IdValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IdValue (el: _Element): IdValue {
    if (!_cached_decoder_for_IdValue) { _cached_decoder_for_IdValue = function (el: _Element): IdValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IdValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "value";
    const id: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const value: _Element = $._decodeAny(sequence[1]);
    return new IdValue(
        id,
        value,

    );
}; }
    return _cached_decoder_for_IdValue(el);
}

let _cached_encoder_for_IdValue: $.ASN1Encoder<IdValue> | null = null;

/**
 * @summary Encodes a(n) IdValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdValue, encoded as an ASN.1 Element.
 */
export
function _encode_IdValue (value: IdValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IdValue) { _cached_encoder_for_IdValue = function (value: IdValue, _elGetter: $.ASN1Encoder<IdValue>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.id, $.BER),
        /* REQUIRED   */ $._encodeAny(value.value, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_IdValue(value, elGetter);
}


/* eslint-enable */
