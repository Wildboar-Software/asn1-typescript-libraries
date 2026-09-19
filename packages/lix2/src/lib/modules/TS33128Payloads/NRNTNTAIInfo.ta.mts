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
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary NRNTNTAIInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRNTNTAIInfo ::= SEQUENCE
 * {
 *     servingPLMN                   [1] PLMNID,
 *     tACListNRNTN                  [2] SEQUENCE (SIZE(1..MAX)) OF TAC,
 *     uELocationDerivedNTNTAC       [3] TAC OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NRNTNTAIInfo {
    constructor (
        /**
         * @summary `servingPLMN`.
         * @public
         * @readonly
         */
        readonly servingPLMN: PLMNID,
        /**
         * @summary `tACListNRNTN`.
         * @public
         * @readonly
         */
        readonly tACListNRNTN: TAC[],
        /**
         * @summary `uELocationDerivedNTNTAC`.
         * @public
         * @readonly
         */
        readonly uELocationDerivedNTNTAC: OPTIONAL<TAC>
    ) {}

    /**
     * @summary Restructures an object into a NRNTNTAIInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NRNTNTAIInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NRNTNTAIInfo`.
     * @returns {NRNTNTAIInfo}
     */
    public static _from_object (_o: { [_K in keyof (NRNTNTAIInfo)]: (NRNTNTAIInfo)[_K] }): NRNTNTAIInfo {
        return new NRNTNTAIInfo(_o.servingPLMN, _o.tACListNRNTN, _o.uELocationDerivedNTNTAC);
    }


}

/**
 * @summary The Leading Root Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("servingPLMN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tACListNRNTN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uELocationDerivedNTNTAC", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NRNTNTAIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NRNTNTAIInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NRNTNTAIInfo: $.ASN1Decoder<NRNTNTAIInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRNTNTAIInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NRNTNTAIInfo (el: _Element): NRNTNTAIInfo {
    if (!_cached_decoder_for_NRNTNTAIInfo) { _cached_decoder_for_NRNTNTAIInfo = function (el: _Element): NRNTNTAIInfo {
    let servingPLMN!: PLMNID;
    let tACListNRNTN!: TAC[];
    let uELocationDerivedNTNTAC: OPTIONAL<TAC>;
    const callbacks: $.DecodingMap = {
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "tACListNRNTN": (_el: _Element): void => { tACListNRNTN = $._decode_implicit<TAC[]>(() => $._decodeSequenceOf<TAC>(() => _decode_TAC))(_el); },
        "uELocationDerivedNTNTAC": (_el: _Element): void => { uELocationDerivedNTNTAC = $._decode_implicit<TAC>(() => _decode_TAC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NRNTNTAIInfo,
        _extension_additions_list_spec_for_NRNTNTAIInfo,
        _root_component_type_list_2_spec_for_NRNTNTAIInfo,
        undefined,
    );
    return new NRNTNTAIInfo(
        servingPLMN,
        tACListNRNTN,
        uELocationDerivedNTNTAC
    );
}; }
    return _cached_decoder_for_NRNTNTAIInfo(el);
}

let _cached_encoder_for_NRNTNTAIInfo: $.ASN1Encoder<NRNTNTAIInfo> | null = null;

/**
 * @summary Encodes a(n) NRNTNTAIInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRNTNTAIInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NRNTNTAIInfo (value: NRNTNTAIInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NRNTNTAIInfo) { _cached_encoder_for_NRNTNTAIInfo = function (value: NRNTNTAIInfo, elGetter: $.ASN1Encoder<NRNTNTAIInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER), $.BER)(value.tACListNRNTN, $.BER),
            /* IF_ABSENT  */ ((value.uELocationDerivedNTNTAC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TAC, $.BER)(value.uELocationDerivedNTNTAC, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NRNTNTAIInfo(value, elGetter);
}


/* eslint-enable */
