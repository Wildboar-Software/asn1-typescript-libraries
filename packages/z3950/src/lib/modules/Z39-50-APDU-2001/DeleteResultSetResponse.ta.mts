/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { DeleteSetStatus, _decode_DeleteSetStatus, _encode_DeleteSetStatus } from "../Z39-50-APDU-2001/DeleteSetStatus.ta.mjs";
import { ListStatuses, _decode_ListStatuses, _encode_ListStatuses } from "../Z39-50-APDU-2001/ListStatuses.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary DeleteResultSetResponse
 * @description
 *
 * Server report of a Delete operation. `deleteOperationStatus` is
 * success or failure-3 through failure-9. Per-set statuses use a
 * different subset of `DeleteSetStatus`. §3.2.4.1, §3.2.4.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteResultSetResponse ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     deleteOperationStatus   [0] IMPLICIT DeleteSetStatus,
 *     deleteListStatuses      [1] IMPLICIT ListStatuses OPTIONAL,
 *     numberNotDeleted        [34] IMPLICIT INTEGER OPTIONAL,
 *     bulkStatuses            [35] IMPLICIT ListStatuses OPTIONAL,
 *     deleteMessage           [36] IMPLICIT InternationalString OPTIONAL,
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeleteResultSetResponse {
    /**
     * @summary `referenceId`.
     * @description
     *
     * The reference-id from the Delete request. Include the same value
     * when the request included one; omit it when the request omitted
     * it. §3.4.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `deleteOperationStatus`.
     * @description
     *
     * Status of the delete request: success, or failure-3 through
     * failure-9. Failure-7 and failure-8 occur only on bulk-delete.
     * §3.2.4.1.3, §3.2.4.1.4.
     *
     * @public
     * @readonly
     */
    readonly deleteOperationStatus: DeleteSetStatus;
    /**
     * @summary `deleteListStatuses`.
     * @description
     *
     * Present when the request function was `list`. The same result
     * sets as the request, each with a status of success, failure-1
     * through failure-6, or failure-10. §3.2.4.1.4.
     *
     * @public
     * @readonly
     */
    readonly deleteListStatuses: OPTIONAL<ListStatuses>;
    /**
     * @summary `numberNotDeleted`.
     * @description
     *
     * How many result sets were not deleted. Occurs only when the
     * function was bulk-delete and `deleteOperationStatus` is
     * failure-8. §3.2.4.1.5.
     *
     * @public
     * @readonly
     */
    readonly numberNotDeleted: OPTIONAL<INTEGER>;
    /**
     * @summary `bulkStatuses`.
     * @description
     *
     * Statuses for result sets not deleted on a bulk-delete whose
     * operation status is failure-8. The server need not status every
     * such set; it may stop at the first failure and return one
     * status. Statuses that do not fit in this message may be
     * discarded. §3.2.4.1.5.
     *
     * @public
     * @readonly
     */
    readonly bulkStatuses: OPTIONAL<ListStatuses>;
    /**
     * @summary `deleteMessage`.
     * @description
     *
     * Optional text. The status table allows it with failure-3
     * (system problem at the server). §3.2.4.1.6, §3.2.4.1.4.
     *
     * @public
     * @readonly
     */
    readonly deleteMessage: OPTIONAL<InternationalString>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. Version 3
     * only. §3.2.4.1.7.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        deleteOperationStatus: DeleteSetStatus,
        deleteListStatuses: OPTIONAL<ListStatuses>,
        numberNotDeleted: OPTIONAL<INTEGER>,
        bulkStatuses: OPTIONAL<ListStatuses>,
        deleteMessage: OPTIONAL<InternationalString>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.deleteOperationStatus = deleteOperationStatus;
        this.deleteListStatuses = deleteListStatuses;
        this.numberNotDeleted = numberNotDeleted;
        this.bulkStatuses = bulkStatuses;
        this.deleteMessage = deleteMessage;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a DeleteResultSetResponse
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteResultSetResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteResultSetResponse`.
     * @returns {DeleteResultSetResponse}
     */
    public static _from_object (_o: { [_K in keyof (DeleteResultSetResponse)]: (DeleteResultSetResponse)[_K] }): DeleteResultSetResponse {
        return new DeleteResultSetResponse(_o.referenceId, _o.deleteOperationStatus, _o.deleteListStatuses, _o.numberNotDeleted, _o.bulkStatuses, _o.deleteMessage, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteResultSetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteResultSetResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deleteOperationStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deleteListStatuses", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberNotDeleted", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("bulkStatuses", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("deleteMessage", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of DeleteResultSetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteResultSetResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteResultSetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteResultSetResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteResultSetResponse: $.ASN1Decoder<DeleteResultSetResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResultSetResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteResultSetResponse (el: _Element): DeleteResultSetResponse {
    if (!_cached_decoder_for_DeleteResultSetResponse) { _cached_decoder_for_DeleteResultSetResponse = function (el: _Element): DeleteResultSetResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let deleteOperationStatus!: DeleteSetStatus;
    let deleteListStatuses: OPTIONAL<ListStatuses>;
    let numberNotDeleted: OPTIONAL<INTEGER>;
    let bulkStatuses: OPTIONAL<ListStatuses>;
    let deleteMessage: OPTIONAL<InternationalString>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "deleteOperationStatus": (_el: _Element): void => { deleteOperationStatus = $._decode_implicit<DeleteSetStatus>(() => _decode_DeleteSetStatus)(_el); },
        "deleteListStatuses": (_el: _Element): void => { deleteListStatuses = $._decode_implicit<ListStatuses>(() => _decode_ListStatuses)(_el); },
        "numberNotDeleted": (_el: _Element): void => { numberNotDeleted = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bulkStatuses": (_el: _Element): void => { bulkStatuses = $._decode_implicit<ListStatuses>(() => _decode_ListStatuses)(_el); },
        "deleteMessage": (_el: _Element): void => { deleteMessage = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteResultSetResponse,
        _extension_additions_list_spec_for_DeleteResultSetResponse,
        _root_component_type_list_2_spec_for_DeleteResultSetResponse,
        undefined,
    );
    return new DeleteResultSetResponse(
        referenceId,
        deleteOperationStatus,
        deleteListStatuses,
        numberNotDeleted,
        bulkStatuses,
        deleteMessage,
        otherInfo
    );
}; }
    return _cached_decoder_for_DeleteResultSetResponse(el);
}

let _cached_encoder_for_DeleteResultSetResponse: $.ASN1Encoder<DeleteResultSetResponse> | null = null;

/**
 * @summary Encodes a(n) DeleteResultSetResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResultSetResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteResultSetResponse (value: DeleteResultSetResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteResultSetResponse) { _cached_encoder_for_DeleteResultSetResponse = function (value: DeleteResultSetResponse, elGetter: $.ASN1Encoder<DeleteResultSetResponse>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DeleteSetStatus, $.BER)(value.deleteOperationStatus, $.BER);
    if (value.deleteListStatuses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ListStatuses, $.BER)(value.deleteListStatuses, $.BER);
    }
    if (value.numberNotDeleted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeInteger, $.BER)(value.numberNotDeleted, $.BER);
    }
    if (value.bulkStatuses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_ListStatuses, $.BER)(value.bulkStatuses, $.BER);
    }
    if (value.deleteMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_InternationalString, $.BER)(value.deleteMessage, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DeleteResultSetResponse(value, elGetter);
}


/* eslint-enable */
