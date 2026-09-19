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
import { DataGroupNumber, DataGroupNumber_dataGroup1 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup1 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup2 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup2 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup3 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup3 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup4 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup4 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup5 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup5 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup6 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup6 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup7 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup7 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup8 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup8 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup9 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup9 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup10 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup10 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup11 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup11 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup12 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup12 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup13 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup13 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup14 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup14 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup15 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup15 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup16 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup16 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataGroupNumber, _encode_DataGroupNumber } from "../LDSSecurityObjectV1/DataGroupNumber.ta.mjs";
// export { DataGroupNumber, DataGroupNumber_dataGroup1 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup1 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup2 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup2 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup3 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup3 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup4 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup4 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup5 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup5 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup6 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup6 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup7 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup7 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup8 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup8 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup9 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup9 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup10 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup10 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup11 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup11 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup12 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup12 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup13 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup13 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup14 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup14 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup15 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup15 /* IMPORTED_SHORT_NAMED_INTEGER */, DataGroupNumber_dataGroup16 /* IMPORTED_LONG_NAMED_INTEGER */, dataGroup16 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataGroupNumber, _encode_DataGroupNumber } from "../LDSSecurityObjectV1/DataGroupNumber.ta.mjs";


/**
 * @summary DataGroupHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataGroupHash ::= SEQUENCE {
 *     dataGroupNumber DataGroupNumber,
 *     dataGroupHashValue OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class DataGroupHash {
    constructor (
        /**
         * @summary `dataGroupNumber`.
         * @public
         * @readonly
         */
        readonly dataGroupNumber: DataGroupNumber,
        /**
         * @summary `dataGroupHashValue`.
         * @public
         * @readonly
         */
        readonly dataGroupHashValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DataGroupHash
     * @description
     * 
     * This takes an `object` and converts it to a `DataGroupHash`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataGroupHash`.
     * @returns {DataGroupHash}
     */
    public static _from_object (_o: { [_K in keyof (DataGroupHash)]: (DataGroupHash)[_K] }): DataGroupHash {
        return new DataGroupHash(_o.dataGroupNumber, _o.dataGroupHashValue);
    }


}

/**
 * @summary The Leading Root Component Types of DataGroupHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataGroupHash: $.ComponentSpec[] = [
    new $.ComponentSpec("dataGroupNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("dataGroupHashValue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DataGroupHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataGroupHash: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataGroupHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataGroupHash: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataGroupHash: $.ASN1Decoder<DataGroupHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataGroupHash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataGroupHash (el: _Element): DataGroupHash {
    if (!_cached_decoder_for_DataGroupHash) { _cached_decoder_for_DataGroupHash = function (el: _Element): DataGroupHash {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DataGroupHash contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dataGroupNumber";
    sequence[1].name = "dataGroupHashValue";
    let dataGroupNumber!: DataGroupNumber;
    let dataGroupHashValue!: OCTET_STRING;
    dataGroupNumber = _decode_DataGroupNumber(sequence[0]);
    dataGroupHashValue = $._decodeOctetString(sequence[1]);
    return new DataGroupHash(
        dataGroupNumber,
        dataGroupHashValue,

    );
}; }
    return _cached_decoder_for_DataGroupHash(el);
}

let _cached_encoder_for_DataGroupHash: $.ASN1Encoder<DataGroupHash> | null = null;

/**
 * @summary Encodes a(n) DataGroupHash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataGroupHash, encoded as an ASN.1 Element.
 */
export
function _encode_DataGroupHash (value: DataGroupHash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataGroupHash) { _cached_encoder_for_DataGroupHash = function (value: DataGroupHash, elGetter: $.ASN1Encoder<DataGroupHash>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DataGroupNumber(value.dataGroupNumber, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.dataGroupHashValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataGroupHash(value, elGetter);
}


/* eslint-enable */
