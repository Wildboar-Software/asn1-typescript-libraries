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
import { RIOreference_operations_Item, _decode_RIOreference_operations_Item, _encode_RIOreference_operations_Item } from "../G/RIOreference-operations-Item.ta.mjs";
// export { RIOreference_operations_Item, _decode_RIOreference_operations_Item, _encode_RIOreference_operations_Item } from "../G/RIOreference-operations-Item.ta.mjs";


/**
 * @summary RIOreference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOreference ::= SEQUENCE {
 *     rioName     [0] IMPLICIT PrintableString,
 *     operations  [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *         recordId    [0] IMPLICIT PrintableString,
 *         operation   [1] IMPLICIT INTEGER {
 *             executeRecord (0),
 *             callRecord    (1)
 *         }
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RIOreference {
    constructor (
        /**
         * @summary `rioName`.
         * @public
         * @readonly
         */
        readonly rioName: PrintableString,
        /**
         * @summary `operations`.
         * @public
         * @readonly
         */
        readonly operations: RIOreference_operations_Item[]
    ) {}

    /**
     * @summary Restructures an object into a RIOreference
     * @description
     * 
     * This takes an `object` and converts it to a `RIOreference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RIOreference`.
     * @returns {RIOreference}
     */
    public static _from_object (_o: { [_K in keyof (RIOreference)]: (RIOreference)[_K] }): RIOreference {
        return new RIOreference(_o.rioName, _o.operations);
    }


}

/**
 * @summary The Leading Root Component Types of RIOreference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RIOreference: $.ComponentSpec[] = [
    new $.ComponentSpec("rioName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("operations", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RIOreference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RIOreference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RIOreference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RIOreference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RIOreference: $.ASN1Decoder<RIOreference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOreference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOreference (el: _Element): RIOreference {
    if (!_cached_decoder_for_RIOreference) { _cached_decoder_for_RIOreference = function (el: _Element): RIOreference {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RIOreference contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rioName";
    sequence[1].name = "operations";
    let rioName!: PrintableString;
    let operations!: RIOreference_operations_Item[];
    rioName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(sequence[0]);
    operations = $._decode_implicit<RIOreference_operations_Item[]>(() => $._decodeSequenceOf<RIOreference_operations_Item>(() => _decode_RIOreference_operations_Item))(sequence[1]);
    return new RIOreference(
        rioName,
        operations,

    );
}; }
    return _cached_decoder_for_RIOreference(el);
}

let _cached_encoder_for_RIOreference: $.ASN1Encoder<RIOreference> | null = null;

/**
 * @summary Encodes a(n) RIOreference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOreference, encoded as an ASN.1 Element.
 */
export
function _encode_RIOreference (value: RIOreference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOreference) { _cached_encoder_for_RIOreference = function (value: RIOreference, elGetter: $.ASN1Encoder<RIOreference>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.rioName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RIOreference_operations_Item>(() => _encode_RIOreference_operations_Item, $.BER), $.BER)(value.operations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RIOreference(value, elGetter);
}


/* eslint-enable */
