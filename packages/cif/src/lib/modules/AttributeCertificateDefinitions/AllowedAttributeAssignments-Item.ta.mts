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
import { AllowedAttributeAssignments_Item_attributes_Item, _decode_AllowedAttributeAssignments_Item_attributes_Item, _encode_AllowedAttributeAssignments_Item_attributes_Item } from "../AttributeCertificateDefinitions/AllowedAttributeAssignments-Item-attributes-Item.ta.mjs";
// export { AllowedAttributeAssignments_Item_attributes_Item, _decode_AllowedAttributeAssignments_Item_attributes_Item, _encode_AllowedAttributeAssignments_Item_attributes_Item } from "../AttributeCertificateDefinitions/AllowedAttributeAssignments-Item-attributes-Item.ta.mjs";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";


/**
 * @summary AllowedAttributeAssignments_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedAttributeAssignments-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AllowedAttributeAssignments_Item {
    constructor (
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AllowedAttributeAssignments_Item_attributes_Item[],
        /**
         * @summary `holderDomain`.
         * @public
         * @readonly
         */
        readonly holderDomain: GeneralName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AllowedAttributeAssignments_Item
     * @description
     * 
     * This takes an `object` and converts it to a `AllowedAttributeAssignments_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllowedAttributeAssignments_Item`.
     * @returns {AllowedAttributeAssignments_Item}
     */
    public static _from_object (_o: { [_K in keyof (AllowedAttributeAssignments_Item)]: (AllowedAttributeAssignments_Item)[_K] }): AllowedAttributeAssignments_Item {
        return new AllowedAttributeAssignments_Item(_o.attributes, _o.holderDomain, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AllowedAttributeAssignments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("holderDomain", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AllowedAttributeAssignments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllowedAttributeAssignments_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllowedAttributeAssignments_Item: $.ASN1Decoder<AllowedAttributeAssignments_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedAttributeAssignments_Item (el: _Element): AllowedAttributeAssignments_Item {
    if (!_cached_decoder_for_AllowedAttributeAssignments_Item) { _cached_decoder_for_AllowedAttributeAssignments_Item = function (el: _Element): AllowedAttributeAssignments_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AllowedAttributeAssignments-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributes";
    sequence[1].name = "holderDomain";
    let attributes!: AllowedAttributeAssignments_Item_attributes_Item[];
    let holderDomain!: GeneralName;
    attributes = $._decode_implicit<AllowedAttributeAssignments_Item_attributes_Item[]>(() => $._decodeSetOf<AllowedAttributeAssignments_Item_attributes_Item>(() => _decode_AllowedAttributeAssignments_Item_attributes_Item))(sequence[0]);
    holderDomain = $._decode_explicit<GeneralName>(() => _decode_GeneralName)(sequence[1]);
    return new AllowedAttributeAssignments_Item(
        attributes,
        holderDomain,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AllowedAttributeAssignments_Item(el);
}

let _cached_encoder_for_AllowedAttributeAssignments_Item: $.ASN1Encoder<AllowedAttributeAssignments_Item> | null = null;

/**
 * @summary Encodes a(n) AllowedAttributeAssignments_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedAttributeAssignments_Item (value: AllowedAttributeAssignments_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedAttributeAssignments_Item) { _cached_encoder_for_AllowedAttributeAssignments_Item = function (value: AllowedAttributeAssignments_Item, elGetter: $.ASN1Encoder<AllowedAttributeAssignments_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<AllowedAttributeAssignments_Item_attributes_Item>(() => _encode_AllowedAttributeAssignments_Item_attributes_Item, $.BER), $.BER)(value.attributes, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GeneralName, $.BER)(value.holderDomain, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AllowedAttributeAssignments_Item(value, elGetter);
}


/* eslint-enable */
