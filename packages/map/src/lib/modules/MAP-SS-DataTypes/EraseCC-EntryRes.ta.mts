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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
// export { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";


/**
 * @summary EraseCC_EntryRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EraseCC-EntryRes ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     ss-Status    [1] SS-Status    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class EraseCC_EntryRes {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<SS_Status>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EraseCC_EntryRes
     * @description
     * 
     * This takes an `object` and converts it to a `EraseCC_EntryRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EraseCC_EntryRes`.
     * @returns {EraseCC_EntryRes}
     */
    public static _from_object (_o: { [_K in keyof (EraseCC_EntryRes)]: (EraseCC_EntryRes)[_K] }): EraseCC_EntryRes {
        return new EraseCC_EntryRes(_o.ss_Code, _o.ss_Status, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EraseCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EraseCC_EntryRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EraseCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EraseCC_EntryRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EraseCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EraseCC_EntryRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EraseCC_EntryRes: $.ASN1Decoder<EraseCC_EntryRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EraseCC_EntryRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EraseCC_EntryRes (el: _Element): EraseCC_EntryRes {
    if (!_cached_decoder_for_EraseCC_EntryRes) { _cached_decoder_for_EraseCC_EntryRes = function (el: _Element): EraseCC_EntryRes {
    let ss_Code!: SS_Code;
    let ss_Status: OPTIONAL<SS_Status>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<SS_Status>(() => _decode_SS_Status)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EraseCC_EntryRes,
        _extension_additions_list_spec_for_EraseCC_EntryRes,
        _root_component_type_list_2_spec_for_EraseCC_EntryRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EraseCC_EntryRes(
        ss_Code,
        ss_Status,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EraseCC_EntryRes(el);
}

let _cached_encoder_for_EraseCC_EntryRes: $.ASN1Encoder<EraseCC_EntryRes> | null = null;

/**
 * @summary Encodes a(n) EraseCC_EntryRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EraseCC_EntryRes, encoded as an ASN.1 Element.
 */
export
function _encode_EraseCC_EntryRes (value: EraseCC_EntryRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EraseCC_EntryRes) { _cached_encoder_for_EraseCC_EntryRes = function (value: EraseCC_EntryRes, elGetter: $.ASN1Encoder<EraseCC_EntryRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SS_Status, $.BER)(value.ss_Status, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EraseCC_EntryRes(value, elGetter);
}


/* eslint-enable */
