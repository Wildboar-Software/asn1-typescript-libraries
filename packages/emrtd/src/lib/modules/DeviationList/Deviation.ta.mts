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
import { DeviationDocuments, _decode_DeviationDocuments, _encode_DeviationDocuments } from "../DeviationList/DeviationDocuments.ta.mjs";
// export { DeviationDocuments, _decode_DeviationDocuments, _encode_DeviationDocuments } from "../DeviationList/DeviationDocuments.ta.mjs";
import { DeviationDescription, _decode_DeviationDescription, _encode_DeviationDescription } from "../DeviationList/DeviationDescription.ta.mjs";
// export { DeviationDescription, _decode_DeviationDescription, _encode_DeviationDescription } from "../DeviationList/DeviationDescription.ta.mjs";


/**
 * @summary Deviation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Deviation ::= SEQUENCE{
 *     documents DeviationDocuments,
 *     descriptions SET OF DeviationDescription
 * }
 * ```
 * 
 * @class
 */
export
class Deviation {
    constructor (
        /**
         * @summary `documents`.
         * @public
         * @readonly
         */
        readonly documents: DeviationDocuments,
        /**
         * @summary `descriptions`.
         * @public
         * @readonly
         */
        readonly descriptions: DeviationDescription[]
    ) {}

    /**
     * @summary Restructures an object into a Deviation
     * @description
     * 
     * This takes an `object` and converts it to a `Deviation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Deviation`.
     * @returns {Deviation}
     */
    public static _from_object (_o: { [_K in keyof (Deviation)]: (Deviation)[_K] }): Deviation {
        return new Deviation(_o.documents, _o.descriptions);
    }


}

/**
 * @summary The Leading Root Component Types of Deviation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Deviation: $.ComponentSpec[] = [
    new $.ComponentSpec("documents", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("descriptions", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Deviation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Deviation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Deviation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Deviation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Deviation: $.ASN1Decoder<Deviation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Deviation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Deviation (el: _Element): Deviation {
    if (!_cached_decoder_for_Deviation) { _cached_decoder_for_Deviation = function (el: _Element): Deviation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Deviation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "documents";
    sequence[1].name = "descriptions";
    let documents!: DeviationDocuments;
    let descriptions!: DeviationDescription[];
    documents = _decode_DeviationDocuments(sequence[0]);
    descriptions = $._decodeSetOf<DeviationDescription>(() => _decode_DeviationDescription)(sequence[1]);
    return new Deviation(
        documents,
        descriptions,

    );
}; }
    return _cached_decoder_for_Deviation(el);
}

let _cached_encoder_for_Deviation: $.ASN1Encoder<Deviation> | null = null;

/**
 * @summary Encodes a(n) Deviation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Deviation, encoded as an ASN.1 Element.
 */
export
function _encode_Deviation (value: Deviation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Deviation) { _cached_encoder_for_Deviation = function (value: Deviation, elGetter: $.ASN1Encoder<Deviation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviationDocuments(value.documents, $.BER),
            /* REQUIRED   */ $._encodeSetOf<DeviationDescription>(() => _encode_DeviationDescription, $.BER)(value.descriptions, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Deviation(value, elGetter);
}


/* eslint-enable */
