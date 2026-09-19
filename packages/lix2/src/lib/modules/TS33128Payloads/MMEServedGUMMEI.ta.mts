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
import { PLMNSupportList, _decode_PLMNSupportList, _encode_PLMNSupportList } from "../TS33128Payloads/PLMNSupportList.ta.mjs";
// export { PLMNSupportList, _decode_PLMNSupportList, _encode_PLMNSupportList } from "../TS33128Payloads/PLMNSupportList.ta.mjs";


/**
 * @summary MMEServedGUMMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEServedGUMMEI ::= SEQUENCE
 * {
 *     servedPLMNs [1] PLMNSupportList
 * }
 * ```
 * 
 * @class
 */
export
class MMEServedGUMMEI {
    constructor (
        /**
         * @summary `servedPLMNs`.
         * @public
         * @readonly
         */
        readonly servedPLMNs: PLMNSupportList
    ) {}

    /**
     * @summary Restructures an object into a MMEServedGUMMEI
     * @description
     * 
     * This takes an `object` and converts it to a `MMEServedGUMMEI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEServedGUMMEI`.
     * @returns {MMEServedGUMMEI}
     */
    public static _from_object (_o: { [_K in keyof (MMEServedGUMMEI)]: (MMEServedGUMMEI)[_K] }): MMEServedGUMMEI {
        return new MMEServedGUMMEI(_o.servedPLMNs);
    }


}

/**
 * @summary The Leading Root Component Types of MMEServedGUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEServedGUMMEI: $.ComponentSpec[] = [
    new $.ComponentSpec("servedPLMNs", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MMEServedGUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEServedGUMMEI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEServedGUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEServedGUMMEI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEServedGUMMEI: $.ASN1Decoder<MMEServedGUMMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEServedGUMMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEServedGUMMEI (el: _Element): MMEServedGUMMEI {
    if (!_cached_decoder_for_MMEServedGUMMEI) { _cached_decoder_for_MMEServedGUMMEI = function (el: _Element): MMEServedGUMMEI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MMEServedGUMMEI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "servedPLMNs";
    let servedPLMNs!: PLMNSupportList;
    servedPLMNs = $._decode_implicit<PLMNSupportList>(() => _decode_PLMNSupportList)(sequence[0]);
    return new MMEServedGUMMEI(
        servedPLMNs,

    );
}; }
    return _cached_decoder_for_MMEServedGUMMEI(el);
}

let _cached_encoder_for_MMEServedGUMMEI: $.ASN1Encoder<MMEServedGUMMEI> | null = null;

/**
 * @summary Encodes a(n) MMEServedGUMMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEServedGUMMEI, encoded as an ASN.1 Element.
 */
export
function _encode_MMEServedGUMMEI (value: MMEServedGUMMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEServedGUMMEI) { _cached_encoder_for_MMEServedGUMMEI = function (value: MMEServedGUMMEI, elGetter: $.ASN1Encoder<MMEServedGUMMEI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNSupportList, $.BER)(value.servedPLMNs, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEServedGUMMEI(value, elGetter);
}


/* eslint-enable */
