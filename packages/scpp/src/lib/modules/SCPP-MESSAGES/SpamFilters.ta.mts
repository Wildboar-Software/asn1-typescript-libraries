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



/**
 * @summary SpamFilters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpamFilters ::= SEQUENCE {
 *   filterID    INTEGER(0..128),
 *   filterName  IA5String(SIZE (1..512))
 * }
 * ```
 * 
 * @class
 */
export
class SpamFilters {
    constructor (
        /**
         * @summary `filterID`.
         * @public
         * @readonly
         */
        readonly filterID: INTEGER,
        /**
         * @summary `filterName`.
         * @public
         * @readonly
         */
        readonly filterName: IA5String
    ) {}

    /**
     * @summary Restructures an object into a SpamFilters
     * @description
     * 
     * This takes an `object` and converts it to a `SpamFilters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpamFilters`.
     * @returns {SpamFilters}
     */
    public static _from_object (_o: { [_K in keyof (SpamFilters)]: (SpamFilters)[_K] }): SpamFilters {
        return new SpamFilters(_o.filterID, _o.filterName);
    }


}

/**
 * @summary The Leading Root Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpamFilters: $.ComponentSpec[] = [
    new $.ComponentSpec("filterID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("filterName", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpamFilters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpamFilters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpamFilters: $.ASN1Decoder<SpamFilters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpamFilters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpamFilters (el: _Element): SpamFilters {
    if (!_cached_decoder_for_SpamFilters) { _cached_decoder_for_SpamFilters = function (el: _Element): SpamFilters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SpamFilters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "filterID";
    sequence[1].name = "filterName";
    let filterID!: INTEGER;
    let filterName!: IA5String;
    filterID = $._decodeInteger(sequence[0]);
    filterName = $._decodeIA5String(sequence[1]);
    return new SpamFilters(
        filterID,
        filterName,

    );
}; }
    return _cached_decoder_for_SpamFilters(el);
}

let _cached_encoder_for_SpamFilters: $.ASN1Encoder<SpamFilters> | null = null;

/**
 * @summary Encodes a(n) SpamFilters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpamFilters, encoded as an ASN.1 Element.
 */
export
function _encode_SpamFilters (value: SpamFilters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpamFilters) { _cached_encoder_for_SpamFilters = function (value: SpamFilters, elGetter: $.ASN1Encoder<SpamFilters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.filterID, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.filterName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpamFilters(value, elGetter);
}


/* eslint-enable */
