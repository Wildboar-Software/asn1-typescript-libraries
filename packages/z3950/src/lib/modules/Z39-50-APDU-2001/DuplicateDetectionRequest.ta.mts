/* eslint-disable */
import {
    BOOLEAN,
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { DuplicateDetectionCriterion, _decode_DuplicateDetectionCriterion, _encode_DuplicateDetectionCriterion } from "../Z39-50-APDU-2001/DuplicateDetectionCriterion.ta.mjs";
import { RetentionCriterion, _decode_RetentionCriterion, _encode_RetentionCriterion } from "../Z39-50-APDU-2001/RetentionCriterion.ta.mjs";
import { SortCriterion, _decode_SortCriterion, _encode_SortCriterion } from "../Z39-50-APDU-2001/SortCriterion.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary DuplicateDetectionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DuplicateDetectionRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     inputResultSetIds           [3] IMPLICIT SEQUENCE OF InternationalString,
 *     outputResultSetName         [4] IMPLICIT InternationalString,
 *     applicablePortionOfRecord   [5] IMPLICIT EXTERNAL OPTIONAL,
 *     duplicateDetectionCriteria  [6] IMPLICIT SEQUENCE OF DuplicateDetectionCriterion OPTIONAL,
 *     clustering                  [7] IMPLICIT BOOLEAN OPTIONAL,
 *     --'true' means "clustered".
 *     --This parameter may be omitted only if retentionCriteria
 *     -- CHOICE is 'numberOfEntries' and its value is 1
 *     retentionCriteria           [8] IMPLICIT SEQUENCE OF RetentionCriterion,
 *     sortCriteria                [9] IMPLICIT SEQUENCE OF SortCriterion OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DuplicateDetectionRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `inputResultSetIds`.
     * @public
     * @readonly
     */
    readonly inputResultSetIds: InternationalString[];
    /**
     * @summary `outputResultSetName`.
     * @public
     * @readonly
     */
    readonly outputResultSetName: InternationalString;
    /**
     * @summary `applicablePortionOfRecord`.
     * @public
     * @readonly
     */
    readonly applicablePortionOfRecord: OPTIONAL<EXTERNAL>;
    /**
     * @summary `duplicateDetectionCriteria`.
     * @public
     * @readonly
     */
    readonly duplicateDetectionCriteria: OPTIONAL<DuplicateDetectionCriterion[]>;
    /**
     * @summary `clustering`.
     * @public
     * @readonly
     */
    readonly clustering: OPTIONAL<BOOLEAN>;
    /**
     * @summary `retentionCriteria`.
     * @public
     * @readonly
     */
    readonly retentionCriteria: RetentionCriterion[];
    /**
     * @summary `sortCriteria`.
     * @public
     * @readonly
     */
    readonly sortCriteria: OPTIONAL<SortCriterion[]>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        inputResultSetIds: InternationalString[],
        outputResultSetName: InternationalString,
        applicablePortionOfRecord: OPTIONAL<EXTERNAL>,
        duplicateDetectionCriteria: OPTIONAL<DuplicateDetectionCriterion[]>,
        clustering: OPTIONAL<BOOLEAN>,
        retentionCriteria: RetentionCriterion[],
        sortCriteria: OPTIONAL<SortCriterion[]>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.inputResultSetIds = inputResultSetIds;
        this.outputResultSetName = outputResultSetName;
        this.applicablePortionOfRecord = applicablePortionOfRecord;
        this.duplicateDetectionCriteria = duplicateDetectionCriteria;
        this.clustering = clustering;
        this.retentionCriteria = retentionCriteria;
        this.sortCriteria = sortCriteria;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a DuplicateDetectionRequest
     * @description
     * 
     * This takes an `object` and converts it to a `DuplicateDetectionRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DuplicateDetectionRequest`.
     * @returns {DuplicateDetectionRequest}
     */
    public static _from_object (_o: { [_K in keyof (DuplicateDetectionRequest)]: (DuplicateDetectionRequest)[_K] }): DuplicateDetectionRequest {
        return new DuplicateDetectionRequest(_o.referenceId, _o.inputResultSetIds, _o.outputResultSetName, _o.applicablePortionOfRecord, _o.duplicateDetectionCriteria, _o.clustering, _o.retentionCriteria, _o.sortCriteria, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of DuplicateDetectionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DuplicateDetectionRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("inputResultSetIds", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("outputResultSetName", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("applicablePortionOfRecord", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("duplicateDetectionCriteria", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("clustering", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("retentionCriteria", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sortCriteria", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of DuplicateDetectionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DuplicateDetectionRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DuplicateDetectionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DuplicateDetectionRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DuplicateDetectionRequest: $.ASN1Decoder<DuplicateDetectionRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DuplicateDetectionRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DuplicateDetectionRequest (el: _Element): DuplicateDetectionRequest {
    if (!_cached_decoder_for_DuplicateDetectionRequest) { _cached_decoder_for_DuplicateDetectionRequest = function (el: _Element): DuplicateDetectionRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let inputResultSetIds!: InternationalString[];
    let outputResultSetName!: InternationalString;
    let applicablePortionOfRecord: OPTIONAL<EXTERNAL>;
    let duplicateDetectionCriteria: OPTIONAL<DuplicateDetectionCriterion[]>;
    let clustering: OPTIONAL<BOOLEAN>;
    let retentionCriteria!: RetentionCriterion[];
    let sortCriteria: OPTIONAL<SortCriterion[]>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "inputResultSetIds": (_el: _Element): void => { inputResultSetIds = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "outputResultSetName": (_el: _Element): void => { outputResultSetName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "applicablePortionOfRecord": (_el: _Element): void => { applicablePortionOfRecord = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "duplicateDetectionCriteria": (_el: _Element): void => { duplicateDetectionCriteria = $._decode_implicit<DuplicateDetectionCriterion[]>(() => $._decodeSequenceOf<DuplicateDetectionCriterion>(() => _decode_DuplicateDetectionCriterion))(_el); },
        "clustering": (_el: _Element): void => { clustering = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retentionCriteria": (_el: _Element): void => { retentionCriteria = $._decode_implicit<RetentionCriterion[]>(() => $._decodeSequenceOf<RetentionCriterion>(() => _decode_RetentionCriterion))(_el); },
        "sortCriteria": (_el: _Element): void => { sortCriteria = $._decode_implicit<SortCriterion[]>(() => $._decodeSequenceOf<SortCriterion>(() => _decode_SortCriterion))(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DuplicateDetectionRequest,
        _extension_additions_list_spec_for_DuplicateDetectionRequest,
        _root_component_type_list_2_spec_for_DuplicateDetectionRequest,
        undefined,
    );
    return new DuplicateDetectionRequest(
        referenceId,
        inputResultSetIds,
        outputResultSetName,
        applicablePortionOfRecord,
        duplicateDetectionCriteria,
        clustering,
        retentionCriteria,
        sortCriteria,
        otherInfo
    );
}; }
    return _cached_decoder_for_DuplicateDetectionRequest(el);
}

let _cached_encoder_for_DuplicateDetectionRequest: $.ASN1Encoder<DuplicateDetectionRequest> | null = null;

/**
 * @summary Encodes a(n) DuplicateDetectionRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DuplicateDetectionRequest, encoded as an ASN.1 Element.
 */
export
function _encode_DuplicateDetectionRequest (value: DuplicateDetectionRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DuplicateDetectionRequest) { _cached_encoder_for_DuplicateDetectionRequest = function (value: DuplicateDetectionRequest, elGetter: $.ASN1Encoder<DuplicateDetectionRequest>): _Element {
    const _components: _Element[] = new Array(9);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.inputResultSetIds, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.outputResultSetName, $.BER);
    if (value.applicablePortionOfRecord !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeExternal, $.BER)(value.applicablePortionOfRecord, $.BER);
    }
    if (value.duplicateDetectionCriteria !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<DuplicateDetectionCriterion>(() => _encode_DuplicateDetectionCriterion, $.BER), $.BER)(value.duplicateDetectionCriteria, $.BER);
    }
    if (value.clustering !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.clustering, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<RetentionCriterion>(() => _encode_RetentionCriterion, $.BER), $.BER)(value.retentionCriteria, $.BER);
    if (value.sortCriteria !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<SortCriterion>(() => _encode_SortCriterion, $.BER), $.BER)(value.sortCriteria, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DuplicateDetectionRequest(value, elGetter);
}


/* eslint-enable */
