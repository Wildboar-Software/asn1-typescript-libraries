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
import { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";
import { AllowedOidDOs } from "../CryptographicInformationFramework/AllowedOidDOs.osa.mjs";
// export { AllowedOidDOs } from "../CryptographicInformationFramework/AllowedOidDOs.osa.mjs";


/**
 * @summary OidDOAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OidDOAttributes ::= SEQUENCE {
 *     id      CIO-OPAQUE.&id ({AllowedOidDOs}),
 *     value   CIO-OPAQUE.&Type ({AllowedOidDOs}{@id})
 * }
 * ```
 * 
 * @class
 */
export
class OidDOAttributes {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a OidDOAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `OidDOAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OidDOAttributes`.
     * @returns {OidDOAttributes}
     */
    public static _from_object (_o: { [_K in keyof (OidDOAttributes)]: (OidDOAttributes)[_K] }): OidDOAttributes {
        return new OidDOAttributes(_o.id, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of OidDOAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OidDOAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of OidDOAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OidDOAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OidDOAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OidDOAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OidDOAttributes: $.ASN1Decoder<OidDOAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OidDOAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OidDOAttributes (el: _Element): OidDOAttributes {
    if (!_cached_decoder_for_OidDOAttributes) { _cached_decoder_for_OidDOAttributes = function (el: _Element): OidDOAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OidDOAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "value";
    let id!: OBJECT_IDENTIFIER;
    let value!: _Element;
    id = $._decodeObjectIdentifier(sequence[0]);
    value = $._decodeAny(sequence[1]);
    return new OidDOAttributes(
        id,
        value,

    );
}; }
    return _cached_decoder_for_OidDOAttributes(el);
}

let _cached_encoder_for_OidDOAttributes: $.ASN1Encoder<OidDOAttributes> | null = null;

/**
 * @summary Encodes a(n) OidDOAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidDOAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_OidDOAttributes (value: OidDOAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OidDOAttributes) { _cached_encoder_for_OidDOAttributes = function (value: OidDOAttributes, elGetter: $.ASN1Encoder<OidDOAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.id, $.BER),
            /* REQUIRED   */ $._encodeAny(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OidDOAttributes(value, elGetter);
}


/* eslint-enable */
