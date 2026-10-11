/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NGAPCauseGroupInt, _decode_NGAPCauseGroupInt, _encode_NGAPCauseGroupInt } from "../TS33128Payloads/NGAPCauseGroupInt.ta.mjs";
// export { NGAPCauseGroupInt, _decode_NGAPCauseGroupInt, _encode_NGAPCauseGroupInt } from "../TS33128Payloads/NGAPCauseGroupInt.ta.mjs";
import { NGAPCauseValueInt, _decode_NGAPCauseValueInt, _encode_NGAPCauseValueInt } from "../TS33128Payloads/NGAPCauseValueInt.ta.mjs";
// export { NGAPCauseValueInt, _decode_NGAPCauseValueInt, _encode_NGAPCauseValueInt } from "../TS33128Payloads/NGAPCauseValueInt.ta.mjs";


/**
 * @summary NGAPCauseInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseInt ::= SEQUENCE
 * {
 *     group [1] NGAPCauseGroupInt,
 *     value [2] NGAPCauseValueInt
 * }
 * ```
 * 
 * @class
 */
export
class NGAPCauseInt {
    /**
     * @summary `group`.
     * @public
     * @readonly
     */
    readonly group: NGAPCauseGroupInt;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: NGAPCauseValueInt;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        group: NGAPCauseGroupInt,
        value: NGAPCauseValueInt,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.group = group;
        this.value = value;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NGAPCauseInt
     * @description
     * 
     * This takes an `object` and converts it to a `NGAPCauseInt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NGAPCauseInt`.
     * @returns {NGAPCauseInt}
     */
    public static _from_object (_o: { [_K in keyof (NGAPCauseInt)]: (NGAPCauseInt)[_K] }): NGAPCauseInt {
        return new NGAPCauseInt(_o.group, _o.value, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    new $.ComponentSpec("group", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NGAPCauseInt: $.ASN1Decoder<NGAPCauseInt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGAPCauseInt (el: _Element): NGAPCauseInt {
    if (!_cached_decoder_for_NGAPCauseInt) { _cached_decoder_for_NGAPCauseInt = function (el: _Element): NGAPCauseInt {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NGAPCauseInt contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "group";
    sequence[1].name = "value";
    let group!: NGAPCauseGroupInt;
    let value!: NGAPCauseValueInt;
    group = $._decode_implicit<NGAPCauseGroupInt>(() => _decode_NGAPCauseGroupInt)(sequence[0]);
    value = $._decode_implicit<NGAPCauseValueInt>(() => _decode_NGAPCauseValueInt)(sequence[1]);
    return new NGAPCauseInt(
        group,
        value,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_NGAPCauseInt(el);
}

let _cached_encoder_for_NGAPCauseInt: $.ASN1Encoder<NGAPCauseInt> | null = null;

/**
 * @summary Encodes a(n) NGAPCauseInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseInt, encoded as an ASN.1 Element.
 */
export
function _encode_NGAPCauseInt (value: NGAPCauseInt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGAPCauseInt) { _cached_encoder_for_NGAPCauseInt = function (value: NGAPCauseInt, elGetter: $.ASN1Encoder<NGAPCauseInt>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NGAPCauseGroupInt, $.BER)(value.group, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NGAPCauseValueInt, $.BER)(value.value, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NGAPCauseInt(value, elGetter);
}


/* eslint-enable */
