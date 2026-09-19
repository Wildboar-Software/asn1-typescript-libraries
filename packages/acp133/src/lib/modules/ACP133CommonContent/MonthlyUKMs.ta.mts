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
import { UKMEntry, _decode_UKMEntry, _encode_UKMEntry } from "../ACP133CommonContent/UKMEntry.ta.mjs";
// export { UKMEntry, _decode_UKMEntry, _encode_UKMEntry } from "../ACP133CommonContent/UKMEntry.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary MonthlyUKMs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonthlyUKMs ::= --SIGNED { SEQUENCE OF UKMEntry }-- SEQUENCE {
 *   ukm-entries            SEQUENCE OF UKMEntry,
 *   algorithm-identifier    AlgorithmIdentifier,
 *   encrypted                BIT STRING
 * }
 * ```
 * 
 * @class
 */
export
class MonthlyUKMs {
    constructor (
        /**
         * @summary `ukm_entries`.
         * @public
         * @readonly
         */
        readonly ukm_entries: UKMEntry[],
        /**
         * @summary `algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly algorithm_identifier: AlgorithmIdentifier,
        /**
         * @summary `encrypted`.
         * @public
         * @readonly
         */
        readonly encrypted: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a MonthlyUKMs
     * @description
     * 
     * This takes an `object` and converts it to a `MonthlyUKMs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonthlyUKMs`.
     * @returns {MonthlyUKMs}
     */
    public static _from_object (_o: { [_K in keyof (MonthlyUKMs)]: (MonthlyUKMs)[_K] }): MonthlyUKMs {
        return new MonthlyUKMs(_o.ukm_entries, _o.algorithm_identifier, _o.encrypted);
    }


}

/**
 * @summary The Leading Root Component Types of MonthlyUKMs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonthlyUKMs: $.ComponentSpec[] = [
    new $.ComponentSpec("ukm-entries", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("algorithm-identifier", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("encrypted", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of MonthlyUKMs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonthlyUKMs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonthlyUKMs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonthlyUKMs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonthlyUKMs: $.ASN1Decoder<MonthlyUKMs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonthlyUKMs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonthlyUKMs (el: _Element): MonthlyUKMs {
    if (!_cached_decoder_for_MonthlyUKMs) { _cached_decoder_for_MonthlyUKMs = function (el: _Element): MonthlyUKMs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MonthlyUKMs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ukm-entries";
    sequence[1].name = "algorithm-identifier";
    sequence[2].name = "encrypted";
    let ukm_entries!: UKMEntry[];
    let algorithm_identifier!: AlgorithmIdentifier;
    let encrypted!: BIT_STRING;
    ukm_entries = $._decodeSequenceOf<UKMEntry>(() => _decode_UKMEntry)(sequence[0]);
    algorithm_identifier = _decode_AlgorithmIdentifier(sequence[1]);
    encrypted = $._decodeBitString(sequence[2]);
    return new MonthlyUKMs(
        ukm_entries,
        algorithm_identifier,
        encrypted,

    );
}; }
    return _cached_decoder_for_MonthlyUKMs(el);
}

let _cached_encoder_for_MonthlyUKMs: $.ASN1Encoder<MonthlyUKMs> | null = null;

/**
 * @summary Encodes a(n) MonthlyUKMs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonthlyUKMs, encoded as an ASN.1 Element.
 */
export
function _encode_MonthlyUKMs (value: MonthlyUKMs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonthlyUKMs) { _cached_encoder_for_MonthlyUKMs = function (value: MonthlyUKMs, elGetter: $.ASN1Encoder<MonthlyUKMs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<UKMEntry>(() => _encode_UKMEntry, $.BER)(value.ukm_entries, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm_identifier, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.encrypted, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonthlyUKMs(value, elGetter);
}


/* eslint-enable */
