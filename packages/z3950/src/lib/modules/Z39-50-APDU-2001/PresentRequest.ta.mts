/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { Range, _decode_Range, _encode_Range } from "../Z39-50-APDU-2001/Range.ta.mjs";
import { PresentRequest_recordComposition, _decode_PresentRequest_recordComposition, _encode_PresentRequest_recordComposition } from "../Z39-50-APDU-2001/PresentRequest-recordComposition.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary PresentRequest
 * @description
 *
 * Client request of the Present service. Asks for response records by
 * position within a result set the server is maintaining. The server
 * answers with a Present response. If segmentation is in effect and
 * the records will not fit in one message, the server may send zero
 * or more Segment requests first. Those segments plus the Present
 * response are the aggregate Present response. §3.2.3, §3.2.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     resultSetId                 ResultSetId,
 *     resultSetStartPoint         [30] IMPLICIT INTEGER,
 *     numberOfRecordsRequested    [29] IMPLICIT INTEGER,
 *     additionalRanges            [212] IMPLICIT SEQUENCE OF Range OPTIONAL,
 *     -- additionalRanges may be included only if version 3 is in force.
 *     recordComposition           CHOICE {
 *         simple                      [19] ElementSetNames,
 *         -- Must choose 'simple' if version 2 is in force
 *         complex                     [209] IMPLICIT CompSpec
 *     } OPTIONAL,
 *     preferredRecordSyntax       [104] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     maxSegmentCount             [204] IMPLICIT INTEGER OPTIONAL, -- level 1 or 2
 *     maxRecordSize               [206] IMPLICIT INTEGER OPTIONAL, -- level 2 only
 *     maxSegmentSize              [207] IMPLICIT INTEGER OPTIONAL, -- level 2 only
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PresentRequest {
    /**
     * @summary `referenceId`.
     * @description
     *
     * Client-assigned identifier of this Present operation. The same
     * value must appear on every Segment and on the Present response.
     * Mandatory when concurrent operations are in effect; optional
     * when serial operations are in effect (omission means null).
     * §3.4, §3.5.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `resultSetId`.
     * @description
     *
     * Name of a transient result set, created during this
     * Z-association, from which records are retrieved. §3.2.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly resultSetId: ResultSetId;
    /**
     * @summary `resultSetStartPoint`.
     * @description
     *
     * First result-set position requested (M). Together with
     * `numberOfRecordsRequested` (N) this asks for N records beginning
     * at record M. Positions begin at 1. §3.2.3.1.1, §3.1.6.
     *
     * @public
     * @readonly
     */
    readonly resultSetStartPoint: INTEGER;
    /**
     * @summary `numberOfRecordsRequested`.
     * @description
     *
     * How many records (N), beginning at `resultSetStartPoint`. When
     * version 2 is in force, N greater than (result count − M) + 1 is
     * a protocol error. When version 3 is in force it need not be:
     * the server may treat it as a protocol error (diagnostic 13 as a
     * non-surrogate) or return surrogate diagnostic 13 for each
     * missing record. Requesting a single record allows that record
     * to exceed Preferred-message-size up to Exceptional-record-size,
     * when no segmentation applies. §3.2.3.1.1, §3.3.1.
     *
     * @public
     * @readonly
     */
    readonly numberOfRecordsRequested: INTEGER;
    /**
     * @summary `additionalRanges`.
     * @description
     *
     * Further ranges, each a pair (M, N) as in §3.2.3.1.1. Version 3
     * only. The first M must be greater than or equal to the sum of
     * `resultSetStartPoint` and `numberOfRecordsRequested`. For
     * consecutive pairs, M1 + N1 must be less than M2. If the server
     * does not support this parameter, it should fail the Present
     * with present-status failure and non-surrogate diagnostic 243.
     * §3.2.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly additionalRanges: OPTIONAL<Range[]>;
    /**
     * @summary `recordComposition`.
     * @description
     *
     * Desired composition of the retrieved records. If omitted, the
     * default schema and §3.6.2 apply. `simple` is element-set names
     * and is required when version 2 is in force. `complex` is
     * Comp-spec, version 3 only, and only when element-set names are
     * omitted. §3.2.3.1.4, §3.2.3.1.6, §3.6.
     *
     * @public
     * @readonly
     */
    readonly recordComposition: OPTIONAL<PresentRequest_recordComposition>;
    /**
     * @summary `preferredRecordSyntax`.
     * @description
     *
     * Object identifier of the abstract syntax requested for retrieval
     * records. When supplied, and Comp-spec supplies no record-syntax
     * identifiers, the server should not return records in another
     * syntax. Unavailable records get a surrogate such as diagnostic
     * 238; the server may fail the request with 227, 239, or 1070.
     * When omitted, the server may choose a syntax or fail with 1071
     * or 1069. §3.2.3.1.5, §3.6.3.
     *
     * @public
     * @readonly
     */
    readonly preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `maxSegmentCount`.
     * @description
     *
     * Version 3 only, and only when level-1 or level-2 segmentation is
     * in effect. Maximum number of segments in the aggregate Present
     * response. Value 1 means no segmentation for this operation, and
     * `maxRecordSize` should be omitted; §3.3.1 then applies.
     * §3.2.3.1.7, §3.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly maxSegmentCount: OPTIONAL<INTEGER>;
    /**
     * @summary `maxRecordSize`.
     * @description
     *
     * Version 3 only, and only when level-2 segmentation is in effect.
     * Largest retrieval record allowed in the aggregate response. Must
     * be greater than or equal to `maxSegmentSize`. If
     * `maxSegmentCount` is also present, this must not exceed the
     * product of segment size and segment count. If this is omitted
     * and `maxSegmentCount` is greater than 1, that product is the
     * maximum record size. While level 2 is in effect,
     * Exceptional-record-size from Init does not apply unless
     * `maxSegmentCount` is 1. §3.2.3.1.7, §3.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly maxRecordSize: OPTIONAL<INTEGER>;
    /**
     * @summary `maxSegmentSize`.
     * @description
     *
     * Version 3 only, and only when level-2 segmentation is in effect.
     * Largest allowable segment of this Present operation. If present,
     * it overrides Preferred-message-size for this operation only. If
     * absent, it takes the value of Preferred-message-size. The sum of
     * record and fragment sizes in a segment, excluding protocol
     * control information, must not exceed it. §3.2.3.1.7, §3.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly maxSegmentSize: OPTIONAL<INTEGER>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. Version 3
     * only. §3.2.3.1.11.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        resultSetId: ResultSetId,
        resultSetStartPoint: INTEGER,
        numberOfRecordsRequested: INTEGER,
        additionalRanges: OPTIONAL<Range[]>,
        recordComposition: OPTIONAL<PresentRequest_recordComposition>,
        preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>,
        maxSegmentCount: OPTIONAL<INTEGER>,
        maxRecordSize: OPTIONAL<INTEGER>,
        maxSegmentSize: OPTIONAL<INTEGER>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.resultSetId = resultSetId;
        this.resultSetStartPoint = resultSetStartPoint;
        this.numberOfRecordsRequested = numberOfRecordsRequested;
        this.additionalRanges = additionalRanges;
        this.recordComposition = recordComposition;
        this.preferredRecordSyntax = preferredRecordSyntax;
        this.maxSegmentCount = maxSegmentCount;
        this.maxRecordSize = maxRecordSize;
        this.maxSegmentSize = maxSegmentSize;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a PresentRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PresentRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentRequest`.
     * @returns {PresentRequest}
     */
    public static _from_object (_o: { [_K in keyof (PresentRequest)]: (PresentRequest)[_K] }): PresentRequest {
        return new PresentRequest(_o.referenceId, _o.resultSetId, _o.resultSetStartPoint, _o.numberOfRecordsRequested, _o.additionalRanges, _o.recordComposition, _o.preferredRecordSyntax, _o.maxSegmentCount, _o.maxRecordSize, _o.maxSegmentSize, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of PresentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresentRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultSetId", false, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("resultSetStartPoint", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("numberOfRecordsRequested", false, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("additionalRanges", true, $.hasTag(_TagClass.context, 212)),
    new $.ComponentSpec("recordComposition", true, $.or($.hasTag(_TagClass.context, 19), $.hasTag(_TagClass.context, 209))),
    new $.ComponentSpec("preferredRecordSyntax", true, $.hasTag(_TagClass.context, 104)),
    new $.ComponentSpec("maxSegmentCount", true, $.hasTag(_TagClass.context, 204)),
    new $.ComponentSpec("maxRecordSize", true, $.hasTag(_TagClass.context, 206)),
    new $.ComponentSpec("maxSegmentSize", true, $.hasTag(_TagClass.context, 207)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of PresentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresentRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresentRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresentRequest: $.ASN1Decoder<PresentRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentRequest (el: _Element): PresentRequest {
    if (!_cached_decoder_for_PresentRequest) { _cached_decoder_for_PresentRequest = function (el: _Element): PresentRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let resultSetId!: ResultSetId;
    let resultSetStartPoint!: INTEGER;
    let numberOfRecordsRequested!: INTEGER;
    let additionalRanges: OPTIONAL<Range[]>;
    let recordComposition: OPTIONAL<PresentRequest_recordComposition>;
    let preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>;
    let maxSegmentCount: OPTIONAL<INTEGER>;
    let maxRecordSize: OPTIONAL<INTEGER>;
    let maxSegmentSize: OPTIONAL<INTEGER>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "resultSetId": (_el: _Element): void => { resultSetId = _decode_ResultSetId(_el); },
        "resultSetStartPoint": (_el: _Element): void => { resultSetStartPoint = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfRecordsRequested": (_el: _Element): void => { numberOfRecordsRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalRanges": (_el: _Element): void => { additionalRanges = $._decode_implicit<Range[]>(() => $._decodeSequenceOf<Range>(() => _decode_Range))(_el); },
        "recordComposition": (_el: _Element): void => { recordComposition = _decode_PresentRequest_recordComposition(_el); },
        "preferredRecordSyntax": (_el: _Element): void => { preferredRecordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "maxSegmentCount": (_el: _Element): void => { maxSegmentCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxRecordSize": (_el: _Element): void => { maxRecordSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxSegmentSize": (_el: _Element): void => { maxSegmentSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresentRequest,
        _extension_additions_list_spec_for_PresentRequest,
        _root_component_type_list_2_spec_for_PresentRequest,
        undefined,
    );
    return new PresentRequest(
        referenceId,
        resultSetId,
        resultSetStartPoint,
        numberOfRecordsRequested,
        additionalRanges,
        recordComposition,
        preferredRecordSyntax,
        maxSegmentCount,
        maxRecordSize,
        maxSegmentSize,
        otherInfo
    );
}; }
    return _cached_decoder_for_PresentRequest(el);
}

let _cached_encoder_for_PresentRequest: $.ASN1Encoder<PresentRequest> | null = null;

/**
 * @summary Encodes a(n) PresentRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PresentRequest (value: PresentRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentRequest) { _cached_encoder_for_PresentRequest = function (value: PresentRequest, elGetter: $.ASN1Encoder<PresentRequest>): _Element {
    const _components: _Element[] = new Array(11);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 31, () => _encode_ResultSetId, $.BER)(value.resultSetId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.resultSetStartPoint, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER)(value.numberOfRecordsRequested, $.BER);
    if (value.additionalRanges !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 212, () => $._encodeSequenceOf<Range>(() => _encode_Range, $.BER), $.BER)(value.additionalRanges, $.BER);
    }
    if (value.recordComposition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_PresentRequest_recordComposition(value.recordComposition, $.BER);
    }
    if (value.preferredRecordSyntax !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 104, () => $._encodeObjectIdentifier, $.BER)(value.preferredRecordSyntax, $.BER);
    }
    if (value.maxSegmentCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 204, () => $._encodeInteger, $.BER)(value.maxSegmentCount, $.BER);
    }
    if (value.maxRecordSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 206, () => $._encodeInteger, $.BER)(value.maxRecordSize, $.BER);
    }
    if (value.maxSegmentSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 207, () => $._encodeInteger, $.BER)(value.maxSegmentSize, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PresentRequest(value, elGetter);
}


/* eslint-enable */
