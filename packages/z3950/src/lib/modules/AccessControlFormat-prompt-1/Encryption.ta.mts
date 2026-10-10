/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Encryption
 * @description
 * 
 * Encrypted prompt text or an encrypted answer (ASN1.9.1). No algorithm is
 * named.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Encryption ::= SEQUENCE {
 *     cryptType   [1] IMPLICIT OCTET STRING OPTIONAL,
 *     credential  [2] IMPLICIT OCTET STRING OPTIONAL,
 *     -- Random number, SALT, or other factor
 *     data        [3] IMPLICIT OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Encryption {
    /**
     * @summary `cryptType`.
     * @description
     * 
     * ASN1.9.1 does not define these octets.
     * 
     * @public
     * @readonly
     */
    readonly cryptType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `credential`.
     * @description
     * 
     * A random number, salt, or other factor.
     * 
     * @public
     * @readonly
     */
    readonly credential: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `data`.
     * @description
     * 
     * ASN1.9.1 does not define these octets beyond their place in this
     * sequence.
     * 
     * @public
     * @readonly
     */
    readonly data: OCTET_STRING;

    constructor (
        cryptType: OPTIONAL<OCTET_STRING>,
        credential: OPTIONAL<OCTET_STRING>,
        data: OCTET_STRING
    ) {
        this.cryptType = cryptType;
        this.credential = credential;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a Encryption
     * @description
     * 
     * This takes an `object` and converts it to a `Encryption`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Encryption`.
     * @returns {Encryption}
     */
    public static _from_object (_o: { [_K in keyof (Encryption)]: (Encryption)[_K] }): Encryption {
        return new Encryption(_o.cryptType, _o.credential, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of Encryption
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Encryption: $.ComponentSpec[] = [
    new $.ComponentSpec("cryptType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("credential", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Encryption
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Encryption: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Encryption
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Encryption: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Encryption: $.ASN1Decoder<Encryption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Encryption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Encryption (el: _Element): Encryption {
    if (!_cached_decoder_for_Encryption) { _cached_decoder_for_Encryption = function (el: _Element): Encryption {
    let cryptType: OPTIONAL<OCTET_STRING>;
    let credential: OPTIONAL<OCTET_STRING>;
    let data!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "cryptType": (_el: _Element): void => { cryptType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "credential": (_el: _Element): void => { credential = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "data": (_el: _Element): void => { data = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Encryption,
        _extension_additions_list_spec_for_Encryption,
        _root_component_type_list_2_spec_for_Encryption,
        undefined,
    );
    return new Encryption(
        cryptType,
        credential,
        data
    );
}; }
    return _cached_decoder_for_Encryption(el);
}

let _cached_encoder_for_Encryption: $.ASN1Encoder<Encryption> | null = null;

/**
 * @summary Encodes a(n) Encryption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Encryption, encoded as an ASN.1 Element.
 */
export
function _encode_Encryption (value: Encryption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Encryption) { _cached_encoder_for_Encryption = function (value: Encryption, elGetter: $.ASN1Encoder<Encryption>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.cryptType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cryptType, $.BER);
    }
    if (value.credential !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.credential, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.data, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Encryption(value, elGetter);
}


/* eslint-enable */
