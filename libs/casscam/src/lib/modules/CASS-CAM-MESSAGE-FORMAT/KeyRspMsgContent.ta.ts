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
import { RSAEncryptedContent, _decode_RSAEncryptedContent, _encode_RSAEncryptedContent } from "../CASS-CAM-MESSAGE-FORMAT/RSAEncryptedContent.ta";
export { RSAEncryptedContent, _decode_RSAEncryptedContent, _encode_RSAEncryptedContent } from "../CASS-CAM-MESSAGE-FORMAT/RSAEncryptedContent.ta";


/* START_OF_SYMBOL_DEFINITION KeyRspMsgContent */
/**
 * @summary KeyRspMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyRspMsgContent ::= SEQUENCE {
 *   sessionID            OCTET STRING(SIZE (10)),
 *   -- cASSCertificate MUST be DER encoded
 *   cASSCertificate      BIT STRING,
 *   rSAEncryptedContent  RSAEncryptedContent,
 *   sIGN-kpk             OCTET STRING(SIZE (128))
 * }
 * ```
 * 
 * @class
 */
export
class KeyRspMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `cASSCertificate`.
         * @public
         * @readonly
         */
        readonly cASSCertificate: BIT_STRING,
        /**
         * @summary `rSAEncryptedContent`.
         * @public
         * @readonly
         */
        readonly rSAEncryptedContent: RSAEncryptedContent,
        /**
         * @summary `sIGN_kpk`.
         * @public
         * @readonly
         */
        readonly sIGN_kpk: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a KeyRspMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `KeyRspMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyRspMsgContent`.
     * @returns {KeyRspMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (KeyRspMsgContent)]: (KeyRspMsgContent)[_K] }): KeyRspMsgContent {
        return new KeyRspMsgContent(_o.sessionID, _o.cASSCertificate, _o.rSAEncryptedContent, _o.sIGN_kpk);
    }


}
/* END_OF_SYMBOL_DEFINITION KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyRspMsgContent */
/**
 * @summary The Leading Root Component Types of KeyRspMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeyRspMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cASSCertificate", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("rSAEncryptedContent", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("sIGN-kpk", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyRspMsgContent */
/**
 * @summary The Trailing Root Component Types of KeyRspMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeyRspMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyRspMsgContent */
/**
 * @summary The Extension Addition Component Types of KeyRspMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeyRspMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyRspMsgContent */
let _cached_decoder_for_KeyRspMsgContent: $.ASN1Decoder<KeyRspMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_KeyRspMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyRspMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyRspMsgContent} The decoded data structure.
 */
export
function _decode_KeyRspMsgContent (el: _Element) {
    if (!_cached_decoder_for_KeyRspMsgContent) { _cached_decoder_for_KeyRspMsgContent = function (el: _Element): KeyRspMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("KeyRspMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "cASSCertificate";
    sequence[2].name = "rSAEncryptedContent";
    sequence[3].name = "sIGN-kpk";
    let sessionID!: OCTET_STRING;
    let cASSCertificate!: BIT_STRING;
    let rSAEncryptedContent!: RSAEncryptedContent;
    let sIGN_kpk!: OCTET_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    cASSCertificate = $._decodeBitString(sequence[1]);
    rSAEncryptedContent = _decode_RSAEncryptedContent(sequence[2]);
    sIGN_kpk = $._decodeOctetString(sequence[3]);
    return new KeyRspMsgContent(
        sessionID,
        cASSCertificate,
        rSAEncryptedContent,
        sIGN_kpk,

    );
}; }
    return _cached_decoder_for_KeyRspMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyRspMsgContent */
let _cached_encoder_for_KeyRspMsgContent: $.ASN1Encoder<KeyRspMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyRspMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_KeyRspMsgContent */
/**
 * @summary Encodes a(n) KeyRspMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyRspMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_KeyRspMsgContent (value: KeyRspMsgContent, elGetter: $.ASN1Encoder<KeyRspMsgContent>) {
    if (!_cached_encoder_for_KeyRspMsgContent) { _cached_encoder_for_KeyRspMsgContent = function (value: KeyRspMsgContent, elGetter: $.ASN1Encoder<KeyRspMsgContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.cASSCertificate, $.BER),
            /* REQUIRED   */ _encode_RSAEncryptedContent(value.rSAEncryptedContent, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.sIGN_kpk, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KeyRspMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyRspMsgContent */

/* eslint-enable */
