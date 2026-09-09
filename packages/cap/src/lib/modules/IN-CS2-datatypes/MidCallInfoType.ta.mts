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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary MidCallInfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallInfoType{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   iNServiceControlCodeLow   [0]  Digits{bound},
 *   iNServiceControlCodeHigh  [1]  Digits{bound} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MidCallInfoType {
    constructor (
        /**
         * @summary `iNServiceControlCodeLow`.
         * @public
         * @readonly
         */
        readonly iNServiceControlCodeLow: Digits,
        /**
         * @summary `iNServiceControlCodeHigh`.
         * @public
         * @readonly
         */
        readonly iNServiceControlCodeHigh: OPTIONAL<Digits>
    ) {}

    /**
     * @summary Restructures an object into a MidCallInfoType
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallInfoType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallInfoType`.
     * @returns {MidCallInfoType}
     */
    public static _from_object (_o: { [_K in keyof (MidCallInfoType)]: (MidCallInfoType)[_K] }): MidCallInfoType {
        return new MidCallInfoType(_o.iNServiceControlCodeLow, _o.iNServiceControlCodeHigh);
    }


}

/**
 * @summary The Leading Root Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    new $.ComponentSpec("iNServiceControlCodeLow", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iNServiceControlCodeHigh", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallInfoType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallInfoType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallInfoType: $.ASN1Decoder<MidCallInfoType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallInfoType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallInfoType (el: _Element): MidCallInfoType {
    if (!_cached_decoder_for_MidCallInfoType) { _cached_decoder_for_MidCallInfoType = function (el: _Element): MidCallInfoType {
    let iNServiceControlCodeLow!: Digits;
    let iNServiceControlCodeHigh: OPTIONAL<Digits>;
    const callbacks: $.DecodingMap = {
        "iNServiceControlCodeLow": (_el: _Element): void => { iNServiceControlCodeLow = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "iNServiceControlCodeHigh": (_el: _Element): void => { iNServiceControlCodeHigh = $._decode_implicit<Digits>(() => _decode_Digits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MidCallInfoType,
        _extension_additions_list_spec_for_MidCallInfoType,
        _root_component_type_list_2_spec_for_MidCallInfoType,
        undefined,
    );
    return new MidCallInfoType(
        iNServiceControlCodeLow,
        iNServiceControlCodeHigh
    );
}; }
    return _cached_decoder_for_MidCallInfoType(el);
}

let _cached_encoder_for_MidCallInfoType: $.ASN1Encoder<MidCallInfoType> | null = null;

/**
 * @summary Encodes a(n) MidCallInfoType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallInfoType, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallInfoType (value: MidCallInfoType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallInfoType) { _cached_encoder_for_MidCallInfoType = function (value: MidCallInfoType, elGetter: $.ASN1Encoder<MidCallInfoType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.iNServiceControlCodeLow, $.BER),
            /* IF_ABSENT  */ ((value.iNServiceControlCodeHigh === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER)(value.iNServiceControlCodeHigh, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MidCallInfoType(value, elGetter);
}


/* eslint-enable */
