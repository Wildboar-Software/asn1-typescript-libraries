/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary KeyReqMsgContent
 * @description
 *
 * Content of KeyRequest (`0x0003`). CAM → CASS,
 * digitally signed with the CAM private key; header and
 * content are signed and carried with the message (not
 * AES-encrypted). CASS forwards pairing ID and CASS ID
 * to the AC. Pairing follows ITU-T J.1002; the AC also
 * runs cloning detection (Annex C). ITU-T Rec. J.1003
 * (10/2014)
 * [§7.2](https://www.itu.int/rec/T-REC-J.1003-201410-I),
 * §8.1.
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
 */
export
class KeyReqMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @description
         *
         * Session identifier, 10 octets. Assignment is
         * not specified (Annex A).
         *
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `keyParingID`.
         * @description
         *
         * KeyPairingID: `CAM_ID || DSC_ID` (§3.2.2).
         * 48 octets (8-byte CAM_ID + 40-byte DSC_ID).
         * ASN.1 spelling is `keyParingID`.
         *
         * @public
         * @readonly
         */
        readonly keyParingID: OCTET_STRING,
        /**
         * @summary `cAMCertificate`.
         * @description
         *
         * CAM X.509 certificate. Must be DER (Annex A;
         * [ITU-T X.509]). The AC uses it to authenticate
         * the CAM (§7.2).
         *
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
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("keyParingID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cAMCertificate", false, $.hasTag(_TagClass.context, 2))
];


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


let _cached_decoder_for_KeyReqMsgContent: $.ASN1Decoder<KeyReqMsgContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyReqMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyReqMsgContent} The decoded data structure.
 */
export
function _decode_KeyReqMsgContent (el: _Element): KeyReqMsgContent {
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


let _cached_encoder_for_KeyReqMsgContent: $.ASN1Encoder<KeyReqMsgContent> | null = null;


/**
 * @summary Encodes a(n) KeyReqMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyReqMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_KeyReqMsgContent (value: KeyReqMsgContent, elGetter: $.ASN1Encoder<KeyReqMsgContent>): _Element {
    if (!_cached_encoder_for_KeyReqMsgContent) { _cached_encoder_for_KeyReqMsgContent = function (value: KeyReqMsgContent): _Element {
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


/* eslint-enable */
