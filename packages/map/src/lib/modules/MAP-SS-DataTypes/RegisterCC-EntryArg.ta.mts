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
import { CCBS_Data, _decode_CCBS_Data, _encode_CCBS_Data } from "../MAP-SS-DataTypes/CCBS-Data.ta.mjs";
// export { CCBS_Data, _decode_CCBS_Data, _encode_CCBS_Data } from "../MAP-SS-DataTypes/CCBS-Data.ta.mjs";


/**
 * @summary RegisterCC_EntryArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegisterCC-EntryArg ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     ccbs-Data    [1]    CCBS-Data    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RegisterCC_EntryArg {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `ccbs_Data`.
         * @public
         * @readonly
         */
        readonly ccbs_Data: OPTIONAL<CCBS_Data>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RegisterCC_EntryArg
     * @description
     * 
     * This takes an `object` and converts it to a `RegisterCC_EntryArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegisterCC_EntryArg`.
     * @returns {RegisterCC_EntryArg}
     */
    public static _from_object (_o: { [_K in keyof (RegisterCC_EntryArg)]: (RegisterCC_EntryArg)[_K] }): RegisterCC_EntryArg {
        return new RegisterCC_EntryArg(_o.ss_Code, _o.ccbs_Data, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RegisterCC_EntryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegisterCC_EntryArg: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ccbs-Data", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RegisterCC_EntryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegisterCC_EntryArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegisterCC_EntryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegisterCC_EntryArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegisterCC_EntryArg: $.ASN1Decoder<RegisterCC_EntryArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterCC_EntryArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegisterCC_EntryArg (el: _Element): RegisterCC_EntryArg {
    if (!_cached_decoder_for_RegisterCC_EntryArg) { _cached_decoder_for_RegisterCC_EntryArg = function (el: _Element): RegisterCC_EntryArg {
    let ss_Code!: SS_Code;
    let ccbs_Data: OPTIONAL<CCBS_Data>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "ccbs-Data": (_el: _Element): void => { ccbs_Data = $._decode_implicit<CCBS_Data>(() => _decode_CCBS_Data)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegisterCC_EntryArg,
        _extension_additions_list_spec_for_RegisterCC_EntryArg,
        _root_component_type_list_2_spec_for_RegisterCC_EntryArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RegisterCC_EntryArg(
        ss_Code,
        ccbs_Data,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RegisterCC_EntryArg(el);
}

let _cached_encoder_for_RegisterCC_EntryArg: $.ASN1Encoder<RegisterCC_EntryArg> | null = null;

/**
 * @summary Encodes a(n) RegisterCC_EntryArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterCC_EntryArg, encoded as an ASN.1 Element.
 */
export
function _encode_RegisterCC_EntryArg (value: RegisterCC_EntryArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegisterCC_EntryArg) { _cached_encoder_for_RegisterCC_EntryArg = function (value: RegisterCC_EntryArg, elGetter: $.ASN1Encoder<RegisterCC_EntryArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.ccbs_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CCBS_Data, $.BER)(value.ccbs_Data, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegisterCC_EntryArg(value, elGetter);
}


/* eslint-enable */
