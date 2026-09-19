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
import { TranslatedChargingData, _decode_TranslatedChargingData, _encode_TranslatedChargingData } from "../TS33128Payloads/TranslatedChargingData.ta.mjs";
// export { TranslatedChargingData, _decode_TranslatedChargingData, _encode_TranslatedChargingData } from "../TS33128Payloads/TranslatedChargingData.ta.mjs";


/**
 * @summary TranslatedChargingDataInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslatedChargingDataInfo ::= SEQUENCE
 * 
 * {
 *     translatedChargingData  [1] TranslatedChargingData
 * }
 * ```
 * 
 * @class
 */
export
class TranslatedChargingDataInfo {
    constructor (
        /**
         * @summary `translatedChargingData`.
         * @public
         * @readonly
         */
        readonly translatedChargingData: TranslatedChargingData
    ) {}

    /**
     * @summary Restructures an object into a TranslatedChargingDataInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TranslatedChargingDataInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TranslatedChargingDataInfo`.
     * @returns {TranslatedChargingDataInfo}
     */
    public static _from_object (_o: { [_K in keyof (TranslatedChargingDataInfo)]: (TranslatedChargingDataInfo)[_K] }): TranslatedChargingDataInfo {
        return new TranslatedChargingDataInfo(_o.translatedChargingData);
    }


}

/**
 * @summary The Leading Root Component Types of TranslatedChargingDataInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TranslatedChargingDataInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("translatedChargingData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TranslatedChargingDataInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TranslatedChargingDataInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TranslatedChargingDataInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TranslatedChargingDataInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TranslatedChargingDataInfo: $.ASN1Decoder<TranslatedChargingDataInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TranslatedChargingDataInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TranslatedChargingDataInfo (el: _Element): TranslatedChargingDataInfo {
    if (!_cached_decoder_for_TranslatedChargingDataInfo) { _cached_decoder_for_TranslatedChargingDataInfo = function (el: _Element): TranslatedChargingDataInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("TranslatedChargingDataInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "translatedChargingData";
    let translatedChargingData!: TranslatedChargingData;
    translatedChargingData = $._decode_implicit<TranslatedChargingData>(() => _decode_TranslatedChargingData)(sequence[0]);
    return new TranslatedChargingDataInfo(
        translatedChargingData,

    );
}; }
    return _cached_decoder_for_TranslatedChargingDataInfo(el);
}

let _cached_encoder_for_TranslatedChargingDataInfo: $.ASN1Encoder<TranslatedChargingDataInfo> | null = null;

/**
 * @summary Encodes a(n) TranslatedChargingDataInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TranslatedChargingDataInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TranslatedChargingDataInfo (value: TranslatedChargingDataInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TranslatedChargingDataInfo) { _cached_encoder_for_TranslatedChargingDataInfo = function (value: TranslatedChargingDataInfo, elGetter: $.ASN1Encoder<TranslatedChargingDataInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TranslatedChargingData, $.BER)(value.translatedChargingData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TranslatedChargingDataInfo(value, elGetter);
}


/* eslint-enable */
