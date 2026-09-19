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
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
// export { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
import { KAFExpiryTime, _decode_KAFExpiryTime, _encode_KAFExpiryTime } from "../TS33128Payloads/KAFExpiryTime.ta.mjs";
// export { KAFExpiryTime, _decode_KAFExpiryTime, _encode_KAFExpiryTime } from "../TS33128Payloads/KAFExpiryTime.ta.mjs";
import { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";
// export { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";


/**
 * @summary KAFParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAFParams ::= SEQUENCE
 * {
 *     aKID                 [1] NAI,
 *     kAF                  [2] KAF,
 *     kAFExpTime           [3] KAFExpiryTime,
 *     uaStarParams         [4] UAStarParams
 * }
 * ```
 * 
 * @class
 */
export
class KAFParams {
    constructor (
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `kAF`.
         * @public
         * @readonly
         */
        readonly kAF: KAF,
        /**
         * @summary `kAFExpTime`.
         * @public
         * @readonly
         */
        readonly kAFExpTime: KAFExpiryTime,
        /**
         * @summary `uaStarParams`.
         * @public
         * @readonly
         */
        readonly uaStarParams: UAStarParams
    ) {}

    /**
     * @summary Restructures an object into a KAFParams
     * @description
     * 
     * This takes an `object` and converts it to a `KAFParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KAFParams`.
     * @returns {KAFParams}
     */
    public static _from_object (_o: { [_K in keyof (KAFParams)]: (KAFParams)[_K] }): KAFParams {
        return new KAFParams(_o.aKID, _o.kAF, _o.kAFExpTime, _o.uaStarParams);
    }


}

/**
 * @summary The Leading Root Component Types of KAFParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KAFParams: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kAF", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAFExpTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uaStarParams", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of KAFParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KAFParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KAFParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KAFParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KAFParams: $.ASN1Decoder<KAFParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KAFParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KAFParams (el: _Element): KAFParams {
    if (!_cached_decoder_for_KAFParams) { _cached_decoder_for_KAFParams = function (el: _Element): KAFParams {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("KAFParams contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aKID";
    sequence[1].name = "kAF";
    sequence[2].name = "kAFExpTime";
    sequence[3].name = "uaStarParams";
    let aKID!: NAI;
    let kAF!: KAF;
    let kAFExpTime!: KAFExpiryTime;
    let uaStarParams!: UAStarParams;
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[0]);
    kAF = $._decode_implicit<KAF>(() => _decode_KAF)(sequence[1]);
    kAFExpTime = $._decode_implicit<KAFExpiryTime>(() => _decode_KAFExpiryTime)(sequence[2]);
    uaStarParams = $._decode_explicit<UAStarParams>(() => _decode_UAStarParams)(sequence[3]);
    return new KAFParams(
        aKID,
        kAF,
        kAFExpTime,
        uaStarParams,

    );
}; }
    return _cached_decoder_for_KAFParams(el);
}

let _cached_encoder_for_KAFParams: $.ASN1Encoder<KAFParams> | null = null;

/**
 * @summary Encodes a(n) KAFParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAFParams, encoded as an ASN.1 Element.
 */
export
function _encode_KAFParams (value: KAFParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KAFParams) { _cached_encoder_for_KAFParams = function (value: KAFParams, elGetter: $.ASN1Encoder<KAFParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_KAF, $.BER)(value.kAF, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAFExpiryTime, $.BER)(value.kAFExpTime, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_UAStarParams, $.BER)(value.uaStarParams, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KAFParams(value, elGetter);
}


/* eslint-enable */
