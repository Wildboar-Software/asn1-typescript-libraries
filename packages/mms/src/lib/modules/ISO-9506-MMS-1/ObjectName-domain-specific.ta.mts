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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ObjectName_domain_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectName-domain-specific ::= SEQUENCE {
 *     domainID Identifier,
 *     itemID Identifier
 * }
 * ```
 * 
 * @class
 */
export
class ObjectName_domain_specific {
    constructor (
        /**
         * @summary `domainID`.
         * @public
         * @readonly
         */
        readonly domainID: Identifier,
        /**
         * @summary `itemID`.
         * @public
         * @readonly
         */
        readonly itemID: Identifier
    ) {}

    /**
     * @summary Restructures an object into a ObjectName_domain_specific
     * @description
     * 
     * This takes an `object` and converts it to a `ObjectName_domain_specific`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectName_domain_specific`.
     * @returns {ObjectName_domain_specific}
     */
    public static _from_object (_o: { [_K in keyof (ObjectName_domain_specific)]: (ObjectName_domain_specific)[_K] }): ObjectName_domain_specific {
        return new ObjectName_domain_specific(_o.domainID, _o.itemID);
    }


}

/**
 * @summary The Leading Root Component Types of ObjectName_domain_specific
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObjectName_domain_specific: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", false, $.hasAnyTag),
    new $.ComponentSpec("itemID", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ObjectName_domain_specific
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObjectName_domain_specific: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObjectName_domain_specific
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObjectName_domain_specific: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObjectName_domain_specific: $.ASN1Decoder<ObjectName_domain_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectName_domain_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectName_domain_specific (el: _Element): ObjectName_domain_specific {
    if (!_cached_decoder_for_ObjectName_domain_specific) { _cached_decoder_for_ObjectName_domain_specific = function (el: _Element): ObjectName_domain_specific {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ObjectName-domain-specific contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainID";
    sequence[1].name = "itemID";
    let domainID!: Identifier;
    let itemID!: Identifier;
    domainID = _decode_Identifier(sequence[0]);
    itemID = _decode_Identifier(sequence[1]);
    return new ObjectName_domain_specific(
        domainID,
        itemID,

    );
}; }
    return _cached_decoder_for_ObjectName_domain_specific(el);
}

let _cached_encoder_for_ObjectName_domain_specific: $.ASN1Encoder<ObjectName_domain_specific> | null = null;

/**
 * @summary Encodes a(n) ObjectName_domain_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectName_domain_specific, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectName_domain_specific (value: ObjectName_domain_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectName_domain_specific) { _cached_encoder_for_ObjectName_domain_specific = function (value: ObjectName_domain_specific, elGetter: $.ASN1Encoder<ObjectName_domain_specific>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.domainID, $.BER),
            /* REQUIRED   */ _encode_Identifier(value.itemID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObjectName_domain_specific(value, elGetter);
}


/* eslint-enable */
