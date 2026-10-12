/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { himOperationId } from "../HIManagementOperations/himOperationId.va.mjs";



/**
 * @summary Password_Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password-Name ::= SEQUENCE
 * {
 *     domainID    [0] OBJECT IDENTIFIER (himOperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     password    [1] OCTET STRING (SIZE (1..25)),
 *     name        [2] OCTET STRING (SIZE (1..25)),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Password_Name {
    /**
     * @summary `domainID`.
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
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
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        password: OCTET_STRING,
        name: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.password = password;
        this.name = name;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Password_Name
     * @description
     * 
     * This takes an `object` and converts it to a `Password_Name`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Password_Name`.
     * @returns {Password_Name}
     */
    public static _from_object (_o: { [_K in keyof (Password_Name)]: (Password_Name)[_K] }): Password_Name {
        return new Password_Name(_o.domainID, _o.password, _o.name, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Password_Name: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("password", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Password_Name: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Password_Name
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Password_Name: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Password_Name: $.ASN1Decoder<Password_Name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Password_Name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Password_Name (el: _Element): Password_Name {
    if (!_cached_decoder_for_Password_Name) { _cached_decoder_for_Password_Name = function (el: _Element): Password_Name {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let password!: OCTET_STRING;
    let name!: OCTET_STRING;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(himOperationId)) {
                throw new ASN1Error("Password_Name.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "password": (_el: _Element): void => {
            password = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (password.length < 1 || password.length > 25) {
                throw new ASN1SizeError("Password_Name.password violates SIZE constraint");
            }
        },
        "name": (_el: _Element): void => {
            name = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (name.length < 1 || name.length > 25) {
                throw new ASN1SizeError("Password_Name.name violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Password_Name,
        _extension_additions_list_spec_for_Password_Name,
        _root_component_type_list_2_spec_for_Password_Name,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Password_Name(
        domainID,
        password,
        name,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Password_Name(el);
}

let _cached_encoder_for_Password_Name: $.ASN1Encoder<Password_Name> | null = null;

/**
 * @summary Encodes a(n) Password_Name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password_Name, encoded as an ASN.1 Element.
 */
export
function _encode_Password_Name (value: Password_Name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Password_Name) { _cached_encoder_for_Password_Name = function (value: Password_Name, elGetter: $.ASN1Encoder<Password_Name>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.password, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.name, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Password_Name(value, elGetter);
}


/* eslint-enable */
