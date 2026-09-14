/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";


/**
 * @summary PGPCertificateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGPCertificateAttributes ::= SEQUENCE {
 *     value   ObjectValue { CIO-OPAQUE.&Type },
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PGPCertificateAttributes {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PGPCertificateAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PGPCertificateAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PGPCertificateAttributes`.
     * @returns {PGPCertificateAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PGPCertificateAttributes)]: (PGPCertificateAttributes)[_K] }): PGPCertificateAttributes {
        return new PGPCertificateAttributes(_o.value, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PGPCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PGPCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PGPCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PGPCertificateAttributes: $.ASN1Decoder<PGPCertificateAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PGPCertificateAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PGPCertificateAttributes (el: _Element): PGPCertificateAttributes {
    if (!_cached_decoder_for_PGPCertificateAttributes) { _cached_decoder_for_PGPCertificateAttributes = function (el: _Element): PGPCertificateAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PGPCertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    let value!: ObjectValue<_Element>;
    value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(sequence[0]);
    return new PGPCertificateAttributes(
        value,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_PGPCertificateAttributes(el);
}

let _cached_encoder_for_PGPCertificateAttributes: $.ASN1Encoder<PGPCertificateAttributes> | null = null;

/**
 * @summary Encodes a(n) PGPCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGPCertificateAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PGPCertificateAttributes (value: PGPCertificateAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PGPCertificateAttributes) { _cached_encoder_for_PGPCertificateAttributes = function (value: PGPCertificateAttributes, elGetter: $.ASN1Encoder<PGPCertificateAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<_Element>($._encodeAny)(value.value, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PGPCertificateAttributes(value, elGetter);
}


/* eslint-enable */
