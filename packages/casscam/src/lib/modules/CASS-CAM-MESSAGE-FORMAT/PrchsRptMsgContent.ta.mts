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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




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
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("purchaseInfo", false, $.hasTag(_TagClass.context, 1))
];


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


let _cached_decoder_for_PrchsRptMsgContent: $.ASN1Decoder<PrchsRptMsgContent> | null = null;


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


let _cached_encoder_for_PrchsRptMsgContent: $.ASN1Encoder<PrchsRptMsgContent> | null = null;


/**
 * @summary Encodes a(n) PrchsRptMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrchsRptMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_PrchsRptMsgContent (value: PrchsRptMsgContent, elGetter: $.ASN1Encoder<PrchsRptMsgContent>) {
    if (!_cached_encoder_for_PrchsRptMsgContent) { _cached_encoder_for_PrchsRptMsgContent = function (value: PrchsRptMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.purchaseInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrchsRptMsgContent(value, elGetter);
}


/* eslint-enable */
