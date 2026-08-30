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
import { USSD_String, _decode_USSD_String, _encode_USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";


/**
 * @summary USSD_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USSD-Res ::= SEQUENCE {
 *     ussd-DataCodingScheme    USSD-DataCodingScheme,
 *     ussd-String    USSD-String,
 *     ...}
 * ```
 * 
 * @class
 */
export
class USSD_Res {
    constructor (
        /**
         * @summary `ussd_DataCodingScheme`.
         * @public
         * @readonly
         */
        readonly ussd_DataCodingScheme: USSD_DataCodingScheme,
        /**
         * @summary `ussd_String`.
         * @public
         * @readonly
         */
        readonly ussd_String: USSD_String,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a USSD_Res
     * @description
     * 
     * This takes an `object` and converts it to a `USSD_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `USSD_Res`.
     * @returns {USSD_Res}
     */
    public static _from_object (_o: { [_K in keyof (USSD_Res)]: (USSD_Res)[_K] }): USSD_Res {
        return new USSD_Res(_o.ussd_DataCodingScheme, _o.ussd_String, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of USSD_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_USSD_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("ussd-DataCodingScheme", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("ussd-String", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of USSD_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_USSD_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of USSD_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_USSD_Res: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_USSD_Res: $.ASN1Decoder<USSD_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) USSD_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_USSD_Res (el: _Element): USSD_Res {
    if (!_cached_decoder_for_USSD_Res) { _cached_decoder_for_USSD_Res = function (el: _Element): USSD_Res {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("USSD-Res contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ussd-DataCodingScheme";
    sequence[1].name = "ussd-String";
    let ussd_DataCodingScheme!: USSD_DataCodingScheme;
    let ussd_String!: USSD_String;
    ussd_DataCodingScheme = _decode_USSD_DataCodingScheme(sequence[0]);
    ussd_String = _decode_USSD_String(sequence[1]);
    return new USSD_Res(
        ussd_DataCodingScheme,
        ussd_String,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_USSD_Res(el);
}

let _cached_encoder_for_USSD_Res: $.ASN1Encoder<USSD_Res> | null = null;

/**
 * @summary Encodes a(n) USSD_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The USSD_Res, encoded as an ASN.1 Element.
 */
export
function _encode_USSD_Res (value: USSD_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_USSD_Res) { _cached_encoder_for_USSD_Res = function (value: USSD_Res, elGetter: $.ASN1Encoder<USSD_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_USSD_DataCodingScheme(value.ussd_DataCodingScheme, $.BER),
            /* REQUIRED   */ _encode_USSD_String(value.ussd_String, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_USSD_Res(value, elGetter);
}


/* eslint-enable */
