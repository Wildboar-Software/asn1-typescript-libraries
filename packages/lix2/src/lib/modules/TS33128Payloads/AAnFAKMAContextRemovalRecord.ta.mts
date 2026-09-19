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
import { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
// export { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";


/**
 * @summary AAnFAKMAContextRemovalRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFAKMAContextRemovalRecord ::= SEQUENCE
 * {
 *     aKID                  [1] NAI,
 *     nFID                  [2] NFID
 * }
 * ```
 * 
 * @class
 */
export
class AAnFAKMAContextRemovalRecord {
    constructor (
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `nFID`.
         * @public
         * @readonly
         */
        readonly nFID: NFID
    ) {}

    /**
     * @summary Restructures an object into a AAnFAKMAContextRemovalRecord
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFAKMAContextRemovalRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFAKMAContextRemovalRecord`.
     * @returns {AAnFAKMAContextRemovalRecord}
     */
    public static _from_object (_o: { [_K in keyof (AAnFAKMAContextRemovalRecord)]: (AAnFAKMAContextRemovalRecord)[_K] }): AAnFAKMAContextRemovalRecord {
        return new AAnFAKMAContextRemovalRecord(_o.aKID, _o.nFID);
    }


}

/**
 * @summary The Leading Root Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nFID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFAKMAContextRemovalRecord: $.ASN1Decoder<AAnFAKMAContextRemovalRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFAKMAContextRemovalRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFAKMAContextRemovalRecord (el: _Element): AAnFAKMAContextRemovalRecord {
    if (!_cached_decoder_for_AAnFAKMAContextRemovalRecord) { _cached_decoder_for_AAnFAKMAContextRemovalRecord = function (el: _Element): AAnFAKMAContextRemovalRecord {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AAnFAKMAContextRemovalRecord contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aKID";
    sequence[1].name = "nFID";
    let aKID!: NAI;
    let nFID!: NFID;
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[0]);
    nFID = $._decode_implicit<NFID>(() => _decode_NFID)(sequence[1]);
    return new AAnFAKMAContextRemovalRecord(
        aKID,
        nFID,

    );
}; }
    return _cached_decoder_for_AAnFAKMAContextRemovalRecord(el);
}

let _cached_encoder_for_AAnFAKMAContextRemovalRecord: $.ASN1Encoder<AAnFAKMAContextRemovalRecord> | null = null;

/**
 * @summary Encodes a(n) AAnFAKMAContextRemovalRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFAKMAContextRemovalRecord, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFAKMAContextRemovalRecord (value: AAnFAKMAContextRemovalRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFAKMAContextRemovalRecord) { _cached_encoder_for_AAnFAKMAContextRemovalRecord = function (value: AAnFAKMAContextRemovalRecord, elGetter: $.ASN1Encoder<AAnFAKMAContextRemovalRecord>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NFID, $.BER)(value.nFID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AAnFAKMAContextRemovalRecord(value, elGetter);
}


/* eslint-enable */
