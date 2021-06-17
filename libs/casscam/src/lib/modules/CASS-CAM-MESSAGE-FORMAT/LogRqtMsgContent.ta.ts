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



/* START_OF_SYMBOL_DEFINITION LogRqtMsgContent */
/**
 * @summary LogRqtMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRqtMsgContent ::= SEQUENCE {
 *   sessionID       OCTET STRING(SIZE (10)),
 *   -- request = TRUE
 *   logRequest-Req  BOOLEAN(TRUE)
 * }
 * ```
 * 
 * @class
 */
export
class LogRqtMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `logRequest_Req`.
         * @public
         * @readonly
         */
        readonly logRequest_Req: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a LogRqtMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `LogRqtMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogRqtMsgContent`.
     * @returns {LogRqtMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (LogRqtMsgContent)]: (LogRqtMsgContent)[_K] }): LogRqtMsgContent {
        return new LogRqtMsgContent(_o.sessionID, _o.logRequest_Req);
    }


}
/* END_OF_SYMBOL_DEFINITION LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogRqtMsgContent */
/**
 * @summary The Leading Root Component Types of LogRqtMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogRqtMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("logRequest-Req", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogRqtMsgContent */
/**
 * @summary The Trailing Root Component Types of LogRqtMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogRqtMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogRqtMsgContent */
/**
 * @summary The Extension Addition Component Types of LogRqtMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogRqtMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRqtMsgContent */
let _cached_decoder_for_LogRqtMsgContent: $.ASN1Decoder<LogRqtMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_LogRqtMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) LogRqtMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogRqtMsgContent} The decoded data structure.
 */
export
function _decode_LogRqtMsgContent (el: _Element) {
    if (!_cached_decoder_for_LogRqtMsgContent) { _cached_decoder_for_LogRqtMsgContent = function (el: _Element): LogRqtMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LogRqtMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "logRequest-Req";
    let sessionID!: OCTET_STRING;
    let logRequest_Req!: BOOLEAN;
    sessionID = $._decodeOctetString(sequence[0]);
    logRequest_Req = $._decodeBoolean(sequence[1]);
    return new LogRqtMsgContent(
        sessionID,
        logRequest_Req,

    );
}; }
    return _cached_decoder_for_LogRqtMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRqtMsgContent */
let _cached_encoder_for_LogRqtMsgContent: $.ASN1Encoder<LogRqtMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRqtMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_LogRqtMsgContent */
/**
 * @summary Encodes a(n) LogRqtMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRqtMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_LogRqtMsgContent (value: LogRqtMsgContent, elGetter: $.ASN1Encoder<LogRqtMsgContent>) {
    if (!_cached_encoder_for_LogRqtMsgContent) { _cached_encoder_for_LogRqtMsgContent = function (value: LogRqtMsgContent, elGetter: $.ASN1Encoder<LogRqtMsgContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.logRequest_Req, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogRqtMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogRqtMsgContent */

/* eslint-enable */
