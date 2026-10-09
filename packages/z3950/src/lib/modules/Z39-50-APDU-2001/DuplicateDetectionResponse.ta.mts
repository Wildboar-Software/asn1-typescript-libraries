/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { DuplicateDetectionResponse_status, _decode_DuplicateDetectionResponse_status, _encode_DuplicateDetectionResponse_status } from "../Z39-50-APDU-2001/DuplicateDetectionResponse-status.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary DuplicateDetectionResponse
 * @description
 * 
 * Server reply to Duplicate Detection (ANSI/NISO Z39.50-2003 §3.2.7.2). Status
 * is success or failure. On success the result count is the size of the output
 * result set and must be present. Diagnostics may always be included; on
 * failure at least one must be.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DuplicateDetectionResponse ::= SEQUENCE {
 *     referenceId     ReferenceId OPTIONAL,
 *     status          [3] IMPLICIT INTEGER{
 *         success (0),
 *         failure (1)
 *     },
 *     resultSetCount  [4] IMPLICIT INTEGER OPTIONAL,
 *     diagnostics     [5] IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *     otherInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DuplicateDetectionResponse {
    /**
     * @summary `referenceId`.
     * @description
     * 
     * Reference-id of the request. Omit it when the request omitted it
     * (ANSI/NISO Z39.50-2003 §3.4).
     * 
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `status`.
     * @description
     * 
     * Success or failure of duplicate detection (ANSI/NISO Z39.50-2003
     * §3.2.7.2.7).
     * 
     * @public
     * @readonly
     */
    readonly status: DuplicateDetectionResponse_status;
    /**
     * @summary `resultSetCount`.
     * @description
     * 
     * Size of the output result set. Required when status is success (ANSI/NISO
     * Z39.50-2003 §3.2.7.2.8).
     * 
     * @public
     * @readonly
     */
    readonly resultSetCount: OPTIONAL<INTEGER>;
    /**
     * @summary `diagnostics`.
     * @description
     * 
     * Diagnostic records. At least one is required when status is failure. The
     * server may include diagnostics on success as well (ANSI/NISO Z39.50-2003
     * §3.2.7.2.9).
     * 
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<DiagRec[]>;
    /**
     * @summary `otherInfo`.
     * @description
     * 
     * Additional information this standard does not define (ANSI/NISO
     * Z39.50-2003 §3.2.7.2.10, §4.4.2.2.21).
     * 
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        status: DuplicateDetectionResponse_status,
        resultSetCount: OPTIONAL<INTEGER>,
        diagnostics: OPTIONAL<DiagRec[]>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.status = status;
        this.resultSetCount = resultSetCount;
        this.diagnostics = diagnostics;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a DuplicateDetectionResponse
     * @description
     * 
     * This takes an `object` and converts it to a `DuplicateDetectionResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DuplicateDetectionResponse`.
     * @returns {DuplicateDetectionResponse}
     */
    public static _from_object (_o: { [_K in keyof (DuplicateDetectionResponse)]: (DuplicateDetectionResponse)[_K] }): DuplicateDetectionResponse {
        return new DuplicateDetectionResponse(_o.referenceId, _o.status, _o.resultSetCount, _o.diagnostics, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of DuplicateDetectionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DuplicateDetectionResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resultSetCount", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of DuplicateDetectionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DuplicateDetectionResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DuplicateDetectionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DuplicateDetectionResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DuplicateDetectionResponse: $.ASN1Decoder<DuplicateDetectionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DuplicateDetectionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DuplicateDetectionResponse (el: _Element): DuplicateDetectionResponse {
    if (!_cached_decoder_for_DuplicateDetectionResponse) { _cached_decoder_for_DuplicateDetectionResponse = function (el: _Element): DuplicateDetectionResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let status!: DuplicateDetectionResponse_status;
    let resultSetCount: OPTIONAL<INTEGER>;
    let diagnostics: OPTIONAL<DiagRec[]>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<DuplicateDetectionResponse_status>(() => _decode_DuplicateDetectionResponse_status)(_el); },
        "resultSetCount": (_el: _Element): void => { resultSetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DuplicateDetectionResponse,
        _extension_additions_list_spec_for_DuplicateDetectionResponse,
        _root_component_type_list_2_spec_for_DuplicateDetectionResponse,
        undefined,
    );
    return new DuplicateDetectionResponse(
        referenceId,
        status,
        resultSetCount,
        diagnostics,
        otherInfo
    );
}; }
    return _cached_decoder_for_DuplicateDetectionResponse(el);
}

let _cached_encoder_for_DuplicateDetectionResponse: $.ASN1Encoder<DuplicateDetectionResponse> | null = null;

/**
 * @summary Encodes a(n) DuplicateDetectionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DuplicateDetectionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DuplicateDetectionResponse (value: DuplicateDetectionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DuplicateDetectionResponse) { _cached_encoder_for_DuplicateDetectionResponse = function (value: DuplicateDetectionResponse, elGetter: $.ASN1Encoder<DuplicateDetectionResponse>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DuplicateDetectionResponse_status, $.BER)(value.status, $.BER);
    if (value.resultSetCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.resultSetCount, $.BER);
    }
    if (value.diagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.diagnostics, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DuplicateDetectionResponse(value, elGetter);
}


/* eslint-enable */
