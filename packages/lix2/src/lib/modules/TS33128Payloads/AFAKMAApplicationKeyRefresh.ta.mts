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
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
// export { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
import { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";
// export { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";


/**
 * @summary AFAKMAApplicationKeyRefresh
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFAKMAApplicationKeyRefresh ::= SEQUENCE
 * {
 *     aFID                  [1] AFID,
 *     aKID                  [2] NAI,
 *     kAF                   [3] KAF,
 *     uaStarParams          [4] UAStarParams OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AFAKMAApplicationKeyRefresh {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
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
         * @summary `uaStarParams`.
         * @public
         * @readonly
         */
        readonly uaStarParams: OPTIONAL<UAStarParams>
    ) {}

    /**
     * @summary Restructures an object into a AFAKMAApplicationKeyRefresh
     * @description
     * 
     * This takes an `object` and converts it to a `AFAKMAApplicationKeyRefresh`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFAKMAApplicationKeyRefresh`.
     * @returns {AFAKMAApplicationKeyRefresh}
     */
    public static _from_object (_o: { [_K in keyof (AFAKMAApplicationKeyRefresh)]: (AFAKMAApplicationKeyRefresh)[_K] }): AFAKMAApplicationKeyRefresh {
        return new AFAKMAApplicationKeyRefresh(_o.aFID, _o.aKID, _o.kAF, _o.uaStarParams);
    }


}

/**
 * @summary The Leading Root Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAF", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uaStarParams", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFAKMAApplicationKeyRefresh: $.ASN1Decoder<AFAKMAApplicationKeyRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFAKMAApplicationKeyRefresh
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFAKMAApplicationKeyRefresh (el: _Element): AFAKMAApplicationKeyRefresh {
    if (!_cached_decoder_for_AFAKMAApplicationKeyRefresh) { _cached_decoder_for_AFAKMAApplicationKeyRefresh = function (el: _Element): AFAKMAApplicationKeyRefresh {
    let aFID!: AFID;
    let aKID!: NAI;
    let kAF!: KAF;
    let uaStarParams: OPTIONAL<UAStarParams>;
    const callbacks: $.DecodingMap = {
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "aKID": (_el: _Element): void => { aKID = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "kAF": (_el: _Element): void => { kAF = $._decode_implicit<KAF>(() => _decode_KAF)(_el); },
        "uaStarParams": (_el: _Element): void => { uaStarParams = $._decode_explicit<UAStarParams>(() => _decode_UAStarParams)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AFAKMAApplicationKeyRefresh,
        _extension_additions_list_spec_for_AFAKMAApplicationKeyRefresh,
        _root_component_type_list_2_spec_for_AFAKMAApplicationKeyRefresh,
        undefined,
    );
    return new AFAKMAApplicationKeyRefresh(
        aFID,
        aKID,
        kAF,
        uaStarParams
    );
}; }
    return _cached_decoder_for_AFAKMAApplicationKeyRefresh(el);
}

let _cached_encoder_for_AFAKMAApplicationKeyRefresh: $.ASN1Encoder<AFAKMAApplicationKeyRefresh> | null = null;

/**
 * @summary Encodes a(n) AFAKMAApplicationKeyRefresh into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFAKMAApplicationKeyRefresh, encoded as an ASN.1 Element.
 */
export
function _encode_AFAKMAApplicationKeyRefresh (value: AFAKMAApplicationKeyRefresh, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFAKMAApplicationKeyRefresh) { _cached_encoder_for_AFAKMAApplicationKeyRefresh = function (value: AFAKMAApplicationKeyRefresh, elGetter: $.ASN1Encoder<AFAKMAApplicationKeyRefresh>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAF, $.BER)(value.kAF, $.BER),
            /* IF_ABSENT  */ ((value.uaStarParams === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_UAStarParams, $.BER)(value.uaStarParams, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFAKMAApplicationKeyRefresh(value, elGetter);
}


/* eslint-enable */
