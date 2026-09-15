/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
// export { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";


/**
 * @summary SecretKeyAttributes
 * @description
 * 
 * Algorithm-independent secret key available for various algorithms or for
 * deriving other secret keys. ISO/IEC 7816-15:2016 §8.6.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecretKeyAttributes ::= SEQUENCE {
 *     value       ObjectValue { OCTET STRING },
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class SecretKeyAttributes {
    constructor (
        /**
         * @summary `value`.
         * @description
         * Path to an OCTET STRING or a card-specific secret-key representation
         * (on cards that can perform secret-key ops). ISO/IEC 7816-15:2016
         * §8.6.2.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecretKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `SecretKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecretKeyAttributes`.
     * @returns {SecretKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (SecretKeyAttributes)]: (SecretKeyAttributes)[_K] }): SecretKeyAttributes {
        return new SecretKeyAttributes(_o.value, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecretKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecretKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecretKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecretKeyAttributes: $.ASN1Decoder<SecretKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecretKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecretKeyAttributes (el: _Element): SecretKeyAttributes {
    if (!_cached_decoder_for_SecretKeyAttributes) { _cached_decoder_for_SecretKeyAttributes = function (el: _Element): SecretKeyAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SecretKeyAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    let value!: ObjectValue<OCTET_STRING>;
    value = _get_decoder_for_ObjectValue<OCTET_STRING>($._decodeOctetString)(sequence[0]);
    return new SecretKeyAttributes(
        value,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_SecretKeyAttributes(el);
}

let _cached_encoder_for_SecretKeyAttributes: $.ASN1Encoder<SecretKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) SecretKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_SecretKeyAttributes (value: SecretKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecretKeyAttributes) { _cached_encoder_for_SecretKeyAttributes = function (value: SecretKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<OCTET_STRING>($._encodeOctetString)(value.value, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecretKeyAttributes(value, elGetter);
}


/* eslint-enable */
