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
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
// export { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { Range, _decode_Range, _encode_Range } from "../Z39-50-APDU-2001/Range.ta.mjs";
// export { Range, _decode_Range, _encode_Range } from "../Z39-50-APDU-2001/Range.ta.mjs";
import { PresentRequest_recordComposition, _decode_PresentRequest_recordComposition, _encode_PresentRequest_recordComposition } from "../Z39-50-APDU-2001/PresentRequest-recordComposition.ta.mjs";
// export { PresentRequest_recordComposition, _decode_PresentRequest_recordComposition, _encode_PresentRequest_recordComposition } from "../Z39-50-APDU-2001/PresentRequest-recordComposition.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary PresentRequest
 * @description
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
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `resultSetId`.
     * @public
     * @readonly
     */
    readonly resultSetId: ResultSetId;
    /**
     * @summary `resultSetStartPoint`.
     * @public
     * @readonly
     */
    readonly resultSetStartPoint: INTEGER;
    /**
     * @summary `numberOfRecordsRequested`.
     * @public
     * @readonly
     */
    readonly numberOfRecordsRequested: INTEGER;
    /**
     * @summary `additionalRanges`.
     * @public
     * @readonly
     */
    readonly additionalRanges: OPTIONAL<Range[]>;
    /**
     * @summary `recordComposition`.
     * @public
     * @readonly
     */
    readonly recordComposition: OPTIONAL<PresentRequest_recordComposition>;
    /**
     * @summary `preferredRecordSyntax`.
     * @public
     * @readonly
     */
    readonly preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `maxSegmentCount`.
     * @public
     * @readonly
     */
    readonly maxSegmentCount: OPTIONAL<INTEGER>;
    /**
     * @summary `maxRecordSize`.
     * @public
     * @readonly
     */
    readonly maxRecordSize: OPTIONAL<INTEGER>;
    /**
     * @summary `maxSegmentSize`.
     * @public
     * @readonly
     */
    readonly maxSegmentSize: OPTIONAL<INTEGER>;
    /**
     * @summary `otherInfo`.
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
