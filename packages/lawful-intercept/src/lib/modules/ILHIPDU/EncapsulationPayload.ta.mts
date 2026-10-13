/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulationPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulationPayload ::= SEQUENCE
 * {
 *     identifier                [0] OBJECT IDENTIFIER,
 *     -- see clause 8.1 
 *     contents                [1] OCTET STRING,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EncapsulationPayload {
    /**
     * @summary `identifier`.
     * @public
     * @readonly
     */
    readonly identifier: OBJECT_IDENTIFIER;
    /**
     * @summary `contents`.
     * @public
     * @readonly
     */
    readonly contents: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        identifier: OBJECT_IDENTIFIER,
        contents: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.identifier = identifier;
        this.contents = contents;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EncapsulationPayload
     * @description
     * 
     * This takes an `object` and converts it to a `EncapsulationPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulationPayload`.
     * @returns {EncapsulationPayload}
     */
    public static _from_object (_o: { [_K in keyof (EncapsulationPayload)]: (EncapsulationPayload)[_K] }): EncapsulationPayload {
        return new EncapsulationPayload(_o.identifier, _o.contents, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EncapsulationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncapsulationPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EncapsulationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncapsulationPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncapsulationPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncapsulationPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncapsulationPayload: $.ASN1Decoder<EncapsulationPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulationPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulationPayload (el: _Element): EncapsulationPayload {
    if (!_cached_decoder_for_EncapsulationPayload) { _cached_decoder_for_EncapsulationPayload = function (el: _Element): EncapsulationPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncapsulationPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "contents";
    let identifier!: OBJECT_IDENTIFIER;
    let contents!: OCTET_STRING;
    identifier = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(sequence[0]);
    contents = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EncapsulationPayload(
        identifier,
        contents,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_EncapsulationPayload(el);
}

let _cached_encoder_for_EncapsulationPayload: $.ASN1Encoder<EncapsulationPayload> | null = null;

/**
 * @summary Encodes a(n) EncapsulationPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulationPayload, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulationPayload (value: EncapsulationPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulationPayload) { _cached_encoder_for_EncapsulationPayload = function (value: EncapsulationPayload, elGetter: $.ASN1Encoder<EncapsulationPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.identifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.contents, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EncapsulationPayload(value, elGetter);
}


/* eslint-enable */
