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
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";
// export { AllowedCertificates } from "../CryptographicInformationFramework/AllowedCertificates.osa.mjs";


/**
 * @summary GenericCertificateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericCertificateAttributes ::= SEQUENCE {
 *     certType CIO-OPAQUE.&id({AllowedCertificates}),
 *     certAttr CIO-OPAQUE.&Type({AllowedCertificates}{@certType})
 * }
 * ```
 * 
 * @class
 */
export
class GenericCertificateAttributes {
    constructor (
        /**
         * @summary `certType`.
         * @public
         * @readonly
         */
        readonly certType: OBJECT_IDENTIFIER,
        /**
         * @summary `certAttr`.
         * @public
         * @readonly
         */
        readonly certAttr: _Element
    ) {}

    /**
     * @summary Restructures an object into a GenericCertificateAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `GenericCertificateAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericCertificateAttributes`.
     * @returns {GenericCertificateAttributes}
     */
    public static _from_object (_o: { [_K in keyof (GenericCertificateAttributes)]: (GenericCertificateAttributes)[_K] }): GenericCertificateAttributes {
        return new GenericCertificateAttributes(_o.certType, _o.certAttr);
    }


}

/**
 * @summary The Leading Root Component Types of GenericCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("certType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("certAttr", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GenericCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericCertificateAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericCertificateAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericCertificateAttributes: $.ASN1Decoder<GenericCertificateAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericCertificateAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericCertificateAttributes (el: _Element): GenericCertificateAttributes {
    if (!_cached_decoder_for_GenericCertificateAttributes) { _cached_decoder_for_GenericCertificateAttributes = function (el: _Element): GenericCertificateAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericCertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certType";
    sequence[1].name = "certAttr";
    let certType!: OBJECT_IDENTIFIER;
    let certAttr!: _Element;
    certType = $._decodeObjectIdentifier(sequence[0]);
    certAttr = $._decodeAny(sequence[1]);
    return new GenericCertificateAttributes(
        certType,
        certAttr,

    );
}; }
    return _cached_decoder_for_GenericCertificateAttributes(el);
}

let _cached_encoder_for_GenericCertificateAttributes: $.ASN1Encoder<GenericCertificateAttributes> | null = null;

/**
 * @summary Encodes a(n) GenericCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericCertificateAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_GenericCertificateAttributes (value: GenericCertificateAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericCertificateAttributes) { _cached_encoder_for_GenericCertificateAttributes = function (value: GenericCertificateAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.certType, $.BER),
            /* REQUIRED   */ $._encodeAny(value.certAttr, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericCertificateAttributes(value, elGetter);
}


/* eslint-enable */
