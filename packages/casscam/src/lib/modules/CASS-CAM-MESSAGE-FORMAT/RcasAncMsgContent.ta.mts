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
import { CAMClientVersion, _decode_CAMClientVersion, _encode_CAMClientVersion } from "../CASS-CAM-MESSAGE-FORMAT/CAMClientVersion.ta.mjs";
import { CASSInfo, _decode_CASSInfo, _encode_CASSInfo } from "../CASS-CAM-MESSAGE-FORMAT/CASSInfo.ta.mjs";
/* START_OF_SYMBOL_DEFINITION RcasAncMsgContent */
/**
 * @summary RcasAncMsgContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcasAncMsgContent ::= SEQUENCE {
 *   -- If the value of protocolTypeFlag is 0x01,
 *   -- the RCAS network protocol works as Normal mode
 *   -- If the value of protocolTypeFlag is 0x02,
 *   -- the RCAS network protocol works as Fast mode
 *   -- The other values are reserved
 *   protocolTypeFlag  OCTET STRING(SIZE (1)),
 *   cAMClientVersion  SEQUENCE OF CAMClientVersion,
 *   cASSInfo          CASSInfo
 * }
 * ```
 * 
 * @class
 */
export
class RcasAncMsgContent {
    constructor (
        /**
         * @summary `protocolTypeFlag`.
         * @public
         * @readonly
         */
        readonly protocolTypeFlag: OCTET_STRING,
        /**
         * @summary `cAMClientVersion`.
         * @public
         * @readonly
         */
        readonly cAMClientVersion: CAMClientVersion[],
        /**
         * @summary `cASSInfo`.
         * @public
         * @readonly
         */
        readonly cASSInfo: CASSInfo
    ) {}

    /**
     * @summary Restructures an object into a RcasAncMsgContent
     * @description
     * 
     * This takes an `object` and converts it to a `RcasAncMsgContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcasAncMsgContent`.
     * @returns {RcasAncMsgContent}
     */
    public static _from_object (_o: { [_K in keyof (RcasAncMsgContent)]: (RcasAncMsgContent)[_K] }): RcasAncMsgContent {
        return new RcasAncMsgContent(_o.protocolTypeFlag, _o.cAMClientVersion, _o.cASSInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RcasAncMsgContent */
/**
 * @summary The Leading Root Component Types of RcasAncMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcasAncMsgContent: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolTypeFlag", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cAMClientVersion", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cASSInfo", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RcasAncMsgContent */
/**
 * @summary The Trailing Root Component Types of RcasAncMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcasAncMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RcasAncMsgContent */
/**
 * @summary The Extension Addition Component Types of RcasAncMsgContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcasAncMsgContent: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RcasAncMsgContent */
let _cached_decoder_for_RcasAncMsgContent: $.ASN1Decoder<RcasAncMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_RcasAncMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) RcasAncMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RcasAncMsgContent} The decoded data structure.
 */
export
function _decode_RcasAncMsgContent (el: _Element) {
    if (!_cached_decoder_for_RcasAncMsgContent) { _cached_decoder_for_RcasAncMsgContent = function (el: _Element): RcasAncMsgContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RcasAncMsgContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolTypeFlag";
    sequence[1].name = "cAMClientVersion";
    sequence[2].name = "cASSInfo";
    let protocolTypeFlag!: OCTET_STRING;
    let cAMClientVersion!: CAMClientVersion[];
    let cASSInfo!: CASSInfo;
    protocolTypeFlag = $._decodeOctetString(sequence[0]);
    cAMClientVersion = $._decodeSequenceOf<CAMClientVersion>(() => _decode_CAMClientVersion)(sequence[1]);
    cASSInfo = _decode_CASSInfo(sequence[2]);
    return new RcasAncMsgContent(
        protocolTypeFlag,
        cAMClientVersion,
        cASSInfo,

    );
}; }
    return _cached_decoder_for_RcasAncMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RcasAncMsgContent */
let _cached_encoder_for_RcasAncMsgContent: $.ASN1Encoder<RcasAncMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RcasAncMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_RcasAncMsgContent */
/**
 * @summary Encodes a(n) RcasAncMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcasAncMsgContent, encoded as an ASN.1 Element.
 */
export
function _encode_RcasAncMsgContent (value: RcasAncMsgContent, elGetter: $.ASN1Encoder<RcasAncMsgContent>) {
    if (!_cached_encoder_for_RcasAncMsgContent) { _cached_encoder_for_RcasAncMsgContent = function (value: RcasAncMsgContent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.protocolTypeFlag, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<CAMClientVersion>(() => _encode_CAMClientVersion, $.BER)(value.cAMClientVersion, $.BER),
            /* REQUIRED   */ _encode_CASSInfo(value.cASSInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RcasAncMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RcasAncMsgContent */

/* eslint-enable */
