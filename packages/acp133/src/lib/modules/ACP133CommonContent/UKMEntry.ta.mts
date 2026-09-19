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
import { PairwiseTag, _decode_PairwiseTag, _encode_PairwiseTag } from "../ACP133CommonContent/PairwiseTag.ta.mjs";
// export { PairwiseTag, _decode_PairwiseTag, _encode_PairwiseTag } from "../ACP133CommonContent/PairwiseTag.ta.mjs";


/**
 * @summary UKMEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UKMEntry ::= SEQUENCE {
 *     tag PairwiseTag,
 *     ukm OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class UKMEntry {
    constructor (
        /**
         * @summary `tag`.
         * @public
         * @readonly
         */
        readonly tag: PairwiseTag,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a UKMEntry
     * @description
     * 
     * This takes an `object` and converts it to a `UKMEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UKMEntry`.
     * @returns {UKMEntry}
     */
    public static _from_object (_o: { [_K in keyof (UKMEntry)]: (UKMEntry)[_K] }): UKMEntry {
        return new UKMEntry(_o.tag, _o.ukm);
    }


}

/**
 * @summary The Leading Root Component Types of UKMEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UKMEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("tag", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ukm", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of UKMEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UKMEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UKMEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UKMEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UKMEntry: $.ASN1Decoder<UKMEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UKMEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UKMEntry (el: _Element): UKMEntry {
    if (!_cached_decoder_for_UKMEntry) { _cached_decoder_for_UKMEntry = function (el: _Element): UKMEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UKMEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tag";
    sequence[1].name = "ukm";
    let tag!: PairwiseTag;
    let ukm!: OCTET_STRING;
    tag = _decode_PairwiseTag(sequence[0]);
    ukm = $._decodeOctetString(sequence[1]);
    return new UKMEntry(
        tag,
        ukm,

    );
}; }
    return _cached_decoder_for_UKMEntry(el);
}

let _cached_encoder_for_UKMEntry: $.ASN1Encoder<UKMEntry> | null = null;

/**
 * @summary Encodes a(n) UKMEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UKMEntry, encoded as an ASN.1 Element.
 */
export
function _encode_UKMEntry (value: UKMEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UKMEntry) { _cached_encoder_for_UKMEntry = function (value: UKMEntry, elGetter: $.ASN1Encoder<UKMEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PairwiseTag(value.tag, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.ukm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UKMEntry(value, elGetter);
}


/* eslint-enable */
