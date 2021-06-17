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



/* START_OF_SYMBOL_DEFINITION KeyReqMsgContent */
/**
 * @summary KeyReqMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyReqMsgContent ::= SEQUENCE {
 *   sessionID       OCTET STRING(SIZE (10)),
 *   keyParingID     OCTET STRING(SIZE (48)),
 *   -- cAMCertificate MUST be DER encoded
 *   cAMCertificate  BIT STRING
 * }
 * ```
 * 
 * @class
 */
export
class KeyReqMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `keyParingID`.
         * @public
         * @readonly
         */
        readonly keyParingID: OCTET_STRING,
        /**
         * @summary `cAMCertificate`.
         * @public
         * @readonly
         */
        readonly cAMCertificate: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a KeyReqMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `KeyReqMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyReqMsgContent`.
     * @returns {KeyReqMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (KeyReqMsgContent)]: (KeyReqMsgContent)[_K] }): KeyReqMsgContent {
        return new KeyReqMsgContent(_o.sessionID, _o.keyParingID, _o.cAMCertificate);
    }


}
/* END_OF_SYMBOL_DEFINITION KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyReqMsgContent */
/**
 * @summary The Leading Root Component Types of KeyReqMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeyReqMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("keyParingID", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cAMCertificate", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyReqMsgContent */
/**
 * @summary The Trailing Root Component Types of KeyReqMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeyReqMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyReqMsgContent */
/**
 * @summary The Extension Addition Component Types of KeyReqMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeyReqMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyReqMsgContent */
let _cached_decoder_for_KeyReqMsgContent: $.ASN1Decoder<KeyReqMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_KeyReqMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyReqMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyReqMsgContent} The decoded data structure.
 */
export
function _decode_KeyReqMsgContent (el: _Element) {
    if (!_cached_decoder_for_KeyReqMsgContent) { _cached_decoder_for_KeyReqMsgContent = function (el: _Element): KeyReqMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("KeyReqMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "keyParingID";
    sequence[2].name = "cAMCertificate";
    let sessionID!: OCTET_STRING;
    let keyParingID!: OCTET_STRING;
    let cAMCertificate!: BIT_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    keyParingID = $._decodeOctetString(sequence[1]);
    cAMCertificate = $._decodeBitString(sequence[2]);
    return new KeyReqMsgContent(
        sessionID,
        keyParingID,
        cAMCertificate,

    );
}; }
    return _cached_decoder_for_KeyReqMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyReqMsgContent */
let _cached_encoder_for_KeyReqMsgContent: $.ASN1Encoder<KeyReqMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyReqMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_KeyReqMsgContent */
/**
 * @summary Encodes a(n) KeyReqMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyReqMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_KeyReqMsgContent (value: KeyReqMsgContent, elGetter: $.ASN1Encoder<KeyReqMsgContent>) {
    if (!_cached_encoder_for_KeyReqMsgContent) { _cached_encoder_for_KeyReqMsgContent = function (value: KeyReqMsgContent, elGetter: $.ASN1Encoder<KeyReqMsgContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.keyParingID, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.cAMCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KeyReqMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyReqMsgContent */

/* eslint-enable */
