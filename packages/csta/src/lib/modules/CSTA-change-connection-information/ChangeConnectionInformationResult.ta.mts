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
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";


/**
 * @summary ChangeConnectionInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeConnectionInformationResult ::= SEQUENCE
 * {     actualConnectionInfo         ConnectionInformation,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChangeConnectionInformationResult {
    constructor (
        /**
         * @summary `actualConnectionInfo`.
         * @public
         * @readonly
         */
        readonly actualConnectionInfo: ConnectionInformation,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ChangeConnectionInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeConnectionInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeConnectionInformationResult`.
     * @returns {ChangeConnectionInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (ChangeConnectionInformationResult)]: (ChangeConnectionInformationResult)[_K] }): ChangeConnectionInformationResult {
        return new ChangeConnectionInformationResult(_o.actualConnectionInfo, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeConnectionInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeConnectionInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("actualConnectionInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ChangeConnectionInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeConnectionInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeConnectionInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeConnectionInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeConnectionInformationResult: $.ASN1Decoder<ChangeConnectionInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeConnectionInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeConnectionInformationResult (el: _Element): ChangeConnectionInformationResult {
    if (!_cached_decoder_for_ChangeConnectionInformationResult) { _cached_decoder_for_ChangeConnectionInformationResult = function (el: _Element): ChangeConnectionInformationResult {
    let actualConnectionInfo!: ConnectionInformation;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "actualConnectionInfo": (_el: _Element): void => { actualConnectionInfo = _decode_ConnectionInformation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeConnectionInformationResult,
        _extension_additions_list_spec_for_ChangeConnectionInformationResult,
        _root_component_type_list_2_spec_for_ChangeConnectionInformationResult,
        undefined,
    );
    return new ChangeConnectionInformationResult(
        actualConnectionInfo,
        extensions
    );
}; }
    return _cached_decoder_for_ChangeConnectionInformationResult(el);
}

let _cached_encoder_for_ChangeConnectionInformationResult: $.ASN1Encoder<ChangeConnectionInformationResult> | null = null;

/**
 * @summary Encodes a(n) ChangeConnectionInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeConnectionInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeConnectionInformationResult (value: ChangeConnectionInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeConnectionInformationResult) { _cached_encoder_for_ChangeConnectionInformationResult = function (value: ChangeConnectionInformationResult, elGetter: $.ASN1Encoder<ChangeConnectionInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionInformation(value.actualConnectionInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeConnectionInformationResult(value, elGetter);
}


/* eslint-enable */
