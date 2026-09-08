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
import { SpamFilters, _decode_SpamFilters, _encode_SpamFilters } from "../SCPP-MESSAGES/SpamFilters.ta.mjs";
// export { SpamFilters, _decode_SpamFilters, _encode_SpamFilters } from "../SCPP-MESSAGES/SpamFilters.ta.mjs";


/**
 * @summary SupportedSpamFilters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedSpamFilters ::= SEQUENCE {supportedFilter  SEQUENCE OF SpamFilters
 * }
 * ```
 * 
 * @class
 */
export
class SupportedSpamFilters {
    constructor (
        /**
         * @summary `supportedFilter`.
         * @public
         * @readonly
         */
        readonly supportedFilter: SpamFilters[]
    ) {}

    /**
     * @summary Restructures an object into a SupportedSpamFilters
     * @description
     * 
     * This takes an `object` and converts it to a `SupportedSpamFilters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedSpamFilters`.
     * @returns {SupportedSpamFilters}
     */
    public static _from_object (_o: { [_K in keyof (SupportedSpamFilters)]: (SupportedSpamFilters)[_K] }): SupportedSpamFilters {
        return new SupportedSpamFilters(_o.supportedFilter);
    }


}

/**
 * @summary The Leading Root Component Types of SupportedSpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupportedSpamFilters: $.ComponentSpec[] = [
    new $.ComponentSpec("supportedFilter", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SupportedSpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupportedSpamFilters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupportedSpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupportedSpamFilters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SupportedSpamFilters: $.ASN1Decoder<SupportedSpamFilters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedSpamFilters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedSpamFilters (el: _Element): SupportedSpamFilters {
    if (!_cached_decoder_for_SupportedSpamFilters) { _cached_decoder_for_SupportedSpamFilters = function (el: _Element): SupportedSpamFilters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SupportedSpamFilters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "supportedFilter";
    let supportedFilter!: SpamFilters[];
    supportedFilter = $._decodeSequenceOf<SpamFilters>(() => _decode_SpamFilters)(sequence[0]);
    return new SupportedSpamFilters(
        supportedFilter,

    );
}; }
    return _cached_decoder_for_SupportedSpamFilters(el);
}

let _cached_encoder_for_SupportedSpamFilters: $.ASN1Encoder<SupportedSpamFilters> | null = null;

/**
 * @summary Encodes a(n) SupportedSpamFilters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedSpamFilters, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedSpamFilters (value: SupportedSpamFilters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedSpamFilters) { _cached_encoder_for_SupportedSpamFilters = function (value: SupportedSpamFilters, elGetter: $.ASN1Encoder<SupportedSpamFilters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<SpamFilters>(() => _encode_SpamFilters, $.BER)(value.supportedFilter, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SupportedSpamFilters(value, elGetter);
}


/* eslint-enable */
