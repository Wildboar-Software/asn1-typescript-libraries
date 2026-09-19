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



/**
 * @summary DistributionExtensionField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionExtensionField ::= SEQUENCE {
 *        dist-type       OBJECT IDENTIFIER,
 *        dist-value      ANY --DEFINED BY dist-type-- }
 * ```
 * 
 * @class
 */
export
class DistributionExtensionField {
    constructor (
        /**
         * @summary `dist_type`.
         * @public
         * @readonly
         */
        readonly dist_type: OBJECT_IDENTIFIER,
// FIXME: readonly dist-value: AnyType
    ) {}

    /**
     * @summary Restructures an object into a DistributionExtensionField
     * @description
     * 
     * This takes an `object` and converts it to a `DistributionExtensionField`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionExtensionField`.
     * @returns {DistributionExtensionField}
     */
    public static _from_object (_o: { [_K in keyof (DistributionExtensionField)]: (DistributionExtensionField)[_K] }): DistributionExtensionField {
        return new DistributionExtensionField(_o.dist_type, _o.);
    }


}

/**
 * @summary The Leading Root Component Types of DistributionExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DistributionExtensionField: $.ComponentSpec[] = [
    new $.ComponentSpec("dist-type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("dist-value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DistributionExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DistributionExtensionField: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DistributionExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DistributionExtensionField: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DistributionExtensionField: $.ASN1Decoder<DistributionExtensionField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionExtensionField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionExtensionField (el: _Element): DistributionExtensionField {
    if (!_cached_decoder_for_DistributionExtensionField) { _cached_decoder_for_DistributionExtensionField = function (el: _Element): DistributionExtensionField {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DistributionExtensionField contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dist-type";
    sequence[1].name = "dist-value";
    let dist_type!: OBJECT_IDENTIFIER;
    let dist_value!: /* FIXME: dist-value COULD_NOT_COMPILE_TYPE */;
    dist_type = $._decodeObjectIdentifier(sequence[0]);
    dist_value = $._decodeAny(sequence[1]);
    return new DistributionExtensionField(
        dist_type,
        dist_value,

    );
}; }
    return _cached_decoder_for_DistributionExtensionField(el);
}

let _cached_encoder_for_DistributionExtensionField: $.ASN1Encoder<DistributionExtensionField> | null = null;

/**
 * @summary Encodes a(n) DistributionExtensionField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionExtensionField, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionExtensionField (value: DistributionExtensionField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionExtensionField) { _cached_encoder_for_DistributionExtensionField = function (value: DistributionExtensionField, elGetter: $.ASN1Encoder<DistributionExtensionField>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.dist_type, $.BER),
            /* REQUIRED   */ $._encodeAny(value.dist_value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DistributionExtensionField(value, elGetter);
}


/* eslint-enable */
