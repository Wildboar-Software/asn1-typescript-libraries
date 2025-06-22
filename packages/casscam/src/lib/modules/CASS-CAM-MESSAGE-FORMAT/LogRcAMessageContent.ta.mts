/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
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
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("logResponseInfo", true, $.hasTag(_TagClass.context, 1))
];


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


let _cached_decoder_for_LogRcAMessageContent: $.ASN1Decoder<LogRcAMessageContent> | null = null;


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


let _cached_encoder_for_LogRcAMessageContent: $.ASN1Encoder<LogRcAMessageContent> | null = null;


/**
 * @summary Encodes a(n) LogRcAMessageContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRcAMessageContent, encoded as an ASN.1 Element.
 */
export
function _encode_LogRcAMessageContent (value: LogRcAMessageContent, elGetter: $.ASN1Encoder<LogRcAMessageContent>) {
    if (!_cached_encoder_for_LogRcAMessageContent) { _cached_encoder_for_LogRcAMessageContent = function (value: LogRcAMessageContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* IF_ABSENT  */ ((value.logResponseInfo === undefined) ? undefined : $._encodeOctetString(value.logResponseInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogRcAMessageContent(value, elGetter);
}


/* eslint-enable */
