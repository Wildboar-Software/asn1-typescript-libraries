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
 * @summary CVCertificateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CVCertificateAttributes ::= SEQUENCE {
 *     value                           ObjectValue { CIO-OPAQUE.&Type},
 *     certificationAuthorityReference OCTET STRING OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CVCertificateAttributes {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<_Element>,
        /**
         * @summary `certificationAuthorityReference`.
         * @public
         * @readonly
         */
        readonly certificationAuthorityReference: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CVCertificateAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CVCertificateAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CVCertificateAttributes`.
     * @returns {CVCertificateAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CVCertificateAttributes)]: (CVCertificateAttributes)[_K] }): CVCertificateAttributes {
        return new CVCertificateAttributes(_o.value, _o.certificationAuthorityReference, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CVCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("certificationAuthorityReference", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CVCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CVCertificateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CVCertificateAttributes: $.ASN1Decoder<CVCertificateAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CVCertificateAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CVCertificateAttributes (el: _Element): CVCertificateAttributes {
    if (!_cached_decoder_for_CVCertificateAttributes) { _cached_decoder_for_CVCertificateAttributes = function (el: _Element): CVCertificateAttributes {
    let value!: ObjectValue<_Element>;
    let certificationAuthorityReference: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(_el); },
        "certificationAuthorityReference": (_el: _Element): void => { certificationAuthorityReference = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CVCertificateAttributes,
        _extension_additions_list_spec_for_CVCertificateAttributes,
        _root_component_type_list_2_spec_for_CVCertificateAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CVCertificateAttributes(
        value,
        certificationAuthorityReference,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CVCertificateAttributes(el);
}

let _cached_encoder_for_CVCertificateAttributes: $.ASN1Encoder<CVCertificateAttributes> | null = null;

/**
 * @summary Encodes a(n) CVCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CVCertificateAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CVCertificateAttributes (value: CVCertificateAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CVCertificateAttributes) { _cached_encoder_for_CVCertificateAttributes = function (value: CVCertificateAttributes, elGetter: $.ASN1Encoder<CVCertificateAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<_Element>($._encodeAny)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.certificationAuthorityReference === undefined) ? undefined : $._encodeOctetString(value.certificationAuthorityReference, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CVCertificateAttributes(value, elGetter);
}


/* eslint-enable */
