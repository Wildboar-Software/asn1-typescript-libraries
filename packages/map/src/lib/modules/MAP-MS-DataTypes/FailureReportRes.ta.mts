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
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary FailureReportRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureReportRes ::= SEQUENCE {
 *     ggsn-Address    [0] GSN-Address    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class FailureReportRes {
    constructor (
        /**
         * @summary `ggsn_Address`.
         * @public
         * @readonly
         */
        readonly ggsn_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FailureReportRes
     * @description
     * 
     * This takes an `object` and converts it to a `FailureReportRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FailureReportRes`.
     * @returns {FailureReportRes}
     */
    public static _from_object (_o: { [_K in keyof (FailureReportRes)]: (FailureReportRes)[_K] }): FailureReportRes {
        return new FailureReportRes(_o.ggsn_Address, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FailureReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FailureReportRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ggsn-Address", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of FailureReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FailureReportRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FailureReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FailureReportRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FailureReportRes: $.ASN1Decoder<FailureReportRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailureReportRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailureReportRes (el: _Element): FailureReportRes {
    if (!_cached_decoder_for_FailureReportRes) { _cached_decoder_for_FailureReportRes = function (el: _Element): FailureReportRes {
    let ggsn_Address: OPTIONAL<GSN_Address>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ggsn-Address": (_el: _Element): void => { ggsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FailureReportRes,
        _extension_additions_list_spec_for_FailureReportRes,
        _root_component_type_list_2_spec_for_FailureReportRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FailureReportRes(
        ggsn_Address,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FailureReportRes(el);
}

let _cached_encoder_for_FailureReportRes: $.ASN1Encoder<FailureReportRes> | null = null;

/**
 * @summary Encodes a(n) FailureReportRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureReportRes, encoded as an ASN.1 Element.
 */
export
function _encode_FailureReportRes (value: FailureReportRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailureReportRes) { _cached_encoder_for_FailureReportRes = function (value: FailureReportRes, elGetter: $.ASN1Encoder<FailureReportRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ggsn_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GSN_Address, $.BER)(value.ggsn_Address, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FailureReportRes(value, elGetter);
}


/* eslint-enable */
