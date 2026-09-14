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
import { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";
// export { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";


/**
 * @summary AttributeMappings_Item_typeValueMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeMappings-Item-typeValueMappings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AttributeMappings_Item_typeValueMappings {
    constructor (
        /**
         * @summary `local`.
         * @public
         * @readonly
         */
        readonly local: AttributeTypeAndValue,
        /**
         * @summary `remote`.
         * @public
         * @readonly
         */
        readonly remote: AttributeTypeAndValue,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeMappings_Item_typeValueMappings
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeMappings_Item_typeValueMappings`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMappings_Item_typeValueMappings`.
     * @returns {AttributeMappings_Item_typeValueMappings}
     */
    public static _from_object (_o: { [_K in keyof (AttributeMappings_Item_typeValueMappings)]: (AttributeMappings_Item_typeValueMappings)[_K] }): AttributeMappings_Item_typeValueMappings {
        return new AttributeMappings_Item_typeValueMappings(_o.local, _o.remote, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [
    new $.ComponentSpec("local", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("remote", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeMappings_Item_typeValueMappings: $.ASN1Decoder<AttributeMappings_Item_typeValueMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item_typeValueMappings
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeMappings_Item_typeValueMappings (el: _Element): AttributeMappings_Item_typeValueMappings {
    if (!_cached_decoder_for_AttributeMappings_Item_typeValueMappings) { _cached_decoder_for_AttributeMappings_Item_typeValueMappings = function (el: _Element): AttributeMappings_Item_typeValueMappings {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributeMappings-Item-typeValueMappings contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "local";
    sequence[1].name = "remote";
    let local!: AttributeTypeAndValue;
    let remote!: AttributeTypeAndValue;
    local = $._decode_implicit<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue)(sequence[0]);
    remote = $._decode_implicit<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue)(sequence[1]);
    return new AttributeMappings_Item_typeValueMappings(
        local,
        remote,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AttributeMappings_Item_typeValueMappings(el);
}

let _cached_encoder_for_AttributeMappings_Item_typeValueMappings: $.ASN1Encoder<AttributeMappings_Item_typeValueMappings> | null = null;

/**
 * @summary Encodes a(n) AttributeMappings_Item_typeValueMappings into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item_typeValueMappings, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeMappings_Item_typeValueMappings (value: AttributeMappings_Item_typeValueMappings, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeMappings_Item_typeValueMappings) { _cached_encoder_for_AttributeMappings_Item_typeValueMappings = function (value: AttributeMappings_Item_typeValueMappings, elGetter: $.ASN1Encoder<AttributeMappings_Item_typeValueMappings>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeTypeAndValue, $.BER)(value.local, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeTypeAndValue, $.BER)(value.remote, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeMappings_Item_typeValueMappings(value, elGetter);
}


/* eslint-enable */
