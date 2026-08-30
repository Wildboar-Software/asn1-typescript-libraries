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
import { USSD_DataCodingScheme, _decode_USSD_DataCodingScheme, _encode_USSD_DataCodingScheme } from "../MAP-SS-DataTypes/USSD-DataCodingScheme.ta.mjs";
import { LCSCodewordString, _decode_LCSCodewordString, _encode_LCSCodewordString } from "../MAP-LCS-DataTypes/LCSCodewordString.ta.mjs";


/**
 * @summary LCSCodeword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSCodeword ::= SEQUENCE {
 *     dataCodingScheme    [0] USSD-DataCodingScheme,
 *     lcsCodewordString    [1] LCSCodewordString,
 *     ...}
 * ```
 * 
 * @class
 */
export
class LCSCodeword {
    constructor (
        /**
         * @summary `dataCodingScheme`.
         * @public
         * @readonly
         */
        readonly dataCodingScheme: USSD_DataCodingScheme,
        /**
         * @summary `lcsCodewordString`.
         * @public
         * @readonly
         */
        readonly lcsCodewordString: LCSCodewordString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCSCodeword
     * @description
     * 
     * This takes an `object` and converts it to a `LCSCodeword`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSCodeword`.
     * @returns {LCSCodeword}
     */
    public static _from_object (_o: { [_K in keyof (LCSCodeword)]: (LCSCodeword)[_K] }): LCSCodeword {
        return new LCSCodeword(_o.dataCodingScheme, _o.lcsCodewordString, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSCodeword
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSCodeword: $.ComponentSpec[] = [
    new $.ComponentSpec("dataCodingScheme", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lcsCodewordString", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LCSCodeword
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSCodeword: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSCodeword
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSCodeword: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSCodeword: $.ASN1Decoder<LCSCodeword> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSCodeword
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSCodeword (el: _Element): LCSCodeword {
    if (!_cached_decoder_for_LCSCodeword) { _cached_decoder_for_LCSCodeword = function (el: _Element): LCSCodeword {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LCSCodeword contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dataCodingScheme";
    sequence[1].name = "lcsCodewordString";
    let dataCodingScheme!: USSD_DataCodingScheme;
    let lcsCodewordString!: LCSCodewordString;
    dataCodingScheme = $._decode_implicit<USSD_DataCodingScheme>(() => _decode_USSD_DataCodingScheme)(sequence[0]);
    lcsCodewordString = $._decode_implicit<LCSCodewordString>(() => _decode_LCSCodewordString)(sequence[1]);
    return new LCSCodeword(
        dataCodingScheme,
        lcsCodewordString,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_LCSCodeword(el);
}

let _cached_encoder_for_LCSCodeword: $.ASN1Encoder<LCSCodeword> | null = null;

/**
 * @summary Encodes a(n) LCSCodeword into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSCodeword, encoded as an ASN.1 Element.
 */
export
function _encode_LCSCodeword (value: LCSCodeword, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSCodeword) { _cached_encoder_for_LCSCodeword = function (value: LCSCodeword, elGetter: $.ASN1Encoder<LCSCodeword>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_USSD_DataCodingScheme, $.BER)(value.dataCodingScheme, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LCSCodewordString, $.BER)(value.lcsCodewordString, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCSCodeword(value, elGetter);
}


/* eslint-enable */
