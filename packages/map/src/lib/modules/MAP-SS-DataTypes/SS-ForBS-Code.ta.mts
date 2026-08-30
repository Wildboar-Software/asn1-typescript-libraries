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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
// export { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";


/**
 * @summary SS_ForBS_Code
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-ForBS-Code ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     basicService    BasicServiceCode    OPTIONAL,
 *     ...,
 *     longFTN-Supported    [4]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SS_ForBS_Code {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceCode>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SS_ForBS_Code
     * @description
     * 
     * This takes an `object` and converts it to a `SS_ForBS_Code`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_ForBS_Code`.
     * @returns {SS_ForBS_Code}
     */
    public static _from_object (_o: { [_K in keyof (SS_ForBS_Code)]: (SS_ForBS_Code)[_K] }): SS_ForBS_Code {
        return new SS_ForBS_Code(_o.ss_Code, _o.basicService, _o.longFTN_Supported, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_ForBS_Code
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_ForBS_Code: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_ForBS_Code
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_ForBS_Code: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_ForBS_Code
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_ForBS_Code: $.ComponentSpec[] = [
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

let _cached_decoder_for_SS_ForBS_Code: $.ASN1Decoder<SS_ForBS_Code> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_ForBS_Code
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_ForBS_Code (el: _Element): SS_ForBS_Code {
    if (!_cached_decoder_for_SS_ForBS_Code) { _cached_decoder_for_SS_ForBS_Code = function (el: _Element): SS_ForBS_Code {
    let ss_Code!: SS_Code;
    let basicService: OPTIONAL<BasicServiceCode>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicServiceCode(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_ForBS_Code,
        _extension_additions_list_spec_for_SS_ForBS_Code,
        _root_component_type_list_2_spec_for_SS_ForBS_Code,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_ForBS_Code(
        ss_Code,
        basicService,
        longFTN_Supported,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_ForBS_Code(el);
}

let _cached_encoder_for_SS_ForBS_Code: $.ASN1Encoder<SS_ForBS_Code> | null = null;

/**
 * @summary Encodes a(n) SS_ForBS_Code into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_ForBS_Code, encoded as an ASN.1 Element.
 */
export
function _encode_SS_ForBS_Code (value: SS_ForBS_Code, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_ForBS_Code) { _cached_encoder_for_SS_ForBS_Code = function (value: SS_ForBS_Code, elGetter: $.ASN1Encoder<SS_ForBS_Code>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_BasicServiceCode(value.basicService, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_ForBS_Code(value, elGetter);
}


/* eslint-enable */
