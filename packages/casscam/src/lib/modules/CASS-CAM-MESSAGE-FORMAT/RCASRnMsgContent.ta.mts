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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION RCASRnMsgContent */
/**
 * @summary RCASRnMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCASRnMsgContent ::= SEQUENCE {
 *   -- "YYMMDDhhmmss" - e.g., 2013-May-13, PM 5h50m30s => "130513175030"
 *   downloadSchedule    OCTET STRING(SIZE (12)),
 *   -- request = TRUE
 *   keyRequest-Req      BOOLEAN(TRUE) OPTIONAL,
 *   purchaseReport-Req  BOOLEAN(TRUE) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCASRnMsgContent {
    constructor (
        /**
         * @summary `downloadSchedule`.
         * @public
         * @readonly
         */
        readonly downloadSchedule: OCTET_STRING,
        /**
         * @summary `keyRequest_Req`.
         * @public
         * @readonly
         */
        readonly keyRequest_Req: OPTIONAL<BOOLEAN>,
        /**
         * @summary `purchaseReport_Req`.
         * @public
         * @readonly
         */
        readonly purchaseReport_Req: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a RCASRnMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `RCASRnMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCASRnMsgContent`.
     * @returns {RCASRnMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (RCASRnMsgContent)]: (RCASRnMsgContent)[_K] }): RCASRnMsgContent {
        return new RCASRnMsgContent(_o.downloadSchedule, _o.keyRequest_Req, _o.purchaseReport_Req);
    }


}
/* END_OF_SYMBOL_DEFINITION RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RCASRnMsgContent */
/**
 * @summary The Leading Root Component Types of RCASRnMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCASRnMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("downloadSchedule", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("keyRequest-Req", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("purchaseReport-Req", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RCASRnMsgContent */
/**
 * @summary The Trailing Root Component Types of RCASRnMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCASRnMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RCASRnMsgContent */
/**
 * @summary The Extension Addition Component Types of RCASRnMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCASRnMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RCASRnMsgContent */
let _cached_decoder_for_RCASRnMsgContent: $.ASN1Decoder<RCASRnMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_RCASRnMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) RCASRnMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RCASRnMsgContent} The decoded data structure.
 */
export
function _decode_RCASRnMsgContent (el: _Element) {
    if (!_cached_decoder_for_RCASRnMsgContent) { _cached_decoder_for_RCASRnMsgContent = function (el: _Element): RCASRnMsgContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let downloadSchedule!: OCTET_STRING;
    let keyRequest_Req: OPTIONAL<BOOLEAN>;
    let purchaseReport_Req: OPTIONAL<BOOLEAN>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "downloadSchedule": (_el: _Element): void => { downloadSchedule = $._decodeOctetString(_el); },
        "keyRequest-Req": (_el: _Element): void => { keyRequest_Req = $._decodeBoolean(_el); },
        "purchaseReport-Req": (_el: _Element): void => { purchaseReport_Req = $._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCASRnMsgContent,
        _extension_additions_list_spec_for_RCASRnMsgContent,
        _root_component_type_list_2_spec_for_RCASRnMsgContent,
        undefined,
    );
    return new RCASRnMsgContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        downloadSchedule,
        keyRequest_Req,
        purchaseReport_Req
    );
}; }
    return _cached_decoder_for_RCASRnMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RCASRnMsgContent */
let _cached_encoder_for_RCASRnMsgContent: $.ASN1Encoder<RCASRnMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RCASRnMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_RCASRnMsgContent */
/**
 * @summary Encodes a(n) RCASRnMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCASRnMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_RCASRnMsgContent (value: RCASRnMsgContent, elGetter: $.ASN1Encoder<RCASRnMsgContent>) {
    if (!_cached_encoder_for_RCASRnMsgContent) { _cached_encoder_for_RCASRnMsgContent = function (value: RCASRnMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.downloadSchedule, $.BER),
            /* IF_ABSENT  */ ((value.keyRequest_Req === undefined) ? undefined : $._encodeBoolean(value.keyRequest_Req, $.BER)),
            /* IF_ABSENT  */ ((value.purchaseReport_Req === undefined) ? undefined : $._encodeBoolean(value.purchaseReport_Req, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCASRnMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RCASRnMsgContent */

/* eslint-enable */
