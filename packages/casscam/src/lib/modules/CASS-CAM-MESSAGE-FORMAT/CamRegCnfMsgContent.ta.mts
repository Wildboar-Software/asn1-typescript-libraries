/* eslint-disable */
import {
    OCTET_STRING,
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




/**
 * @summary CamRegCnfMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamRegCnfMsgContent ::= SEQUENCE {
 *   sessionID  OCTET STRING(SIZE (10)),
 *   -- IVs for 128 AES-CBC
 *   mEK-IV     OCTET STRING(SIZE (16)),
 *   iCCIEK-IV  OCTET STRING(SIZE (16)),
 *   cCCIEK-IV  OCTET STRING(SIZE (16)),
 *   cCCIEK     OCTET STRING(SIZE (16))
 * }
 * ```
 * 
 * @class
 */
export
class CamRegCnfMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `mEK_IV`.
         * @public
         * @readonly
         */
        readonly mEK_IV: OCTET_STRING,
        /**
         * @summary `iCCIEK_IV`.
         * @public
         * @readonly
         */
        readonly iCCIEK_IV: OCTET_STRING,
        /**
         * @summary `cCCIEK_IV`.
         * @public
         * @readonly
         */
        readonly cCCIEK_IV: OCTET_STRING,
        /**
         * @summary `cCCIEK`.
         * @public
         * @readonly
         */
        readonly cCCIEK: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CamRegCnfMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `CamRegCnfMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CamRegCnfMsgContent`.
     * @returns {CamRegCnfMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (CamRegCnfMsgContent)]: (CamRegCnfMsgContent)[_K] }): CamRegCnfMsgContent {
        return new CamRegCnfMsgContent(_o.sessionID, _o.mEK_IV, _o.iCCIEK_IV, _o.cCCIEK_IV, _o.cCCIEK);
    }


}


/**
 * @summary The Leading Root Component Types of CamRegCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CamRegCnfMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mEK-IV", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iCCIEK-IV", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cCCIEK-IV", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cCCIEK", false, $.hasTag(_TagClass.context, 4), undefined, undefined)
];


/**
 * @summary The Trailing Root Component Types of CamRegCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CamRegCnfMsgContent: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of CamRegCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CamRegCnfMsgContent: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_CamRegCnfMsgContent: $.ASN1Decoder<CamRegCnfMsgContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CamRegCnfMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CamRegCnfMsgContent} The decoded data structure.
 */
export
function _decode_CamRegCnfMsgContent (el: _Element) {
    if (!_cached_decoder_for_CamRegCnfMsgContent) { _cached_decoder_for_CamRegCnfMsgContent = function (el: _Element): CamRegCnfMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("CamRegCnfMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "mEK-IV";
    sequence[2].name = "iCCIEK-IV";
    sequence[3].name = "cCCIEK-IV";
    sequence[4].name = "cCCIEK";
    let sessionID!: OCTET_STRING;
    let mEK_IV!: OCTET_STRING;
    let iCCIEK_IV!: OCTET_STRING;
    let cCCIEK_IV!: OCTET_STRING;
    let cCCIEK!: OCTET_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    mEK_IV = $._decodeOctetString(sequence[1]);
    iCCIEK_IV = $._decodeOctetString(sequence[2]);
    cCCIEK_IV = $._decodeOctetString(sequence[3]);
    cCCIEK = $._decodeOctetString(sequence[4]);
    return new CamRegCnfMsgContent(
        sessionID,
        mEK_IV,
        iCCIEK_IV,
        cCCIEK_IV,
        cCCIEK,

    );
}; }
    return _cached_decoder_for_CamRegCnfMsgContent(el);
}


let _cached_encoder_for_CamRegCnfMsgContent: $.ASN1Encoder<CamRegCnfMsgContent> | null = null;


/**
 * @summary Encodes a(n) CamRegCnfMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamRegCnfMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_CamRegCnfMsgContent (value: CamRegCnfMsgContent, elGetter: $.ASN1Encoder<CamRegCnfMsgContent>) {
    if (!_cached_encoder_for_CamRegCnfMsgContent) { _cached_encoder_for_CamRegCnfMsgContent = function (value: CamRegCnfMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.mEK_IV, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.iCCIEK_IV, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cCCIEK_IV, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cCCIEK, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CamRegCnfMsgContent(value, elGetter);
}


/* eslint-enable */
