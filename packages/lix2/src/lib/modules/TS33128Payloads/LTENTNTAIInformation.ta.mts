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
import { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
// export { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary LTENTNTAIInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LTENTNTAIInformation ::= SEQUENCE
 * {
 *     pLMN            [1] PLMNID,
 *     tACListInLTENTN [2] TACList,
 *     uETAC           [3] TAC OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LTENTNTAIInformation {
    constructor (
        /**
         * @summary `pLMN`.
         * @public
         * @readonly
         */
        readonly pLMN: PLMNID,
        /**
         * @summary `tACListInLTENTN`.
         * @public
         * @readonly
         */
        readonly tACListInLTENTN: TACList,
        /**
         * @summary `uETAC`.
         * @public
         * @readonly
         */
        readonly uETAC: OPTIONAL<TAC>
    ) {}

    /**
     * @summary Restructures an object into a LTENTNTAIInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LTENTNTAIInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LTENTNTAIInformation`.
     * @returns {LTENTNTAIInformation}
     */
    public static _from_object (_o: { [_K in keyof (LTENTNTAIInformation)]: (LTENTNTAIInformation)[_K] }): LTENTNTAIInformation {
        return new LTENTNTAIInformation(_o.pLMN, _o.tACListInLTENTN, _o.uETAC);
    }


}

/**
 * @summary The Leading Root Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tACListInLTENTN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uETAC", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LTENTNTAIInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LTENTNTAIInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LTENTNTAIInformation: $.ASN1Decoder<LTENTNTAIInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LTENTNTAIInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LTENTNTAIInformation (el: _Element): LTENTNTAIInformation {
    if (!_cached_decoder_for_LTENTNTAIInformation) { _cached_decoder_for_LTENTNTAIInformation = function (el: _Element): LTENTNTAIInformation {
    let pLMN!: PLMNID;
    let tACListInLTENTN!: TACList;
    let uETAC: OPTIONAL<TAC>;
    const callbacks: $.DecodingMap = {
        "pLMN": (_el: _Element): void => { pLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "tACListInLTENTN": (_el: _Element): void => { tACListInLTENTN = $._decode_implicit<TACList>(() => _decode_TACList)(_el); },
        "uETAC": (_el: _Element): void => { uETAC = $._decode_implicit<TAC>(() => _decode_TAC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LTENTNTAIInformation,
        _extension_additions_list_spec_for_LTENTNTAIInformation,
        _root_component_type_list_2_spec_for_LTENTNTAIInformation,
        undefined,
    );
    return new LTENTNTAIInformation(
        pLMN,
        tACListInLTENTN,
        uETAC
    );
}; }
    return _cached_decoder_for_LTENTNTAIInformation(el);
}

let _cached_encoder_for_LTENTNTAIInformation: $.ASN1Encoder<LTENTNTAIInformation> | null = null;

/**
 * @summary Encodes a(n) LTENTNTAIInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LTENTNTAIInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LTENTNTAIInformation (value: LTENTNTAIInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LTENTNTAIInformation) { _cached_encoder_for_LTENTNTAIInformation = function (value: LTENTNTAIInformation, elGetter: $.ASN1Encoder<LTENTNTAIInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TACList, $.BER)(value.tACListInLTENTN, $.BER),
            /* IF_ABSENT  */ ((value.uETAC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TAC, $.BER)(value.uETAC, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LTENTNTAIInformation(value, elGetter);
}


/* eslint-enable */
