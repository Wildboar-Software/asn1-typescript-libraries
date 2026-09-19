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
import { MMEID, _decode_MMEID, _encode_MMEID } from "../TS33128Payloads/MMEID.ta.mjs";
// export { MMEID, _decode_MMEID, _encode_MMEID } from "../TS33128Payloads/MMEID.ta.mjs";
import { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";


/**
 * @summary GUMMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GUMMEI ::= SEQUENCE
 * {
 *     mMEID       [1] MMEID,
 *     mCC         [2] MCC,
 *     mNC         [3] MNC
 * }
 * ```
 * 
 * @class
 */
export
class GUMMEI {
    constructor (
        /**
         * @summary `mMEID`.
         * @public
         * @readonly
         */
        readonly mMEID: MMEID,
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
        readonly mNC: MNC
    ) {}

    /**
     * @summary Restructures an object into a GUMMEI
     * @description
     * 
     * This takes an `object` and converts it to a `GUMMEI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GUMMEI`.
     * @returns {GUMMEI}
     */
    public static _from_object (_o: { [_K in keyof (GUMMEI)]: (GUMMEI)[_K] }): GUMMEI {
        return new GUMMEI(_o.mMEID, _o.mCC, _o.mNC);
    }


}

/**
 * @summary The Leading Root Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GUMMEI: $.ComponentSpec[] = [
    new $.ComponentSpec("mMEID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GUMMEI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GUMMEI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GUMMEI: $.ASN1Decoder<GUMMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GUMMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GUMMEI (el: _Element): GUMMEI {
    if (!_cached_decoder_for_GUMMEI) { _cached_decoder_for_GUMMEI = function (el: _Element): GUMMEI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GUMMEI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mMEID";
    sequence[1].name = "mCC";
    sequence[2].name = "mNC";
    let mMEID!: MMEID;
    let mCC!: MCC;
    let mNC!: MNC;
    mMEID = $._decode_implicit<MMEID>(() => _decode_MMEID)(sequence[0]);
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[1]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[2]);
    return new GUMMEI(
        mMEID,
        mCC,
        mNC,

    );
}; }
    return _cached_decoder_for_GUMMEI(el);
}

let _cached_encoder_for_GUMMEI: $.ASN1Encoder<GUMMEI> | null = null;

/**
 * @summary Encodes a(n) GUMMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUMMEI, encoded as an ASN.1 Element.
 */
export
function _encode_GUMMEI (value: GUMMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GUMMEI) { _cached_encoder_for_GUMMEI = function (value: GUMMEI, elGetter: $.ASN1Encoder<GUMMEI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEID, $.BER)(value.mMEID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCC, $.BER)(value.mCC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MNC, $.BER)(value.mNC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GUMMEI(value, elGetter);
}


/* eslint-enable */
