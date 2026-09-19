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
import { HoldingsRecord, _decode_HoldingsRecord, _encode_HoldingsRecord } from "../RecordSyntax-opac/HoldingsRecord.ta.mjs";
// export { HoldingsRecord, _decode_HoldingsRecord, _encode_HoldingsRecord } from "../RecordSyntax-opac/HoldingsRecord.ta.mjs";


/**
 * @summary OPACRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPACRecord ::= SEQUENCE {
 *    bibliographicRecord    [1] IMPLICIT EXTERNAL OPTIONAL,
 *    holdingsData           [2] IMPLICIT SEQUENCE OF HoldingsRecord OPTIONAL}
 * ```
 * 
 * @class
 */
export
class OPACRecord {
    constructor (
        /**
         * @summary `bibliographicRecord`.
         * @public
         * @readonly
         */
        readonly bibliographicRecord: OPTIONAL<EXTERNAL>,
        /**
         * @summary `holdingsData`.
         * @public
         * @readonly
         */
        readonly holdingsData: OPTIONAL<HoldingsRecord[]>
    ) {}

    /**
     * @summary Restructures an object into a OPACRecord
     * @description
     * 
     * This takes an `object` and converts it to a `OPACRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OPACRecord`.
     * @returns {OPACRecord}
     */
    public static _from_object (_o: { [_K in keyof (OPACRecord)]: (OPACRecord)[_K] }): OPACRecord {
        return new OPACRecord(_o.bibliographicRecord, _o.holdingsData);
    }


}

/**
 * @summary The Leading Root Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OPACRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("bibliographicRecord", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("holdingsData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OPACRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OPACRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OPACRecord: $.ASN1Decoder<OPACRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OPACRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OPACRecord (el: _Element): OPACRecord {
    if (!_cached_decoder_for_OPACRecord) { _cached_decoder_for_OPACRecord = function (el: _Element): OPACRecord {
    let bibliographicRecord: OPTIONAL<EXTERNAL>;
    let holdingsData: OPTIONAL<HoldingsRecord[]>;
    const callbacks: $.DecodingMap = {
        "bibliographicRecord": (_el: _Element): void => { bibliographicRecord = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "holdingsData": (_el: _Element): void => { holdingsData = $._decode_implicit<HoldingsRecord[]>(() => $._decodeSequenceOf<HoldingsRecord>(() => _decode_HoldingsRecord))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPACRecord,
        _extension_additions_list_spec_for_OPACRecord,
        _root_component_type_list_2_spec_for_OPACRecord,
        undefined,
    );
    return new OPACRecord(
        bibliographicRecord,
        holdingsData
    );
}; }
    return _cached_decoder_for_OPACRecord(el);
}

let _cached_encoder_for_OPACRecord: $.ASN1Encoder<OPACRecord> | null = null;

/**
 * @summary Encodes a(n) OPACRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OPACRecord, encoded as an ASN.1 Element.
 */
export
function _encode_OPACRecord (value: OPACRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OPACRecord) { _cached_encoder_for_OPACRecord = function (value: OPACRecord, elGetter: $.ASN1Encoder<OPACRecord>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bibliographicRecord === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER)(value.bibliographicRecord, $.BER)),
            /* IF_ABSENT  */ ((value.holdingsData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<HoldingsRecord>(() => _encode_HoldingsRecord, $.BER), $.BER)(value.holdingsData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OPACRecord(value, elGetter);
}


/* eslint-enable */
