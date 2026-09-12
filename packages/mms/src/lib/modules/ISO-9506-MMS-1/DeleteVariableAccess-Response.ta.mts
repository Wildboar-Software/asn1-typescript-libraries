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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DeleteVariableAccess_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteVariableAccess-Response ::= SEQUENCE {
 *    numberMatched              [0] IMPLICIT Unsigned32,
 *    numberDeleted              [1] IMPLICIT Unsigned32 }
 * ```
 * 
 * @class
 */
export
class DeleteVariableAccess_Response {
    constructor (
        /**
         * @summary `numberMatched`.
         * @public
         * @readonly
         */
        readonly numberMatched: Unsigned32,
        /**
         * @summary `numberDeleted`.
         * @public
         * @readonly
         */
        readonly numberDeleted: Unsigned32
    ) {}

    /**
     * @summary Restructures an object into a DeleteVariableAccess_Response
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteVariableAccess_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteVariableAccess_Response`.
     * @returns {DeleteVariableAccess_Response}
     */
    public static _from_object (_o: { [_K in keyof (DeleteVariableAccess_Response)]: (DeleteVariableAccess_Response)[_K] }): DeleteVariableAccess_Response {
        return new DeleteVariableAccess_Response(_o.numberMatched, _o.numberDeleted);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteVariableAccess_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteVariableAccess_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("numberMatched", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberDeleted", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DeleteVariableAccess_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteVariableAccess_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteVariableAccess_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteVariableAccess_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteVariableAccess_Response: $.ASN1Decoder<DeleteVariableAccess_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteVariableAccess_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteVariableAccess_Response (el: _Element): DeleteVariableAccess_Response {
    if (!_cached_decoder_for_DeleteVariableAccess_Response) { _cached_decoder_for_DeleteVariableAccess_Response = function (el: _Element): DeleteVariableAccess_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DeleteVariableAccess-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberMatched";
    sequence[1].name = "numberDeleted";
    let numberMatched!: Unsigned32;
    let numberDeleted!: Unsigned32;
    numberMatched = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[0]);
    numberDeleted = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[1]);
    return new DeleteVariableAccess_Response(
        numberMatched,
        numberDeleted,

    );
}; }
    return _cached_decoder_for_DeleteVariableAccess_Response(el);
}

let _cached_encoder_for_DeleteVariableAccess_Response: $.ASN1Encoder<DeleteVariableAccess_Response> | null = null;

/**
 * @summary Encodes a(n) DeleteVariableAccess_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteVariableAccess_Response, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteVariableAccess_Response (value: DeleteVariableAccess_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteVariableAccess_Response) { _cached_encoder_for_DeleteVariableAccess_Response = function (value: DeleteVariableAccess_Response, elGetter: $.ASN1Encoder<DeleteVariableAccess_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.numberMatched, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberDeleted, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteVariableAccess_Response(value, elGetter);
}


/* eslint-enable */
