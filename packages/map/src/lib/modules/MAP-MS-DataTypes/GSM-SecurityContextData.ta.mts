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
import { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
import { Cksn, _decode_Cksn, _encode_Cksn } from "../MAP-MS-DataTypes/Cksn.ta.mjs";


/**
 * @summary GSM_SecurityContextData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSM-SecurityContextData ::= SEQUENCE {
 *     kc    Kc,
 *     cksn    Cksn,
 *     ... }
 * ```
 * 
 * @class
 */
export
class GSM_SecurityContextData {
    constructor (
        /**
         * @summary `kc`.
         * @public
         * @readonly
         */
        readonly kc: Kc,
        /**
         * @summary `cksn`.
         * @public
         * @readonly
         */
        readonly cksn: Cksn,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GSM_SecurityContextData
     * @description
     * 
     * This takes an `object` and converts it to a `GSM_SecurityContextData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSM_SecurityContextData`.
     * @returns {GSM_SecurityContextData}
     */
    public static _from_object (_o: { [_K in keyof (GSM_SecurityContextData)]: (GSM_SecurityContextData)[_K] }): GSM_SecurityContextData {
        return new GSM_SecurityContextData(_o.kc, _o.cksn, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GSM_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSM_SecurityContextData: $.ComponentSpec[] = [
    new $.ComponentSpec("kc", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cksn", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of GSM_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSM_SecurityContextData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSM_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSM_SecurityContextData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GSM_SecurityContextData: $.ASN1Decoder<GSM_SecurityContextData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSM_SecurityContextData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSM_SecurityContextData (el: _Element): GSM_SecurityContextData {
    if (!_cached_decoder_for_GSM_SecurityContextData) { _cached_decoder_for_GSM_SecurityContextData = function (el: _Element): GSM_SecurityContextData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GSM-SecurityContextData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "kc";
    sequence[1].name = "cksn";
    let kc!: Kc;
    let cksn!: Cksn;
    kc = _decode_Kc(sequence[0]);
    cksn = _decode_Cksn(sequence[1]);
    return new GSM_SecurityContextData(
        kc,
        cksn,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_GSM_SecurityContextData(el);
}

let _cached_encoder_for_GSM_SecurityContextData: $.ASN1Encoder<GSM_SecurityContextData> | null = null;

/**
 * @summary Encodes a(n) GSM_SecurityContextData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSM_SecurityContextData, encoded as an ASN.1 Element.
 */
export
function _encode_GSM_SecurityContextData (value: GSM_SecurityContextData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSM_SecurityContextData) { _cached_encoder_for_GSM_SecurityContextData = function (value: GSM_SecurityContextData, elGetter: $.ASN1Encoder<GSM_SecurityContextData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Kc(value.kc, $.BER),
            /* REQUIRED   */ _encode_Cksn(value.cksn, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GSM_SecurityContextData(value, elGetter);
}


/* eslint-enable */
