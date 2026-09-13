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
import { DfrEntryAttributes, _decode_DfrEntryAttributes, _encode_DfrEntryAttributes } from "../DFRAbstractService/DfrEntryAttributes.ta.mjs";
// export { DfrEntryAttributes, _decode_DfrEntryAttributes, _encode_DfrEntryAttributes } from "../DFRAbstractService/DfrEntryAttributes.ta.mjs";
import { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";
// export { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";


/**
 * @summary EntryInformation_attr_and_dor_to_content
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformation-attr-and-dor-to-content ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EntryInformation_attr_and_dor_to_content {
    constructor (
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: DfrEntryAttributes,
        /**
         * @summary `dor_to_content`.
         * @public
         * @readonly
         */
        readonly dor_to_content: DOR
    ) {}

    /**
     * @summary Restructures an object into a EntryInformation_attr_and_dor_to_content
     * @description
     * 
     * This takes an `object` and converts it to a `EntryInformation_attr_and_dor_to_content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformation_attr_and_dor_to_content`.
     * @returns {EntryInformation_attr_and_dor_to_content}
     */
    public static _from_object (_o: { [_K in keyof (EntryInformation_attr_and_dor_to_content)]: (EntryInformation_attr_and_dor_to_content)[_K] }): EntryInformation_attr_and_dor_to_content {
        return new EntryInformation_attr_and_dor_to_content(_o.attributes, _o.dor_to_content);
    }


}

/**
 * @summary The Leading Root Component Types of EntryInformation_attr_and_dor_to_content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryInformation_attr_and_dor_to_content: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dor-to-content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntryInformation_attr_and_dor_to_content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryInformation_attr_and_dor_to_content: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryInformation_attr_and_dor_to_content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryInformation_attr_and_dor_to_content: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryInformation_attr_and_dor_to_content: $.ASN1Decoder<EntryInformation_attr_and_dor_to_content> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformation_attr_and_dor_to_content
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryInformation_attr_and_dor_to_content (el: _Element): EntryInformation_attr_and_dor_to_content {
    if (!_cached_decoder_for_EntryInformation_attr_and_dor_to_content) { _cached_decoder_for_EntryInformation_attr_and_dor_to_content = function (el: _Element): EntryInformation_attr_and_dor_to_content {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EntryInformation-attr-and-dor-to-content contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributes";
    sequence[1].name = "dor-to-content";
    let attributes!: DfrEntryAttributes;
    let dor_to_content!: DOR;
    attributes = $._decode_implicit<DfrEntryAttributes>(() => _decode_DfrEntryAttributes)(sequence[0]);
    dor_to_content = $._decode_implicit<DOR>(() => _decode_DOR)(sequence[1]);
    return new EntryInformation_attr_and_dor_to_content(
        attributes,
        dor_to_content,

    );
}; }
    return _cached_decoder_for_EntryInformation_attr_and_dor_to_content(el);
}

let _cached_encoder_for_EntryInformation_attr_and_dor_to_content: $.ASN1Encoder<EntryInformation_attr_and_dor_to_content> | null = null;

/**
 * @summary Encodes a(n) EntryInformation_attr_and_dor_to_content into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformation_attr_and_dor_to_content, encoded as an ASN.1 Element.
 */
export
function _encode_EntryInformation_attr_and_dor_to_content (value: EntryInformation_attr_and_dor_to_content, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryInformation_attr_and_dor_to_content) { _cached_encoder_for_EntryInformation_attr_and_dor_to_content = function (value: EntryInformation_attr_and_dor_to_content, elGetter: $.ASN1Encoder<EntryInformation_attr_and_dor_to_content>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DfrEntryAttributes, $.BER)(value.attributes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DOR, $.BER)(value.dor_to_content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryInformation_attr_and_dor_to_content(value, elGetter);
}


/* eslint-enable */
