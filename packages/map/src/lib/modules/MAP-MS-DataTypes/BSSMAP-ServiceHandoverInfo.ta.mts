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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BSSMAP_ServiceHandover, _decode_BSSMAP_ServiceHandover, _encode_BSSMAP_ServiceHandover } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandover.ta.mjs";
// export { BSSMAP_ServiceHandover, _decode_BSSMAP_ServiceHandover, _encode_BSSMAP_ServiceHandover } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandover.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
// export { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";


/**
 * @summary BSSMAP_ServiceHandoverInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BSSMAP-ServiceHandoverInfo ::= SEQUENCE {
 *     bssmap-ServiceHandover    BSSMAP-ServiceHandover,
 *     rab-Id    RAB-Id,
 *     -- RAB Identity is needed to relate the service handovers with the radio access bearers. 
 *     ...}
 * ```
 * 
 * @class
 */
export
class BSSMAP_ServiceHandoverInfo {
    constructor (
        /**
         * @summary `bssmap_ServiceHandover`.
         * @public
         * @readonly
         */
        readonly bssmap_ServiceHandover: BSSMAP_ServiceHandover,
        /**
         * @summary `rab_Id`.
         * @public
         * @readonly
         */
        readonly rab_Id: RAB_Id,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BSSMAP_ServiceHandoverInfo
     * @description
     * 
     * This takes an `object` and converts it to a `BSSMAP_ServiceHandoverInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BSSMAP_ServiceHandoverInfo`.
     * @returns {BSSMAP_ServiceHandoverInfo}
     */
    public static _from_object (_o: { [_K in keyof (BSSMAP_ServiceHandoverInfo)]: (BSSMAP_ServiceHandoverInfo)[_K] }): BSSMAP_ServiceHandoverInfo {
        return new BSSMAP_ServiceHandoverInfo(_o.bssmap_ServiceHandover, _o.rab_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of BSSMAP_ServiceHandoverInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BSSMAP_ServiceHandoverInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("bssmap-ServiceHandover", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("rab-Id", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BSSMAP_ServiceHandoverInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BSSMAP_ServiceHandoverInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BSSMAP_ServiceHandoverInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BSSMAP_ServiceHandoverInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BSSMAP_ServiceHandoverInfo: $.ASN1Decoder<BSSMAP_ServiceHandoverInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BSSMAP_ServiceHandoverInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BSSMAP_ServiceHandoverInfo (el: _Element): BSSMAP_ServiceHandoverInfo {
    if (!_cached_decoder_for_BSSMAP_ServiceHandoverInfo) { _cached_decoder_for_BSSMAP_ServiceHandoverInfo = function (el: _Element): BSSMAP_ServiceHandoverInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BSSMAP-ServiceHandoverInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bssmap-ServiceHandover";
    sequence[1].name = "rab-Id";
    let bssmap_ServiceHandover!: BSSMAP_ServiceHandover;
    let rab_Id!: RAB_Id;
    bssmap_ServiceHandover = _decode_BSSMAP_ServiceHandover(sequence[0]);
    rab_Id = _decode_RAB_Id(sequence[1]);
    return new BSSMAP_ServiceHandoverInfo(
        bssmap_ServiceHandover,
        rab_Id,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_BSSMAP_ServiceHandoverInfo(el);
}

let _cached_encoder_for_BSSMAP_ServiceHandoverInfo: $.ASN1Encoder<BSSMAP_ServiceHandoverInfo> | null = null;

/**
 * @summary Encodes a(n) BSSMAP_ServiceHandoverInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSSMAP_ServiceHandoverInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BSSMAP_ServiceHandoverInfo (value: BSSMAP_ServiceHandoverInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BSSMAP_ServiceHandoverInfo) { _cached_encoder_for_BSSMAP_ServiceHandoverInfo = function (value: BSSMAP_ServiceHandoverInfo, elGetter: $.ASN1Encoder<BSSMAP_ServiceHandoverInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSSMAP_ServiceHandover(value.bssmap_ServiceHandover, $.BER),
            /* REQUIRED   */ _encode_RAB_Id(value.rab_Id, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BSSMAP_ServiceHandoverInfo(value, elGetter);
}


/* eslint-enable */
