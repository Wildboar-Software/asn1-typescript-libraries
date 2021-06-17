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



/* START_OF_SYMBOL_DEFINITION StcAMsgContent */
/**
 * @summary StcAMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StcAMsgContent ::= SEQUENCE {
 *   sessionID   OCTET STRING(SIZE (10)),
 *   -- Status Info: 0x01 (CAM-DSC ID validation fail)
 *   -- 0x02 (MEK or ICCIEK hash verification fail)
 *   -- 0x03 (CCI hash verificcation fail)
 *   -- 0x04 (HMAC verification fail)
 *   -- 0x05 (RSA signature verification fail)
 *   -- 0x06 ~ 0xff (reserved)
 *   statusInfo  OCTET STRING(SIZE (1))
 * }
 * ```
 * 
 * @class
 */
export
class StcAMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `statusInfo`.
         * @public
         * @readonly
         */
        readonly statusInfo: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a StcAMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `StcAMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StcAMsgContent`.
     * @returns {StcAMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (StcAMsgContent)]: (StcAMsgContent)[_K] }): StcAMsgContent {
        return new StcAMsgContent(_o.sessionID, _o.statusInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StcAMsgContent */
/**
 * @summary The Leading Root Component Types of StcAMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StcAMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("statusInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StcAMsgContent */
/**
 * @summary The Trailing Root Component Types of StcAMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StcAMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StcAMsgContent */
/**
 * @summary The Extension Addition Component Types of StcAMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StcAMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StcAMsgContent */
let _cached_decoder_for_StcAMsgContent: $.ASN1Decoder<StcAMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_StcAMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) StcAMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StcAMsgContent} The decoded data structure.
 */
export
function _decode_StcAMsgContent (el: _Element) {
    if (!_cached_decoder_for_StcAMsgContent) { _cached_decoder_for_StcAMsgContent = function (el: _Element): StcAMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("StcAMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "statusInfo";
    let sessionID!: OCTET_STRING;
    let statusInfo!: OCTET_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    statusInfo = $._decodeOctetString(sequence[1]);
    return new StcAMsgContent(
        sessionID,
        statusInfo,

    );
}; }
    return _cached_decoder_for_StcAMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StcAMsgContent */
let _cached_encoder_for_StcAMsgContent: $.ASN1Encoder<StcAMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StcAMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_StcAMsgContent */
/**
 * @summary Encodes a(n) StcAMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StcAMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_StcAMsgContent (value: StcAMsgContent, elGetter: $.ASN1Encoder<StcAMsgContent>) {
    if (!_cached_encoder_for_StcAMsgContent) { _cached_encoder_for_StcAMsgContent = function (value: StcAMsgContent, elGetter: $.ASN1Encoder<StcAMsgContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.statusInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StcAMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StcAMsgContent */

/* eslint-enable */
