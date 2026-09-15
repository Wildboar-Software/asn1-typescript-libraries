/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
// export { CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";
// export { AllowedAlgorithms } from "../CryptographicInformationFramework/AllowedAlgorithms.osa.mjs";


/**
 * @summary GenericKeyAttributes
 * @description
 * 
 * Type-specific attributes for a key whose algorithm is identified by an object
 * in `AllowedAlgorithms` (open; filled by profiles/PICS). ISO/IEC 7816-15:2016
 * §8.2.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericKeyAttributes ::= SEQUENCE {
 *     keyType CIO-ALGORITHM.&objectIdentifier({AllowedAlgorithms}),
 *     keyAttr CIO-ALGORITHM.&Parameters({AllowedAlgorithms}{@keyType})
 * }
 * ```
 * 
 * @class
 */
export
class GenericKeyAttributes {
    constructor (
        /**
         * @summary `keyType`.
         * @description
         * Algorithm object identifier from `AllowedAlgorithms`. ISO/IEC
         * 7816-15:2016 §8.2.13.
         * @public
         * @readonly
         */
        readonly keyType: OBJECT_IDENTIFIER,
        /**
         * @summary `keyAttr`.
         * @description
         * Parameters for that algorithm. ISO/IEC 7816-15:2016 §8.2.13.
         * @public
         * @readonly
         */
        readonly keyAttr: _Element
    ) {}

    /**
     * @summary Restructures an object into a GenericKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `GenericKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericKeyAttributes`.
     * @returns {GenericKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (GenericKeyAttributes)]: (GenericKeyAttributes)[_K] }): GenericKeyAttributes {
        return new GenericKeyAttributes(_o.keyType, _o.keyAttr);
    }


}

/**
 * @summary The Leading Root Component Types of GenericKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("keyType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("keyAttr", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GenericKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericKeyAttributes: $.ASN1Decoder<GenericKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericKeyAttributes (el: _Element): GenericKeyAttributes {
    if (!_cached_decoder_for_GenericKeyAttributes) { _cached_decoder_for_GenericKeyAttributes = function (el: _Element): GenericKeyAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericKeyAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "keyType";
    sequence[1].name = "keyAttr";
    let keyType!: OBJECT_IDENTIFIER;
    let keyAttr!: _Element;
    keyType = $._decodeObjectIdentifier(sequence[0]);
    keyAttr = $._decodeAny(sequence[1]);
    return new GenericKeyAttributes(
        keyType,
        keyAttr,

    );
}; }
    return _cached_decoder_for_GenericKeyAttributes(el);
}

let _cached_encoder_for_GenericKeyAttributes: $.ASN1Encoder<GenericKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) GenericKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_GenericKeyAttributes (value: GenericKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericKeyAttributes) { _cached_encoder_for_GenericKeyAttributes = function (value: GenericKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.keyType, $.BER),
            /* REQUIRED   */ $._encodeAny(value.keyAttr, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericKeyAttributes(value, elGetter);
}


/* eslint-enable */
