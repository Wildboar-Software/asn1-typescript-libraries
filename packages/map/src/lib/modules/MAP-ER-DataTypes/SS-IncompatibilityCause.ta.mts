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
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
// export { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";


/**
 * @summary SS_IncompatibilityCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-IncompatibilityCause ::= SEQUENCE {
 *     ss-Code    [1] SS-Code    OPTIONAL,
 *     basicService    BasicServiceCode    OPTIONAL,
 *     ss-Status    [4] SS-Status    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SS_IncompatibilityCause {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: OPTIONAL<SS_Code>,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceCode>,
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
     * @summary Restructures an object into a SS_IncompatibilityCause
     * @description
     * 
     * This takes an `object` and converts it to a `SS_IncompatibilityCause`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_IncompatibilityCause`.
     * @returns {SS_IncompatibilityCause}
     */
    public static _from_object (_o: { [_K in keyof (SS_IncompatibilityCause)]: (SS_IncompatibilityCause)[_K] }): SS_IncompatibilityCause {
        return new SS_IncompatibilityCause(_o.ss_Code, _o.basicService, _o.ss_Status, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_IncompatibilityCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_IncompatibilityCause: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_IncompatibilityCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_IncompatibilityCause: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_IncompatibilityCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_IncompatibilityCause: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SS_IncompatibilityCause: $.ASN1Decoder<SS_IncompatibilityCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_IncompatibilityCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_IncompatibilityCause (el: _Element): SS_IncompatibilityCause {
    if (!_cached_decoder_for_SS_IncompatibilityCause) { _cached_decoder_for_SS_IncompatibilityCause = function (el: _Element): SS_IncompatibilityCause {
    let ss_Code: OPTIONAL<SS_Code>;
    let basicService: OPTIONAL<BasicServiceCode>;
    let ss_Status: OPTIONAL<SS_Status>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicServiceCode(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<SS_Status>(() => _decode_SS_Status)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_IncompatibilityCause,
        _extension_additions_list_spec_for_SS_IncompatibilityCause,
        _root_component_type_list_2_spec_for_SS_IncompatibilityCause,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_IncompatibilityCause(
        ss_Code,
        basicService,
        ss_Status,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_IncompatibilityCause(el);
}

let _cached_encoder_for_SS_IncompatibilityCause: $.ASN1Encoder<SS_IncompatibilityCause> | null = null;

/**
 * @summary Encodes a(n) SS_IncompatibilityCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_IncompatibilityCause, encoded as an ASN.1 Element.
 */
export
function _encode_SS_IncompatibilityCause (value: SS_IncompatibilityCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_IncompatibilityCause) { _cached_encoder_for_SS_IncompatibilityCause = function (value: SS_IncompatibilityCause, elGetter: $.ASN1Encoder<SS_IncompatibilityCause>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Code === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER)),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_BasicServiceCode(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SS_Status, $.BER)(value.ss_Status, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_IncompatibilityCause(value, elGetter);
}


/* eslint-enable */
