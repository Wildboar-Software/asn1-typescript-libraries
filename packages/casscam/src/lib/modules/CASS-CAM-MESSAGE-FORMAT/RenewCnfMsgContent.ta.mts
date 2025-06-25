/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary RenewCnfMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RenewCnfMsgContent ::= SEQUENCE {
 *   sessionID       OCTET STRING(SIZE (10)),
 *   -- success = TRUE, fail = FALSE
 *   downloadStatus  BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class RenewCnfMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `downloadStatus`.
         * @public
         * @readonly
         */
        readonly downloadStatus: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a RenewCnfMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `RenewCnfMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RenewCnfMsgContent`.
     * @returns {RenewCnfMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (RenewCnfMsgContent)]: (RenewCnfMsgContent)[_K] }): RenewCnfMsgContent {
        return new RenewCnfMsgContent(_o.sessionID, _o.downloadStatus);
    }


}


/**
 * @summary The Leading Root Component Types of RenewCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RenewCnfMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("downloadStatus", false, $.hasTag(_TagClass.context, 1))
];


/**
 * @summary The Trailing Root Component Types of RenewCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RenewCnfMsgContent: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of RenewCnfMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RenewCnfMsgContent: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_RenewCnfMsgContent: $.ASN1Decoder<RenewCnfMsgContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RenewCnfMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RenewCnfMsgContent} The decoded data structure.
 */
export
function _decode_RenewCnfMsgContent (el: _Element): RenewCnfMsgContent {
    if (!_cached_decoder_for_RenewCnfMsgContent) { _cached_decoder_for_RenewCnfMsgContent = function (el: _Element): RenewCnfMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RenewCnfMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "downloadStatus";
    let sessionID!: OCTET_STRING;
    let downloadStatus!: BOOLEAN;
    sessionID = $._decodeOctetString(sequence[0]);
    downloadStatus = $._decodeBoolean(sequence[1]);
    return new RenewCnfMsgContent(
        sessionID,
        downloadStatus,

    );
}; }
    return _cached_decoder_for_RenewCnfMsgContent(el);
}


let _cached_encoder_for_RenewCnfMsgContent: $.ASN1Encoder<RenewCnfMsgContent> | null = null;


/**
 * @summary Encodes a(n) RenewCnfMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RenewCnfMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_RenewCnfMsgContent (value: RenewCnfMsgContent, elGetter: $.ASN1Encoder<RenewCnfMsgContent>): _Element {
    if (!_cached_encoder_for_RenewCnfMsgContent) { _cached_encoder_for_RenewCnfMsgContent = function (value: RenewCnfMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.downloadStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RenewCnfMsgContent(value, elGetter);
}


/* eslint-enable */
