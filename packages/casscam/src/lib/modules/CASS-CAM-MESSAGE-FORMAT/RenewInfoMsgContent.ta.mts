/* eslint-disable */
import {
    OPTIONAL,
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
import { ImageInfo, _decode_ImageInfo, _encode_ImageInfo } from "../CASS-CAM-MESSAGE-FORMAT/ImageInfo.ta.mjs";

/**
 * @summary RenewInfoMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RenewInfoMsgContent ::= SEQUENCE {
 *   sessionID           OCTET STRING(SIZE (10)),
 *   -- This field is used for identify CAM Client Image
 *   -- => 0x01 : CAS Client Image
 *   -- => 0x02 : DRM Client Image
 *   -- => 0x03 : ASD Client Image
 *   clientType          OCTET STRING(SIZE (1)),
 *   -- This field is used for identify Common IM or Individual IM
 *   -- => 0x01 : Common IM
 *   -- => 0x02 : Individual IM
 *   -- => 0x03 : Deliver Common IM & Individual IM Simultaneously
 *   imageFlag           OCTET STRING(SIZE (1)),
 *   -- If the value of imageFlag is 0x01 or 0x02, only one ImageInfo will be generated
 *   -- Otherwise, if the value of imageFlag is 0x03, two ImageInfo will be generated
 *   imageInfo           SEQUENCE OF ImageInfo,
 *   -- request = TRUE
 *   purchaseReport-Req  BOOLEAN(TRUE) OPTIONAL,
 *   hashed-CCCI         OCTET STRING(SIZE (20)),
 *   hashed-ICCI         OCTET STRING(SIZE (20)),
 *   -- Control the installation and launching of CAM client image
 *   directives          OCTET STRING OPTIONAL
 * }
 * ```
 * 
 */
export
class RenewInfoMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `clientType`.
         * @public
         * @readonly
         */
        readonly clientType: OCTET_STRING,
        /**
         * @summary `imageFlag`.
         * @public
         * @readonly
         */
        readonly imageFlag: OCTET_STRING,
        /**
         * @summary `imageInfo`.
         * @public
         * @readonly
         */
        readonly imageInfo: ImageInfo[],
        /**
         * @summary `purchaseReport_Req`.
         * @public
         * @readonly
         */
        readonly purchaseReport_Req: OPTIONAL<BOOLEAN>,
        /**
         * @summary `hashed_CCCI`.
         * @public
         * @readonly
         */
        readonly hashed_CCCI: OCTET_STRING,
        /**
         * @summary `hashed_ICCI`.
         * @public
         * @readonly
         */
        readonly hashed_ICCI: OCTET_STRING,
        /**
         * @summary `directives`.
         * @public
         * @readonly
         */
        readonly directives: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a RenewInfoMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `RenewInfoMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RenewInfoMsgContent`.
     * @returns {RenewInfoMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (RenewInfoMsgContent)]: (RenewInfoMsgContent)[_K] }): RenewInfoMsgContent {
        return new RenewInfoMsgContent(_o.sessionID, _o.clientType, _o.imageFlag, _o.imageInfo, _o.purchaseReport_Req, _o.hashed_CCCI, _o.hashed_ICCI, _o.directives);
    }


}


/**
 * @summary The Leading Root Component Types of RenewInfoMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RenewInfoMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("clientType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imageFlag", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("imageInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("purchaseReport-Req", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("hashed-CCCI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("hashed-ICCI", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("directives", true, $.hasTag(_TagClass.context, 7))
];


/**
 * @summary The Trailing Root Component Types of RenewInfoMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RenewInfoMsgContent: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of RenewInfoMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RenewInfoMsgContent: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_RenewInfoMsgContent: $.ASN1Decoder<RenewInfoMsgContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RenewInfoMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RenewInfoMsgContent} The decoded data structure.
 */
export
function _decode_RenewInfoMsgContent (el: _Element): RenewInfoMsgContent {
    if (!_cached_decoder_for_RenewInfoMsgContent) { _cached_decoder_for_RenewInfoMsgContent = function (el: _Element): RenewInfoMsgContent {
    let sessionID!: OCTET_STRING;
    let clientType!: OCTET_STRING;
    let imageFlag!: OCTET_STRING;
    let imageInfo!: ImageInfo[];
    let purchaseReport_Req: OPTIONAL<BOOLEAN>;
    let hashed_CCCI!: OCTET_STRING;
    let hashed_ICCI!: OCTET_STRING;
    let directives: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sessionID": (_el: _Element): void => { sessionID = $._decodeOctetString(_el); },
        "clientType": (_el: _Element): void => { clientType = $._decodeOctetString(_el); },
        "imageFlag": (_el: _Element): void => { imageFlag = $._decodeOctetString(_el); },
        "imageInfo": (_el: _Element): void => { imageInfo = $._decodeSequenceOf<ImageInfo>(() => _decode_ImageInfo)(_el); },
        "purchaseReport-Req": (_el: _Element): void => { purchaseReport_Req = $._decodeBoolean(_el); },
        "hashed-CCCI": (_el: _Element): void => { hashed_CCCI = $._decodeOctetString(_el); },
        "hashed-ICCI": (_el: _Element): void => { hashed_ICCI = $._decodeOctetString(_el); },
        "directives": (_el: _Element): void => { directives = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RenewInfoMsgContent,
        _extension_additions_list_spec_for_RenewInfoMsgContent,
        _root_component_type_list_2_spec_for_RenewInfoMsgContent,
        undefined,
    );
    return new RenewInfoMsgContent( 
        sessionID,
        clientType,
        imageFlag,
        imageInfo,
        purchaseReport_Req,
        hashed_CCCI,
        hashed_ICCI,
        directives
    );
}; }
    return _cached_decoder_for_RenewInfoMsgContent(el);
}


let _cached_encoder_for_RenewInfoMsgContent: $.ASN1Encoder<RenewInfoMsgContent> | null = null;


/**
 * @summary Encodes a(n) RenewInfoMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RenewInfoMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_RenewInfoMsgContent (value: RenewInfoMsgContent, elGetter: $.ASN1Encoder<RenewInfoMsgContent>): _Element {
    if (!_cached_encoder_for_RenewInfoMsgContent) { _cached_encoder_for_RenewInfoMsgContent = function (value: RenewInfoMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.clientType, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.imageFlag, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<ImageInfo>(() => _encode_ImageInfo, $.BER)(value.imageInfo, $.BER),
            /* IF_ABSENT  */ ((value.purchaseReport_Req === undefined) ? undefined : $._encodeBoolean(value.purchaseReport_Req, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.hashed_CCCI, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.hashed_ICCI, $.BER),
            /* IF_ABSENT  */ ((value.directives === undefined) ? undefined : $._encodeOctetString(value.directives, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RenewInfoMsgContent(value, elGetter);
}


/* eslint-enable */
