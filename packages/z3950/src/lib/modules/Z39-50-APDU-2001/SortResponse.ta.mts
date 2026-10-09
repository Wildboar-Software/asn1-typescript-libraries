/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { SortResponse_sortStatus, _decode_SortResponse_sortStatus, _encode_SortResponse_sortStatus } from "../Z39-50-APDU-2001/SortResponse-sortStatus.ta.mjs";
import { SortResponse_resultSetStatus, _decode_SortResponse_resultSetStatus, _encode_SortResponse_resultSetStatus } from "../Z39-50-APDU-2001/SortResponse-resultSetStatus.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary SortResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse ::= SEQUENCE {
 *     referenceId     ReferenceId OPTIONAL,
 *     sortStatus      [3] IMPLICIT INTEGER {
 *         success         (0),
 *         partial-1       (1),
 *         failure         (2)
 *     },
 *     resultSetStatus [4] IMPLICIT INTEGER{
 *         empty           (1),
 *         interim         (2),
 *         unchanged       (3),
 *         none            (4)
 *     } OPTIONAL,
 *     diagnostics     [5] IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *     resultCount     [6] IMPLICIT INTEGER OPTIONAL,
 *     -- Size of the output result set.
 *     --Server is never obligated to supply this parameter,
 *     --there is no default value, and the client should
 *     -- not draw any conclusion by its omission
 *     otherInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SortResponse {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `sortStatus`.
     * @public
     * @readonly
     */
    readonly sortStatus: SortResponse_sortStatus;
    /**
     * @summary `resultSetStatus`.
     * @public
     * @readonly
     */
    readonly resultSetStatus: OPTIONAL<SortResponse_resultSetStatus>;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<DiagRec[]>;
    /**
     * @summary `resultCount`.
     * @public
     * @readonly
     */
    readonly resultCount: OPTIONAL<INTEGER>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        sortStatus: SortResponse_sortStatus,
        resultSetStatus: OPTIONAL<SortResponse_resultSetStatus>,
        diagnostics: OPTIONAL<DiagRec[]>,
        resultCount: OPTIONAL<INTEGER>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.sortStatus = sortStatus;
        this.resultSetStatus = resultSetStatus;
        this.diagnostics = diagnostics;
        this.resultCount = resultCount;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a SortResponse
     * @description
     * 
     * This takes an `object` and converts it to a `SortResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortResponse`.
     * @returns {SortResponse}
     */
    public static _from_object (_o: { [_K in keyof (SortResponse)]: (SortResponse)[_K] }): SortResponse {
        return new SortResponse(_o.referenceId, _o.sortStatus, _o.resultSetStatus, _o.diagnostics, _o.resultCount, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SortResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sortStatus", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resultSetStatus", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("resultCount", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of SortResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortResponse: $.ASN1Decoder<SortResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortResponse (el: _Element): SortResponse {
    if (!_cached_decoder_for_SortResponse) { _cached_decoder_for_SortResponse = function (el: _Element): SortResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let sortStatus!: SortResponse_sortStatus;
    let resultSetStatus: OPTIONAL<SortResponse_resultSetStatus>;
    let diagnostics: OPTIONAL<DiagRec[]>;
    let resultCount: OPTIONAL<INTEGER>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "sortStatus": (_el: _Element): void => { sortStatus = $._decode_implicit<SortResponse_sortStatus>(() => _decode_SortResponse_sortStatus)(_el); },
        "resultSetStatus": (_el: _Element): void => { resultSetStatus = $._decode_implicit<SortResponse_resultSetStatus>(() => _decode_SortResponse_resultSetStatus)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); },
        "resultCount": (_el: _Element): void => { resultCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortResponse,
        _extension_additions_list_spec_for_SortResponse,
        _root_component_type_list_2_spec_for_SortResponse,
        undefined,
    );
    return new SortResponse(
        referenceId,
        sortStatus,
        resultSetStatus,
        diagnostics,
        resultCount,
        otherInfo
    );
}; }
    return _cached_decoder_for_SortResponse(el);
}

let _cached_encoder_for_SortResponse: $.ASN1Encoder<SortResponse> | null = null;

/**
 * @summary Encodes a(n) SortResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortResponse, encoded as an ASN.1 Element.
 */
export
function _encode_SortResponse (value: SortResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortResponse) { _cached_encoder_for_SortResponse = function (value: SortResponse, elGetter: $.ASN1Encoder<SortResponse>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SortResponse_sortStatus, $.BER)(value.sortStatus, $.BER);
    if (value.resultSetStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SortResponse_resultSetStatus, $.BER)(value.resultSetStatus, $.BER);
    }
    if (value.diagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.diagnostics, $.BER);
    }
    if (value.resultCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.resultCount, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SortResponse(value, elGetter);
}


/* eslint-enable */
