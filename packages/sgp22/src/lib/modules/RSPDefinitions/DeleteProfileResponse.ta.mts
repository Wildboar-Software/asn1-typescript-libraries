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
import { DeleteProfileResponse_deleteResult, DeleteProfileResponse_deleteResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, iccidOrAidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, disallowedByPolicy /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeleteProfileResponse_deleteResult, _encode_DeleteProfileResponse_deleteResult } from "../RSPDefinitions/DeleteProfileResponse-deleteResult.ta.mjs";
// export { DeleteProfileResponse_deleteResult, DeleteProfileResponse_deleteResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, iccidOrAidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, disallowedByPolicy /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResponse_deleteResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeleteProfileResponse_deleteResult, _encode_DeleteProfileResponse_deleteResult } from "../RSPDefinitions/DeleteProfileResponse-deleteResult.ta.mjs";


/**
 * @summary DeleteProfileResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileResponse ::= [51] SEQUENCE { -- Tag 'BF33'
 *     deleteResult INTEGER {ok(0), iccidOrAidNotFound (1), profileNotInDisabledState(2), disallowedByPolicy(3), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class DeleteProfileResponse {
    constructor (
        /**
         * @summary `deleteResult`.
         * @public
         * @readonly
         */
        readonly deleteResult: DeleteProfileResponse_deleteResult
    ) {}

    /**
     * @summary Restructures an object into a DeleteProfileResponse
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteProfileResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteProfileResponse`.
     * @returns {DeleteProfileResponse}
     */
    public static _from_object (_o: { [_K in keyof (DeleteProfileResponse)]: (DeleteProfileResponse)[_K] }): DeleteProfileResponse {
        return new DeleteProfileResponse(_o.deleteResult);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteProfileResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("deleteResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DeleteProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteProfileResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteProfileResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteProfileResponse: $.ASN1Decoder<DeleteProfileResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteProfileResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteProfileResponse (el: _Element): DeleteProfileResponse {
    if (!_cached_decoder_for_DeleteProfileResponse) { _cached_decoder_for_DeleteProfileResponse = $._decode_implicit<DeleteProfileResponse>(() => function (el: _Element): DeleteProfileResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DeleteProfileResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "deleteResult";
    let deleteResult!: DeleteProfileResponse_deleteResult;
    deleteResult = _decode_DeleteProfileResponse_deleteResult(sequence[0]);
    return new DeleteProfileResponse(
        deleteResult,

    );
}); }
    return _cached_decoder_for_DeleteProfileResponse(el);
}

let _cached_encoder_for_DeleteProfileResponse: $.ASN1Encoder<DeleteProfileResponse> | null = null;

/**
 * @summary Encodes a(n) DeleteProfileResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteProfileResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteProfileResponse (value: DeleteProfileResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteProfileResponse) { _cached_encoder_for_DeleteProfileResponse = $._encode_implicit(_TagClass.context, 51, () => function (value: DeleteProfileResponse, elGetter: $.ASN1Encoder<DeleteProfileResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeleteProfileResponse_deleteResult(value.deleteResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_DeleteProfileResponse(value, elGetter);
}


/* eslint-enable */
