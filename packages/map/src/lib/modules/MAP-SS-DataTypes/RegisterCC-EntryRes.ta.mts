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
import { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";
// export { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";


/**
 * @summary RegisterCC_EntryRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegisterCC-EntryRes ::= SEQUENCE {
 *     ccbs-Feature    [0] CCBS-Feature    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RegisterCC_EntryRes {
    constructor (
        /**
         * @summary `ccbs_Feature`.
         * @public
         * @readonly
         */
        readonly ccbs_Feature: OPTIONAL<CCBS_Feature>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RegisterCC_EntryRes
     * @description
     * 
     * This takes an `object` and converts it to a `RegisterCC_EntryRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegisterCC_EntryRes`.
     * @returns {RegisterCC_EntryRes}
     */
    public static _from_object (_o: { [_K in keyof (RegisterCC_EntryRes)]: (RegisterCC_EntryRes)[_K] }): RegisterCC_EntryRes {
        return new RegisterCC_EntryRes(_o.ccbs_Feature, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RegisterCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegisterCC_EntryRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-Feature", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RegisterCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegisterCC_EntryRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegisterCC_EntryRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegisterCC_EntryRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegisterCC_EntryRes: $.ASN1Decoder<RegisterCC_EntryRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterCC_EntryRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegisterCC_EntryRes (el: _Element): RegisterCC_EntryRes {
    if (!_cached_decoder_for_RegisterCC_EntryRes) { _cached_decoder_for_RegisterCC_EntryRes = function (el: _Element): RegisterCC_EntryRes {
    let ccbs_Feature: OPTIONAL<CCBS_Feature>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ccbs-Feature": (_el: _Element): void => { ccbs_Feature = $._decode_implicit<CCBS_Feature>(() => _decode_CCBS_Feature)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegisterCC_EntryRes,
        _extension_additions_list_spec_for_RegisterCC_EntryRes,
        _root_component_type_list_2_spec_for_RegisterCC_EntryRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RegisterCC_EntryRes(
        ccbs_Feature,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RegisterCC_EntryRes(el);
}

let _cached_encoder_for_RegisterCC_EntryRes: $.ASN1Encoder<RegisterCC_EntryRes> | null = null;

/**
 * @summary Encodes a(n) RegisterCC_EntryRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterCC_EntryRes, encoded as an ASN.1 Element.
 */
export
function _encode_RegisterCC_EntryRes (value: RegisterCC_EntryRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegisterCC_EntryRes) { _cached_encoder_for_RegisterCC_EntryRes = function (value: RegisterCC_EntryRes, elGetter: $.ASN1Encoder<RegisterCC_EntryRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ccbs_Feature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CCBS_Feature, $.BER)(value.ccbs_Feature, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegisterCC_EntryRes(value, elGetter);
}


/* eslint-enable */
