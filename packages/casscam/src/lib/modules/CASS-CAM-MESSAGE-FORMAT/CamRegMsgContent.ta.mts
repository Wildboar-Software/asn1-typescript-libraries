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



/* START_OF_SYMBOL_DEFINITION CamRegMsgContent */
/**
 * @summary CamRegMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamRegMsgContent ::= SEQUENCE {
 *   sessionID          OCTET STRING(SIZE (10)),
 *   nONCE-CAM          OCTET STRING(SIZE (16)),
 *   cAMID              OCTET STRING(SIZE (40)),
 *   -- CAM chip version
 *   hWVersion          OCTET STRING(SIZE (4)),
 *   -- SW version of Bootloader
 *   sWversion          OCTET STRING(SIZE (4)),
 *   hashed-MEK-ICCIEK  OCTET STRING(SIZE (20))
 * }
 * ```
 * 
 * @class
 */
export
class CamRegMsgContent {
    constructor (
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `nONCE_CAM`.
         * @public
         * @readonly
         */
        readonly nONCE_CAM: OCTET_STRING,
        /**
         * @summary `cAMID`.
         * @public
         * @readonly
         */
        readonly cAMID: OCTET_STRING,
        /**
         * @summary `hWVersion`.
         * @public
         * @readonly
         */
        readonly hWVersion: OCTET_STRING,
        /**
         * @summary `sWversion`.
         * @public
         * @readonly
         */
        readonly sWversion: OCTET_STRING,
        /**
         * @summary `hashed_MEK_ICCIEK`.
         * @public
         * @readonly
         */
        readonly hashed_MEK_ICCIEK: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CamRegMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `CamRegMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CamRegMsgContent`.
     * @returns {CamRegMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (CamRegMsgContent)]: (CamRegMsgContent)[_K] }): CamRegMsgContent {
        return new CamRegMsgContent(_o.sessionID, _o.nONCE_CAM, _o.cAMID, _o.hWVersion, _o.sWversion, _o.hashed_MEK_ICCIEK);
    }


}
/* END_OF_SYMBOL_DEFINITION CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CamRegMsgContent */
/**
 * @summary The Leading Root Component Types of CamRegMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CamRegMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("nONCE-CAM", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cAMID", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("hWVersion", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("sWversion", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("hashed-MEK-ICCIEK", false, $.hasTag(_TagClass.context, 5), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CamRegMsgContent */
/**
 * @summary The Trailing Root Component Types of CamRegMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CamRegMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CamRegMsgContent */
/**
 * @summary The Extension Addition Component Types of CamRegMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CamRegMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CamRegMsgContent */
let _cached_decoder_for_CamRegMsgContent: $.ASN1Decoder<CamRegMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_CamRegMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) CamRegMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CamRegMsgContent} The decoded data structure.
 */
export
function _decode_CamRegMsgContent (el: _Element) {
    if (!_cached_decoder_for_CamRegMsgContent) { _cached_decoder_for_CamRegMsgContent = function (el: _Element): CamRegMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("CamRegMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionID";
    sequence[1].name = "nONCE-CAM";
    sequence[2].name = "cAMID";
    sequence[3].name = "hWVersion";
    sequence[4].name = "sWversion";
    sequence[5].name = "hashed-MEK-ICCIEK";
    let sessionID!: OCTET_STRING;
    let nONCE_CAM!: OCTET_STRING;
    let cAMID!: OCTET_STRING;
    let hWVersion!: OCTET_STRING;
    let sWversion!: OCTET_STRING;
    let hashed_MEK_ICCIEK!: OCTET_STRING;
    sessionID = $._decodeOctetString(sequence[0]);
    nONCE_CAM = $._decodeOctetString(sequence[1]);
    cAMID = $._decodeOctetString(sequence[2]);
    hWVersion = $._decodeOctetString(sequence[3]);
    sWversion = $._decodeOctetString(sequence[4]);
    hashed_MEK_ICCIEK = $._decodeOctetString(sequence[5]);
    return new CamRegMsgContent(
        sessionID,
        nONCE_CAM,
        cAMID,
        hWVersion,
        sWversion,
        hashed_MEK_ICCIEK,

    );
}; }
    return _cached_decoder_for_CamRegMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CamRegMsgContent */
let _cached_encoder_for_CamRegMsgContent: $.ASN1Encoder<CamRegMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CamRegMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_CamRegMsgContent */
/**
 * @summary Encodes a(n) CamRegMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamRegMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_CamRegMsgContent (value: CamRegMsgContent, elGetter: $.ASN1Encoder<CamRegMsgContent>) {
    if (!_cached_encoder_for_CamRegMsgContent) { _cached_encoder_for_CamRegMsgContent = function (value: CamRegMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.sessionID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.nONCE_CAM, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cAMID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.hWVersion, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.sWversion, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.hashed_MEK_ICCIEK, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CamRegMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CamRegMsgContent */

/* eslint-enable */
