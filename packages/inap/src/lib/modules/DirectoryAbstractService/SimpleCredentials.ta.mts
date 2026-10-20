/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { SimpleCredentials_validity, _decode_SimpleCredentials_validity, _encode_SimpleCredentials_validity } from "../DirectoryAbstractService/SimpleCredentials-validity.ta.mjs";
// export { SimpleCredentials_validity, _decode_SimpleCredentials_validity, _encode_SimpleCredentials_validity } from "../DirectoryAbstractService/SimpleCredentials-validity.ta.mjs";
import { SimpleCredentials_password, _decode_SimpleCredentials_password, _encode_SimpleCredentials_password } from "../DirectoryAbstractService/SimpleCredentials-password.ta.mjs";
// export { SimpleCredentials_password, _decode_SimpleCredentials_password, _encode_SimpleCredentials_password } from "../DirectoryAbstractService/SimpleCredentials-password.ta.mjs";


/**
 * @summary SimpleCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCredentials ::= SEQUENCE {
 *   name      [0]  DistinguishedName,
 *   validity
 *     [1]  SET {time1    [0]  CHOICE {utc  UTCTime,
 *                                     gt   GeneralizedTime} OPTIONAL,
 *               time2    [1]  CHOICE {utc  UTCTime,
 *                                     gt   GeneralizedTime} OPTIONAL,
 *               random1  [2]  BIT STRING OPTIONAL,
 *               random2  [3]  BIT STRING OPTIONAL},
 *   password
 *     [2]  CHOICE {unprotected  OCTET STRING,
 *                  protected    SIGNATURE{OCTET STRING}} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SimpleCredentials {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: DistinguishedName;
    /**
     * @summary `validity`.
     * @public
     * @readonly
     */
    readonly validity: SimpleCredentials_validity;
    /**
     * @summary `password`.
     * @public
     * @readonly
     */
    readonly password: OPTIONAL<SimpleCredentials_password>;

    constructor (
        name: DistinguishedName,
        validity: SimpleCredentials_validity,
        password: OPTIONAL<SimpleCredentials_password>
    ) {
        this.name = name;
        this.validity = validity;
        this.password = password;
    }

    /**
     * @summary Restructures an object into a SimpleCredentials
     * @description
     * 
     * This takes an `object` and converts it to a `SimpleCredentials`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SimpleCredentials`.
     * @returns {SimpleCredentials}
     */
    public static _from_object (_o: { [_K in keyof (SimpleCredentials)]: (SimpleCredentials)[_K] }): SimpleCredentials {
        return new SimpleCredentials(_o.name, _o.validity, _o.password);
    }


}

/**
 * @summary The Leading Root Component Types of SimpleCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SimpleCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("validity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SimpleCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SimpleCredentials: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SimpleCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SimpleCredentials: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SimpleCredentials: $.ASN1Decoder<SimpleCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleCredentials (el: _Element): SimpleCredentials {
    if (!_cached_decoder_for_SimpleCredentials) { _cached_decoder_for_SimpleCredentials = function (el: _Element): SimpleCredentials {
    let name!: DistinguishedName;
    let validity!: SimpleCredentials_validity;
    let password: OPTIONAL<SimpleCredentials_password>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "validity": (_el: _Element): void => { validity = $._decode_explicit<SimpleCredentials_validity>(() => _decode_SimpleCredentials_validity)(_el); },
        "password": (_el: _Element): void => { password = $._decode_explicit<SimpleCredentials_password>(() => _decode_SimpleCredentials_password)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SimpleCredentials,
        _extension_additions_list_spec_for_SimpleCredentials,
        _root_component_type_list_2_spec_for_SimpleCredentials,
        undefined,
    );
    return new SimpleCredentials(
        name,
        validity,
        password
    );
}; }
    return _cached_decoder_for_SimpleCredentials(el);
}

let _cached_encoder_for_SimpleCredentials: $.ASN1Encoder<SimpleCredentials> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleCredentials (value: SimpleCredentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleCredentials) { _cached_encoder_for_SimpleCredentials = function (value: SimpleCredentials, elGetter: $.ASN1Encoder<SimpleCredentials>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.name, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SimpleCredentials_validity, $.BER)(value.validity, $.BER));
    if (value.password !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_SimpleCredentials_password, $.BER)(value.password, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SimpleCredentials(value, elGetter);
}


/* eslint-enable */
