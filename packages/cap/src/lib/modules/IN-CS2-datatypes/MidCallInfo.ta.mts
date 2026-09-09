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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary MidCallInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallInfo{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   iNServiceControlCode  [0]  Digits{bound}
 * }
 * ```
 * 
 * @class
 */
export
class MidCallInfo {
    constructor (
        /**
         * @summary `iNServiceControlCode`.
         * @public
         * @readonly
         */
        readonly iNServiceControlCode: Digits
    ) {}

    /**
     * @summary Restructures an object into a MidCallInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallInfo`.
     * @returns {MidCallInfo}
     */
    public static _from_object (_o: { [_K in keyof (MidCallInfo)]: (MidCallInfo)[_K] }): MidCallInfo {
        return new MidCallInfo(_o.iNServiceControlCode);
    }


}

/**
 * @summary The Leading Root Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iNServiceControlCode", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallInfo: $.ASN1Decoder<MidCallInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallInfo (el: _Element): MidCallInfo {
    if (!_cached_decoder_for_MidCallInfo) { _cached_decoder_for_MidCallInfo = function (el: _Element): MidCallInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MidCallInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iNServiceControlCode";
    let iNServiceControlCode!: Digits;
    iNServiceControlCode = $._decode_implicit<Digits>(() => _decode_Digits)(sequence[0]);
    return new MidCallInfo(
        iNServiceControlCode,

    );
}; }
    return _cached_decoder_for_MidCallInfo(el);
}

let _cached_encoder_for_MidCallInfo: $.ASN1Encoder<MidCallInfo> | null = null;

/**
 * @summary Encodes a(n) MidCallInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallInfo (value: MidCallInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallInfo) { _cached_encoder_for_MidCallInfo = function (value: MidCallInfo, elGetter: $.ASN1Encoder<MidCallInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.iNServiceControlCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MidCallInfo(value, elGetter);
}


/* eslint-enable */
