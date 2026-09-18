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
import { AttrId, _decode_AttrId, _encode_AttrId } from "../ISO9041-VTP/AttrId.ta.mjs";
// export { AttrId, _decode_AttrId, _encode_AttrId } from "../ISO9041-VTP/AttrId.ta.mjs";
import { AttrExtent, _decode_AttrExtent, _encode_AttrExtent } from "../ISO9041-VTP/AttrExtent.ta.mjs";
// export { AttrExtent, _decode_AttrExtent, _encode_AttrExtent } from "../ISO9041-VTP/AttrExtent.ta.mjs";


/**
 * @summary DOupdate_writeAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-writeAttr ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DOupdate_writeAttr {
    constructor (
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttrId,
        /**
         * @summary `attributeExtent`.
         * @public
         * @readonly
         */
        readonly attributeExtent: AttrExtent
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_writeAttr
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_writeAttr`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_writeAttr`.
     * @returns {DOupdate_writeAttr}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_writeAttr)]: (DOupdate_writeAttr)[_K] }): DOupdate_writeAttr {
        return new DOupdate_writeAttr(_o.attributeId, _o.attributeExtent);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_writeAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_writeAttr: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeId", false, $.hasAnyTag),
    new $.ComponentSpec("attributeExtent", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DOupdate_writeAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_writeAttr: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_writeAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_writeAttr: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_writeAttr: $.ASN1Decoder<DOupdate_writeAttr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_writeAttr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_writeAttr (el: _Element): DOupdate_writeAttr {
    if (!_cached_decoder_for_DOupdate_writeAttr) { _cached_decoder_for_DOupdate_writeAttr = function (el: _Element): DOupdate_writeAttr {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DOupdate-writeAttr contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeId";
    sequence[1].name = "attributeExtent";
    let attributeId!: AttrId;
    let attributeExtent!: AttrExtent;
    attributeId = _decode_AttrId(sequence[0]);
    attributeExtent = _decode_AttrExtent(sequence[1]);
    return new DOupdate_writeAttr(
        attributeId,
        attributeExtent,

    );
}; }
    return _cached_decoder_for_DOupdate_writeAttr(el);
}

let _cached_encoder_for_DOupdate_writeAttr: $.ASN1Encoder<DOupdate_writeAttr> | null = null;

/**
 * @summary Encodes a(n) DOupdate_writeAttr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_writeAttr, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_writeAttr (value: DOupdate_writeAttr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_writeAttr) { _cached_encoder_for_DOupdate_writeAttr = function (value: DOupdate_writeAttr, elGetter: $.ASN1Encoder<DOupdate_writeAttr>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttrId(value.attributeId, $.BER),
            /* REQUIRED   */ _encode_AttrExtent(value.attributeExtent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_writeAttr(value, elGetter);
}


/* eslint-enable */
