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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION LogRcAMessageContent */
/**
 * @summary LogRcAMessageContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRcAMessageContent ::= SEQUENCE {
 *   sessionID        OCTET STRING(SIZE (10)),
 *   logResponseInfo  OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LogRcAMessageContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `logResponseInfo`.
         * @public
         * @readonly
         */
        readonly logResponseInfo: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a LogRcAMessageContent
     * @description
     * 
     * This takes an `object` and converts it to a `LogRcAMessageContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogRcAMessageContent`.
     * @returns {LogRcAMessageContent}
     */
    public static _from_object (_o: { [_K in keyof (LogRcAMessageContent)]: (LogRcAMessageContent)[_K] }): LogRcAMessageContent {
        return new LogRcAMessageContent(_o.sessionID, _o.logResponseInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogRcAMessageContent */
/**
 * @summary The Leading Root Component Types of LogRcAMessageContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogRcAMessageContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("logResponseInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogRcAMessageContent */
/**
 * @summary The Trailing Root Component Types of LogRcAMessageContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogRcAMessageContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogRcAMessageContent */
/**
 * @summary The Extension Addition Component Types of LogRcAMessageContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogRcAMessageContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRcAMessageContent */
let _cached_decoder_for_LogRcAMessageContent: $.ASN1Decoder<LogRcAMessageContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _decode_LogRcAMessageContent */
/**
 * @summary Decodes an ASN.1 element into a(n) LogRcAMessageContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogRcAMessageContent} The decoded data structure.
 */
export
function _decode_LogRcAMessageContent (el: _Element) {
    if (!_cached_decoder_for_LogRcAMessageContent) { _cached_decoder_for_LogRcAMessageContent = function (el: _Element): LogRcAMessageContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sessionID!: OCTET_STRING;
    let logResponseInfo: OPTIONAL<OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sessionID": (_el: _Element): void => { sessionID = $._decodeOctetString(_el); },
        "logResponseInfo": (_el: _Element): void => { logResponseInfo = $._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogRcAMessageContent,
        _extension_additions_list_spec_for_LogRcAMessageContent,
        _root_component_type_list_2_spec_for_LogRcAMessageContent,
        undefined,
    );
    return new LogRcAMessageContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        sessionID,
        logResponseInfo
    );
}; }
    return _cached_decoder_for_LogRcAMessageContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRcAMessageContent */
let _cached_encoder_for_LogRcAMessageContent: $.ASN1Encoder<LogRcAMessageContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRcAMessageContent */

/* START_OF_SYMBOL_DEFINITION _encode_LogRcAMessageContent */
/**
 * @summary Encodes a(n) LogRcAMessageContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRcAMessageContent, encoded as an ASN.1 Element.
 */
export
function _encode_LogRcAMessageContent (value: LogRcAMessageContent, elGetter: $.ASN1Encoder<LogRcAMessageContent>) {
    if (!_cached_encoder_for_LogRcAMessageContent) { _cached_encoder_for_LogRcAMessageContent = function (value: LogRcAMessageContent, elGetter: $.ASN1Encoder<LogRcAMessageContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* IF_ABSENT  */ ((value.logResponseInfo === undefined) ? undefined : $._encodeOctetString(value.logResponseInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogRcAMessageContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogRcAMessageContent */

/* eslint-enable */
