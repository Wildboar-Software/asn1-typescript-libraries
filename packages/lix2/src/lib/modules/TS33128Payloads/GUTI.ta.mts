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
import { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
import { MMEGroupID, _decode_MMEGroupID, _encode_MMEGroupID } from "../TS33128Payloads/MMEGroupID.ta.mjs";
// export { MMEGroupID, _decode_MMEGroupID, _encode_MMEGroupID } from "../TS33128Payloads/MMEGroupID.ta.mjs";
import { MMECode, _decode_MMECode, _encode_MMECode } from "../TS33128Payloads/MMECode.ta.mjs";
// export { MMECode, _decode_MMECode, _encode_MMECode } from "../TS33128Payloads/MMECode.ta.mjs";
import { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";


/**
 * @summary GUTI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GUTI ::= SEQUENCE
 * {
 *     mCC          [1] MCC,
 *     mNC          [2] MNC,
 *     mMEGroupID   [3] MMEGroupID,
 *     mMECode      [4] MMECode,
 *     mTMSI        [5] TMSI
 * }
 * ```
 * 
 * @class
 */
export
class GUTI {
    constructor (
        /**
         * @summary `mCC`.
         * @public
         * @readonly
         */
        readonly mCC: MCC,
        /**
         * @summary `mNC`.
         * @public
         * @readonly
         */
        readonly mNC: MNC,
        /**
         * @summary `mMEGroupID`.
         * @public
         * @readonly
         */
        readonly mMEGroupID: MMEGroupID,
        /**
         * @summary `mMECode`.
         * @public
         * @readonly
         */
        readonly mMECode: MMECode,
        /**
         * @summary `mTMSI`.
         * @public
         * @readonly
         */
        readonly mTMSI: TMSI
    ) {}

    /**
     * @summary Restructures an object into a GUTI
     * @description
     * 
     * This takes an `object` and converts it to a `GUTI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GUTI`.
     * @returns {GUTI}
     */
    public static _from_object (_o: { [_K in keyof (GUTI)]: (GUTI)[_K] }): GUTI {
        return new GUTI(_o.mCC, _o.mNC, _o.mMEGroupID, _o.mMECode, _o.mTMSI);
    }


}

/**
 * @summary The Leading Root Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GUTI: $.ComponentSpec[] = [
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mMEGroupID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mMECode", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mTMSI", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GUTI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GUTI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GUTI: $.ASN1Decoder<GUTI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GUTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GUTI (el: _Element): GUTI {
    if (!_cached_decoder_for_GUTI) { _cached_decoder_for_GUTI = function (el: _Element): GUTI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("GUTI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCC";
    sequence[1].name = "mNC";
    sequence[2].name = "mMEGroupID";
    sequence[3].name = "mMECode";
    sequence[4].name = "mTMSI";
    let mCC!: MCC;
    let mNC!: MNC;
    let mMEGroupID!: MMEGroupID;
    let mMECode!: MMECode;
    let mTMSI!: TMSI;
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[0]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[1]);
    mMEGroupID = $._decode_implicit<MMEGroupID>(() => _decode_MMEGroupID)(sequence[2]);
    mMECode = $._decode_implicit<MMECode>(() => _decode_MMECode)(sequence[3]);
    mTMSI = $._decode_implicit<TMSI>(() => _decode_TMSI)(sequence[4]);
    return new GUTI(
        mCC,
        mNC,
        mMEGroupID,
        mMECode,
        mTMSI,

    );
}; }
    return _cached_decoder_for_GUTI(el);
}

let _cached_encoder_for_GUTI: $.ASN1Encoder<GUTI> | null = null;

/**
 * @summary Encodes a(n) GUTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUTI, encoded as an ASN.1 Element.
 */
export
function _encode_GUTI (value: GUTI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GUTI) { _cached_encoder_for_GUTI = function (value: GUTI, elGetter: $.ASN1Encoder<GUTI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCC, $.BER)(value.mCC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MNC, $.BER)(value.mNC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMEGroupID, $.BER)(value.mMEGroupID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMECode, $.BER)(value.mMECode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TMSI, $.BER)(value.mTMSI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GUTI(value, elGetter);
}


/* eslint-enable */
