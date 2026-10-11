/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TETRA_Password_Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRA-Password-Name ::= SEQUENCE 
 * {
 *     password    [1] OCTET STRING (SIZE (1..25)),
 *     name        [2] OCTET STRING (SIZE (1..25)),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class TETRA_Password_Name {
    /**
     * @summary `password`.
     * @public
     * @readonly
     */
    readonly password: OCTET_STRING;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        password: OCTET_STRING,
        name: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.password = password;
        if (this.password.length < 1 || this.password.length > 25) {
            throw new ASN1SizeError("password violates the SIZE constraint");
        }
        this.name = name;
        if (this.name.length < 1 || this.name.length > 25) {
            throw new ASN1SizeError("name violates the SIZE constraint");
        }
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TETRA_Password_Name
     * @description
     * 
     * This takes an `object` and converts it to a `TETRA_Password_Name`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TETRA_Password_Name`.
     * @returns {TETRA_Password_Name}
     */
    public static _from_object (_o: { [_K in keyof (TETRA_Password_Name)]: (TETRA_Password_Name)[_K] }): TETRA_Password_Name {
        return new TETRA_Password_Name(_o.password, _o.name, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TETRA_Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TETRA_Password_Name: $.ComponentSpec[] = [
    new $.ComponentSpec("password", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TETRA_Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TETRA_Password_Name: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TETRA_Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TETRA_Password_Name: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TETRA_Password_Name: $.ASN1Decoder<TETRA_Password_Name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TETRA_Password_Name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TETRA_Password_Name (el: _Element): TETRA_Password_Name {
    if (!_cached_decoder_for_TETRA_Password_Name) { _cached_decoder_for_TETRA_Password_Name = function (el: _Element): TETRA_Password_Name {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TETRA-Password-Name contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "password";
    sequence[1].name = "name";
    let password!: OCTET_STRING;
    let name!: OCTET_STRING;
    password = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    name = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TETRA_Password_Name(
        password,
        name,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TETRA_Password_Name(el);
}

let _cached_encoder_for_TETRA_Password_Name: $.ASN1Encoder<TETRA_Password_Name> | null = null;

/**
 * @summary Encodes a(n) TETRA_Password_Name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TETRA_Password_Name, encoded as an ASN.1 Element.
 */
export
function _encode_TETRA_Password_Name (value: TETRA_Password_Name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TETRA_Password_Name) { _cached_encoder_for_TETRA_Password_Name = function (value: TETRA_Password_Name, elGetter: $.ASN1Encoder<TETRA_Password_Name>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.password, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.name, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TETRA_Password_Name(value, elGetter);
}


/* eslint-enable */
