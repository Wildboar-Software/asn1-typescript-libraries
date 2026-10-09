/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { DeleteResultSetRequest_deleteFunction, _decode_DeleteResultSetRequest_deleteFunction, _encode_DeleteResultSetRequest_deleteFunction } from "../Z39-50-APDU-2001/DeleteResultSetRequest-deleteFunction.ta.mjs";
// export { DeleteResultSetRequest_deleteFunction, DeleteResultSetRequest_deleteFunction_list /* IMPORTED_LONG_NAMED_INTEGER */, list /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteResultSetRequest_deleteFunction_all /* IMPORTED_LONG_NAMED_INTEGER */, all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeleteResultSetRequest_deleteFunction, _encode_DeleteResultSetRequest_deleteFunction } from "../Z39-50-APDU-2001/DeleteResultSetRequest-deleteFunction.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
// export { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary DeleteResultSetRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteResultSetRequest ::= SEQUENCE {
 *     referenceId     ReferenceId OPTIONAL,
 *     deleteFunction  [32] IMPLICIT INTEGER{
 *         list    (0),
 *         all     (1)
 *     },
 *     resultSetList   SEQUENCE OF ResultSetId OPTIONAL,
 *     otherInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeleteResultSetRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `deleteFunction`.
     * @public
     * @readonly
     */
    readonly deleteFunction: DeleteResultSetRequest_deleteFunction;
    /**
     * @summary `resultSetList`.
     * @public
     * @readonly
     */
    readonly resultSetList: OPTIONAL<ResultSetId[]>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        deleteFunction: DeleteResultSetRequest_deleteFunction,
        resultSetList: OPTIONAL<ResultSetId[]>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.deleteFunction = deleteFunction;
        this.resultSetList = resultSetList;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a DeleteResultSetRequest
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteResultSetRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteResultSetRequest`.
     * @returns {DeleteResultSetRequest}
     */
    public static _from_object (_o: { [_K in keyof (DeleteResultSetRequest)]: (DeleteResultSetRequest)[_K] }): DeleteResultSetRequest {
        return new DeleteResultSetRequest(_o.referenceId, _o.deleteFunction, _o.resultSetList, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteResultSetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteResultSetRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deleteFunction", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("resultSetList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of DeleteResultSetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteResultSetRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteResultSetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteResultSetRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteResultSetRequest: $.ASN1Decoder<DeleteResultSetRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResultSetRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteResultSetRequest (el: _Element): DeleteResultSetRequest {
    if (!_cached_decoder_for_DeleteResultSetRequest) { _cached_decoder_for_DeleteResultSetRequest = function (el: _Element): DeleteResultSetRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let deleteFunction!: DeleteResultSetRequest_deleteFunction;
    let resultSetList: OPTIONAL<ResultSetId[]>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "deleteFunction": (_el: _Element): void => { deleteFunction = $._decode_implicit<DeleteResultSetRequest_deleteFunction>(() => _decode_DeleteResultSetRequest_deleteFunction)(_el); },
        "resultSetList": (_el: _Element): void => { resultSetList = $._decodeSequenceOf<ResultSetId>(() => _decode_ResultSetId)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteResultSetRequest,
        _extension_additions_list_spec_for_DeleteResultSetRequest,
        _root_component_type_list_2_spec_for_DeleteResultSetRequest,
        undefined,
    );
    return new DeleteResultSetRequest(
        referenceId,
        deleteFunction,
        resultSetList,
        otherInfo
    );
}; }
    return _cached_decoder_for_DeleteResultSetRequest(el);
}

let _cached_encoder_for_DeleteResultSetRequest: $.ASN1Encoder<DeleteResultSetRequest> | null = null;

/**
 * @summary Encodes a(n) DeleteResultSetRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResultSetRequest, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteResultSetRequest (value: DeleteResultSetRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteResultSetRequest) { _cached_encoder_for_DeleteResultSetRequest = function (value: DeleteResultSetRequest, elGetter: $.ASN1Encoder<DeleteResultSetRequest>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 32, () => _encode_DeleteResultSetRequest_deleteFunction, $.BER)(value.deleteFunction, $.BER);
    if (value.resultSetList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeSequenceOf<ResultSetId>(() => _encode_ResultSetId, $.BER)(value.resultSetList, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DeleteResultSetRequest(value, elGetter);
}


/* eslint-enable */
