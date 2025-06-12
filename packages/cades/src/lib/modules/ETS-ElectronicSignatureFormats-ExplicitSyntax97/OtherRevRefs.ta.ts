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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { OTHER_REVOCATION_REF } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OTHER-REVOCATION-REF.oca.js";
export { OTHER_REVOCATION_REF } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OTHER-REVOCATION-REF.oca.js";


/* START_OF_SYMBOL_DEFINITION OtherRevRefs */
/**
 * @summary OtherRevRefs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRevRefs ::= SEQUENCE {
 *     otherRevRefType     OTHER-REVOCATION-REF.&id,
 *     otherRevRefs        SEQUENCE OF OTHER-REVOCATION-REF.&Type }
 * ```
 * 
 * @class
 */
export
class OtherRevRefs {
    constructor (
        /**
         * @summary `otherRevRefType`.
         * @public
         * @readonly
         */
        readonly otherRevRefType: OBJECT_IDENTIFIER,
        /**
         * @summary `otherRevRefs`.
         * @public
         * @readonly
         */
        readonly otherRevRefs: _Element[]
    ) {}

    /**
     * @summary Restructures an object into a OtherRevRefs
     * @description
     * 
     * This takes an `object` and converts it to a `OtherRevRefs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRevRefs`.
     * @returns {OtherRevRefs}
     */
    public static _from_object (_o: { [_K in keyof (OtherRevRefs)]: (OtherRevRefs)[_K] }): OtherRevRefs {
        return new OtherRevRefs(_o.otherRevRefType, _o.otherRevRefs);
    }


}
/* END_OF_SYMBOL_DEFINITION OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevRefs */
/**
 * @summary The Leading Root Component Types of OtherRevRefs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherRevRefs: $.ComponentSpec[] = [
    new $.ComponentSpec("otherRevRefType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("otherRevRefs", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevRefs */
/**
 * @summary The Trailing Root Component Types of OtherRevRefs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherRevRefs: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevRefs */
/**
 * @summary The Extension Addition Component Types of OtherRevRefs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherRevRefs: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevRefs */
let _cached_decoder_for_OtherRevRefs: $.ASN1Decoder<OtherRevRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRevRefs */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRevRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRevRefs} The decoded data structure.
 */
export
function _decode_OtherRevRefs (el: _Element) {
    if (!_cached_decoder_for_OtherRevRefs) { _cached_decoder_for_OtherRevRefs = function (el: _Element): OtherRevRefs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OtherRevRefs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "otherRevRefType";
    sequence[1].name = "otherRevRefs";
    let otherRevRefType!: OBJECT_IDENTIFIER;
    let otherRevRefs!: _Element[];
    otherRevRefType = $._decodeObjectIdentifier(sequence[0]);
    otherRevRefs = $._decodeSequenceOf<_Element>(() => $._decodeAny)(sequence[1]);
    return new OtherRevRefs(
        otherRevRefType,
        otherRevRefs,

    );
}; }
    return _cached_decoder_for_OtherRevRefs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevRefs */
let _cached_encoder_for_OtherRevRefs: $.ASN1Encoder<OtherRevRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevRefs */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRevRefs */
/**
 * @summary Encodes a(n) OtherRevRefs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRevRefs, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRevRefs (value: OtherRevRefs, elGetter: $.ASN1Encoder<OtherRevRefs>) {
    if (!_cached_encoder_for_OtherRevRefs) { _cached_encoder_for_OtherRevRefs = function (value: OtherRevRefs, elGetter: $.ASN1Encoder<OtherRevRefs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.otherRevRefType, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<_Element>(() => $._encodeAny, $.BER)(value.otherRevRefs, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherRevRefs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRevRefs */

/* eslint-enable */
