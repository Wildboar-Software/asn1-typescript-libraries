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



/* START_OF_SYMBOL_DEFINITION PrchsRptMsgContent */
/**
 * @summary PrchsRptMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrchsRptMsgContent ::= SEQUENCE {
 *   sessionID     OCTET STRING(SIZE (10)),
 *   purchaseInfo  OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class PrchsRptMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `purchaseInfo`.
         * @public
         * @readonly
         */
        readonly purchaseInfo: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a PrchsRptMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `PrchsRptMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrchsRptMsgContent`.
     * @returns {PrchsRptMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (PrchsRptMsgContent)]: (PrchsRptMsgContent)[_K] }): PrchsRptMsgContent {
        return new PrchsRptMsgContent(_o.sessionID, _o.purchaseInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrchsRptMsgContent */
/**
 * @summary The Leading Root Component Types of PrchsRptMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrchsRptMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("purchaseInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrchsRptMsgContent */
/**
 * @summary The Trailing Root Component Types of PrchsRptMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrchsRptMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrchsRptMsgContent */
/**
 * @summary The Extension Addition Component Types of PrchsRptMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrchsRptMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrchsRptMsgContent */
let _cached_decoder_for_PrchsRptMsgContent: $.ASN1Decoder<PrchsRptMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_PrchsRptMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) PrchsRptMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrchsRptMsgContent} The decoded data structure.
 */
export
function _decode_PrchsRptMsgContent (el: _Element) {
    if (!_cached_decoder_for_PrchsRptMsgContent) { _cached_decoder_for_PrchsRptMsgContent = function (el: _Element): PrchsRptMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PrchsRptMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "purchaseInfo";
    let sessionID!: OCTET_STRING;
    let purchaseInfo!: OCTET_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    purchaseInfo = $._decodeOctetString(sequence[1]);
    return new PrchsRptMsgContent(
        sessionID,
        purchaseInfo,

    );
}; }
    return _cached_decoder_for_PrchsRptMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrchsRptMsgContent */
let _cached_encoder_for_PrchsRptMsgContent: $.ASN1Encoder<PrchsRptMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrchsRptMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_PrchsRptMsgContent */
/**
 * @summary Encodes a(n) PrchsRptMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrchsRptMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_PrchsRptMsgContent (value: PrchsRptMsgContent, elGetter: $.ASN1Encoder<PrchsRptMsgContent>) {
    if (!_cached_encoder_for_PrchsRptMsgContent) { _cached_encoder_for_PrchsRptMsgContent = function (value: PrchsRptMsgContent, elGetter: $.ASN1Encoder<PrchsRptMsgContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.purchaseInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrchsRptMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrchsRptMsgContent */

/* eslint-enable */
